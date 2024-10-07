import React from 'react'
import '@/styles/globals.css'
import InputComponent from '@/pages/components/InputComponent'

const _app = () => {
  return (
    <div className='main-container flex items-center justify-center h-screen w-full'>
        <InputComponent/>
    </div>
  )
}

export default _app;