import React, { useContext, useState } from 'react';

const TokenContext = React.createContext();

function Context({children}) {
    const [token, setToken] = useState('');

    const setTokenAndStorage = (newToken) =>{
        setToken(newToken);
        localStorage.setItem( "token", newToken); 
    }

    const deleteToken = () => {
        localStorage.removeItem('token');
    }

    return ( 
        <TokenContext.Provider value={{token:token, setToken:setTokenAndStorage, deleteToken:deleteToken}}>
        {children}
        </TokenContext.Provider>
        
     );
}

export {Context, TokenContext};



