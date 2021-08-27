import React from "react";
import { Link } from "react-router-dom";
import { itemProducts } from "./data/data";

const Products = () => {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 font-body">
        <h1 className="text-center pb-10 text-3xl lg:text-5xl font-bold text-slate">
          Products
        </h1>
        <div className="grid gap-8 row-gap-5 md:grid-cols-2">
          {itemProducts.map((item) => {
            return (
              <Link key={item.id} to={item.page}>
                <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 hover:shadow-xl">
                  <div className="relative flex flex-col h-full p-5 bg-slate rounded-sm lg:items-center lg:flex-row">
                    <div className="mb-6 mr-6 lg:mb-0">
                      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-softGold lg:w-32 lg:h-32">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={32}
                          height={32}
                          fill="currentColor"
                          className="bi bi-hexagon"
                          viewBox="0 0 16 16"
                        >
                          <path d="M14 4.577v6.846L8 15l-6-3.577V4.577L8 1l6 3.577zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z" />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={32}
                          height={32}
                          fill="currentColor"
                          className="bi bi-hexagon"
                          viewBox="0 0 16 16"
                        >
                          <path d="M14 4.577v6.846L8 15l-6-3.577V4.577L8 1l6 3.577zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between flex-grow">
                      <div>
                        <h6 className="mb-2 font-semibold leading-5 text-softGold">
                          {item.title}
                        </h6>
                        <p className="mb-2 text-sm text-softGold">
                          {item.text}
                        </p>
                      </div>
                      <span
                        href="/"
                        aria-label=""
                        className="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-softGold"
                      >
                        Learn more
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
