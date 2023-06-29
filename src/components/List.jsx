import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const List = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();
  return (
    <>
      <h2>진행중</h2>

      {todos
        .filter((todo) => todo.isDone === false)
        .map((todo) => {
          return (
            <>
              <StTodoBox key={todo.id}>
                <Link to={`/detail/${todo.id}`}>상세보기</Link>
                <p>{todo.id}</p>
                <p>{todo.title}</p>
                <p>{todo.body}</p>
                <p>{todo.isDone.toString()}</p>
                <button
                  onClick={() => {
                    dispatch({
                      type: "DELETE_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  삭제하기
                </button>
                <button
                  onClick={() => {
                    dispatch({
                      type: "SWITCH_TODO",
                      payload: {
                        id: todo.id,
                        isDone: !todo.isDone,
                      },
                    });
                  }}
                >
                  완료하기
                </button>
              </StTodoBox>
            </>
          );
        })}

      <h2>완료</h2>
      <div>
        {todos
          .filter((todo) => todo.isDone === true)
          .map((todo) => {
            return (
              <>
                <StTodoBox key={todo.id}>
                  <Link to={`/detail/${todo.id}`}>상세보기</Link>
                  <p>{todo.id}</p>
                  <p>{todo.title}</p>
                  <p>{todo.body}</p>
                  <p>{todo.isDone.toString()}</p>
                  <button
                    onClick={() => {
                      dispatch({
                        type: "DELETE_TODO",
                        payload: todo.id,
                      });
                    }}
                  >
                    삭제하기
                  </button>
                  <button
                    onClick={() => {
                      dispatch({
                        type: "SWITCH_TODO",
                        payload: {
                          id: todo.id,
                          isDone: !todo.isDone,
                        },
                      });
                    }}
                  >
                    완료하기
                  </button>
                </StTodoBox>
              </>
            );
          })}
      </div>
    </>
  );
};

export default List;

const StTodoBox = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
`;
