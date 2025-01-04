
import React from "react";
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import AnimatedLetters from "../AnimatedLatters";
import Logo from "./Logo";
const Home = ()=>{
    const [letterClass,setLetterClass] = useState('text-animate')
    const nameArray = ['l','o','b','a','d','n']
    const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r']

    useEffect(()=>{

        return ()=>{

            setTimeout(()=>{
                setLetterClass('text-animate-hover')
            },4000)
        } 

    },[])


    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                   <br></br> 
                   <span className={`${letterClass} _13`}>I</span>
                   <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="logo-title"></img>
                    <AnimatedLetters letterClass={letterClass} 
                        strArray={nameArray}
                        idx={15}
                    />
                    <br></br>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        idx={22}
                    />
                </h1>
                <h2>FrontEnd Developer / Javascript Developer</h2>
                <Link to={'/contact'} className="flat-button"  >CONTACT</Link>
            </div>
            <Logo/>
        </div>
    )
}

export default Home