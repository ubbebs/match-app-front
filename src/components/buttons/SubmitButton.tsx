import { Link } from 'react-router-dom'

type SubmitButtonType = {
  text: string
  dark: boolean
}

export function SubmitButton({ text, dark }: SubmitButtonType) {
  return (
    <Link to="/login" className="w-full">
      <button
        type="button"
        className={`${
          dark
            ? 'border-none bg-layout-pink'
            : 'border-neutral-400 bg-transparent'
        } w-full rounded-2xl border-1 border-solid px-10 py-2 text-sm font-semibold text-neutral-100 duration-500 hover:border-opacity-0 hover:bg-layout-pink hover:text-neutral-100 hover:shadow-button-glow lg:w-full`}
      >
        {text}
      </button>
    </Link>
  )
}
