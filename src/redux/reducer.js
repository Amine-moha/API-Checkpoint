import { GET, GETONE } from "./actiontype"

const initialState = {
    users:[],
    user:{}
}

export const reducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case GET:
    return { ...state,users:payload }
   case GETONE:
    return{...state,user:payload}
  default:
    return state
  }
}

