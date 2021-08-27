import React from "react"
import { CheckIcon, PencilAltIcon, XCircleIcon } from "@heroicons/react/outline"
import toast, { Toaster } from "react-hot-toast"

const TodosList = ({ todos, setTodos, setEditTodo }) => {
  const handleCheck = todo => {
    setTodos(
      todos.map(item => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed }
        }
        return item
      })
    )
  }
  const handleEdit = ({ id }) => {
    const findTodo = todos.find(todo => todo.id === id)
    setEditTodo(findTodo)
  }
  const handleDelete = ({ id }) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
 
  const deleteNotify = () => toast.error("Successfully Delete")
  return (
    <div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 table-auto">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      mission
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider text-right"
                    >
                      status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {todos.map(todo => (
                    <tr key={todo.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {todo.title}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap flex justify-end">
                        <span className="text-green-500 hover:text-green-900 cursor-pointer">
                          <CheckIcon
                            className="w-6 mr-4"
                            onClick={() => handleCheck(todo)}
                          />
                        </span>
                        <span className="text-red-400 hover:text-red-800 cursor-pointer">
                          <XCircleIcon
                            className="w-6 mr-4"
                            onClick={() => {
                              handleDelete(todo)
                              deleteNotify()
                            }}
                          />
                        </span>
                        <Toaster position="bottom-right" reverseOrder={false} />
                        <span className="text-yellow-400 hover:text-yellow-600 cursor-pointer">
                          <PencilAltIcon
                            className="w-6"
                            onClick={() => handleEdit(todo)}
                          />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodosList
