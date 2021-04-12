import React from 'react'

const Footer = () => {
    return (
        <div className ="bg-gray-600 p-5 flex justify-center">
            <p className ="text-blue-100">&copy; { new Date().getFullYear() } Jhon Santana</p>
        </div>
    )
}

export default Footer
