import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { changeAccountAction, disableTextAction  } from '../actions/setDetails';
import { setNameAction } from '../actions/setDetails';
import { setMailAction } from '../actions/setDetails';
import { setPasswordAction } from '../actions/setDetails';





function  Account (props) {
    const name = useSelector( state =>state.name )
    const email = useSelector( state => state.mail);
    const password = useSelector( state =>state.pass )
    const readOnly = useSelector( state =>state.disableText )
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
                     
                    <section >
                        <input type='text' id='name'  className='form__input' readOnly={readOnly ? true : false} onChange={event => dispatch( setNameAction(event.target.value)) }   value={name}   />
                        <label htmlFor="name" className="form__label form__label_name">Name </label>
                    </section>
                    <section >
                        <input type='email' id='mail'  readOnly={readOnly ? true : false}  className='form__input' onChange={ event => dispatch (setMailAction(event.target.value)) } value={email} />
                        <label htmlFor="mail" className="form__label form__label_name"> Email: </label>
                    </section>


                    <section >
                        <input type='password' id='password'   className='form__input'  readOnly={readOnly ? true : false}  onChange={event => dispatch( setPasswordAction(event.target.value)) } defaultValue={password}   />
                        <label htmlFor="password" className="form__label form__label_password"> Password: </label>
                    </section>
                     
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

                    <section >
                        <input type='text' id='name'   className='form__input' readOnly={readOnly ? true : false} onChange={event => dispatch( setNameAction(event.target.value)) }   value={name}   />
                        <label htmlFor="name" className="form__label form__label_name">Name </label>
                    </section>


                    <section >
                        <input type='email' id='mail'  readOnly={readOnly ? true : false}  className='form__input' onChange={ event => dispatch (setMailAction(event.target.value)) } value={email} />
                        <label htmlFor="mail" className="form__label form__label_name"> Email: </label>
                    </section>


                    <section >
                        <input type='password' id='password'   className='form__input'  readOnly={readOnly ? true : false}  onChange={event => dispatch( setPasswordAction(event.target.value)) }   defaultValue={password}   />
                        <label htmlFor="password" className="form__label form__label_password"> Password: </label>
                    </section>

                    <button id='btn' type='submit' className='form__button' onClick ={ settingChanges }>Ändra</button>                 
                </section>
                </div>
               
                }            
            </>
        )
}  
   

export default Account;