import React, { useState,useEffect, useRef } from "react";
import './index.scss'
import AnimatedLetters from '../AnimatedLatters'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = ()=>{
    const [letterClass,setLetterClass] = useState('text-animate')
    const form  = useRef()
    
        useEffect(() => {
            return ()=>{
                setTimeout(() => {
                  setLetterClass('text-animate-hover')
                }, 3000)
            }
            
          }, [])

          const sendEmail = (e) => {
            e.preventDefault()
        
            emailjs
              . sendForm('service_5tfpj94', 'template_r1ol48j', form.current, 'nVPaP4Ih87Jsye1fA') 
              .then(
                () => {
                  alert('Message successfully sent!')
                  window.location.reload(false)
                },
                () => {
                  alert('Failed to send the message, please try again')
                }
              )
          }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ','M','e']}
                        idx={15}
                        
                        />
                    </h1>
                    <p>
                        I'm a very ambitious front-end developer looking for a role in an
                        established IT company with the opportunity to work with the latest
                        technologies on challenging and diverse projects.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                <input
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    required
                                />
                                </li>
                                <li>
                                <input
                                    placeholder="Subject"
                                    type="text"
                                    name="subject"
                                    required
                                />
                                </li>
                                <li>
                                <textarea
                                    placeholder="Message"
                                    name="message"
                                    required
                                ></textarea>
                                </li>
                                <li>
                                <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

                <div className="info-map">
                    Rahul S,
                    <br />
                    India,
                    <br />
                    Bangalore <br />
                    Karnataka <br />
                    <br />
                    <span>freelancerslobodan@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[12.9480839, 77.7090175]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[12.9480839, 77.7090175]}>
                        <Popup>Rahul lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>

            </div>
        </>
    )
}

export default Contact