import React from 'react'

function CommonButton({text= "Find Out More", color= "bg-gray-500 bg-gray-600"}) {
    return (
        <button
            className="bg-gray-500 text-white mt-3 px-6 py-3 rounded-lg
             hover:bg-gray-600 focus:ring-2 focus:ring-blue-300 transition block mx-auto"
        >
            {text}
        </button>
    )
}

export default CommonButton