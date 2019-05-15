import React from 'react'
import SiderItem from './SiderItem'

function Sider ({ children }) {
    return (
        <div className="sidenav">
            { children }
        </div>
    );
}

Sider.Item =  SiderItem

export default Sider
