import React, { useState } from 'react'
import axios from 'axios'

export default function InputForm({setIsOpen}) {
   const [email,setEmail]=useState("")
   const [password,setPassword]=useState("")
   const [isSignUp,setIsSignUp]=useState(false) 
   const [error,setError]=useState("")

  const handleOnSubmit=async(e)=>{
    e.preventDefault()
    let endpoint=(isSignUp) ? "signUp" : "login"
    await axios.post(`http://130.131.156.165:5000/api/${endpoint}`,{email,password})
    .then((res)=>{
        localStorage.setItem("token",res.data.token)
        localStorage.setItem("user",JSON.stringify(res.data.user))
        setIsOpen()
    })
    .catch(data=>setError(data.response?.data?.error))
  }

  return (
   <>
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
            <form className='w-full max-w-md bg-white p-8 rounded-lg shadow-lg border border-gray-200' onSubmit={handleOnSubmit}>
            <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>
                {(isSignUp) ? "Create Account" : "Welcome Back"}
            </h2>
            
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-medium mb-2'>Email</label>
                <input 
                    type="email" 
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition duration-200' 
                    onChange={(e)=>setEmail(e.target.value)} 
                    required
                    placeholder="Enter your email"
                />
            </div>
            
            <div className='mb-6'>
                <label className='block text-gray-700 text-sm font-medium mb-2'>Password</label>
                <input 
                    type="password" 
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition duration-200' 
                    onChange={(e)=>setPassword(e.target.value)} 
                    required
                    placeholder="Enter your password"
                />
            </div>
            
            <button 
                type='submit'
                className='w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2'
            >
                {(isSignUp) ? "Create Account" : "Sign In"}
            </button>
            
            {(error != "") && (
                <div className='mt-4 p-3 bg-red-50 border border-red-200 rounded-lg'>
                    <p className='text-red-600 text-sm text-center'>{error}</p>
                </div>
            )}
            
            <div className='mt-6 text-center'>
                <p 
                    onClick={()=>setIsSignUp(pre=>!pre)}
                    className='text-orange-400 hover:text-orange-500 cursor-pointer text-sm font-medium transition duration-200'
                >
                    {(isSignUp) ? "Already have an account? Sign in" : "Don't have an account? Create one"}
                </p>
            </div>
        </form>
        </div>
    </>
  )
}
