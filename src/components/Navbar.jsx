import React, { useContext, useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link, useNavigate } from 'react-router-dom'
import { ShopContext } from './context/ShopContext'
import { toast } from 'react-toastify'
import { Button } from './ui/button'
import { ChevronDown } from 'lucide-react'

const Navbar = () => {
  const [menu, setMenu] = useState('shop')
  const [showDropdown, setShowDropdown] = useState(false)

  const { getTotalItem } = useContext(ShopContext)
  const navigate = useNavigate()

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn')
    const storedUser = localStorage.getItem('username')

    if (loggedIn) {
      setIsLoggedIn(true)
      setUsername(storedUser || '')
    }
  }, [])

  const logout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('username')
    setIsLoggedIn(false)
    setUsername('')
    toast.info('Logged out successfully')
    navigate('/login')
  }

  const handleMenuClick = (item) => {
    setMenu(item)
    window.scrollTo(0, 0)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md h-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-9 h-9" />

          <Link
            to="/"
            className="text-3xl font-semibold bg-gradient-to-r from-red-500 to-black bg-clip-text text-transparent"
          >
            SHOPPER
          </Link>
        </div>

        {/* Navigation */}
        <ul className="flex items-center gap-8 text-lg font-medium">
          <li>
            <Link
              to="/"
              onClick={() => handleMenuClick('shop')}
              className="flex flex-col items-center hover:text-red-500 lg:text-2xl"
            >
              Shop
              {menu === 'shop' && (
                <div className="h-[2px] w-full bg-red-500 mt-1"></div>
              )}
            </Link>
          </li>

          <li>
            <Link
              to="/mens"
              onClick={() => handleMenuClick('mens')}
              className="flex flex-col items-center hover:text-red-500 lg:text-2xl"
            >
              Mens
              {menu === 'mens' && (
                <div className="h-[2px] w-full bg-red-500 mt-1"></div>
              )}
            </Link>
          </li>

          <li>
            <Link
              to="/womens"
              onClick={() => handleMenuClick('womens')}
              className="flex flex-col items-center hover:text-red-500 lg:text-2xl"
            >
              Womens
              {menu === 'womens' && (
                <div className="h-[2px] w-full bg-red-500 mt-1"></div>
              )}
            </Link>
          </li>

          <li>
            <Link
              to="/kids"
              onClick={() => handleMenuClick('kids')}
              className="flex flex-col items-center hover:text-red-500 lg:text-2xl"
            >
              Kids
              {menu === 'kids' && (
                <div className="h-[2px] w-full bg-red-500 mt-1"></div>
              )}
            </Link>
          </li>

          {/* Products Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="flex items-center gap-1 hover:text-red-500 lg:text-2xl">
              Products
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  showDropdown ? 'rotate-180' : ''
                }`}
              />
            </button>

            {showDropdown && (
              <div className="absolute left-1/2 -translate-x-1/2 top-[62px] w-64 bg-white border rounded-md shadow-lg flex flex-col">
                {' '}
                <Link
                  to="/mens"
                  onClick={() => handleMenuClick('mens')}
                  className="px-4 py-2 hover:bg-gray-100 hover:text-red-500 lg:text-2xl"
                >
                  Mens Collection
                </Link>
                <Link
                  to="/womens"
                  onClick={() => handleMenuClick('womens')}
                  className="px-4 py-2 hover:bg-gray-100 hover:text-red-500 lg:text-2xl"
                >
                  Womens Collection
                </Link>
                <Link
                  to="/kids"
                  onClick={() => handleMenuClick('kids')}
                  className="px-4 py-2 hover:bg-gray-100 hover:text-red-500 lg:text-2xl"
                >
                  Kids Collection
                </Link>
              </div>
            )}
          </li>
        </ul>

        {/* Cart + Auth */}
        <div className="flex items-center gap-4 relative">
          {isLoggedIn && <p className="text-sm">Welcome, {username}</p>}

          {!isLoggedIn && (
            <Link to="/login">
              <Button className="px-6 py-2 bg-teal-500 text-white hover:bg-teal-600 ">
                Login
              </Button>
            </Link>
          )}

          {isLoggedIn && <Button onClick={logout}>Logout</Button>}

          <div className="relative">
            <Link to="/cart">
              <img src={cart_icon} alt="cart" className="w-7" />
            </Link>

            <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
              {getTotalItem()}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
