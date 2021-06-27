import React from 'react'

const Heading = ({ text }) => {
    return (
        <div>
            <h3>
                { text }
            </h3>

            <div className="underline-box-outer">
                <div className="underline-box-inner">
                </div>
            </div>

        </div>

    )
}

export default Heading
