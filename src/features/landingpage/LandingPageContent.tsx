import { FaArrowDown } from 'react-icons/fa'
import { SubmitButton } from '../../components/buttons/SubmitButton'

export function LandingPageContent() {
  return (
    <div className="relative flex max-w-[500px] flex-col gap-10 pb-5">
      <header className="flex flex-col lg:gap-2">
        <h1 className="text-center font-bowlbyonesc text-5xl text-white lg:text-start">
          Find your game companion
        </h1>
        <h3 className="text-center font-bowlbyonesc text-2xl text-white lg:text-start">
          Match. Connect. <span className="text-layout-pink">Play.</span>
        </h3>
        <p className="before-line relative ml-10 mt-5 text-white">
          Create account, set profile and find your best gaming partner.
          APLIKACJA allows you to connect and meet with 10000 people around
          world, so what are you waiting for?
        </p>
      </header>
      <SubmitButton text="Login" dark={false} />
      <p className="mt-10 flex select-none items-center justify-center gap-2 text-neutral-400 lg:justify-start">
        More content below <FaArrowDown />
      </p>
    </div>
  )
}
