import React, { useContext, useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link, useNavigate } from 'react-router-dom'
import { ShopContext } from './context/ShopContext'
import { toast } from 'react-toastify'
import { Button } from './ui/button'
import { ChevronDown, Search, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [menu, setMenu] = useState('shop')
  const [showDropdown, setShowDropdown] = useState(false)
  const [search, setSearch] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

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
    setMobileOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto flex items-center h-16 px-6">
        {/* LOGO */}
        <div className="flex items-center flex-1 gap-2">
          <img src={logo} alt="logo" className="w-9 h-9" />

          <Link
            to="/"
            className="text-2xl font-semibold bg-gradient-to-r from-red-500 to-black bg-clip-text text-transparent"
          >
            SHOPPER
          </Link>
        </div>

        {/* DESKTOP NAVIGATION */}
        <ul className="hidden lg:flex items-center justify-center flex-1 gap-10 text-lg font-medium">
          <li>
            <Link
              to="/"
              onClick={() => handleMenuClick('shop')}
              className="flex flex-col items-center hover:text-red-500"
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
              className="flex flex-col items-center hover:text-red-500"
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
              className="flex flex-col items-center hover:text-red-500"
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
              className="flex flex-col items-center hover:text-red-500"
            >
              Kids
              {menu === 'kids' && (
                <div className="h-[2px] w-full bg-red-500 mt-1"></div>
              )}
            </Link>
          </li>

          {/* PRODUCTS DROPDOWN */}
          <li
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="flex items-center gap-1 hover:text-red-500">
              Products
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  showDropdown ? 'rotate-180' : ''
                }`}
              />
            </button>

            {showDropdown && (
              <div className="absolute left-1/2 -translate-x-1/2 top-10 w-60 bg-white border rounded-md shadow-lg flex flex-col">
                <Link
                  to="/mens"
                  onClick={() => handleMenuClick('mens')}
                  className="px-4 py-2 hover:bg-gray-100 hover:text-red-500"
                >
                  Mens Collection
                </Link>

                <Link
                  to="/womens"
                  onClick={() => handleMenuClick('womens')}
                  className="px-4 py-2 hover:bg-gray-100 hover:text-red-500"
                >
                  Womens Collection
                </Link>

                <Link
                  to="/kids"
                  onClick={() => handleMenuClick('kids')}
                  className="px-4 py-2 hover:bg-gray-100 hover:text-red-500"
                >
                  Kids Collection
                </Link>
              </div>
            )}
          </li>
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-end gap-4 flex-1">
          {/* SEARCH (Desktop only) */}
          <div className="hidden lg:flex items-center bg-gray-100 px-4 py-2 rounded-full w-[220px]">
            <Search size={18} className="text-gray-500" />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none px-2 text-sm w-full"
            />
          </div>

          {isLoggedIn && (
            <p className="text-sm hidden lg:block">Welcome, {username}</p>
          )}

          {!isLoggedIn && (
            <Link to="/login" className="hidden lg:block">
              <Button className="px-5 py-2 bg-teal-500 text-white hover:bg-teal-600">
                Login
              </Button>
            </Link>
          )}

          {isLoggedIn && (
            <Button onClick={logout} className="hidden lg:block">
              Logout
            </Button>
          )}

          {/* CART (Desktop only) */}
          <div className="relative hidden lg:block">
            <Link to="/cart">
              <img src={cart_icon} alt="cart" className="w-6" />
            </Link>

            <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
              {getTotalItem()}
            </div>
          </div>

          {/* HAMBURGER MENU (Mobile + Tablet) */}
          <button onClick={() => setMobileOpen(true)} className="lg:hidden">
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* BACKDROP OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>

          <button onClick={() => setMobileOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* MOBILE LINKS */}
        <div className="flex flex-col p-5 gap-5 text-lg">
          <Link to="/" onClick={() => handleMenuClick('shop')}>
            Home
          </Link>

          <Link to="/mens" onClick={() => handleMenuClick('mens')}>
            Mens
          </Link>

          <Link to="/womens" onClick={() => handleMenuClick('womens')}>
            Womens
          </Link>

          <Link to="/kids" onClick={() => handleMenuClick('kids')}>
            Kids
          </Link>

          <Link to="/cart">Cart ({getTotalItem()})</Link>

          {!isLoggedIn && <Link to="/login">Login</Link>}

          {isLoggedIn && (
            <button onClick={logout} className="text-left">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
