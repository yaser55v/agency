import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AdjustmentsIcon, SearchIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { LogoutIcon } from "@heroicons/react/solid";
import { sidebarItems } from "./data/data";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden font-body"
          onClose={setOpen}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-softGold hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-softGold"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-full flex flex-col py-6 bg-slate shadow-xl overflow-y-scroll">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-2xl font-medium text-softGold text-center my-4">
                        My Panel
                      </Dialog.Title>
                    </div>
                    <div className=" relative flex-1 px-4 sm:px-6">
                      <div>
                        <div className="relative mt-6">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <SearchIcon className="w-5 h-5 text-gray-400" />
                          </span>
                          <input
                            type="text"
                            className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-softGold focus:outline-none focus:ring-softGold"
                            placeholder="Search"
                          />
                        </div>
                        <div className="flex flex-col justify-between flex-1 mt-6">
                          <nav>
                            {sidebarItems.map((item) => {
                              return (
                                <Link
                                  to="/"
                                  key={item.id}
                                  className="flex items-center px-4 py-0 my-8 text-softGold rounded-md hover:bg-softGold hover:text-slate transition-all"
                                >
                                  <item.icon className="w-6 h-6" />
                                  <span className="mx-4 font-medium">
                                    {item.name}
                                  </span>
                                  <hr className="my-6 border-gray-100 " />
                                </Link>
                              );
                            })}
                          </nav>
                          <hr className="mb-3" />
                          <div className="flex items-center px-4 justify-between ">
                            <div className="flex items-center cursor-pointer">
                              <img
                                className="object-cover mx-2 rounded-full h-9 w-9"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="avatar"
                              />
                              <h4 className="mx-2 font-medium text-softGold hover:underline mr-12">
                                John Doe
                              </h4>
                            </div>
                            <div className="flex font-medium items-center cursor-pointer p-2 text-softGold rounded-md hover:bg-softGold hover:text-slate transition-all">
                              <span className="mr-1">Logout</span>
                              <LogoutIcon className="w-6 h-6 " />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <button
        type="button"
        className="float-right py-4 px-16 m-12 hidden lg:flex  text-2xl bg-slate rounded-md text-softGold hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-softGold"
        onClick={() => setOpen(true)}
      >
        <AdjustmentsIcon className="w-7 inline-block mr-2" />
      </button>
    </>
  );
};

export default Sidebar;
