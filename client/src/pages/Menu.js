import React, { useState, useEffect } from 'react';
import BensCard from './BensCard';
import axios from 'axios'

function MenuContainer() {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    axios.get (`http://localhost:5000/api/menu`)
    .then(response => {
      setMenus(response.data.menuItems)
    })
      .catch(error => {
        console.error('Error fetching menus:', error);
        console.log('Error response:', error.response);
       
      });
  }, []);


  return (
    <div className="menu-container">
    {menus.map(menu => (
      <BensCard menu={menu} key={menu._id} />
    ))}
  </div>
  );
}

export default MenuContainer;
