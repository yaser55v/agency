import React from "react"
import { LockClosedIcon } from "@heroicons/react/solid"
import { Link } from "react-router-dom"
const SignIn = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-slate font-body py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold text-softGold">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-yellow-400">
              Or{" "}
              <a
                href="/"
                className="font-medium text-softGold hover:text-yellow-400"
              >
                start your 14-day free trial
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-softGold focus:border-softGold focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-softGold focus:border-softGold focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-yellow-400 focus:ring-softGold  border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-softGold "
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="/"
                  className="font-medium text-gray-300 hover:text-gray-400"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <Link
                to="/anyara"
                type="submit"
                className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-bold rounded-md text-slate bg-softGold opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5  text-slate group-hover:text-gray-700"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignIn
