import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
  const { dispatch } = useAuthContext()

  const logout = () => {
    // remove the user from then local storage
    // therefore no need to communicate with the server

    localStorage.clear()
    // to clear the localStorage

    // dispatch logout action
    dispatch({ type: 'Logout' })
  }

  return { logout }

  // return logout to use this somewhere in this application
}
