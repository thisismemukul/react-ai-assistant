import React from 'react'

const NovaDetails = ({ params }: { params: { novaId: string } }) => {
    return (
        <div>
            <h1 className="text-20 font-bold default-text">
                NovaDetails for {params.novaId}
            </h1>
            <p className="dark:text-white-1 text-black-1">
                This is a description of the details section.
            </p>
        </div>
    )
}

export default NovaDetails
