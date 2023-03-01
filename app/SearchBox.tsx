"use client";
import { useRouter } from 'next/navigation';
import React, { FormEvent } from 'react'
import { useState } from 'react'

function SearchBox() {

    const [input, setInput ] = useState("");
    const router = useRouter();

    const HandleSearch = (e :  FormEvent<HTMLFormElement> )=>{
        e.preventDefault();
        if(!input) return;
        
        router.push(`/search?terms=${input}`)
    }

  return (
    <form 
    onSubmit={ HandleSearch}
    className='max-w-6xl mx-auto flex justify-between items-center px-5'>
        <input className='w-full h-14 rounded-sm flex-1 placeholder-grey-500 text-grey-500 outline-none bg-transparent 
        dark:text-orange-400' 
        type="text" 
        placeholder='Search keywords...'
        value={input}
        onChange={(e) => setInput(e.target.value) } />
        <button type='submit' disabled={!input} className="text-orange-400 disabled:text-gray-400">
            Search
        </button>
    </form>
  )
}

export default SearchBox