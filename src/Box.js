import React from 'react'
import './Box.css';

const Box = ({ id, height, width, color, removeBox}) => {
    const boxStyle = {
        'height': height,
        'width': width,
        'backgroundColor': color
    };
    
    
    return (
        <div className="box-container">
            <div className="box" 
            id={id} 
            key={id} 
            style={boxStyle}>
            </div>
            <button className="box-btn" onClick={()=>removeBox(id)}>X</button>
        </div>

    )
}

export default Box;