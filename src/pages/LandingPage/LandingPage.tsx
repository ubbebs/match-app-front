import { HeaderLandingPage } from '../../features/headers/HeaderLandingPage'
import { LandingPageBackgroundImage } from '../../layouts/landingpage/LandingPageBackgroundImage'
import { LandingPageContent } from '../../features/landingpage/LandingPageContent'
import { background } from '../../utils/background'
import blurbg from '../../assets/blurbg.png'

export function LandingPage() {
  return (
    <div className="min-h-screen w-screen bg-layout-dark text-gray-700">
      <HeaderLandingPage />
      <section
        id="1"
        className="relative flex h-screen w-full items-center justify-center"
        style={background(blurbg)}
      >
        <div className="relative flex h-[559px] w-full max-w-[1300px] items-end px-10">
          <LandingPageBackgroundImage />
          <LandingPageContent />
        </div>
      </section>
    </div>
  )
}
