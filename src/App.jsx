import "./App.css";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <nav className="flex justify-between px-16 py-5 bg-brand-dark text-white">
        <div className="select-none text-xl font-bold">throwitin</div>
        <ul className="flex space-x-10">
          <li className="cursor-pointer">About us</li>
          <li className="cursor-pointer">Contact us</li>
        </ul>
      </nav>
      {/* section #1 */}
      <section className="relative w-full h-fit grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        <div className="h-screen bg-gradient flex flex-col justify-center items-center text-left text-white">
          {/* center circle svg */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg
              width="389"
              height="389"
              viewBox="0 0 389 389"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M389 194.5C389 301.919 301.919 389 194.5 389C87.0806 389 0 301.919 0 194.5C0 87.0806 87.0806 0 194.5 0C301.919 0 389 87.0806 389 194.5Z"
                fill="black"
              />
              <path
                d="M194.5 194.5C194.5 301.919 194.5 194.5 194.5 389C87.0806 389 0 301.919 0 194.5C0 87.0806 87.0806 0 194.5 0C194.5 194.5 194.5 87.0806 194.5 194.5Z"
                fill="url(#paint0_linear_232_28)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_232_28"
                  x1="224"
                  y1="441"
                  x2="-44.9634"
                  y2="404.076"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FF8CC1" />
                  <stop offset="0.552282" stop-color="#9D4EDD" />
                  <stop offset="1" stop-color="#59AFFF" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="ml-16 md:ml-56 pb-40 lg:pb-0 lg:ml-16 space-y-8">
            <h1 className="text-5xl font-bold w-11/12">
              Creative work shows <br />
              us what’s possible. <br />
              Help fund it here.
            </h1>
            <p className="text-base font-light w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <button className="flex justify-center items-center py-2 px-5 h-10 rounded-lg cursor-pointer text-sm bg-gradient-to-r text-white from-brand-heropink via-brand-lightpurple to-brand-lightblue">
              Join waitlist as Investor
            </button>
          </div>
        </div>
        <div className="h-screen bg-gradient-to-br from-brand-heropink via-brand-lightpurple to-brand-lightblue flex justify-center items-end text-left flex-col text-white pt-56 md:pt-0">
          <div className="ml-16 md:ml-56 pt-40 lg:pt-0 lg:ml-56 space-y-8">
            <h1 className="text-5xl font-bold w-11/12">
              Creative work shows <br />
              us what’s possible. <br />
              Help fund it here.
            </h1>
            <p className="text-base font-light w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <button className="flex justify-center items-center py-2 px-5 h-10 rounded-lg cursor-pointer text-sm bg-black">
              Join waitlist as Project owner
            </button>
          </div>
        </div>
      </section>
      {/* section #2 -- Feature Section */}
      <section className="flex flex-col items-center h-fit py-12 bg-fourth-gradient">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-lightblue via-brand-semipurple to-brand-lightpink">
          Features
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 px-16 mt-10">
          <Card />
          <Card />
          <Card />
        </div>
        {/* cta */}
        <div className="w-full h-fit py-40 flex items-center justify-center">
          <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row justify-around items-center w-full mx-16 h-fit py-20 px-4 bg-green-100 bg-gradient-to-r from-purple-600 via-black to-pink-400 text-white rounded-lg">
            <div className="w-full h-full text-3xl lg:text-4xl font-bold flex items-center justify-center">
              Be the first to know about <br /> the new listed projects
            </div>
            <div className="h-full w-full flex items-center justify-center">
              <div className="lg:ml-40 flex flex-col space-y-3">
                <h3 className="text-lg lg:text-xl font-semibold mb-4">
                  For Weekly Updates On All Thing
                </h3>
                <input
                  type="email"
                  placeholder="Email"
                  className="rounded min-w-[400px] min-w-96 pl-4 py-4 bg-gray-500 opacity-80 border-0 outline-none text-sm"
                />
                <button className="min-w-[400px] bg-gradient-to-r from-brand-lightblue via-brand-semipurple to-brand-semipink rounded py-3 text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <div className="font-poppins w-full h-fit bg-brand-dark text-white px-16 pb-20 pb-36">
        <div className="flex flex-col space-y-20 md:space-y-0 items-center justify-center md:flex-row justify-around pt-20">
          {/* left side */}
          <div className="flex flex-col w-full items-center md:items-start space-y-3">
            <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-lightblue via-brand-purple to-brand-semipink">
              THROWITIN
            </h1>
            <p className="w-9/12 md:w-7/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nam
              ipsum vitae culpa exercitationem, facilis perspiciatis dolor
              ratione optio neque blanditiis corrupti iste necessitatibus
              placeat.
            </p>
          </div>
          {/* right side  */}
          <div className="w-full flex justify-center items-center">
            <ul className="space-y-2 mr-28">
              <li>About Us</li>
              <li>Contact us</li>
            </ul>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
