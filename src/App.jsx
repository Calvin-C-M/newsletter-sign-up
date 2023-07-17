import IllustrationDesktop from "./img/illustration-sign-up-desktop.svg"
import List from "./img/icon-list.svg"

function App() {
  return (
    <div className="App flex h-screen">
      <section className='m-auto max-w-xl bg-white rounded-2xl p-3 grid grid-cols-2 gap-3'>
        <section className="py-8 px-5 flex flex-col gap-3 text-dark-slate-grey">
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
            <label htmlFor="email" className="font-bold">Email address</label>
            <input 
              type="text" 
              id="email"
              name="email"
              placeholder="email@company.com"
              className="rounded-lg px-5 py-3 border-[1px] border-gray"
            />
          </div>
          <button className="bg-dark-slate-grey rounded-lg px-5 py-3 text-white font-bold">Subscribe to monthly newsletter</button>
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
