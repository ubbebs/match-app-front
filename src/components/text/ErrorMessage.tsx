type ErrorMessageType = {
  text: string
}

export function ErrorMessage({ text }: ErrorMessageType) {
  return <p className="text-center font-semibold text-layout-pink">{text}</p>
}
