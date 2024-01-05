"use client"

import '@fortawesome/fontawesome-free/css/all.css';
import { HeroSection } from './pages/hero-section';
import { Techs } from './pages/hero-section/techs';
import { Projects } from './pages/hero-section/techs/projects';
import { WorkExperience } from './pages/work-experience';

export default function Home() {

  return (
    <>
    <HeroSection />
    <Techs />
    <Projects />
    <WorkExperience />
    </>
  )
}
