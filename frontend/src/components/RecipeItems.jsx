import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import foodImg from '../assets/foodRecipe.png'
import { BsStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from 'axios';

export default function RecipeItems() {
    const recipes = useLoaderData()
    const [allRecipes, setAllRecipes] = useState()
    let path = window.location.pathname === "/myRecipe" ? true : false
    let favItems = JSON.parse(localStorage.getItem("fav")) ?? []
    const [isFavRecipe, setIsFavRecipe] = useState(false)
    const navigate=useNavigate()
    console.log(allRecipes)

    useEffect(() => {
        setAllRecipes(recipes)
    }, [recipes])

    const onDelete = async (id) => {
        await axios.delete(`http://localhost:5000/recipe/${id}`)
            .then((res) => console.log(res))
        setAllRecipes(recipes => recipes.filter(recipe => recipe._id !== id))
        let filterItem = favItems.filter(recipe => recipe._id !== id)
        localStorage.setItem("fav", JSON.stringify(filterItem))
    }

    const favRecipe = (item) => {
        let filterItem = favItems.filter(recipe => recipe._id !== item._id)
        favItems = favItems.filter(recipe => recipe._id === item._id).length === 0 ? [...favItems, item] : filterItem
        localStorage.setItem("fav", JSON.stringify(favItems))
        setIsFavRecipe(pre => !pre)
    }

    return (
        <>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
            {
                allRecipes?.map((item, index) => {
                    return (
                        <div 
                            key={index} 
                            className='bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100'
                            onDoubleClick={()=>navigate(`/recipe/${item._id}`)}
                        >
                            <div className='relative overflow-hidden'>
                                <img 
                                    src={`http://localhost:5000/images/${item.coverImage}`} 
                                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                                    alt={item.title}
                                />
                                <div className='absolute top-3 right-3 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-2 shadow-md'>
                                    {(!path) ? 
                                        <FaHeart 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                favRecipe(item);
                                            }}
                                            className={`text-lg cursor-pointer transition-colors duration-200 ${
                                                favItems.some(res => res._id === item._id) 
                                                    ? 'text-red-500 hover:text-red-600' 
                                                    : 'text-gray-400 hover:text-red-400'
                                            }`}
                                        /> :
                                        <div className='flex space-x-2'>
                                            <Link 
                                                to={`/editRecipe/${item._id}`} 
                                                className="text-blue-500 hover:text-blue-600 transition-colors duration-200"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <FaEdit className="text-lg" />
                                            </Link>
                                            <MdDelete 
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    onDelete(item._id);
                                                }} 
                                                className='text-red-500 hover:text-red-600 cursor-pointer transition-colors duration-200 text-lg' 
                                            />
                                        </div>
                                    }
                                </div>
                            </div>
                            
                            <div className='p-4'>
                                <h3 className='font-bold text-lg text-gray-800 mb-3 line-clamp-2 hover:text-orange-500 transition-colors duration-200'>
                                    {item.title}
                                </h3>
                                
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center space-x-2 text-gray-600'>
                                        <BsStopwatchFill className='text-orange-400' />
                                        <span className='text-sm font-medium'>{item.time}</span>
                                    </div>
                                    
                                    <div className='flex items-center space-x-1'>
                                        <div className='flex text-yellow-400'>
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                                </svg>
                                            ))}
                                        </div>
                                        <span className='text-xs text-gray-500 ml-1'>(4.8)</span>
                                    </div>
                                </div>
                                
                                <div className='mt-3 pt-3 border-t border-gray-100'>
                                    <div className='flex items-center justify-between text-xs text-gray-500'>
                                        <span className='flex items-center space-x-1'>
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                                            </svg>
                                            <span>Chef John</span>
                                        </span>
                                        <span className='bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium'>
                                            Easy
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </>
    )
}
