export const setName = (data) => {
  return { type: 'SET_NAME', payload: data }
}

export const setEmail = (data) => {
  return { type: 'SET_Email', payload: data }
}

export const setPassword = (data) => {
  return { type: 'SET_PASSWORD', payload: data }
}
export const setConfirmPassword = (data) => {
  return { type: 'CONFIRM_PASSWORD', payload: data }
}
export const setToken = (data) => {
  return { type: 'SET_TOKEN', payload: data }
}
