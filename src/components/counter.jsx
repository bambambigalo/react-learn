import React,{useState} from "react";




export default function Couter () {
//состояния  
const [like, setLike] = useState(0)
const [value, setValue] = useState('')

// счетчик лайков
function increment () {
setLike(
  like + 1
)
}
function decrement () {
  setLike(
    like - 1 
  )
}


    return (
        <div>
            <h1>{like}</h1>
            <h1>{value}</h1>
            <input type='text' placeholder="Напиши что нибуль сюда!" value={value} onChange={event=>setValue(event.target.value)}></input>
            <button className='increment' onClick={increment}>Лайк</button>
            <button className='decrement' onClick={decrement}>Дизлайк</button>
        </div>
    )
}