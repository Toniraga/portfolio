import React from 'react'

export const Answer = (props) => {
    const {
        btnRef,
        answer,
        id,
        clicked,
    } = props

    return (
        <div>
            <button
                onClick={() => {
                    btnRef.current.toggleAttribute("disabled");
                    clicked(id)
                }}>
                {answer}
            </button>
        </div>
	);
}
