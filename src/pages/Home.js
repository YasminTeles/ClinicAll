import React from "react"

import Content from "../components/content/Content"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"

import "./Home.scss"

function Home() {
  return (
    <div className="Home">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default Home
