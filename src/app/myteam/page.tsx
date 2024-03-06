"use client"
import React from "react"
import Sidebar from "../sideBar"
import Image from "next/image"
import "./style.css"

const TeamPage = ({}) => {

//   let button = document.querySelector('.plusminus');
// button.addEventListener('click', (e) => {
// 	e.target.classList.toggle('active')
// })

const [isActive, setIsActive] = React.useState(false);

React.useEffect(() => {
  const button = document.querySelector('.plusminus');
  
  if (isActive) {
    button.classList.add('active');
  } else {
    button.classList.remove('active');
  }

  return () => {
    // Cleanup function to remove event listeners if necessary
  };
}, [isActive]);

const handleClick = () => {
  setIsActive(!isActive);
};

  return (
    <>
      <Sidebar />
      <div className="w-full h-full overflow-y-scroll main">
        <div className="mainTeam flex text-6xl items-center justify-between w-full relative h-screen">
          <p className="ml-36">
            From Tokyo to New York,
            <br />
            We come from all
            <br />
            over the world.
          </p>
        </div>

        <div className="teamContent flex flex-row justify-center w-full relative h-screen">
          <div className="team__brand">
            <span className="team__title">Brand Director</span>
            <Image
              src="/vicki-final1.jpg"
              className=""
              alt="Brand logo from Lyra Haruto"
              width={600}
              height={800}
              priority={true}
            />
            <span>1</span>
          </div>
          <div className="w-1/3 flex flex-col justify-end pl-3 ml-[-3rem] team__text">
            <p className="text-5xl mb-9 leading-[4rem]">
              Lyra <br /> Haruto
            </p>
            <span className="border w-[100px] h-[100px] rounded-full mb-4 btnClick">
              <button className= "w-full h-full p-9 " onClick={handleClick}>
              {" "}<div className={`plusminus ${isActive ? 'active' : ''}`} ></div></button>
            </span>
            
            <p className={`${isActive ? 'opacity-100 ml-20' : 'opacity-0 ml-4'} w-30 team__bio  pb-4`} >
              Optio Urna s.d.a Sit-mi in v nisi-nativo AC minori
              hectorem/impiorum. Firmissime eius Axioma, Non mus usus urgeant me
              d AB Probitas sed Aut continue modo omnis. Eum nobilis eos
              Facundla, Risus Tributa, Fuga Arcui, CRAS, VERO, Quos, Publicarum,
              InduCcre... Sed quis ut potens adolescentulus tantae proditorem
              est facilis ornare clari charitativum laborum mirabile militantes
              qui leo nam praesentiam. Inaugurationem qui eventum ut
              praefixionem mus litterarum Minim eaque te occiditur oppressor
              facultates per praetensionis nisl dui urna.
            </p>

          </div>
        </div>

      </div>
    </>
  )
}
export default TeamPage
