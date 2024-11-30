import { BlocksResultProps } from '@grapesjs/react'
import { cn } from '@/lib/utils'

type CustomBlockManagerProps = Pick<
    BlocksResultProps,
    'mapCategoryBlocks' | 'dragStart' | 'dragStop'
> & {
    setSelectedElement: (element: any) => void
}

export function BlockManager({ mapCategoryBlocks, dragStart, dragStop }: CustomBlockManagerProps) {

    function getImageSrc(htmlString: any) {
        const match = htmlString.match(/<img[^>]*src="([^"]+)"/);
        return match ? match[1] : null;
    }

    return (
        <div className="gjs-custom-block-manager text-left">
            {Array.from(mapCategoryBlocks).map(([category, blocks]) => (
                <div key={category} className='border-b p-3 last:border-b-0'>
                    <div className={`grid grid-cols-1 gap-2`}>
                        {blocks.map((block) => (
                            <div key={block.getId()}
                                draggable
                                className={cn('flex flex-col items-center  cursor-pointer')}
                                onDragStart={(ev) => dragStart(block, ev.nativeEvent)}
                                onDragEnd={() => {
                                    dragStop(false)
                                }}
                            >
                                {/* {JSON.stringify(block.getId())} */}
                                {block.getMedia() && (
                                    <div className='w-full relative'>
                                        <img src={getImageSrc(block.getMedia())} />
                                        <div className='absolute h-full w-full bg-transparent z-10 top-0' />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )

}


