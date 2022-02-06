import React,{useState,useEffect} from 'react';
import axios from 'axios';

function Home({children}) {
    const [menuList, setMenuList] = useState([]);

useEffect(async() => {
    const response = await axios.get('https://api.spoonacular.com/food/menuItems/search?query=*&apiKey=8d77e3f6902246f4899909f894fca162')
    .then(function (response) {
      // handle success
      setMenuList(response.data.menuItems);
      console.log(response.data.menuItems);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
   
}, []);
console.log(menuList);
    return ( 
    <>
        {children}
        <p>home</p>
        <div className='row row-cols-1 row-cols-md-3 g-4 '>
        { menuList.map((row)=>{
            return(
        <div className='col d-flex justify-content-center'>
        <div className="card" style={{width:'18rem'}}> 
                <div className='d-flex align-items-center' style={{width:'18rem', height:'18rem'}}>
                <img src={row.image} className="card-img-top" alt={row.title} style={{width:'100%', height:'10rem'}}/>
                </div>
            <div className="card-body">
                <h5 className="card-title">{row.title}</h5>
                <p className="card-text">{}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </div>
        )})}
        </div>
    </> );
}

export default Home;