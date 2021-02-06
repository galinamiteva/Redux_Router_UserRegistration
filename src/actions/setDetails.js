export function setNameAction(name){
    return{
        type: 'SET_NAME',
        payload:name
    }
}

export function setMailAction(mail){
    return{
        type: 'SET_MAIL',
        payload:mail
    }
}

export default function setPasswordAction(password){
    return{
        type: 'SET_PASSOWRD',
        payload:password
    }
}

  
  export const changeAccountAction= (boolean) => {
    return {
      type: 'CHANGE_ACCOUNT',
      change: boolean
    }
  }
  
 
