import React from 'react'
import "../App.css"
const MenuCard = ({menuData}) => {
    console.log(menuData)
  return (
   <>
   <div className='container'>
   {
       menuData.map((curr)=>{
           return (
               <>
               
           
    
    <div className='inside' key={curr.id}>
       
        <p className='items'>{curr.name}</p>
        <p className='items'>{curr.category}</p>
        <p className='items'>{curr.price}</p>
        <p className='items'>{curr.rating}</p>
       
    </div>
   
   
 

 </>)
       })
   }
   </div>
   </>
  )
}

export default MenuCard