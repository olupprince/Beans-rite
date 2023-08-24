import axios from "axios";

export const getAll  = async () => {
  const { data } = await axios.get (`http://localhost:5000/api/menu`)
  .then(response => response.data.menuItems)
  .catch(error => {
      console.error('Error fetching menus:', error);
      console.log('Error response:', error.response);
     
    })
    return data;
  }