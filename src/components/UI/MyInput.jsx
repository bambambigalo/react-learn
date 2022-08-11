import React from 'react';
import './cssUI/style-MyInput.css'



function MyInput (props) {
    const {onChange, value} = props
    return ( 
        <div className='MyInput_comp'>
            <input onChange={onChange} value={value} className='MyInput__input' type="text" placeholder='Поиск...' />
        </div>
    );
}

export default MyInput ;
