import  {combineReducers} from 'redux';
import { nameReducer,mailReducer,passwordReducer, changeAccountReducer, disableTextReducer} from './formReducer'


const rootReducer = combineReducers({
    name: nameReducer,
    mail : mailReducer,
    password : passwordReducer,
    changeAccount: changeAccountReducer,
    disableText: disableTextReducer
})

export default rootReducer;
