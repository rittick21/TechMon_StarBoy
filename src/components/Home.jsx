import React from 'react'
import "../styles/home.scss"
import vg from "../assets/2.webp"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className="home" id="home">
      <main>
        <h1>
          TECHMON-STARBOY
        </h1>
        <p>We are the best solver to solve any kind of coding and Software related Problms in a easy way and better time complexity.</p>
      </main>
      This is Home
    </div>
    <div className="home2">
      <img src={vg} alt="Graphics"/>
      <div>
        <p>
          We are your one and only solver for those Tech problems which you face right now or every day. We are leading tech company whose aim is to increase the problem solving ability in children.
        </p>
      </div>
    </div>
    <div className="home3" id="about">
      <div>
        <h1>Who we are ?</h1>
        <p>Hi there my name is Rittick Roy. Everyone calls me RK and my friend given name is Yellow flash of Rishra/ Tony Stark of Rishra. I love Tech and Gaming and my best skill is Problem solving. This is my Startup company where I and my team is here to solve your carrier problems and make you a succesful Engineer. Come and join with us to be a Beast Developer.</p>
      </div>
    </div>
    <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{animationDelay: "0.3s"}}>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>

          <div style={{animationDelay: "0.5s"}}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>

          <div style={{animationDelay: "0.7s"}}>
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>

          <div style={{animationDelay: "0.9s"}}>
            <AiFillInstagram/>
            <p>Instragram</p>
          </div>

        </article>
      </div>
    </div>
    </>
  )
}

export default Home
