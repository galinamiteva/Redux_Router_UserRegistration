import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { disableTextAction } from '../actions/setDetails';

import {setNameAction} from '../actions/setDetails';
import { setMailAction } from '../actions/setDetails';
import { setPasswordAction } from '../actions/setDetails';




function  Registration(props) {   

    const name = useSelector( state =>state.name);
    const email = useSelector( state => state.mail);
    const password = useSelector( state =>state.pass);
    const readOnly = useSelector( state =>state.disableText )
    const dispatch = useDispatch();  
    const history = useHistory() 

    function  handleClick(){
        dispatch (disableTextAction(true))
        return history.push ('/account')
    }



    return (   
        <div className='info'>
            <section className='form' id='inputForm'>
                <div className='command-form'>  
                <h3>Registrera dig för ett konto</h3>
                </div>
                
                <section >
                    <input type='text' id='name'  className='form__input' readOnly={readOnly ? true : false} onChange={event => dispatch( setNameAction(event.target.value)) }  value={name} placeholder="Jane Goodall"  />
                    <label htmlFor="name" className="form__label form__label_name">Name </label>
                </section>

                <section >
                    <input type='email' id='mail'  readOnly={readOnly ? true : false}  className='form__input' onChange={ event => dispatch (setMailAction(event.target.value)) } value={email} placeholder="jane@chimpanzee.com" />
                    <label htmlFor="mail" className="form__label form__label_name"> Email: </label>
                </section>

                <section >
                    <input type='password' id='password'   className='form__input'  readOnly={readOnly ? true : false}  onChange={event => dispatch( setPasswordAction(event.target.value)) }   defaultValue={password} placeholder="********" />
                    <label htmlFor="password" className="form__label form__label_password"> Password: </label>
                </section>

                <button id='btn' className='form__button' onClick ={ handleClick }>Sign me up!</button>
              
            </section>  
        </div>       
    )
}

export default Registration;