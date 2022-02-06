import React, { useState, useEffect } from 'react';
import axios from 'axios';




function Login() {
    const [datos, setDatos] = useState({
        email:'',
        password:''
    });
    const [token, setToken] = useState('');

const handleChange = (event) =>{
    console.log(event.target.value);
    setDatos({
        ...datos,
        [event.target.name] : [event.target.value]
    })
}

const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://challenge-react.alkemy.org/', {
        email: datos.email.toString(),
        password: datos.password.toString()
      })
      .then((response) => {
        setToken(response.data.token);
      })
      .catch( (error) => {
        console.log(error.message);
      });
      
}


    return ( 
        <div style={{backgroundColor:'red', width:'auto', height:'100vh'}}>
            <div className='d-flex justify-content-md-center align-items-center' style={{height:'100%'}}>
            <div className="card" style={{width:'auto'}}>
                <div className='card-body' >
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3" >
                            <label className='form-label'>Email address</label>
                            <input 
                            type="email" 
                            className='form-control' 
                            placeholder="Enter email" 
                            name='email'
                            onChange={handleChange}
                            />
                            <div className="text-muted">
                                We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div className="mb-3" >
                            <label className='form-label'>Password</label>
                            <input 
                            type="password" 
                            className='form-control' 
                            placeholder="Password" 
                            name='password'
                            onChange={handleChange}
                            />
                        </div>
                        <button className='btn btn-primary' type="submit" >
                            Submit
                        </button>
                        
                
                    </form>
                </div>
            </div> 
            </div>
        </div>
        
     );
}

export default Login;