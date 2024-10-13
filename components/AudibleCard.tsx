import Image from 'next/image'
import React from 'react'

const AudibleCard = ({
    audibleId, title, description, imgURL
}:
    {
        audibleId: string,
        title: string,
        description: string,
        imgURL: string,
    }) => {
    return (
        <div className='cusror-pointer'>
            <figure className="flex flex-col gap-2">
                <Image
                    src={imgURL}
                    width={174}
                    height={174}
                    alt={title}
                    className='h-fit w-full aspect-square rounded-xl 2xl:size-[200px]'
                />
                <div className='flex flex-col'>
                    <h1 className='text-normal truncate font-bold default-text'>{title}</h1>
                    <h2 className='text-small truncate font-normal capitalize'>{description}</h2>
                </div>
            </figure>
        </div>
    )
}

export default AudibleCard
