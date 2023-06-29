import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";

const Detail = () => {
  const { id } = useParams();
  const todos = useSelector((state) => state.todos);
  const todo = todos.filter((todo) => todo.id === id)[0];
  const navigate = useNavigate();

  const [cmtWriter, setCmtWriter] = useState("");
  const [cmtBody, setCmtBody] = useState("");
  const [cmtPw, setCmtPw] = useState("");
  const dispatch = useDispatch();

  const comments = useSelector((state) => state.comments);
  const comment = comments.filter((comment) => comment.postId === id);
  console.log("comments: ", comments);

  return (
    <>
      <p>{todo.id}</p>
      <p>{todo.title}</p>
      <p>{todo.body}</p>
      <p>{todo.isDone.toString()}</p>
      <button onClick={() => navigate("/")}>메인페이지로 이동</button>
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            dispatch({
              type: "ADD_COMMENT",
              payload: {
                cmtWriter,
                cmtBody,
                cmtPw,
                postId: todo.id,
              },
            });
          }}
        >
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
              <input type="password" value={cmtPw} onChange={(event) => setCmtPw(event.target.value)} />
            </div>
          </div>
          <button>댓글등록</button>
        </form>
      </div>
      <section>
        {comments
          .filter((comment) => comment.postId === id)
          .map((comment) => {
            return (
              <StCmtBox>
                <p>{comment.cmtWriter}</p>
                <p>{comment.cmtBody}</p>
              </StCmtBox>
            );
          })}
      </section>
    </>
  );
};

export default Detail;
const StCmtBox = styled.div`
border:1px solid black;
padding: 10px;
margin: 10px;
`
