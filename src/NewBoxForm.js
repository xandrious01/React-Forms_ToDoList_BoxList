import React, { useState } from 'react'
import './NewBoxForm.css'
import { MuiColorInput } from 'mui-color-input'

const NewBoxForm = ({ addBox }) => {

    const INITIAL_STATE = {
        height: '',
        width: '',
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const [color, setColor] = useState('#ffffff');
    const [notValid, setNotValid] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleColorChange = (e) => {
        const colorObj = { color: e };
        setColor(e);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { height, width } = formData;
        if (height > 0 && width > 0) {
            addBox({ ...formData, color: color });
            setFormData(INITIAL_STATE);
            setColor('#ffffff');
            setNotValid(false)
        } else {
            alert("Please enter a height and width greater than 0")
        }
    }

    return (
        <form className="new-box-form" onSubmit={handleSubmit}>
            <div className="box-form-input-div">
                <label htmlFor="height">Box Height (px):</label>
                <input id="height"
                    type="number"
                    name="height"
                    placeholder=""
                    value={formData.height}
                    onChange={handleChange}
                    className="box-form-input"
                />
            </div>
            <div className="box-form-input-div">
                <label htmlFor="width">Box Width (px):</label>
                <input id="width"
                    type="number"
                    name="width"
                    placeholder=""
                    value={formData.width}
                    onChange={handleChange}
                    className="box-form-input"
                />
            </div>
            <div className="box-form-input-div">
                <label htmlFor="color">Color:</label>
                <MuiColorInput
                    id="color"
                    className="box-form-input"
                    name="color"
                    format="hex"
                    value={color}
                    onChange={handleColorChange}
                />
                {/* <input id="color"
                type="text"
                name="color"
                placeholder=""
                value={formData.color}
                onChange={handleChange}
                className="box-form-input"
            /> */}
            </div>
            <button className="box-form-btn" onClick={handleSubmit}>Add Box</button>
        </form>
    )

}

export default NewBoxForm;