import { useState, useEffect } from "react";
import "../../src/App.css";
import NavBar from "./nav";
import Footer from "./footer";
import Test from "../images/myimg1.jpg";
import Me from "../images/me8.png";
import HTML from "../images/html.png";
import CSS from "../images/css.png";
import Django from "../images/django.png";
import Java from "../images/java.png";
import Js from "../images/js.png";
import Kotlin from "../images/kotlin.png";
import MongoDb from "../images/mongodb.png";
import Nodejs from "../images/nodejs.png";
import Python from "../images/python.png";
import Reactimg from "../images/react.png";
import Tailwind from "../images/tailwind.png";
import Bootstrap from "../images/bootrap.png";
import Mysql from "../images/mysqlpng.png";
import Sqlite from "../images/sqllite.png";
import Socket from "../images/socket.png";
import Livechat from "../images/livechat.png";
import Djangopython from "../images/djangopython.png";
import Image from "../images/image.png";
import Image1 from "../images/image02.png";
import Social from "../images/social01.png";
import ToDo from "../images/todo.png";
import myCv from "../images/myCv.pdf";
import { FaDownload } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

function Home() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [msg, setMsg] = useState("");

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (msg) {
      setVisible(true);
      setTimeout(() => setVisible(false), 10000);
    }
  }, [msg]);

  const themeChange = () => {
    setTheme(!theme);
    localStorage.setItem("theme", !theme);
  };
  const mytheme = localStorage.getItem("theme");
  console.log("mytheme", mytheme);

  const skillsData = [
    { name: "HTML", icon: HTML },
    { name: "CSS", icon: CSS },
    { name: "JavaScript", icon: Js },
    { name: "Java", icon: Java },
    { name: "React", icon: Reactimg },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Django", icon: Django },
    { name: "SQLite", icon: Sqlite },
    { name: "MySQL", icon: Mysql },
    { name: "MongoDB", icon: MongoDb },
    { name: "Tailwind CSS", icon: Tailwind },
    { name: "Bootstrap", icon: Bootstrap },
    { name: "Kotlin", icon: Kotlin },
    { name: "Socket.io", icon: Socket },
  ];

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5f15c21f-5b4b-4858-91ba-ade90e882c8c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setName("");
      setEmail("");
      setMessage("");
      setMsg("Your Message Sending Success!");
    } else {
      console.error("Error", res);
      setMsg("Failed to Send Your Message!");
    }
  };

  return (
    <>
      <button
        onClick={themeChange}
        className={`absolute ms-80 border-5 border-black border my-3 p-2 mt-5 rounded-md font-bold shadow text-2 xl ${
          mytheme === "true" ? "bg-slate-600 text-white" : "bg-gray-50"
        }`}
      >
        {mytheme === "true" ? <CiLight></CiLight> : <MdDarkMode></MdDarkMode>}
      </button>
      <div className={`${mytheme === "true" && "dark"} `}>
        <NavBar></NavBar>

        <div className="bg-gray-300 dark:bg-slate-800">
          <div className="flex flex-col items-center justify-center h-auto lg:flex-row ">
            <div className="flex flex-col justify-center m-6 lg:items-center lg:-mr-80 lg:ml-[200px]">
              <h1 className="text-4xl font-extrabold text-black hello sm:text-5xl md:text-6xl lg:text-6xl xl:text-8xl dark:text-white animate-bounce">
                Welcome !
              </h1>
              <h2 className="my-4 text-2xl font-bold hello sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl dark:text-white lg:text-center">
                I'm Supun Tharindu Kumarasena
              </h2>
              <h3 className="text-lg sm:text-xl md:text-2xl dark:text-white lg:text-center hello">
                Undergraduate at SLIIT &nbsp;|&nbsp; BScIT(Hons) &nbsp;|&nbsp;
                Specialized in Information Technology&nbsp;
              </h3>
              <div className="flex flex-row items-center mt-8 hello lg:justify-center">
                <a
                  href="https://github.com/supuntharindu123"
                  className="p-3 mx-3 text-2xl border border-black rounded-full dark:border-white dark:text-white hover:bg-slate-700 hover:text-white"
                >
                  <FaGithub className="hover:animate-bounce"></FaGithub>
                </a>
                <a
                  href="https://www.linkedin.com/in/supun-tharindu/"
                  className="p-3 mx-3 text-2xl border border-black rounded-full dark:border-white dark:text-white hover:bg-slate-700 hover:text-white"
                >
                  <CiLinkedin className="hover:animate-bounce"></CiLinkedin>
                </a>
                <a
                  href=""
                  className="p-3 mx-3 text-2xl border border-black rounded-full dark:border-white dark:text-white hover:bg-slate-700 hover:text-white"
                >
                  <FaFacebook className="hover:animate-bounce"></FaFacebook>
                </a>
                <a
                  href=""
                  className="p-3 mx-3 text-2xl border border-black rounded-full dark:border-white dark:text-white hover:bg-slate-700 hover:text-white"
                >
                  <FaInstagramSquare className="hover:animate-bounce"></FaInstagramSquare>
                </a>
              </div>
              <a
                href={myCv}
                download={myCv}
                className="w-48 px-8 py-2 mt-6 text-lg font-semibold border-2 border-gray-500 shadow hello sm:px-16 sm:text-2xl sm:w-80 dark:border-white rounded-xl dark:text-white hover:bg-slate-600 hover:text-white"
              >
                <span className="flex items-center justify-center gap-2">
                  Download CV
                  <FaDownload className="text-lg sm:text-xl hover:animate-bounce" />
                </span>
              </a>
            </div>
            <div className="hello flex flex-row items-center justify-center lg:ml-[300px]">
              <img
                src={Me}
                className="w-[600px] h-[750px] brightness-95 contrast-125"
              ></img>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center pt-20 pb-10 bg-gray-400 lg:columns-2 lg:flex-row dark:bg-slate-700 md:columns-1 "
            id="about"
          >
            <div className="lg:w-[50%] justify-center flex myblock">
              <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-8xl lg:text-7xl dark:text-white lg:w-[30%] text-center">
                About Me
              </h1>
            </div>
            <div className="lg:w-[50%] flex flex-col justify-center myblock">
              <p className="p-6 mr-4 text-lg font-semibold border shadow select-none sm:p-12 sm:mr-16 sm:text-xl md:text-2xl rounded-xl lg:text-2xl/10 ms-9 dark:text-white lg:-ms-24 text-slate-800 dark:bg-slate-800 bg-slate-100">
                I am Supun Tharindu Kumarasena and a third year undergraduate
                student at SLIIT. The degree programme is in Information
                Technology (BSc IT (Hons)). I am good at Web Application
                Development and Multiple Programming Languages.<br></br> I
                completed the first two years without repeat and completed Year
                3, Semester 1 (Y3S1). I live in Angunukolapelessa and was born
                on 25/11/2001. I studied at Weeraketiya Rajapaksa Central
                College. I am looking for an internship to gain industry
                knowledge.
                <br />
                Thank you!
              </p>
              <a
                href="#contact"
                className="w-64 px-8 py-3 mt-8 ml-10 text-xl font-bold text-center text-white transition-colors duration-300 border rounded-lg shadow-lg myblock border-slate-900 dark:bg-slate-800 lg:-ms-24 hover:bg-slate-950 bg-sky-800 hover:border-white"
              >
                Let's Connect!
              </a>
            </div>
          </div>
          <div
            id="projects"
            className="flex flex-col items-center justify-center pt-12 pb-6 bg-gray-200 xl:flex-row xl:columns-2 dark:bg-slate-800"
          >
            <div className="lg:w-[50%] justify-center flex items-center">
              <h1 className="items-center justify-center mt-10 text-4xl font-extrabold text-center myblock sm:text-5xl md:text-5xl xl:text-8xl lg:text-5xl dark:text-white text-slate-800">
                <span className="text-center">My</span> Projects
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center lg:mr-16 lg:flex-row xl:-ml-20 md:flex-row">
              <div className="justify-center pb-6 m-6 bg-gray-300 border-4 rounded-md shadow-lg myblock shadow-slate-400 dark:shadow-slate-200 w-80 hover:border-slate-400 hover:shadow-none dark:bg-slate-800">
                <img src={Image1} className="rounded-md w-80 h-52"></img>
                <div className="h-16 px-3 mt-2 text-2xl font-bold text-center dark:text-white">
                  Vehicle Advertisement System
                </div>
                <p className="px-3 text-lg text-center dark:text-white h-28">
                  Developed a web-based Vehicle Advertisement system with filter
                  ads ,post ads (include validations) , user authentications and
                  responsive UI.
                </p>
                <div className="flex items-center justify-center mt-2">
                  <a
                    target="_blank"
                    href="https://github.com/supuntharindu123/Vehical-Ads"
                    className="flex items-center justify-center w-full py-2 mx-6 font-bold text-center bg-white border rounded-lg shadow-md hover:text-slate-100 hover:bg-slate-900"
                  >
                    GitHub <FaGithub className="ml-2 text-sm"></FaGithub>
                  </a>
                </div>
              </div>
              <div className="myblock justify-center pb-6 m-6 bg-gray-300 border-4 rounded-md shadow-lg shadow-slate-400 dark:shadow-slate-200 w-80 hover:border-4\slate-400 dark:bg-slate-800 hover:shadow-none  ">
                <img src={Image} className="rounded-md w-80 h-52"></img>
                <div className="h-16 px-3 mt-2 text-2xl font-bold text-center dark:text-white">
                  My Portfolio
                </div>
                <p className="px-3 text-lg text-center dark:text-white h-28">
                  I am Supun Tharindu Kumarasena and a third year undergraduate
                  student at SLIIT. The degree programme is in Information
                  Technology
                </p>
                <div className="flex items-center justify-center mt-2">
                  <a
                    target="_blank"
                    href=""
                    className="flex items-center justify-center w-full py-2 mx-6 font-bold text-center bg-white border rounded-lg shadow-md hover:text-slate-100 hover:bg-slate-900"
                  >
                    GitHub <FaGithub className="ml-2 text-sm"></FaGithub>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pb-10 bg-gray-200 dark:bg-slate-800 xl:flex-row">
            <div className="flex flex-col items-center justify-center myblock lg:mr-16 lg:flex-row md:flex-row">
              <div className="justify-center pb-6 m-6 bg-gray-300 border-4 rounded-md shadow-gray-400 shadow-lg dark:*:shadow-slate-200 w-80 hover:border-slate-400 hover:shadow-none dark:bg-slate-800">
                <img src={Social} className="rounded-md w-80 h-52"></img>
                <div className="h-16 px-3 mt-2 text-2xl font-bold text-center dark:text-white">
                  Social Media Platform
                </div>
                <p className="px-3 text-lg text-center dark:text-white h-28">
                  User authentication (live validations), Messaging, Post
                  creation, Following & Followers , and Profile management.
                </p>
                <div className="flex items-center justify-center mt-2">
                  <a
                    target="_blank"
                    href="https://github.com/supuntharindu123/MYAPP"
                    className="flex items-center justify-center w-full py-2 mx-6 font-bold text-center bg-white border rounded-lg shadow-md hover:text-slate-100 hover:bg-slate-900"
                  >
                    GitHub <FaGithub className="ml-2 text-sm"></FaGithub>
                  </a>
                </div>
              </div>
              <div className="justify-center pb-6 m-6 bg-gray-300 border-4 rounded-md shadow-lg myblock shadow-slate-400 dark:shadow-slate-200 w-80 hover:border-slate-400 hover:shadow-none dark:bg-slate-800">
                <img src={Livechat} className="rounded-md h-52 w-80"></img>
                <div className="h-16 px-3 mt-2 text-2xl font-bold text-center dark:text-white">
                  Live Chat Application
                </div>
                <p className="px-3 text-lg text-center dark:text-white h-28">
                  Developed live chat application with send,delete and edit
                  messages , and user authentications
                </p>
                <div className="flex items-center justify-center mt-2">
                  <a
                    target="_blank"
                    href="https://github.com/supuntharindu123/livechat_web_application"
                    className="flex items-center justify-center w-full py-2 mx-6 font-bold text-center bg-white border rounded-lg shadow-md hover:text-slate-100 hover:bg-slate-900"
                  >
                    GitHub <FaGithub className="ml-2 text-sm"></FaGithub>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-200 lg:mr-16 lg:flex-row xl:-ml-12 md:flex-row dark:bg-slate-800">
              <div className="justify-center pb-6 m-6 bg-gray-300 border-4 rounded-md shadow-lg myblock shadow-slate-400 dark:shadow-slate-200 w-80 hover:border-slate-400 dark:bg-slate-800 hover:shadow-none">
                <img src={Djangopython} className="rounded-md h-52 w-80"></img>
                <div className="h-16 px-3 mt-2 text-2xl font-bold text-center dark:text-white">
                  User Management System
                </div>
                <p className="px-3 text-lg text-center h-28 dark:text-white">
                  Developed user record management system with Full CRUD
                  operations.
                </p>
                <div className="flex items-center justify-center mt-2">
                  <a
                    target="_blank"
                    href="https://github.com/supuntharindu123/Django"
                    className="flex items-center justify-center w-full py-2 mx-6 font-bold text-center bg-white border rounded-lg shadow-md hover:text-slate-100 hover:bg-slate-900"
                  >
                    GitHub <FaGithub className="ml-2 text-sm"></FaGithub>
                  </a>
                </div>
              </div>
              <div className="justify-center pb-6 m-6 bg-gray-300 border-4 rounded-md shadow-lg myblock shadow-slate-400 dark:shadow-slate-200 w-80 hover:shadow-none dark:bg-slate-800 hover:border-slate-400">
                <img src={ToDo} className="rounded-md w-80 h-52"></img>
                <div className="h-16 px-3 mt-2 text-2xl font-bold text-center dark:text-white">
                  Task Management App
                </div>
                <p className="px-3 text-lg text-center dark:text-white h-28">
                  Created a task management app with CRUD operations using
                  Kotlin.
                </p>
                <div className="flex items-center justify-center mt-2">
                  <a
                    href="https://github.com/supuntharindu123/TaskmanagementApp"
                    target="_blank"
                    className="flex items-center justify-center w-full py-2 mx-6 font-bold text-center bg-white border rounded-lg shadow-md hover:text-slate-100 hover:bg-slate-900"
                  >
                    GitHub <FaGithub className="ml-2 text-sm"></FaGithub>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            id="skills"
            className="flex flex-col items-center justify-center py-12 bg-gray-400 lg:flex-row dark:bg-slate-700"
          >
            <div className="lg:w-[40%] justify-center flex animate-slide-in">
              <h1 className="text-4xl font-extrabold text-center myblock sm:text-5xl md:text-6xl lg:text-8xl dark:text-white text-slate-800 lg:ml-60">
                <span className="block mb-3 lg:mx-4">My</span>
                <span className=" bg-clip-text">Skills</span>
              </h1>
            </div>
            <div className="lg:w-[60%] flex flex-wrap justify-center pr-6 lg:mr-40 animate-fade-in">
              {skillsData.map((skill, index) => (
                <div
                  key={index}
                  className="relative m-5 transition-transform duration-300 transform myblock group hover:scale-110"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="object-contain w-28 h-28"
                  />

                  <div className="absolute hidden px-2 py-1 mb-2 text-sm text-white bg-black rounded-md bottom-full group-hover:block">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            id="contact"
            className="flex flex-col items-center justify-center py-12 bg-gray-200 lg:columns-2 lg:flex-row dark:bg-slate-800 md:columns-1"
          >
            <div className="lg:w-[50%] justify-center flex flex-col items-center">
              <h1 className="myblock shadow-slate-900 text-gray-800 font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-8xl lg:text-7xl dark:text-white lg:w-[30%] text-center lg:mr-56 xl:mr-88">
                Contact
              </h1>
              <div className="flex flex-col justify-start ">
                <p className="max-w-md mt-6 text-xl text-center text-gray-600 myblock lg:text-start dark:text-gray-300">
                  Have a question? Feel free to reach out!
                </p>

                <div className="flex justify-center mt-8 space-x-6 myblock lg:justify-start">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500"
                  >
                    <FaFacebook className="text-6xl"></FaFacebook>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/supun-tharindu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 transition-colors duration-300 dark:text-gray-300 hover:text-blue-800"
                  >
                    <CiLinkedin className="text-7xl"></CiLinkedin>
                  </a>
                  <a
                    href="https://github.com/supuntharindu123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 transition-colors duration-300 dark:text-gray-300 hover:text-gray-950"
                  >
                    <FaGithub className="text-6xl"></FaGithub>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-[40%] w-[80%] mt-6">
              <form
                onSubmit={onSubmit}
                className="p-6 bg-white border shadow-xl myblock shadow-grey-500 lg:-ml-24 lg:mr-24 dark:bg-slate-700 rounded-xl"
              >
                {visible && msg && (
                  <p className="w-full px-4 py-2 mb-3 text-xl font-bold text-center bg-white rounded-sm">
                    {msg}
                  </p>
                )}
                <div className="mb-10">
                  <label
                    className="text-2xl font-bold text-gray-600 dark:text-white"
                    for="name"
                  >
                    Your Name&nbsp;
                    <span className="text-lg text-red-600">*</span>
                  </label>
                  <br></br>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    required
                    placeholder="Enter Your Name"
                    className="w-full h-10 pl-3 mt-4 text-2xl border rounded shadow-md dark:shadow-white"
                  ></input>
                </div>
                <div className="mb-10">
                  <label
                    className="text-2xl font-bold text-gray-600 dark:text-white"
                    for="name"
                  >
                    Your Email&nbsp;
                    <span className="text-lg text-red-600">*</span>
                  </label>
                  <br></br>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                    placeholder="Enter Your Email Address"
                    className="w-full h-10 pl-3 mt-4 text-2xl border rounded shadow-md dark:shadow-white"
                  ></input>
                </div>
                <div className="mb-4">
                  <label
                    className="text-2xl font-bold text-gray-600 dark:text-white"
                    for="name"
                  >
                    Message&nbsp;
                    <span className="text-lg text-red-600">*</span>
                  </label>
                  <br></br>
                  <textarea
                    type="text"
                    name="message"
                    rows={5}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    required
                    placeholder="Enter Your Message..."
                    className="w-full pl-3 mt-4 text-2xl bg-white border rounded shadow-md field-sizing-content dark:shadow-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-16 py-2 text-2xl font-bold text-white bg-gray-600 rounded-md shadow-md shadow-white hover:bg-slate-700 hover:text-white"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
