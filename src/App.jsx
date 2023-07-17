import IllustrationDesktop from "./img/illustration-sign-up-desktop.svg"
import List from "./img/icon-list.svg"
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState(false)
  
  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    setError(!emailRegex.test(email))
  }

  return (
    <div className="App flex h-screen">
      <section className='m-auto max-w-xl bg-white rounded-2xl p-3 grid grid-cols-2 gap-3'>
        <section className="py-6 px-5 flex flex-col gap-5 text-dark-slate-grey">
          <h1 className="text-[36px] font-bold">Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li className="flex items-center gap-3">
              <img 
                src={List} 
                alt="list" 
              />
              Product discovery and building what matters
            </li>
            <li className="flex items-center gap-3">
              <img 
                src={List} 
                alt="list" 
              />Measuring to ensure updates are a success
            </li>
            <li className="flex items-center gap-3">
              <img 
                src={List} 
                alt="list" 
              />
              And much more!
            </li>
          </ul>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-bold flex items-center justify-between">Email address { (error) && <span className="text-red-500">Valid email required</span> }</label>
            <input 
              type="text" 
              id="email"
              name="email"
              onChange={e => setEmail(e.target.value)}
              placeholder="email@company.com"
              className={
                "rounded-lg px-5 py-3 border-[1px] border-gray focus:outline-none focus:border-[1.5px] transition-all duration-100 "
                +
                (
                  (error) ? "border-red-500 text-red-500 bg-red-100"
                  :
                  "focus:border-dark-slate-grey"
                )
              }
            />
          </div>
          <button onClick={validateEmail} className="bg-dark-slate-grey rounded-lg px-5 py-3 text-white font-bold hover:bg-tomato transition-all duration-100">Subscribe to monthly newsletter</button>
        </section>
        <img 
          src={IllustrationDesktop}
          alt="Illustration" 
        />
      </section>
    </div>
  );
}

export default App;