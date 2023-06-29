import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import shortid from 'shortid'

const Form = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const dispatch = useDispatch()
  
  return (
    <>
      <form onSubmit={(event) => {
        event.preventDefault()
        dispatch({
          type: "ADD_TODO",
          payload: {
            id: shortid.generate(),
            title,
            body,
            isDone: false,
          }
        })
      }}>
        <div>
          <label>제목</label>
          <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
          <label>내용</label>
          <input type="text" value={body} onChange={(event) => setBody(event.target.value)}/>
          <button>추가하기</button>
        </div>
      </form>
    </>
  )
}

export default Form