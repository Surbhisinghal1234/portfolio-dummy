import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

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
      alert(res.message)
    }
  };

  return (
    <>

    <div id="contact" className="mt-[3rem]">
      <h1 className="font-bold text-[2rem] md:text-[3rem] text-center mb-[2rem]">Get in touch</h1>
      <div className="flex gap-[3rem] md:gap-0 flex-col md:flex-row justify-between items-center pb-[3rem]">

      <div className="flex gap-[2rem]  ">
        <a 
          href="https://github.com/Surbhisinghal1234"
          target="_blank"
          rel="noopener noreferrer"
          className=" bg-gray-500 p-4 text-black rounded-full transition duration-300"
        >
          <GitHubIcon  style={{ fontSize: 40 }}  />
        </a>
        <a
          href="https://www.linkedin.com/in/surbhi-singhal-701145295/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-500 p-4 text-black rounded-full transition duration-300"
        >
          <LinkedInIcon  style={{ fontSize: 40 }} />
        </a>
        <a
          href="mailto:surbhi98singhal@gmail.com"
          className="bg-gray-500 p-4 text-black rounded-full transition duration-300"
        >
          <MailOutlineIcon  style={{ fontSize: 40 }}  />
        </a>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-[2rem] w-[100%]  md:w-[60%]">
        <div className="flex md:gap-[3.5rem] flex-col md:flex-row">
          <label htmlFor="name" className="">
            Name:
          </label>
          <input id="name" name="name" type="text" className="bg-gray-400 w-[100%] rounded-sm p-2 text-black focus:outline-none placeholder-gray-600"  placeholder="Enter your name"  />
        </div>
        <div className="flex md:gap-[3.7rem] flex-col md:flex-row ">
          <label htmlFor="email" className="">
            Email:
          </label>
          <input id="email" name="email" type="email" className="bg-gray-400 w-[100%] rounded-sm p-2 text-black focus:outline-none placeholder-gray-600" placeholder="Enter your email"  />
        </div>
        <div className="flex md:gap-[2.2rem] flex-col md:flex-row">
          <label htmlFor="message" className="">
            Message:
          </label>
          <textarea id="message" name="message" rows="4" className="bg-gray-400 w-[100%] rounded-sm p-2 text-black focus:outline-none placeholder-gray-600"   placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className="bg-custom-gradient-bg w-[10rem] rounded-[2rem] px-[2rem] py-[.8rem] text-xl">Submit</button>
      </form>
    
      </div>

      </div>

    </>
  );
}

export default Contact;
