import React, { Suspense, useState } from 'react'
import {useDispatch} from 'react-redux'
import {setQuery} from '../redux/features/searchSlice'

const SearchBar = () => {

  const [text, settext] = useState('')

  const dispatch=useDispatch()

  const submithandler=(e)=>{
    e.preventDefault()
    console.log(text);

    dispatch(setQuery(text))

    settext('')
    
  }
  return (
    <div>
      <form onClick={(e)=>{submithandler(e)}} className='flex bg-gray-800 gap-5 p-10'>
        <input required value={text} onChange={(e)=>{
          settext(e.target.value)
          // console.log(e.target.value);
          
        }} className='w-full border-2 px-4 py-2 text-xl rounded outline-none' type="text"  placeholder='Search anything...' />
        <button className='active:scale-95 cursor-pointer border-2 px-4 py-2 text-xl rounded outline-none'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
