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
import Dijk from "./assets/dijk.png"
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
        <section style={sectionStyle} >
          <h1 className="text-2xl font-semibold">Wagwan!!!</h1>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img src={Clueless} alt="clueless pic" className="rounded-xl w-full"/>
            </div>
            <div className="md:w-1/2">
              <h1 className="text-lg mt-10">
                <span className="text-3xl font-semibold">T</span>his is me in my software career with bunch of knowledge that I didn't know how to use or what to do with it. It was just there, playing snooker in my head.
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={Pathway} alt="" className="w-40 rotate-90" />
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <h1 className="text-lg mt-10">
                So, earlier this year, My brother sent a flier that the company he work for, Nithub, is having a free 9-months Full Stack training. At first I was skeptical to apply but my brother encouraged me. I applied and I got in. <span className="text-gray-700 text-sm">P.S: Not my brothers' influence</span>
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
              <p>We started of with the concepts of https, learnt about headers, protocol,query and response status and their meanings. And to every one who think they know about https, tbh there's more to it, because I was learning things that are below the surface level of the normal "www.google.com" that we know.</p>
            </div>
            <div className="flex justify-center items-center">
              <img src={Pathway} alt="" className="w-40 rotate-180" />
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-dancing-script ">OOP- Object Oriented Programming</h2>
                <img src={OOP1} alt="oop" className="rounded-xl w-full"/>
              </div>
              <div className="md:w-1/2">
                <h1 className="text-lg ml-2">
                Then we went on to learning about OOP - Object Oriented Programming (typescript - was the language we used). I learnt about Classes and Objects, Interface, Abstraction, Encapsulation, polymorphism. OOP in layman sense means bringing programming into our daily life. Abstraction concept can be related to using remote controller it works and we're fine with it, we do not care what goes on behind the clicking of the button or even the motherboard behind the casing.
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

        <section style={{ ...sectionStyle, transform: `translateY(${scrollY * 0.2}px)` }} >
          {/* DSA section */}
          <div className="flex justify-center items-center">
            <img src={Pathway} alt="" className="w-40 rotate-180 " />
          </div>
          <div>
            <div className="flex">
              <h2 className="text-3xl font-dancing-script ">DSA - Data Structures and Algorithm <img src={DSA} alt="https" className="w-10 ml-4" /></h2>
            </div>
            <div>
              <h2>Moving on to one of the hardest, trickest and fun part of the programme---- DSA... Omo, that was where I began to question my career in becoming a Software Engineer. DSA was like the eye opener,that I had a lot to learn. From learning Arrays to Queues, Stack, linked list, and my ever looping circle linkedlist, to learning about trees; Binary searh trees using BFS and DFS. The fun part was the sorting algorithm mainly because i was able to write them by heart apart form merge sort. Using typescript made life more stressful #pythonForDSA. During this, we were given a fun project which include creating a map for Unilag using Dijkstra Algorithm P.S I'm ashamed of how the frontend is, so I'll just drop snippet of how the backend and the algorithm is structured. Shout out to David Mark(pka coding boy) and David Dada for explaining it so well</h2>
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
              <div className="flex-shrink-0 md:w-72 w-96">
                <img src={Dijk} alt="" className="rounded w-full" onClick={() => handleClick(quickSort)} />
                <span className="block">
                  Dijkstra Algorithm
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
              <h2 className="text-3xl font-dancing-script ">REACT Framework <img src={React} alt="https" className="w-10 ml-4" /></h2>
            </div>
            <div>
              <h2>Next, we went on to learn React with our tutor David(pka Drex- why does it sound like a name in Jurassic Park). Every frontend developer like I enjoyed this part. It was really fun for me. From the team project to the hackathon(funny how i lead the team) shout out to Fari, Lawrence and Jessica. And also to Toyiba (I haven't still gotten over the Purple bg you choose over my black for the WeatherWise Project). During this section, Learnt so much about react hooks, creating reusable components, and API calls, learnt Tailwind too, bye bye to Vannila css</h2>
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
                  WeatherWise with Toyiba
                  This was the first frontend react project I built alongside Toyiba. I learnt how to use React hooks such as "UseContext, UseState, UseEffect", and also creating reusable components for the dashboard page.
                </h1>
                <p>
                  <a href="http://" className="underline text-blue-400 ml-4">WeatherWise</a>
                </p>
              </div>
            </div>
            <h2 className="font-dancing-script text-2xl">
              The Hackathon
            </h2>
            <div className="flex flex-col md:flex-row ml-3">
              <div className="md:w-1/2 relative">
                <img src={SOF} alt="WeatherWise" className="rounded-xl w-full"/>
              </div>
              <div className="md:w-1/2">
                <h1 className="text-lg ml-4">
                  For this, my team built a recipe site that allows users input the ingredients they have and it will generate recipe for foods. What this solve, is that it curbs wastage of food thereby reducing pollution.
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
              <h2>Now unto learning Database and Backend. This was one of the shortest classes we had but impactful. Learnt about Relation and non relational database. Different types of databases from Vector db to graph db etc Also learning the Query language, DDL, DML, DCL, TCL. 
              And lastly we moved on to the backend part, we used nodeJs compiled from Typescript for the backend. I learnt about several modules, file stream, http, path, buffer, os etc. Learnt about RESTful APIs too </h2>
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
              <h2>
                For my final project, I created a Movie straming site that allows users to stream movies/TV shows. 
                I used my knowledge as a full stack developer and the project made me level up.
                One key moment was when I wanted to implement the streak part. I think I rewrote the code like 5 times because I kept on coming up with different solutions.
              </h2>
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
            <h2 className="text-3xl font-dancing-script mb-2 mt-2">Thanks & Appreciation</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I am grateful to my brother for encouraging me throughout and also to all the friends I made Toyiba, Fari(Always encouraging me to look for more paying opportunities), Alfred(this guy is always happy when there is an error in my code), Lawrence. Looking forward to working with you on more awesome projects.
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
