"use client"
import React from "react"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import Sidebar from "../sideBar"
import * as THREE from "three"

import "./style.css"
// import "./script.js"
import PageTransition from "@/src/utils/effect/PageTransition"
import SlideComponent from "./SlideComponent"

gsap.registerPlugin(ScrollTrigger)

const FatePage = ({}) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const containerRef = React.useRef(null)
  const textRef = React.useRef(null)

  const endRef = React.useRef(null)

  return (
    <>
      <Sidebar />
      <div
        className="w-full overflow-y-auto h-screen relative"
        id="contact-main"
      >
        <div className="h-screen flex content-end flex-col justify-between">
          <SlideComponent />
          <div className="text-9xl max-[1280px]:text-9xl max-[760px]:text-6xl text-left uppercase relative overflow-hidden mb-2 sizingFate">
            <div className="revealText pl-6"> Your Fate </div>
          </div>
        </div>

        <div className="flex flex-col w-full h-[75vh] max-[760px]:h-auto justify-between mb-2">
          <div
            ref={textRef}
            className="flex flex-row max-[760px]:flex-col px-6 justify-between text-2xl mt-20"
          >
            <p className="text_block">
              At the Lyra Haruto Company, we stand at the forefront of a
              revolution, where the art of storytelling melds with the cutting
              edge of technology to create experiences that linger in the heart
              and mind long after the tale is told. Ours is a sanctuary for the
              dreamers, the thinkers, the innovators, and the creators who
              believe in the magic of narratives to alter the fabric of reality
              itself.
            </p>
            <p className="text_block">
              Imagine being part of an odyssey where every project is a canvas
              awaiting your unique brushstroke, where your work does not just
              speak to the audience but sings to their souls, crafting moments
              of joy, reflection, and profound understanding. Here, your passion
              for the arts, your dedication to innovation, and your belief in
              the transformative power of stories will find not just recognition
              but a fervent echo in the hearts of like-minded individuals.
            </p>
            <p className="text_block ">
              The Lyra Haruto Company is not merely a workplace; it is a cradle
              of potential where freedom and creativity are the air we breathe,
              driven by the conviction that every story told is a step toward a
              brighter, more enlightened world. We cherish the rebels, the
              meticulous, the ones who gaze at the stars and dream of painting
              them. In our journey to illuminate the extraordinary in the
              ordinary, your voice is the melody we seek, your vision the light
              that guides us.
            </p>

            <p className="text_block">
              Join us, and together, let us weave tales that transcend time,
              tales that remind us of the beauty of being uniquely human,
              embracing the full spectrum of emotions in our narratives. Let
              your journey with the Lyra Haruto Company be the legacy you choose
              to leave in the annals of storytelling, a testament to the power
              of dreams made manifest.
            </p>
          </div>
          <p className="text_block px-6 pb-4 text-2xl">
            Your path to changing the world through stories begins here. <br />{" "}
            Be not just a part of history, but a creator of it. Welcome to the
            Lyra Haruto Company, where every story is a doorway to a new world.
          </p>
        </div>
        <div className="flex flex-col w-full h-screen max-[760px]:h-auto mt-36 max-[1440px]:mt-64 pb-8 pl-6 text-2xl">
          <h1>Artistic Roles</h1>
          <p>
            Animator:{" "}
            <span className="text_roles">
              Creates animations based on characters, objects and scenes.
            </span>
          </p>
          <p>
            Character Designer:{" "}
            <span className="text_roles">
              Designs characters based on script specifications.
            </span>
          </p>
          <p>
            Storyboard Artist:{" "}
            <span className="text_roles">
              Creates storyboards detailing the sequence of events and camera
              movements.
            </span>
          </p>
          <p>
            Concept Artist:{" "}
            <span className="text_roles">
              Develops visual concepts for characters, environments and objects.
            </span>
          </p>
          <p>
            Background Artist:{" "}
            <span className="text_roles">Draws backgrounds for scenes.</span>
          </p>
          <p>
            Layout Artist:{" "}
            <span className="text_roles">
              Plans the composition of each scene, including character positions
              and camera perspectives.
            </span>
          </p>
          <p>
            Visual Effects Artist:{" "}
            <span className="text_roles">Creates digital special effects.</span>
          </p>
          <p>
            Texture Artist:{" "}
            <span className="text_roles">
              Develops textures for 3D models and environments.
            </span>
          </p>
          <p>
            Colorist:{" "}
            <span className="text_roles">
              Applies color palettes to drawings and animations.
            </span>
          </p>
          <p>
            Matte Painter:{" "}
            <span className="text_roles">
              Creates digital paintings that serve as backdrops.
            </span>
          </p>

          <h1>Technique Roles</h1>
          <p>
            Director:{" "}
            <span className="text_roles">
              Oversees the technical aspects of animation production, solving
              technical problems.
            </span>
          </p>
          <p>
            3D Modeler:{" "}
            <span className="text_roles">
              Creates 3D models for characters, objects and environments.
            </span>
          </p>
          <p>
            Rigging Artist:{" "}
            <span className="text_roles">
              Builds the animation skeleton for 3D models.
            </span>
          </p>
          <p>
            Lighting Artist:{" "}
            <span className="text_roles">
              Manages lighting for scenes, ensuring that lighting enhances mood
              and aesthetics.
            </span>
          </p>
          <p>
            Rendering Artist:{" "}
            <span className="text_roles">
              Converts 3D models into images or image sequences using rendering
              software.
            </span>
          </p>
          <p>
            Crowd Artist:{" "}
            <span className="text_roles">
              Creates realistic digital crowds.
            </span>
          </p>
          <p>
            Compositor:{" "}
            <span className="text_roles">
              Combines visual elements from different sources to create the
              illusion that all these elements are part of the same scene.
            </span>
          </p>
          <p>
            Sound Designer:{" "}
            <span className="text_roles">
              Creates and edits the soundtrack, including sound effects and
              music.
            </span>
          </p>
          <p>
            Editor:{" "}
            <span className="text_roles">
              Assembles the final shots, ensuring that narrative continuity is
              maintained.
            </span>
          </p>

          <h1>Support and Production Roles</h1>
          <p>
            Production Manager:{" "}
            <span className="text_roles">
              Oversees project planning and management to ensure that everything
              is delivered on time.
            </span>
          </p>
          <p>
            Art Director:{" "}
            <span className="text_roles">
              Oversees the visual aspect of the animation, ensuring that all
              artistic elements match the overall vision.
            </span>
          </p>
          <p>
            Scriptwriter:{" "}
            <span className="text_roles">
              Writes the script, including dialogue and scene instructions.
            </span>
          </p>
          <p>
            Taler:{" "}
            <span className="text_roles">
              Collects and archives raw material to create AI characters.
            </span>
          </p>
          <p>
            Voice Over Artist:{" "}
            <span className="text_roles">Provides character voices.</span>
          </p>
          <p>
            Music Composer:
            <span className="text_roles">
              {" "}
              Composes original music for animation.
            </span>
          </p>
          <p>
            System Administrator:{" "}
            <span className="text_roles">
              Manages and maintains IT and network infrastructures.
            </span>
          </p>
          <p>
            Cybersecurity Professional:{" "}
            <span className="text_roles">
              Manages the protection of computer systems, networks and data
              against cyber-attacks and data breaches.
            </span>
          </p>

          <h1>Development and Pre-production Roles</h1>
          <p>
            Development Executive:{" "}
            <span className="text_roles">
              Identifies and develops ideas for new animation projects.
            </span>
          </p>
          <p>
            Researcher:{" "}
            <span className="text_roles">
              Conducts research to ensure the accuracy and authenticity of story
              elements, including historical, cultural or scientific settings.
            </span>
          </p>
          <p>
            Script Editor:{" "}
            <span className="text_roles">
              Works with the scriptwriter to refine the script, ensuring that it
              is coherent and well-structured.
            </span>
          </p>

          <h1>Production Roles</h1>
          <p>
            Animation Supervisor:{" "}
            <span className="text_roles">
              Supervises teams of animators, ensuring consistency and quality of
              animation.
            </span>
          </p>
          <p>
            Effects Supervisor:{" "}
            <span className="text_roles">
              Specializes in visual effects supervision, working to integrate
              special effects with animated elements.
            </span>
          </p>
          <p>
            Dailies Coordinator:{" "}
            <span className="text_roles">
              Organizes and supervises daily dailies viewing sessions for the
              production team.
            </span>
          </p>
          <p>
            Clean-Up Artist:{" "}
            <span className="text_roles">
              Refine animation drawings so they are ready for colorization,
              ensuring clean lines.
            </span>
          </p>
          <p>
            Inbetween Artist:{" "}
            <span className="text_roles">
              Creates intermediate images between key poses to ensure smooth
              animation.
            </span>
          </p>

          <h1>Post-production Roles</h1>
          <p>
            Supervisor:{" "}
            <span className="text_roles">
              Manages all aspects of post-production, including editing, sound
              mixing and color grading.
            </span>
          </p>
          <p>
            Sound Editor:{" "}
            <span className="text_roles">
              Edits dialogue, music and sound effects.
            </span>
          </p>
          <p>
            Foley Artist:{" "}
            <span className="text_roles">
              Creates sound effects to synchronize with on-screen action.
            </span>
          </p>
          <p>
            Color Grader:{" "}
            <span className="text_roles">
              Adjusts animation colors to ensure visual consistency across all
              scenes.
            </span>
          </p>
          <p>
            AI Community Manager:{" "}
            <span className="text_roles">
              Manages AI social network accounts.
            </span>
          </p>

          <h1>Other Important Roles</h1>
          <p>
            IT Technician/Support:{" "}
            <span className="text_roles">
              Provides technical support for hardware and software used by the
              studio.
            </span>
          </p>
          <p>
            Legal Advisor:{" "}
            <span className="text_roles">
              Advises on legal aspects of production, such as copyrights,
              contracts, and licensing.
            </span>
          </p>
          <p>
            Human Resources Manager:{" "}
            <span className="text_roles">
              Manages recruitment, training and welfare of studio employees.
            </span>
          </p>
          <p>
            Finance and Accounting:{" "}
            <span className="text_roles">
              Manages budget, accounting, project and studio finances.
            </span>
          </p>

          <h1>AI Branch Roles</h1>
          <p>
            AI Research Scientist:{" "}
            <span className="text_roles">
              Focuses on development and innovation in the field of AI applied
              to animation.
            </span>
          </p>
          <p>
            Machine Learning Engineer:{" "}
            <span className="text_roles">
              Develops specific machine learning models for animation.
            </span>
          </p>
          <p>
            Computer Vision Engineer:{" "}
            <span className="text_roles">
              Specializes in image and video analysis to automate tasks.
            </span>
          </p>
          <p>
            Natural Language Processing Specialist:{" "}
            <span className="text_roles">
              Works on language understanding and generation to enhance
              scenarios with AI.
            </span>
          </p>
          <p>
            Technical Artist - AI Integration:{" "}
            <span className="text_roles">
              Acts as a bridge between the creative and technical teams.
            </span>
          </p>
          <p>
            Data Scientist/Analyst:{" "}
            <span className="text_roles">
              Analyzes data from production and user interaction to improve
              animation processes and products via AI.
            </span>
          </p>
          <p>
            AI Ethics Specialist:{" "}
            <span className="text_roles">
              Ensures that AI applications in the studio respect ethical
              principles.
            </span>
          </p>
          <p>
            AI Software Developer:{" "}
            <span className="text_roles">
              Designs and develops custom software for animation that
              incorporates AI functionality.
            </span>
          </p>
          <p>
            AI Systems Manager:{" "}
            <span className="text_roles">
              Manages the IT infrastructures supporting AI applications.
            </span>
          </p>
          <p>
            AI Trainer:{" "}
            <span className="text_roles">
              Specializes in training animation-specific AI models.
            </span>
          </p>
          <p>
            AI Policy and Strategy Advisor:{" "}
            <span className="text_roles">
              Advises on the studio&apos;s AI adoption strategy.
            </span>
          </p>
        </div>
      </div>
      <PageTransition />
    </>
  )
}

export default FatePage
