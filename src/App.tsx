import { useEffect, useState } from "react";
import Wallpaper from "./assets/wallpaper.jpg";
import Clueless from "./assets/clueluess pic.webp";
import Pathway from './assets/pathway__1_-removebg-preview.png'
import HatchDev from './assets/HatchDev-Img.jpg'
import HTTPS from "./assets/world-o-svgrepo-com.svg"
import OOP1 from "./assets/OOP1.png"
import OOP2 from "./assets/OOP2.png";
import OOP3 from "./assets/OOP3.png";
import OOP4 from "./assets/OOP4.png";
import OOP5 from "./assets/OOP5.png";
import DSA from "./assets/binaryTree.svg"
import CLL from "./assets/circleLinkedList.png"
import DLL from "./assets/doubleLinkedList.png"
import BST from "./assets/bst.png"
import Q2S from "./assets/queue to stack.png"
import quickSort from "./assets/quickSort.png"
import React from "./assets/react.svg"
import WeatherWise from "./assets/WeatherWise.jpg"
import Her from "./assets/Her.jpg"
import Me from "./assets/me.jpg"
import SOF from "./assets/sof.png"
import Database from "./assets/database-svgrepo-com.svg"
import Backend from "./assets/datastore-svgrepo-com.svg"
import Node1 from "./assets/node1.png"
import Node2 from "./assets/node2.png"
import Node3 from "./assets/node3.png"
import Node4 from "./assets/node4.png"
import Confetti from "./assets/confetti-svgrepo-com.svg"
import Github from "./assets/github-142-svgrepo-com.svg"
import LinkedIn from "./assets/linkedin-svgrepo-com.svg"
import Movy from "./assets/image.png"
import './App.css'


function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [scrollY, setScrollY] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  const handleClick = (imageSrc: any) => {
    setSelectedImage(imageSrc);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.3}px)`,
    transition: 'transform 0.1s ease-out'
  };

  const sectionStyle = {
    transform: `translateY(${scrollY * 0.1}px)`,
    transition: 'transform 0.1s ease-out'
  };


  return (
    <div className="min-h-screen flex flex-col">
      <header
          className="relative w-full h-96 bg-cover bg-center rounded text-white sticky top-0 z-0 "
          style={{ 
          backgroundImage: `url(${Wallpaper})`, 
          ...parallaxStyle 
          }}
        >
          <div className="absolute bottom-12 left-4 text-4xl font-dancing-script shadow-xl">
            My HatchDev Journey
          </div>
      </header>
      <main className="relative z-10 bg-white">
        <section style={sectionStyle} className="py-8">
          <h1 className="text-2xl font-semibold">Wagwan!!!</h1>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img src={Clueless} alt="clueless pic" className="rounded-xl w-full"/>
            </div>
            <div className="md:w-1/2">
              <h1 className="text-lg mt-10">
                <span className="text-3xl font-semibold">T</span>his is me in my software career with bunch of knowledge that I didn't know how to use.
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={Pathway} alt="" className="w-40 rotate-90" />
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <h1 className="text-lg mt-10">
                Earlier this year, My brother sent a flier that the company he work for, Nithub, is having a free .......
              </h1>
            </div>
            <div className="md:w-1/2 ">
              <img src={HatchDev} alt="clueless pic" className="rounded-xl w-full h-96"/>
            </div>
          </div>
        </section>

        <section style={{ ...sectionStyle, transform: `translateY(${scrollY * 0.15}px)`}} className="py-4">
          {/* HTTPS */}
          <div>
            <h1 className="text-2xl font-semibold">What are the things I learnt in the Program :) </h1>
            <div>
              <div className="flex">
                <h2 className="text-3xl font-dancing-script ">HTTPS</h2>
                <img src={HTTPS} alt="https" className="w-10 ml-4" />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum dolorem eius nesciunt, consectetur nam amet minus dicta possimus fugit, in aliquam repudiandae totam nobis nihil quis excepturi voluptatem odit esse.</p>
            </div>
            <div className="flex justify-center items-center">
              <img src={Pathway} alt="" className="w-40 rotate-180" />
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img src={OOP1} alt="oop" className="rounded-xl w-full"/>
              </div>
              <div className="md:w-1/2">
                <h1 className="text-lg ml-4">
                  Learning OOP is like nbringing our codes ........
                </h1>
              </div>
            </div>
            
            <div className="flex flex-row md:justify-center overflow-x-scroll hide-scrollbar gap-4 mt-6 mb-4 ">
              <img src={OOP2} alt="" className="md:w-72 w-96 rounded" onClick={() => handleClick(OOP2)}/>
              <img src={OOP3} alt='' className="md:w-72 w-96 rounded" onClick={() => handleClick(OOP3)} />
              <img src={OOP4} alt='' className="md:w-72 w-96 rounded" onClick={() => handleClick(OOP4)}/>
              <img src={OOP5} alt="" className="md:w-72 w-96 rounded" onClick={() => handleClick(OOP5)}/>
            </div>
            <h2 className="font-dancing-script text-2xl ml-2 animate-bounce">Click to enlarge image! ---&gt;</h2>
          </div>
        </section>

        <section style={{ ...sectionStyle, transform: `translateY(${scrollY * 0.2}px)` }} className="py-4">
          {/* DSA section */}
          <div className="flex justify-center items-center">
            <img src={Pathway} alt="" className="w-40 rotate-180 " />
          </div>
          <div>
            <div className="flex">
              <h2 className="text-3xl font-dancing-script ">DSA - Data Structures and Algorithm</h2>
              <img src={DSA} alt="https" className="w-10 ml-4" />
            </div>
            <div>
              <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non magnam sequi nesciunt possimus iure dolores quas voluptatibus enim, suscipit praesentium tenetur a ad nam eaque adipisci esse minus temporibus tempore.</h2>
            </div>
            <div className="flex flex-row md:justify-center overflow-x-scroll hide-scrollbar gap-4 mt-6 mb-4 text-sm font-dancing-script">
              <div className="flex-shrink-0 md:w-72 w-96">
                <img src={CLL} alt="" className="rounded " onClick={() => handleClick(CLL)} />
                <span className="block ">
                  Circular LinkedList
                </span>
              </div>
              <div className="flex-shrink-0 md:w-72 w-96">
                <img src={DLL} alt="" className="rounded" onClick={() => handleClick(DLL)} />
                <span className="block ">
                  Double LinkedList
                </span>
              </div>
              <div className="flex-shrink-0 md:w-72 w-96">
                <img src={BST} alt="" className="rounded w-full" onClick={() => handleClick(BST)} />
                <span className="block">
                  Binary Search Tree
                </span>
              </div>
              <div className="flex-shrink-0 md:w-72 w-96">
                <img src={Q2S} alt="" className="rounded w-full" onClick={() => handleClick(Q2S)} />
                <span className="block">
                  Queue to Stack
                </span>
              </div>
              <div className="flex-shrink-0 md:w-72 w-96">
                <img src={quickSort} alt="" className="rounded w-full" onClick={() => handleClick(quickSort)} />
                <span className="block">
                  Quick Sort
                </span>
              </div>
            </div>

            <h2 className="font-dancing-script text-2xl ml-2 animate-bounce">
              Click to enlarge image! ---&gt;
            </h2>
          </div>
        </section>
        

          {/* REACT Lesson */}

        <section style={{ ...sectionStyle, transform: `translateY(${scrollY * 0.2}px)` }} className="py-4">
          <div className="flex justify-center items-center">
            <img src={Pathway} alt="" className="w-40 rotate-180 " />
          </div>
          <div>
            <div className="flex">
              <h2 className="text-3xl font-dancing-script ">REACT Framework</h2>
              <img src={React} alt="https" className="w-10 ml-4" />
            </div>
            <div>
              <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non magnam sequi nesciunt possimus iure dolores quas voluptatibus enim, suscipit praesentium tenetur a ad nam eaque adipisci esse minus temporibus tempore.</h2>
              <p className="mt-2 font-semibold text-xl">Here are the projects during the React Lesson</p>
            </div>

            <h2 className="font-dancing-script text-2xl">
              Bulding a Weather App
            </h2>
            <div className="flex flex-col md:flex-row ml-3">
              <div className="md:w-1/2 relative">
                <img src={WeatherWise} alt="WeatherWise" className="rounded-xl w-full"/>
                <div className="absolute bottom-0 left-0 text-white ml-2 ">
                <img src={Me} alt="WeatherWise" className="md:w-32 md:h-32 w-20 h-20 rounded-full"/>
                </div>
                <div className="absolute bottom-0 right-0 text-white mr-2 ">
                <img src={Her} alt="WeatherWise" className="md:w-32 md:h-32 w-20 h-20 rounded-full"/>
                </div>

              </div>
              <div className="md:w-1/2">
                <h1 className="text-lg ml-4">
                  WeatherWise with Toyiba ........
                </h1>
                <p>
                  <a href="http://" className="underline text-blue-400 ml-4">WeatherWise</a>
                </p>
              </div>
            </div>
            <h2 className="font-dancing-script text-2xl">
              The Hatchdev
            </h2>
            <div className="flex flex-col md:flex-row ml-3">
              <div className="md:w-1/2 relative">
                <img src={SOF} alt="WeatherWise" className="rounded-xl w-full"/>
              </div>
              <div className="md:w-1/2">
                <h1 className="text-lg ml-4">
                  The Hatchdev ........
                </h1>
                <p>
                  <a href="https://sof.vercel.app/" className="underline text-blue-400 ml-4">Save Our Food(SOF)</a>
                </p>
              </div>
            </div>
          </div>
        </section>  
        

          {/* DataBase and Backend */}
        <section style={{ ...sectionStyle, transform: `translateY(${scrollY * 0.2}px)` }} className="py-4">
          <div className="flex justify-center items-center">
            <img src={Pathway} alt="" className="w-40 rotate-180 " />
          </div>
          <div>
            <div className="flex">
              <h2 className="text-3xl font-dancing-script ">DataBase and Backend</h2>
              <img src={Database} alt="https" className="w-10 ml-4" />
              <img src={Backend} alt="https" className="w-10 ml-4" />
            </div>
            <div>
              <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non magnam sequi nesciunt possimus iure dolores quas voluptatibus enim, suscipit praesentium tenetur a ad nam eaque adipisci esse minus temporibus tempore.</h2>
            </div>
            <div className="flex flex-row md:justify-center overflow-x-scroll hide-scrollbar gap-4 mt-6 mb-4 text-sm font-dancing-script">
              <div className="flex-shrink-0 md:w-72 w-96">
                <img src={Node1} alt="" className="rounded " onClick={() => handleClick(Node1)} />
                <span className="block ">
                  Database Backup Utility
                </span>
              </div>
              <div className="flex-shrink-0 md:w-72 w-96">
                <img src={Node2} alt="" className="rounded" onClick={() => handleClick(Node2)} />
                <span className="block ">
                  Introduction to HTTPS Module
                </span>
              </div>
              <div className="flex-shrink-0 md:w-72 w-96">
                <img src={Node3} alt="" className="rounded w-full" onClick={() => handleClick(Node3)} />
                <span className="block">
                  Class Pratice on File System Module
                </span>
              </div>
              <div className="flex-shrink-0 md:w-72 w-96">
                <img src={Node4} alt="" className="rounded w-full" onClick={() => handleClick(Node4)} />
                <span className="block">
                  API development Assignment
                </span>
              </div>
            </div>

            <h2 className="font-dancing-script text-2xl ml-2 animate-bounce">Click to enlarge image! ---&gt;</h2>
            
          </div>
        </section>

        {/* Final Project */}
        <section style={{ ...sectionStyle, transform: `translateY(${scrollY * 0.2}px)`}} className="py-4">
        <div className="flex justify-center items-center">
            <img src={Pathway} alt="" className="w-40 rotate-180 " />
          </div>
          <div>
            <div className="flex">
              <h2 className="text-3xl font-dancing-script ">Final Project</h2>
              <img src={Confetti} alt="https" className="w-10 ml-4 animate-wiggle" />
            </div>
            <div>
              <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non magnam sequi nesciunt possimus iure dolores quas voluptatibus enim, suscipit praesentium tenetur a ad nam eaque adipisci esse minus temporibus tempore.</h2>
            </div>
            <div>
              <img src={Movy} alt="" className="rounded " />
              <a href="https://movy-frontend.vercel.app/" className="underline text-green-900 text-xl ">Movy</a>
            </div>
            
          </div>
        </section>
      </main>

      {/* Selected Image Enlargement Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-white text-2xl z-50"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Enlarged"
              className="rounded "
            />
          </div>
        </div>
      )}


      {/* Thanks and Appreciation */}
      <footer 
        className="relative mt-20 bg-gradient-to-b from-white to-gray-100 py-16"
        style={{
          transform: `translateY(${scrollY * 0.18}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-dancing-script mb-4">Thanks & Appreciation</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Thank you for taking the time to explore my HatchDev journey. Special thanks to all the mentors and fellow developers who made this possible.
            </p>
            <p className="mt-2">P.S: You can find the repo to all the source code from the Github Icon below</p>
          </div>
          <div className=" flex  items-center justify-center gap-6 mt-4 ">
            <a href=""> 
              <img src={Github} alt="Github" className="w-12 h-12" /> 
            </a>
            <a href=""> 
              <img src={LinkedIn} alt="LinkedIn" className="w-12 h-12" />
            </a>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            © 2024 HatchDev Journey. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
