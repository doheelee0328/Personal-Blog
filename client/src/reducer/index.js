const initialUserState = {
  name: '',
  email: '',
  password: '',
}

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload }
    case 'SET_Email':
      return { ...state, email: action.payload }
    case 'SET_PASSWORD':
      return { ...state, password: action.payload }
    default:
      return state
  }
}
