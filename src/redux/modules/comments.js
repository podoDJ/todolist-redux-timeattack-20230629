const comments = (state=[], action) => {
  switch(action.type) {
    case "ADD_COMMENT":
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

export default comments