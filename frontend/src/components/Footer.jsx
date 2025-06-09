import React from 'react'
import { FaHeart } from 'react-icons/fa';


export default function Footer() {
  return (
   

<footer class="bg-gray-900 text-gray-200">
  <div class="max-w-7xl mx-auto px-6 py-12">
    <div class="flex flex-col items-center space-y-4">
      <svg class="h-10 w-auto text-orange-500" fill="currentColor" viewBox="0 0 24 24">
        <title>Food Blog</title>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10
                 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-2.83-.47-5.08-2.72-5.55-5.55H5v-2h1.45c.47-2.83 2.72-5.08
                 5.55-5.55V5h2v1.45c2.83.47 5.08 2.72 5.55 5.55H19v2h-1.45c-.47 2.83-2.72 5.08-5.55
                 5.55V19h-2v-1.07z" />
      </svg>
      <span class="text-xl font-semibold text-orange-400">TastyBites Blog</span>
    </div>

    <nav class="mt-8 flex justify-center space-x-6 text-sm">
      <a href="#" class="hover:text-orange-400 transition">Home</a>
      <a href="#" class="hover:text-orange-400 transition">Recipes</a>
      <a href="#" class="hover:text-orange-400 transition">Contact</a>
      <a href="#" class="hover:text-orange-400 transition">Privacy Policy</a>
    </nav>

    <div class="mt-6 flex justify-center space-x-5">
      <a href="#" class="text-gray-400 hover:text-orange-400 transition" aria-label="Twitter">
        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48
                   4.48 0 0 0 22.43.36a9.09 9.09 0 0 1-2.88
                   1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52
                   2.02-4.52 4.51 0 .35.04.7.1 1.03A12.94
                   12.94 0 0 1 1.64.89a4.48 4.48 0 0 0-.61
                   2.27c0 1.57.8 2.96 2.01 3.77A4.53 4.53 0
                   0 1 .96 6v.06c0 2.2 1.56 4.04 3.64
                   4.45a4.52 4.52 0 0 1-2.05.08c.58 1.8
                   2.26 3.11 4.25 3.15a9.05 9.05 0 0
                   1-5.6 1.93c-.36 0-.71-.02-1.06-.06a12.84
                   12.84 0 0 0 6.95 2.04c8.34 0 12.9-6.91
                   12.9-12.9 0-.2 0-.4-.01-.6A9.22 9.22 0 0
                   0 23 3z"/>
        </svg>
      </a>
      <a href="#" class="text-gray-400 hover:text-orange-400 transition" aria-label="Instagram">
        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75
                   5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0
                   22 16.25v-8.5A5.75 5.75 0 0 0 16.25
                   2h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0
                   1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.25-.88a1.12
                   1.12 0 1 1 0 2.24 1.12 1.12 0 0 1 0-2.24z"/>
        </svg>
      </a>
      <a href="#" class="text-gray-400 hover:text-orange-400 transition" aria-label="Facebook">
        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2
                   1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1
                   0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10
                   10 0 0 0 22 12z"/>
        </svg>
      </a>
    </div>

    <p class="mt-6 text-center text-xs text-gray-500">
      © 2025 TastyBites. All rights reserved.
    </p>
  </div>
</footer>




  )
}