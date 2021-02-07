import React from 'react';
import '../App.css';

import NameInput from '../utilities/NameInput';
import MailInput from '../utilities/MailInput';
import PasswordInput from '../utilities/PasswordInput'
import Button from "../utilities/Button";



function  Registration(props) {   

    return (   
        
        <section className='form' id='inputForm'>
            <div className='command-form'>  
            <h3>Registrera dig för ett konto</h3>
            </div>
            
               <NameInput  newClass='form__input_new'/>
               <MailInput  newClass='form__input_new'/>
               <PasswordInput  newClass='form__input_new'/>
               <Button/>
                    
             
        </section>         
    )
}

export default Registration;