import React, { useState, useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../Context';

function Login() {
    const [datos, setDatos] = useState({
        email:'',
        password:''
    });
    const [token, setToken] = useState('');
    let navigate = useNavigate();
    const userContext = useContext(TokenContext);

const handleChange = (event) =>{
    setDatos({
        ...datos,
        [event.target.name] : [event.target.value]
    })
}

const handleSubmit = async (e) => {
    e.preventDefault();
    Swal.fire({
        title: 'Comprobando',
        didOpen: () => {
          Swal.showLoading()
        },
      })
    const response = await axios.post('http://challenge-react.alkemy.org/', {
        email: datos.email.toString(),
        password: datos.password.toString()
      })
      .then((response) => {
        Swal.close();
        Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        userContext.setToken(response.data.token);
        
        navigate("/Home");
      })
      .catch( (error) => {
        
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
          })
      });
      
}


    return ( 
        <section className='vh-100 ' style={{backgroundImage:"url('https://media.istockphoto.com/vectors/burgers-seamless-pattern-background-hand-drawn-hamburger-and-french-vector-id1139458194?s=612x612')",backgroundPosition: "center"}}>
            <div className='row d-flex justify-content-center align-items-center ' style={{height:'99%', width:'99%'}} >
            <div className='col-12 col-md-8 col-lg-6 col-xl-3'>
            <div className="card shadow-2-strong" style={{borderRadius:'1rem'}}>
                <div className='card-body p-5 text-center' >
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="50 mb-5">Please enter your login and password!</p>
                    <form onSubmit={handleSubmit} >
                        <div className="form-outline mb-4" >
                            <input 
                            id="typeEmailX"
                            type="email" 
                            className='form-control form-control-lg' 
                            placeholder="Enter email" 
                            name='email'
                            onChange={handleChange}
                            />
                            
                        </div>
                        <div className="form-outline mb-4" >
                            
                            <input 
                            id="typePasswordX"
                            type="password" 
                            className='form-control form-control-lg' 
                            placeholder="Password" 
                            name='password'
                            onChange={handleChange}
                            />
                            
                        </div>
                        <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                        
                
                    </form>
                </div>
            </div> 
            </div>
            </div>
        </section>
        
     );
}

export default Login;