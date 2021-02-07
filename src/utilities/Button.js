import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { disableTextAction } from '../actions/setDetails';

function Button(props) {
    const dispatch = useDispatch();
    const history = useHistory();


    function  handleClick(){
        dispatch (disableTextAction(true))
        return history.push ('/account')
    }

    return (
        <button id='btn' className='form__button' onClick ={ handleClick }>Sign me up!</button>
    )

}
export default Button;
