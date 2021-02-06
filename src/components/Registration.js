import React from 'react';
import '../App.css';


import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {setNameAction, setMailAction} from '../actions/setDetails';
import  setPasswordAction  from '../actions/setDetails';


function  Registration(props) {

    const name = useSelector(state => state.setNameAction);
    const email = useSelector(state => state.setMailAction);    
    const password = useSelector(state => state.setPasswordAction);

    const history = useHistory();
    const dispatch = useDispatch();    

    function handleClick() {    
    
    history.push('/account');
    }

    return (   
        
        <section className='form' id='inputForm'>
            <div className='command-form'>  
            <   h3 >Registrera dig för ett konto</h3>
            </div>
            <section >
                <input type='text' id='name' className='form__input' onChange={  event => dispatch( setNameAction(event.target.value)) }  value={name} placeholder="Jane Goodall"  />
                <label htmlFor="name" className="form__label form__label_name">Name </label>
            </section>
            <section >
                <input type='email' id='mail' className='form__input'  onChange={ event => dispatch (setMailAction(event.target.value)) } value={email} placeholder="jane@chimpanzee.com"/>
                <label htmlFor="mail" className="form__label form__label_name"> Email: </label>
            </section>
            <section >
                <input type='password' id='password' className='form__input' onChange={ event => dispatch (setPasswordAction(event.target.value))}  value={password} placeholder="*********"/>  
                <label htmlFor="password" className="form__label form__label_password"> Password:</label>
            </section>
                <button id='btn' className='form__button' onClick ={ handleClick }>Sign me up!</button>
        </section> 

         
    )
}
export default Registration;