import { useContext, createContext } from 'react'
import { toast } from 'react-toastify'
import '../hooks/Toast.css'

const ToastContext = createContext()

export const ToastContextProvider = ({ children }) => {
  const errorMessage = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      className: 'custom-toast-container',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  const successMessage = (message) => {
    toast.success(message, {
      position: 'top-center',
      className: 'custom-toast-container',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }
  return (
    <ToastContext.Provider value={{ errorMessage, successMessage }}>
      {children}
    </ToastContext.Provider>
  )
}

export const useToastMessage = () => useContext(ToastContext)
