import  {combineReducers} from 'redux';
import { nameReducer, еmailReducer, passwordReducer, changeAccountReducer, disableTextReducer} from './formReducer'


const rootReducer = combineReducers({
    name: nameReducer,
    mail : еmailReducer,
    pass : passwordReducer,
    changeAccount: changeAccountReducer,
    disableText: disableTextReducer
})

export default rootReducer;
