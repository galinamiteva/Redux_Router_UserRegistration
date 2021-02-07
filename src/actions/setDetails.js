export const setNameAction = (name)=>{
    return{
        type: 'SET_NAME',
        name:name
    }
}

export const setMailAction = (email) => {
    return{
        type: 'SET_MAIL',
        email:email
    }
}

export const setPasswordAction = (password) => {
    return{
        type: 'SET_PASSOWRD',
        password:password
    }
}

  
  export const changeAccountAction= (boolean) => {
    return {
      type: 'CHANGE_ACCOUNT',
      change: boolean
    }
  }

  export  const disableTextAction= (boolean) => {
    return {
      type: 'DISABLE_TEXT',
      disable: boolean
    }
  }
  
 
