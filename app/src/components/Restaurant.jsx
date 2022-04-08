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

    const lowToHigh=()=>{
      Menu.price.sort((a,b)=>(a.price-b.price));
       setMenuData(Menu);
    }
    
  
  return (

    <>
    <div >
    <button >1Star</button>
    <button >2Star</button>
    <button >3Star</button>
    <button >4Star</button>
    <button >Cash</button>
    <button >Card</button>
    <button >All</button>
    <button >HiToLow</button>
    <button onClick={lowToHigh}>LowToHigh</button>
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