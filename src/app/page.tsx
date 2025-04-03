import Hero from "./components/FrontPage"
import WearYourStory from "./components/Vision"
import FeatureCarousel from "./components/Mentor"
import PortfolioGrid from "./components/Event"
import Timeline from "./components/Timeline"
import Marquee from "./components/Core"
import HQVisitsPage from "./components/HQvisit"


export default function Home() {
  return (
    <>
      <Hero />
      <WearYourStory />
      <FeatureCarousel />
      <PortfolioGrid />
      <Timeline/>
      <Marquee />
      <HQVisitsPage/>
    </>
  )
}

