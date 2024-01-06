
import { HeroSection } from './pages/hero-section';
import { Techs } from './pages/hero-section/techs';
import { Projects } from './pages/hero-section/techs/projects';


export default async function Home() {

  return (
    <>
    <HeroSection />
    <Techs />
    <Projects />
    </>
  )
}
