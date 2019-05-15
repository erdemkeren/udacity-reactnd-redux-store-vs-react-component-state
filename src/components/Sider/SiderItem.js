import React from 'react'

function SiderItem ({ children, ...rest }) {
    return (
        <div className="sidenav-item" {...rest}>
            { children }
        </div>
    )
}

export default SiderItem
