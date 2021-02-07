import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {setNameAction} from '../actions/setDetails';


function NameInput(props) {
    const name = useSelector( state =>state.name )
    const readOnly = useSelector( state =>state.disableText )
    const dispatch = useDispatch();   
    return (   
        <section >
        <input type='text' id='name'  className={props.oldClass ? props.oldClass : props.newClass} readOnly={readOnly ? true : false} onChange={event => dispatch( setNameAction(event.target.value)) } placeholder="Jane Goodall"  value={name}   />
        <label htmlFor="name" className="form__label form__label_name">Name </label>
       </section>
    )

}

export default NameInput;


