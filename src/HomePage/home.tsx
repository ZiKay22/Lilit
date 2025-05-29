
import React from 'react'
import { Header } from '../Header/header'
import { Hero } from '../HeroBlock/hero'
import { Xaliner } from '../Xaliner/xaliner'
import { Acs } from '../topaccss/acs'
import { AboutUS } from '../AbouUS/aboutus'
import { Footer } from '../Footer/footer'
import { Tops } from '../top3/tops'

export function Home() {

  return (
    <>
      <Hero/>
      <Tops/>
      <Xaliner/>
      <Acs/>
      <AboutUS/>
    </>
  )
}