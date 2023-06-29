import shortid from "shortid"

const initialTodos = [
  {
  id: shortid.generate(),
  title: '리액트공부1',
  body: '리액트공부를했니1',
  isDone: false,
},
{
  id: shortid.generate(),
  title: '리액트공부2',
  body: '리액트공부를했니1',
  isDone: false,
},
{
  id: shortid.generate(),
  title: '리액트공부3',
  body: '리액트공부를했니1',
  isDone: false,
},
{
  id: shortid.generate(),
  title: '리액트공부4',
  body: '리액트공부를했니4',
  isDone: false,
},
]

const todos = (state=initialTodos, action) => {
  switch(action.type) {
    case "ADD_TODO":
      return [...state, action.payload ]
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload)
    case "SWITCH_TODO":
      return state.map((todo) => {
        if(todo.id === action.payload.id){
          return {...todo, isDone: action.payload.isDone}
      } else {
        return todo
      }
    })
    default:
      return state
  }
}

export default todos