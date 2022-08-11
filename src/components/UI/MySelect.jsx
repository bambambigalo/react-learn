import React  from 'react';
import './cssUI/style-MySelect.css';



export default function MySelect ({options, defaultValue, value, onChange}) {
    
    return (
        <div className='MySelect_box'>
            <select
              value = {value}
              onChange ={event => onChange(event.target.value)}
              className='MySelect' >
                <option disabled={true} value="value">{defaultValue}</option> 
                {/* сортировка по опциям  */}
                {options.map((option)=>{
                        return(
                            // вывод опций
                            <option key ={option.value} value={option.value}>{option.name}</option>
                        )
                }
                
                        
                    
                )}
            </select>
        </div>
    )
}