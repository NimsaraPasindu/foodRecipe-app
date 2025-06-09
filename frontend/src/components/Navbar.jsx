import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import InputForm from './InputForm'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isOpen,setIsOpen]=useState(false)
  let token=localStorage.getItem("token")
  const [isLogin,setIsLogin]=useState(token ? false : true)
  let user=JSON.parse(localStorage.getItem("user"))

  useEffect(()=>{
    setIsLogin(token ? false : true)
  },[token])

  const checkLogin=()=>{
    if(token){
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      setIsLogin(true)

    }
    else{
      setIsOpen(true)
    }
  }

  return (
    <>
   <header className="bg-gray-900 text-gray-200 shadow-md">
        <div className="w-full px-6 py-4 flex items-center justify-between pr-12">
          {/* Brand - Left side */}
          <h2 className="text-2xl font-bold text-orange-400">TastyBites</h2>

          {/* Navigation - Right side */}
          <nav>
            <ul className="flex space-x-6 text-sm font-medium whitespace-nowrap">
              <li>
                <NavLink
                  to="/"
                  className="text-orange-400 hover:text-orange-300 transition duration-200"
                >
                  Home
                </NavLink>
              </li>
              <li onClick={() => isLogin && setIsOpen(true)}>
                <NavLink
                  to={!isLogin ? "/myRecipe" : "/"}
                  className="text-orange-400 hover:text-orange-300 transition duration-200"
                >
                  My Recipe
                </NavLink>
              </li>
              <li onClick={() => isLogin && setIsOpen(true)}>
                <NavLink
                  to={!isLogin ? "/favRecipe" : "/"}
                  className="text-orange-400 hover:text-orange-300 transition duration-200"
                >
                  Favourites
                </NavLink>
              </li>
              <li onClick={checkLogin}>
                <p className="cursor-pointer text-orange-400 hover:text-orange-300 transition duration-200">
                  {(isLogin ? "Login" : "Logout")}
                 {/* // {user?.email && (
                    //<span className="text-xs text-gray-400 ml-1">({user.email})</span>
                  //)} */}
                </p>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Modal (for login/register) */}
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <InputForm setIsOpen={() => setIsOpen(false)} />
        </Modal>
      )}

      
    </>
  )
}
