import { BlocksResultProps } from '@grapesjs/react'
import { cn } from '@/lib/utils'
import { useHelfText } from '@/hooks/useState';

type CustomBlockManagerProps = Pick<
    BlocksResultProps,
    'mapCategoryBlocks' | 'dragStart' | 'dragStop'
> & {
    setSelectedElement: (element: any) => void,
    setIsPreview: (element: any) => void,
    project: any,
}

export function BlockManager({ mapCategoryBlocks, dragStart, dragStop, setIsPreview, project }: CustomBlockManagerProps) {

    return (
        <div className="gjs-custom-block-manager text-left">
            {Array.from(mapCategoryBlocks).map(([category, blocks]) => (
                <div key={category} className='border-b p-3 last:border-b-0  grid grid-cols-2 gap-2'>
                    <div className='col-span-full bg-muted text-foreground/70 border w-max px-10  rounded-full p-2 '>
                        {category}
                    </div>
                    {blocks.map((block) => (
                        <div key={block.getId()}
                            draggable
                            className={cn('flex flex-col items-center  cursor-pointer', block.getMedia().startsWith("<svg") ? "col-span-1 border rounded-md  bg-muted/50" : "col-span-full")}
                            onDragStart={(ev) => {
                                setIsPreview(false)
                                dragStart(block, ev.nativeEvent)
                            }}
                            onDragEnd={() => {
                                dragStop(false)
                                setIsPreview(true)
                            }} >

                            {(block.getMedia() || block.getLabel()) && (
                                block.getLabel().startsWith("<svg") ? <div className='flex flex-col items-center'>
                                    <svg dangerouslySetInnerHTML={{ __html: block.getLabel() }} className='rounded-xl overflow-hidden' />
                                </div> :
                                    block.getMedia().startsWith("<svg") ? <div className='flex flex-col items-center py-4'>
                                        <svg dangerouslySetInnerHTML={{ __html: block.getMedia() }} className='w-10 opacity-80 h-10' />
                                        <div className='text-foreground/60 mt-1 text-sm'>{useHelfText(block.getLabel(), 10)}</div>
                                    </div> :
                                        <div className='w-full relative '>
                                            <img src={("asset://" + project.projectDirectory + "/preview/" + (block.getMedia()).split('/').slice(-2).join('/').replaceAll("\" />", "")).replace(".", "/5.")} />
                                            <div className='absolute h-full w-full bg-transparent z-10 top-0' />
                                        </div>
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )

}


