import * as React from "react"

function EditSVG(props) {
    return (
        <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path opacity={0.15} d="M4 20h4l10-10-4-4L4 16v4z" fill="#000" />
            <path
                d="M12 20h8.5M18 10l3-3-4-4-3 3m4 4L8 20H4v-4L14 6m4 4l-4-4"
                stroke="#000"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default EditSVG
