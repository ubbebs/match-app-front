import { Outlet } from 'react-router-dom'
import { HeaderLandingPage } from '../../features/headers/HeaderLandingPage'
import { LandingPageBackgroundImage } from '../../layouts/landingpage/LandingPageBackgroundImage'
import { LandingPageContent } from '../../features/landingpage/LandingPageContent'
import { background } from '../../utils/background'
import blurbg from '../../assets/blurbg.png'

export function LandingPage() {
  return (
    <>
      <div className="min-h-screen w-screen bg-layout-dark text-gray-700">
        <HeaderLandingPage />
        <main
          className="fixed flex h-screen w-full items-center justify-center"
          style={background(blurbg)}
        >
          <div className="relative flex h-[559px] w-full max-w-[1300px] items-end justify-center px-10 lg:justify-start">
            <LandingPageBackgroundImage />
            <LandingPageContent />
          </div>
        </main>
        <section className="absolute top-full flex min-h-screen w-full bg-white">
          <article>
            <p>Siema</p>
          </article>
        </section>
      </div>
      <Outlet />
    </>
  )
}
