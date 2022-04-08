import React from 'react'

import Menu from './RestaurantApi'
import MenuCard from './MenuCard'
import { useState } from 'react'
const Restaurant = () => {
    const [menuData,setMenuData] = useState(Menu);
    console.log(menuData);
  return (

    <>
<MenuCard menuData={menuData} />
    </>
  )
}

export default Restaurant