import React from 'react'

import Menu from './RestaurantApi'
import MenuCard from './MenuCard'
import { useState } from 'react'
import Navbar from './Navbar'
const Restaurant = () => {
    const [menuData,setMenuData] = useState(Menu);
    console.log(menuData);
  return (

    <>
    <Navbar/>
<MenuCard menuData={menuData} />
    </>
  )
}

export default Restaurant