import background from '../../assets/12345.png'

export function LandingPageBackgroundImage() {
  return (
    <img
      src={background}
      alt=""
      className="absolute z-0 select-none opacity-20 lg:right-10 lg:opacity-100"
    />
  )
}
