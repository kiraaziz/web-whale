import { BlocksResultProps } from '@grapesjs/react'
import { cn } from '@/lib/utils'
type CustomBlockManagerProps = Pick<
  BlocksResultProps,
  'mapCategoryBlocks' | 'dragStart' | 'dragStop'
> & {
  setSelectedElement: (element: any) => void 
}

export function BlockManager({ mapCategoryBlocks, dragStart, dragStop, setSelectedElement }: CustomBlockManagerProps) {

    return (
        <div className="gjs-custom-block-manager text-left">
            {Array.from(mapCategoryBlocks).map(([category, blocks]) => (
                <div key={category} className='border-b p-3 last:border-b-0'>
                    <h1 className="text-foreground/70 mb-3" >
                        {category}
                    </h1>
                    <div className={`grid grid-cols-1 gap-2`}>
                        {blocks.map((block) => (
                            <div key={block.getId()}
                                draggable
                                className={cn('flex flex-col items-center border rounded cursor-pointer py-2 px-5 transition-colors')}
                                onDragStart={(ev) => dragStart(block, ev.nativeEvent)}
                                onDragEnd={() => {
                                    dragStop(false)
                                }}
                            >
                                {block.getMedia() && <div
                                    className="h-10 w-10"
                                    dangerouslySetInnerHTML={{ __html: block.getMedia()! }}
                                />}
                                {!block.getMedia() && <div className="text-sm text-center w-full" title={block.getLabel()} dangerouslySetInnerHTML={{ __html: block.getLabel()! }}>
                                    
                                </div>}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )

}


