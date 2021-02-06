import  {combineReducers} from 'redux'

const nameReducer = (state = '', action) =>{
    switch (action.type){
        case 'SET_NAME':
            return {               
                name: action.payload
            }
            default:
            return state;    
    }
}

const mailReducer = (state = '', action) =>{
    switch (action.type){
        case 'SET_MAIL':
            return {               
                mail: action.payload
            }
            default:
            return state;    
    }
}

const passwordReducer = (state = '', action) =>{
    switch (action.type){
        case 'SET_PASSWORD':
            return {               
                password: action.payload
            }
            default:
            return state;    
    }
}



const changeAccountReducer = (state = false, action) => {
    switch (action.type) {
      case 'CHANGE_ACCOUNT':
        return action.change;
      default:
        return state;
    }
  }

 

const rootReduser = combineReducers({
    name: nameReducer,
    mail : mailReducer,
    password : passwordReducer,
    changeAccount: changeAccountReducer,
    //disableInput: disableInputRecucer
})

export default rootReduser;




