import React from 'react'
//style
import './container.style.scss';

const Container = ({ children }) => {
    
    return (
        <div className="parent-container">
            <div className="content-container">
                <div className="extras-container">
                </div>
                <div>{children}</div>
            </div>
        </div>
    )
}

export default Container;