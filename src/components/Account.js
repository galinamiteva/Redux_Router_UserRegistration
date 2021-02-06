import React from 'react';
import '../App.css';

import { useSelector, useDispatch } from 'react-redux';
import {setNameAction, setMailAction, changeAccountAction } from '../actions/setDetails';
import  setPasswordAction  from '../actions/setDetails';





function  Account (props) {
   
    
    const name = useSelector(state => state.setNameAction);
    const email = useSelector(state => state.setMailAction);    
    const password = useSelector(state => state.setPasswordAction);
    const changeAccount= useSelector(state => state.changeAccount);
    
    
    const dispatch = useDispatch(); 

    const settingChanges = (e) => {
        e.preventDefault()       
        dispatch(changeAccountAction(true));
      }
    
      const saveSettings = (e) => {
        e.preventDefault()        
        dispatch(changeAccountAction(false));
      }
    
   

  

        return(
            <>
                {!changeAccount &&  
                    
                    <section className='form' id='inputForm'>                      
                        <div className='command-form'>  
                            <h3 >Ditt konto</h3>
                        </div>
                    
                        <section>
                            <input type='text' id='name' className='form__input' onChange={  event => dispatch( setNameAction(event.target.value)) }  value={name} placeholder="Jane Goodall"  />
                                <label htmlFor="name" className="form__label form__label_name">Name </label>
                            </section>
                            <section>
                                <input type='email' id='mail' className='form__input'  onChange={ event => dispatch (setMailAction(event.target.value)) } value={email} placeholder="jane@chimpanzee.com"/>
                                <label htmlFor="mail" className="form__label form__label_name"> Email: </label>
                            </section>
                            <section>
                                <input type='password' id='password' className='form__input' onChange={ event => dispatch (setPasswordAction(event.target.value))}  value={password} placeholder="*********"/>  
                                <label htmlFor="password" className="form__label form__label_password"> Password:</label>
                        </section>
                        <button id='btn' type='submit' className='form__button' onClick ={ settingChanges }>Ändra</button>                 
                    </section>
                }

                {changeAccount &&
                    <section className='form' id='inputForm'>   
                    
                        <div className='command-form'>  
                            <h3 >Ditt konto</h3>
                        </div>
                    
                        <section>
                            <input type='text' id='name' className='form__input' onChange={  event => dispatch( setNameAction(event.target.value)) }  value={name} placeholder="Jane Goodall"  />
                                <label htmlFor="name" className="form__label form__label_name">Name </label>
                            </section>
                            <section>
                                <input type='email' id='mail' className='form__input'  onChange={ event => dispatch (setMailAction(event.target.value)) } value={email} placeholder="jane@chimpanzee.com"/>
                                <label htmlFor="mail" className="form__label form__label_name"> Email: </label>
                            </section>
                            <section>
                                <input type='password' id='password' className='form__input' onChange={ event => dispatch (setPasswordAction(event.target.value))}  value={password} placeholder="*********"/>  
                                <label htmlFor="password" className="form__label form__label_password"> Password:</label>
                        </section>
                        <button id='btn' type='submit' className='form__button' onClick ={ saveSettings }>Spara</button>                 
                    </section>
                }            
            </>
        )
}  


    

export default Account;