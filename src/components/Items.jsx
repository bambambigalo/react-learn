import React,{useState} from "react";

import './css/style-item.css';






export default function Items (props) {

   
    const {items} = props
   

    return (
       
     <div className="products">
      
        <h1>Список продуктов</h1>
        {
            // сортировка массива с продуктами 
            items.map((item)=>{
                return (
                    <div className="item" key = {item.key}>
                    <div className="item__content">
                        <div className="item__header">
                            <h1>{item.title}</h1>
                            <h2>{item.subtitle}</h2>
                            <h3>цена: {item.price}</h3>
                        </div>
                        <div className="item__footer">
                            <button className="item__btn">Добавить в корзину</button>
                        </div>
                    </div>
                </div>
                )
            })

        }
     </div>
       
    )
}