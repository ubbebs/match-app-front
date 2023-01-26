import { FaArrowRight } from 'react-icons/fa'
import { SubmitButton } from '../../components/buttons/SubmitButton'
import { Navbar } from './components/Navbar'
import { useHeaderLandingPage } from './utils/useHeaderLandingPage'

export function HeaderLandingPage() {
  const { scrollDown, bgcolor, showmenu, hiddenToggle } = useHeaderLandingPage()

  return (
    <div
      className={`fixed ${
        !showmenu && scrollDown ? '-top-[100px]' : 'top-0'
      } left-0 z-50 flex h-[100px] w-screen items-center px-10 transition-all delay-100 duration-700 lg:justify-between lg:px-[120px]`}
      style={{ backgroundColor: bgcolor }}
    >
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
          showmenu ? 'right-0' : 'right-[-300px]'
        } absolute top-0 flex h-screen w-[300px] flex-col-reverse items-start justify-end gap-10 bg-black pl-5 pr-7 pt-[120px] duration-500 lg:static lg:h-auto lg:w-auto lg:flex-row lg:items-center lg:bg-transparent lg:px-0 lg:pt-0 lg:duration-0 xl:gap-[200px]`}
      >
        <Navbar />
        <SubmitButton text="Login" dark={false} />
      </div>
      <button
        className="absolute right-10 flex w-auto items-center justify-end gap-3 text-neutral-100 lg:hidden"
        type="button"
        onClick={hiddenToggle}
      >
        <p>Menu</p>
        <FaArrowRight
          className={`${showmenu ? 'rotate-0' : '-rotate-180'} duration-500`}
        />
      </button>
    </div>
  )
}
