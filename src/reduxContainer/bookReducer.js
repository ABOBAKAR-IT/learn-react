import {BayBook} from './bookTypes'
const initialState={
    NumberOfBooks:20
}

const BookReducer= (state=initialState,action)=>{
    switch(action.type){
        case BayBook: return{
            ...state,NumberOfBooks:state.initialState -1
        }
        default : return state
    }
}

export default BookReducer;