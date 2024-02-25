import Header from "./Header"
import Footer from "./Footer"
import TodoContainer from "./TodoContainer"

function TodoApp() {
  return (
    <div className="py-5">
      <Header/>
      <TodoContainer/>
      <Footer/>
    </div>
  )
}

export default TodoApp
