export const background = (data: string) => {
  return {
    backgroundImage: `url(${data})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'norepeat',
  }
}
