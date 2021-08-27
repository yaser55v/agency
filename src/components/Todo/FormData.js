import React, { useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import toast, { Toaster } from "react-hot-toast"
const FormData = ({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}) => {
  const updateTodo = (title, id, completed) => {
    const newtodo = todos.map(todo =>
      todo.id === id ? { title, id, completed } : todo
    )
    setTodos(newtodo)
    setEditTodo("")
  }
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title)
    } else {
      setInput("")
    }
  }, [setInput, editTodo])
  const onInputChange = e => {
    setInput(e.target.value)
  }
  const onFormSubmit = e => {
    e.preventDefault()
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }])
      setInput("")
    } else {
      updateTodo(input, editTodo.id, editTodo.completed)
    }
  }
  const addNotification = () => toast.success("Successfully Add")
  return (
    <>
      <div className="">
        <form onSubmit={onFormSubmit}>
          <div className="flex flex-row overflow-hidden rounded-lg border mb-4 focus:border-softGold">
            <input
              className="px-6 py-2 w-full text-gray-700 rounded-lg rounded-r-none placeholder-gray-500 bg-white outline-none focus:placeholder-transparent focus:ring-softGold focus:border-softGold focus:z-10"
              type="text"
              name="mission"
              placeholder="Enter your mission"
              aria-label="Enter your mission"
              value={input}
              required
              onChange={onInputChange}
            />
            <button
              onClick={addNotification}
              className="px-6 py-3 text-sm font-bold tracking-wider text-softGold uppercase transition-colors duration-200 transform bg-slate hover:bg-gray-600"
            >
              {editTodo ? "Ok" : "Add"}
            </button>
            <Toaster
              position="bottom-right"
              reverseOrder={false}
              
            />
          </div>
        </form>

        {/* <form onSubmit={onFormSubmit}>
          <input
            id="email"
            type="text"
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            placeholder="Email Address"
            value={input}
            required
            onChange={onInputChange}
          />

          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-700 rounded-md sm:mx-2 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            onClick={notify}
          >
            {editTodo ? "Ok" : "Add"}
          </button>
          <Toaster
            position="bottom-right"
            reverseOrder={false}
            toastOptions={{
              className: "",
              style: {
                border: "1px solid #713200",
                padding: "16px",
                color: "#713200",
              },
            }}
          />
        </form> */}
      </div>
    </>
  )
}

export default FormData
