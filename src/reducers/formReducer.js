

export  const nameReducer = (state = '', action) => {
    switch (action.type){
        case 'SET_NAME':
            return action.name;            
            default:
            return state;    
    }
}

export const mailReducer = (state = '', action) => {
    switch (action.type){
        case 'SET_MAIL':
            return action.email;            
            default:
            return state;    
    }
}

export const passwordReducer = (state = '', action) => {
    switch (action.type){
        case 'SET_PASSWORD':
            return action.password;            
            default:
            return state;    
    }
}



export const changeAccountReducer = (state = false, action) =>  {
    switch (action.type) {
      case 'CHANGE_ACCOUNT':
        return action.change;
      default:
        return state;
    }
  }

  export const disableTextReducer = (state = false, action)=>  {
    switch (action.type) {
      case 'DISABLE_TEXT':
        return action.disable;
      default:
        return state;
    }
  }



 





