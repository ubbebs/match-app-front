import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { LoginButton } from '../../components/buttons/LoginButton'
import { Navbar } from './components/Navbar'

export function HeaderLandingPage() {
  const [hidden, setHidden] = useState(false)
  return (
    <div className="fixed top-0 left-0 z-50 flex h-[120px] w-screen items-center px-10 lg:justify-between lg:px-[120px]">
      <div className="flex items-center gap-5">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2991/2991606.png"
          alt="logo"
          className="block max-h-20"
        />
        <p className="text-white lg:hidden">MATCH</p>
      </div>
      <div
        className={`${
          hidden ? 'right-0' : 'right-[-300px]'
        } absolute top-0 flex h-screen w-[300px] flex-col-reverse items-start justify-end gap-10 px-5 pt-[100px] backdrop-blur-md duration-500 lg:static lg:h-auto lg:w-auto lg:flex-row lg:items-center lg:px-0 lg:pt-0 lg:backdrop-blur-0 lg:duration-0 xl:gap-[200px]`}
      >
        <Navbar />
        <LoginButton />
      </div>
      <button
        className="absolute right-10 flex w-auto items-center justify-end gap-3 text-neutral-100 lg:hidden"
        type="button"
        onClick={() => setHidden((prev) => !prev)}
      >
        <p>Menu</p>
        <FaArrowRight
          className={`${hidden ? 'rotate-0' : '-rotate-180'} duration-500`}
        />
      </button>
    </div>
  )
}
