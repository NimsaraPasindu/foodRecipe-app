import React, { useState } from 'react'
import foodRecipe from '../assets/foodRecipe.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RecipeItems from '../components/RecipeItems'
import { useNavigate } from 'react-router-dom'
import Modal from '../components/Modal'
import InputForm from '../components/InputForm'

export default function Home() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const addRecipe = () => {
        let token = localStorage.getItem("token")
        if (token)
            navigate("/addRecipe")
        else {
            setIsOpen(true)
        }
    }

    return (
        <>
        {/* Hero Section */}
        <section className='min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center px-6 py-12 pt-24'>
            <div className='max-w-7xl mx-auto w-full'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                    {/* Left Content */}
                    <div className='space-y-8 text-center lg:text-left'>
                        <div className='space-y-4'>
                            <h1 className='text-5xl lg:text-6xl font-bold text-gray-800 leading-tight pt-10'>
                                Delicious
                                <span className='text-orange-500 block'>Food Recipes</span>
                            </h1>
                            <div className='w-24 h-1 bg-orange-400 mx-auto lg:mx-0 rounded-full'></div>
                        </div>
                        
                        <p className='text-base text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0'>
                            Discover amazing recipes from around the world. Share your culinary creations 
                            and explore a community of passionate food lovers. From quick weeknight dinners 
                            to elaborate weekend feasts, find your next favorite dish here.
                        </p>
                        
                        <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                            <button 
                                onClick={addRecipe}
                                className='bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2'
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
                                </svg>
                                <span>Share Your Recipe</span>
                            </button>
                            
                            <button className='border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105'>
                                Explore Recipes
                            </button>
                        </div>
                        
                        {/* Stats */}
                        <div className='grid grid-cols-3 gap-8 pt-8 border-t border-gray-200'>
                            <div className='text-center'>
                                <div className='text-2xl font-bold text-orange-500'>1000+</div>
                                <div className='text-sm text-gray-600'>Recipes</div>
                            </div>
                            <div className='text-center'>
                                <div className='text-2xl font-bold text-orange-500'>500+</div>
                                <div className='text-sm text-gray-600'>Chefs</div>
                            </div>
                            <div className='text-center'>
                                <div className='text-2xl font-bold text-orange-500'>50K+</div>
                                <div className='text-sm text-gray-600'>Happy Users</div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Image */}
                    <div className='relative'>
                        <div className='relative z-10 pt-10'>
                            <img 
                                src={foodRecipe} 
                                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                                alt="Delicious Food Recipe"
                            />
                        </div>
                        
                        {/* Decorative Elements */}
                        <div className='absolute -top-6 -right-6 w-24 h-24 bg-orange-200 rounded-full opacity-60 animate-pulse'></div>
                        <div className='absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-200 rounded-full opacity-40 animate-pulse' style={{animationDelay: '1s'}}></div>
                        <div className='absolute top-1/2 -right-12 w-16 h-16 bg-red-200 rounded-full opacity-50 animate-bounce' style={{animationDelay: '2s'}}></div>
                    </div>
                </div>
            </div>
        </section>
        
        
        {/* Modal */}
        {(isOpen) && (
            <Modal onClose={() => setIsOpen(false)}>
                <InputForm setIsOpen={() => setIsOpen(false)} />
            </Modal>
        )}
        
        {/* Recipe Section */}
        <div className='bg-gradient-to-b from-orange-50 to-white py-16 mt-16'>
            <div className='max-w-7xl mx-auto px-6'>
                <div className='text-center mb-12'>
                    <h2 className='text-4xl font-bold text-gray-800 mb-4'>Featured Recipes</h2>
                    <p className='text-gray-600 max-w-2xl mx-auto'>
                        Discover our handpicked collection of delicious recipes that will inspire your next culinary adventure
                    </p>
                    <div className='w-24 h-1 bg-orange-400 mx-auto mt-4 rounded-full'></div>
                </div>
                <RecipeItems />
            </div>
        </div>
    </>
    )
}
