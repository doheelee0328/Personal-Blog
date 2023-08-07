import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const Spinner = () => {
  return (
    <TailSpin
      height='80'
      width='80'
      color='	#5A5A5A'
      ariaLabel='tail-spin-loading'
      radius='1'
      visible={true}
    />
  )
}

export default Spinner
