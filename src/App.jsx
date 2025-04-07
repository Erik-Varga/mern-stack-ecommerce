import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import { FaShoppingCart } from 'react-icons/fa'
import { TbShoppingCart } from 'react-icons/tb'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='mt-10 flex items-center justify-center gap-2'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <TbShoppingCart size={30} className='text-gray-700' />
      </div>
      <h1 className='text-center'>Vite + React</h1>

      <div className='font-bold text-center text-4xl p-3'>The Spubba Store</div>
      
      <p className="text-center mt-2">
      eCommerce website using React JS, MongoDB, Express JS, Node JS
      </p>
      <br />
      <hr className='text-gray-200' />
      <br />

      <Footer />
    </>
  )
}

export default App
