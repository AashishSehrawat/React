import React from "react";
import location from "../../assets/location.svg";
import phone from "../../assets/phone.svg";
import email from "../../assets/email.svg";

function Contact() {
  return (
    <>
      <div className="flex justify-center items-center w-full py-32">
        <div className="w-9/12 flex gap-5 justify-center">
          <div className="w-fit bg-slate-200 p-10 rounded-md">
            <div className="text-center mb-2">
              <h2 className="font-bold text-2xl">Get in touch:</h2>
              <p>Fill the form to start conversation</p>
            </div>
            <div className="">
              <ul typeof="none" className="flex flex-col gap-2">
                <li className="flex gap-2">
                  <img className="w-6" src={location} alt="" />
                  <span>Acme Inc, Street, State, Postal Code</span>
                </li>
                <li className="flex gap-2">
                  <img className="w-6" src={phone} alt="" />
                  <span>+55 1234567890</span>
                </li>
                <li className="flex gap-2">
                  <img className="w-6" src={email} alt="" />
                  <span>abc@net.org</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/4 flex items-center ">
            <form className="flex flex-col gap-3 w-full">
              <div className="border-2 p-1 rounded-md">
                <input
                  type="text"
                  className="outline-none w-full"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="border-2 p-1 rounded-md">
                <input
                  type="email"
                  placeholder="Email"
                  className="outline-none w-full"
                  required
                />
              </div>
              <div className="border-2 p-1 rounded-md">
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="outline-none w-full"
                  required
                />
              </div>
              <button className="text-white bg-orange-500 rounded-md px-2 py-1 text-xl hover:bg-orange-600 transition-all">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
