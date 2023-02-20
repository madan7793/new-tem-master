import React from "react";

function ContactUs() {
  return (
    <div className='static-container grid md:grid-cols-2 md:pt-30 py-20 bg-light' id="contact">
      <div className='sm:text-5xl w-128 flex justify-center px-10 md:px-28 leading-relaxed'>
        For Any Assistance Required Please Reach Out
      </div>
      <div className="text-green md:mx-0 sm:mx-24 mx-10 md:mt-0 mt-10">
        <div className="grid sm:grid-cols-2">
          <div >
            <label htmlFor="first-name">First Name</label>
            <div>
              <input type="text" className="outline-none bg-light hover:border-slate-300 border-b-1 border-green my-5 pb-1 sm:w-7/12 w-4/5" id="first-name" />
            </div>
          </div>
          <div>
            <label htmlFor="last-name">Last Name</label>
            <div>
              <input type="text" className="outline-none bg-light hover:border-slate-300 border-b-1 border-green my-5 pb-1 sm:w-7/12 w-4/5" id="last-name" />
            </div>
          </div>
        </div>
        <div className="pt-3 sm:pt-10">
          <label htmlFor="email">Email</label>
          <div>
            <input type="email" className="outline-none bg-light hover:border-slate-300 border-b-1 border-green my-5 w-4/5 pb-1" id="email" />
          </div>
        </div>
        <div className="pt-3 sm:pt-10">
          <label htmlFor="message">Leave a Message</label>
          <div>
            <input type="textarea" className="outline-none bg-light hover:border-slate-300 border-b-1 border-green my-5 w-4/5 pb-16" id="message" />
          </div>
        </div>
        <div>
          <button className="py-2 px-12 hover:border-white hover:bg-white border-1 border-green rounded-lg">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs