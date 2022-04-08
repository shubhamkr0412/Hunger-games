import React from 'react'
import "../App.css"
const MenuCard = ({menuData}) => {
    console.log(menuData)
  return (
   <>
   {
    <div className='container'>
       menuData.map((curr)=>{
           return (
               <>
              
           
    
    <div className='inside'>
        <p className='items'>Name</p>
        <p className='items'>Name</p>
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