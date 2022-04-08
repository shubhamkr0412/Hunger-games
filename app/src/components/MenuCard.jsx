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
        <p className='items'>{curr.id}</p>
        <p className='items'>{curr.id}</p>
        <p className='items'>Name</p>
        <p className='items'>Name</p>
        <p className='items'>Name</p>
    </div>
   
   
 

 </>)
       })
   }
   </div>
   </>
  )
}

export default MenuCard