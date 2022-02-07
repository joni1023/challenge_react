import React,{useState,useEffect, useContext} from 'react';
import axios from 'axios';
import { TokenContext } from '../Context';

function Home({children}) {
    const [menuList, setMenuList] = useState([]);
    const userContext = useContext(TokenContext);

useEffect(async() => {
    const response = await axios.get('https://api.spoonacular.com/food/menuItems/search?query=*&apiKey='+process.env.REACT_APP_APIKEY)
    .then(function (response) {
      // handle success
      setMenuList(response.data.menuItems);
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
        <div className='row row-cols-1 row-cols-md-3 g-4 '>
        { menuList.map((row)=>{
            return(
        <div className='col d-flex justify-content-center'>
        <div className="card shadow-3-strong" style={{width:'18rem'}}> 
                <div className='d-flex align-items-center' style={{width:'18rem', height:'18rem'}}>
                <img src={row.image} className="card-img-top" alt={row.title} style={{width:'100%', height:'10rem'}}/>
                </div>
            <div className="card-body">
                <h5 className="card-title">{row.title}</h5>
                <p className="card-text">Cadena: {row.restaurantChain}</p>
                <p className="card-text">Numero: {row.servings.number}</p>
                <p className="card-text">Tamaño: {row.servings.size?row.servings.size:'No Informa'}</p>
                <p className="card-text">Unidades: {row.servings.unit?row.servings.unit:'No Informa'}</p>
                <a href="#" className="btn btn-primary">Ver Más</a>
                <a href="#" className="btn btn-secondary">eliminar</a>
            </div>
        </div>
        </div>
        )})}
        </div>
    </> );
}

export default Home;