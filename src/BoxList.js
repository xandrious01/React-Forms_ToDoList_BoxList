import React, { useState } from 'react'
import './BoxList.css'
import NewBoxForm from './NewBoxForm'
import Box from './Box'
const { v4: uuidv4 } = require('uuid');


const BoxList = () => {
    const INITIAL_STATE = [];
    const [boxes, setBoxes] = useState(INITIAL_STATE);

    const addBox = (newBox) => {
        return setBoxes(boxes => [...boxes,
        { ...newBox, id: uuidv4() }
        ])
    };
    const removeBox = (id) => {
        return setBoxes(boxes.filter(box => box.id !== id
        ));
    }
    return (
        <>
            <NewBoxForm addBox={addBox} />
            <div className="boxes-container">
                {boxes.map(({height, width, color, id}) => {
                   return <Box
                    height={Number(height)} 
                    width={Number(width)}
                    color={color}
                    id={id}
                    key={id}
                    removeBox={removeBox} 
                    />
                })}
            </div>
        </>
    )
}

export default BoxList;