import { useEffect, useState } from 'react'

export const useHeaderLandingPage = () => {
  const [showmenu, setShowmenu] = useState(false)
  const [scrollDown, setScrollDown] = useState(false)
  const [bgcolor, setBgcolor] = useState('rgba(0,0,0,0)')

  const hiddenToggle = () => {
    setShowmenu((prev) => !prev)
  }

  const listenScrollEvent = () => {
    if (window.scrollY === 0) {
      return setBgcolor('rgba(0,0,0,0)')
    }
    return setBgcolor('rgba(0,0,0,1)')
  }

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const updateScrollDown = () => {
      const scrollY = window.pageYOffset
      const direction = scrollY > lastScrollY
      if (
        direction !== scrollDown &&
        (scrollY - lastScrollY > 1 || scrollY - lastScrollY < -1)
      ) {
        setScrollDown(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
    }
    window.addEventListener('scroll', updateScrollDown)
    window.addEventListener('scroll', listenScrollEvent)

    return () => {
      window.removeEventListener('scroll', listenScrollEvent)
      window.addEventListener('scroll', updateScrollDown)
    }
  }, [scrollDown])

  return { scrollDown, bgcolor, showmenu, hiddenToggle }
}
