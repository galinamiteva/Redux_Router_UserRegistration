import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setPasswordAction } from '../actions/setDetails';

function PasswordInput(props) {

    const password = useSelector( state =>state.password )
    const readOnly = useSelector( state =>state.disableText )
    const dispatch = useDispatch();

    return (

        <section >
            <input type='password' id='password'   className={props.oldClass ? props.oldClass : props.newClass}  readOnly={readOnly ? true : false}  onChange={ event => dispatch (setPasswordAction(event.target.value)) } value={password} placeholder="******"/>
            <label htmlFor="password" className="form__label form__label_password"> Password: </label>
        </section>

       
    );
}

export default PasswordInput;

