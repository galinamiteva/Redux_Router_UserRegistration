import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setMailAction } from '../actions/setDetails';


function MailInput ( props ) {

const email = useSelector( state => state.mail);
const readOnly = useSelector( state =>state.disableText);
const dispatch =useDispatch();

return (   
    <section >
        <input type='email' id='mail'  readOnly={readOnly ? true : false}  className={props.oldClass ? props.oldClass : props.newClass} onChange={ event => dispatch (setMailAction(event.target.value)) } value={email} placeholder="jane@chimpanzee.com"/>
        <label htmlFor="mail" className="form__label form__label_name"> Email: </label>
    </section>
    );
}
            
            

export default MailInput;