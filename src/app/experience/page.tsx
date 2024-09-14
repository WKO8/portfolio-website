"use client"

import { useRouter } from 'next/navigation'
import Typewriter from "typewriter-effect";

import "./styles.css";

export default function ExperiencePage() {
  const router = useRouter()


  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-8 overflow-hidden font-body">
      <div className="glitch-title mt-14 text-6xl" title="W_K.O">
        W_K.O
      </div>
      
      <div className="main-info max-w-lg">
        <div className="personal-info text-light-grey text-justify">
          <div className="about-me">
            <span>
              I&apos;m a Brazilian developer passionate about technology and
              innovation, always building something
              <span id="typewriter" className="typewriter text-hacker-green">
                <Typewriter
                  options={{ 
                    strings: [
                      "innovative",
                      "dynamic",
                      "unique",
                      "inspiring",
                      "remarkable"
                    ],
                    wrapperClassName: "inline-flex",
                    autoStart: true, 
                    loop: true}}
                />
              </span>
            </span>
          </div>

          <div className="current-job mt-8">
            <p>Currently looking for a job in software or web development.</p>
          </div>
        </div>

        <div className="experience flex flex-col mt-20">
          <span className="text-mid-grey text-md">0.5 year of</span>
          <h3 className="half-underline text-light-grey text-xl">Experience</h3>
          <div className="job-local-time flex flex-row justify-between px-2 mt-5">
            <h2 className="text-xl text-start">Software Developer <br/>Internship</h2>
            <div className="job-time text-end">
              <h3 className="text-lg">Mestria</h3>
              <h4 className="text-sm">Fev/24 - Jul/24</h4>
            </div>
          </div>
          
        </div>
      </div>


      <div className="next-scroll flex items-center flex-col justify-center gap-2 text-mid-grey" onClick={() => router.push('/projects')}>
        <span>Projects</span>
        <div className="button-next w-14 h-14 rounded-full bg-dark-grey flex items-center justify-center">
          <div className="triangle-next w-0 h-0 border-l-[0.8rem] border-l-transparent border-t-[1rem] border-t-black border-r-[0.8rem] border-r-transparent"></div>
        </div>
      </div>
    </div>
  )
} 