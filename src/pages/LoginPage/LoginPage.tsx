import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SubmitButton } from '../../components/buttons/SubmitButton'
import { ErrorMessage } from '../../components/text/ErrorMessage'

export function LoginPage() {
  const [error, setError] = useState(true)
  const navigate = useNavigate()
  const redirectBack = () => {
    navigate(-1)
  }
  return (
    <div
      className="fixed top-0 left-0 flex h-screen w-screen items-center justify-center bg-black/50"
      onClick={redirectBack}
      aria-hidden="true"
    >
      <main
        className="min-w-[500px] rounded-2xl bg-white p-10"
        onClick={(e) => e.stopPropagation()}
        aria-hidden="true"
      >
        <h1 className="mb-6 text-center text-3xl font-bold">Login</h1>
        <form className="mb-6 flex flex-col gap-6">
          <label htmlFor="email" className="flex flex-col gap-2">
            <span className="font-semibold">Email</span>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="rounded-md bg-neutral-100 p-3 focus:outline-none"
            />
          </label>
          <label htmlFor="password" className="flex flex-col gap-2">
            <span className="font-semibold">Password</span>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="rounded-md bg-neutral-100 p-3 focus:outline-none"
            />
            <Link to="/process" className="text-end text-sm">
              Dont remember password?
            </Link>
          </label>
          <SubmitButton text="Login" dark />
        </form>
        {error && <ErrorMessage text="Invalid email or password" />}
        <div className="mt-6 flex flex-col">
          <Link to="/signup" className="text-center">
            No account? Register here
          </Link>
        </div>
      </main>
    </div>
  )
}
