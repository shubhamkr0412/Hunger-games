import React from 'react'

import Menu from './RestaurantApi'
import MenuCard from './MenuCard'
import { useState } from 'react'
import Navbar from './Navbar'
const Restaurant = () => {
    const [menuData,setMenuData] = useState(Menu);
    
    const filterItem=(category)=>{
     const updatedList= Menu.filter((currElem)=>{
        return currElem.category===category;
      })
      setMenuData(updatedList);
      console.log(updatedList)
    }

    const starItem=(rating)=>{
      const starList= Menu.filter((currElem)=>{
         return currElem.rating===rating;
       })
       setMenuData(starList);
      
     }
    const lowToHigh=()=>{
      const sub=Menu.price.sort((a,b)=>(a.price-b.price));
      console.log(sub);
       setMenuData(sub);
    }
    const allInOne=()=>{
setMenuData(Menu);
    }
    
  
  return (

    <>
    <div >
    <button onClick={()=>starItem(1)} >1Star</button>
    <button onClick={()=>starItem(2)}>2Star</button>
    <button onClick={()=>starItem(3)}>3Star</button>
    <button onClick={()=>starItem(4)} >4Star</button>
    <button >Cash</button>
    <button >Card</button>
    <button onClick={()=>{allInOne()}}>All</button>
    <button >HiToLow</button>
    <button onClick={()=>{lowToHigh()}}>LowToHigh</button>
    <button >Filter&Sort</button>
    <button >4StarAboveinDes</button>
    <button onClick={()=>filterItem("breakfast")} >Breakfast</button>
    <button onClick={()=>filterItem("lunch")}>Lunch</button>
    <button onClick={()=>filterItem("dinner")}>Dinner</button>
  </div>
  
<MenuCard menuData={menuData} />
    </>
  )
}

export default Restaurant