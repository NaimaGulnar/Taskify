import Header from "./Header"
import Footer from "./Footer"
import TodoContainer from "./TodoContainer"

// This component is called inside the "App" component
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
