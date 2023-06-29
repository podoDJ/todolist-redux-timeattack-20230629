import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Comments = (todo) => {
  const [cmtWriter, setCmtWriter] = useState("");
  const [cmtBody, setCmtBody] = useState("");
  const [cmtPw, setCmtPw] = useState("");
  const dispatch = useDispatch()
  console.log("todo.id: ",todo.id)
  return (
    <>
      <form onSubmit={(event) => {
        event.preventDefault();
        dispatch({
          type: "ADD_ADD_COMMENT",
          payload: {
          cmtWriter,
          cmtBody,
          cmtPw,
        }
        })
      }}>
        <div>
          <div>
            <label>글쓴이</label>
            <input type="text" value={cmtWriter} onChange={(event) => setCmtWriter(event.target.value)} />
          </div>
          <div>
            <label>내용</label>
            <input type="text" value={cmtBody} onChange={(event) => setCmtBody(event.target.value)} />
          </div>
          <div>
            <label>비밀번호</label>
            <input type="text" value={cmtPw} onChange={(event) => setCmtPw(event.target.value)} />
          </div>
        </div>
        <button>댓글등록</button>
      </form>
    </>
  );
};

export default Comments;
