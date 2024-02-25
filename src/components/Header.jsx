// This component is called inside the "TodoApp" component
function Header() {
  return (
    <div className="bg-violet-300 shadow-black shadow-sm text-center w-[90%] md:w-1/4 m-auto p-5 rounded-md md: mb-10">
      <h1 className="font-bold text-2xl md:text-4xl ">Taskify</h1>
      <p className="font-semibold text-sm md:text-lg">Simplify Your Day !!</p>
    </div>
  )
}

export default Header
