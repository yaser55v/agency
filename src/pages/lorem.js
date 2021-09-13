import React, { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import FormData from "../components/Todo/FormData";
import TodosList from "../components/Todo/TodosList";
import BarChart from "../components/Chart/BarChart";
import LineChart from "../components/Chart/LineChart";
import Sidebar from "../components/Sidebar";
import { MailIcon, SearchIcon } from "@heroicons/react/solid";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";

const navigation = ["Lorem", "Lorem", "Lorem", "Lorem"];
const profile = ["Your Profile", "Settings", "Sign out"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Lorem = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <div className="font-body bg-gray-100">
        {/* Start Navbar */}
        <Disclosure as="nav" className="bg-slate text-softGold">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Link to="/">
                        <h2 className="font-bold text-4xl ">LOREM</h2>
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item, itemIdx) =>
                          itemIdx === 0 ? (
                            <Fragment key={item}>
                              <a
                                href="/"
                                className="bg-gray-700 text-softGold px-3 py-2 rounded-md text-sm font-medium"
                              >
                                {item}
                              </a>
                            </Fragment>
                          ) : (
                            <a
                              key={item}
                              href="/"
                              className="text-softGold hover:bg-gray-700 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium"
                            >
                              {item}
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-3 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="bg-gray-700 p-1 mr-4 rounded-full text-softGold hover:text-softGold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-softGold"
                      >
                        <span className="sr-only">View notifications</span>
                        <MailIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        className="bg-gray-700 p-1 rounded-full text-softGold hover:text-softGold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-softGold"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                            {profile.map((item) => (
                              <Menu.Item key={item}>
                                {({ active }) => (
                                  <a
                                    href="/"
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {item}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-softGold inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item, itemIdx) =>
                    itemIdx === 0 ? (
                      <Fragment key={item}>
                        <a
                          href="/"
                          className="bg-gray-900 text-softGold block px-3 py-2 rounded-md text-base font-medium"
                        >
                          {item}
                        </a>
                      </Fragment>
                    ) : (
                      <a
                        key={item}
                        href="/"
                        className="text-softGold hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >
                        {item}
                      </a>
                    )
                  )}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-softGold">
                        Tom Cook
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        tom@example.com
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-softGold hover:text-softGold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-softGold"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    {profile.map((item) => (
                      <a
                        key={item}
                        href="/"
                        className="block px-3 py-2 rounded-md text-base font-medium text-softGold hover:text-white hover:bg-gray-700"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        {/* End Navbar */}

        {/* Start Header */}
        <header className="bg-slateLight shadow flex items-center justify-around py-7">
          <div className="">
            <h1 className="text-3xl font-bold text-softGoldDark">Lorem</h1>
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon className="w-5 h-5 text-gray-400" />
            </span>
            <input
              type="text"
              className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-800 rounded-md focus:border-softGold focus:outline-none focus:ring-softGold"
              placeholder="Search"
            />
          </div>
        </header>
        {/* End Header */}

        {/* Start Main */}
        <Sidebar />
        <main>
          <div className="max-w-full mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <section className="text-gray-600 body-font">
                <div className="px-5 mx-auto">
                  <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/2 w-full">
                      <div className="h-full bg-gray-100 p-8 rounded">
                        <div className="">
                          <FormData
                            input={input}
                            setInput={setInput}
                            todos={todos}
                            setTodos={setTodos}
                            editTodo={editTodo}
                            setEditTodo={setEditTodo}
                          />
                          <div className="">
                            <TodosList
                              todos={todos}
                              setTodos={setTodos}
                              setEditTodo={setEditTodo}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 md:w-1/2 w-full">
                      <div className="h-full bg-gray-100 p-8 rounded">
                        <BarChart />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center -m-4">
                    <div className="py-4 md:w-1/2 w-full">
                      <div className="h-full bg-gray-100 p-8 rounded">
                        <LineChart />
                      </div>
                    </div>
                    <div className="py-4 md:w-1/2 w-full">
                      <div className="h-full bg-gray-100 p-8 rounded">
                        <CalendarComponent className="max-w-full"></CalendarComponent>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
        {/* End Mune */}
      </div>
    </>
  );
};

export default Lorem;
