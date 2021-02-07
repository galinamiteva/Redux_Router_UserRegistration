import React from 'react';


import '../App.css';

import { useSelector, useDispatch } from 'react-redux';
import {changeAccountAction, disableTextAction  } from '../actions/setDetails';
import NameInput from '../utilities/NameInput';
import MailInput from '../utilities/MailInput';
import PasswordInput from '../utilities/PasswordInput';




function  Account (props) {

    const dispatch = useDispatch(); 
    const changeAccount= useSelector(state => state.disableText);
    
    
    
    const settingChanges = (e) => {
        e.preventDefault()       
        dispatch(changeAccountAction(false));
        dispatch(disableTextAction(false));
      }
    
      const saveSettings = (e) => {
        e.preventDefault()        
        dispatch(changeAccountAction(true));
        dispatch(disableTextAction(true));
      }
    
   

  

        return(
            <>
                {!changeAccount &&  
                 <div className='info'>
                 <section className='form' id='inputForm'>   
                 
                     <div className='command-form'>  
                         <h3 >Ditt konto</h3>
                     </div>
                     
                     
                         <NameInput newClass='form__input_new'/>
                         <MailInput newClass='form__input_new' />
                         <PasswordInput newClass='form__input_new' />
                     
                     <button id='btn' type='submit' className='form__button' onClick ={ saveSettings }>Spara</button>      

                 </section>
                 </div>
                    
                }

                {changeAccount &&
                <div className='info'>
                <section className='form' id='inputForm'>                      
                    <div className='command-form'>  
                        <h3 >Ditt konto</h3>
                    </div>   

                    <NameInput oldClass='form__input'/>
                    <MailInput oldClass='form__input'/>
                    <PasswordInput oldClass='form__input'/>

                    <button id='btn' type='submit' className='form__button' onClick ={ settingChanges }>Ändra</button>                 
                </section>
                </div>
               
                }            
            </>
        )
}  
   

export default Account;