import React from 'react';

export default function Header(){
   
    return (
        <div>
            <header> 
                <div className='header'>
                    <h1><i className="fas fa-globe-asia"></i>my travel journal</h1>
                    <h2 className='user-name'><i class="fa fa-user" id='user-name'></i>Syed Umaid Ahmed</h2>
                    <h3><i class="fa fa-sign-out" id='user-logout'></i>Logout</h3>
                </div>          
            </header>
                
        </div>
        
    )
}