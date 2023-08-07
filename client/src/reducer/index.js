const initialUserState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload }
    case 'SET_Email':
      return { ...state, email: action.payload }
    case 'SET_PASSWORD':
      return { ...state, password: action.payload }
    case 'CONFIRM_PASSWORD':
      return { ...state, confirmPassword: action.payload }
    default:
      return state
  }
}

const initialToken = {
  token: '',
}

export const tokenReducer = (state = initialToken, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, token: action.payload }

    default:
      return state
  }
}
