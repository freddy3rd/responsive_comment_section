import React, {useState ,useEffect,useRef } from 'react'
import './App.css'
import CommentForm from './components/CommentForm'
import Comment from './components/ActualComment'
function App() {

  return (
    <>
     <div className="grid relative items-center justify-center gap-3 h-screen py-10 px-5">
    <Comment />
     <CommentForm/>
     </div>
    </>
  )
}

export default App
