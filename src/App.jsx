import laptop from "./assets/laptop.png";

function App() {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      {/* Navbar */}
      <nav className="max-w-5xl mx-auto flex justify-between items-center px-6 py-5">
        <h1 className="text-2xl font-bold">
          <span className="text-sky-500">▥</span> Starter
        </h1>

        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="hover:text-sky-500 font-bold">
            Docs
          </a>
          <a href="#" className="hover:text-sky-500 font-bold">
            Blog
          </a>
          <a href="#" className="hover:text-sky-500 font-bold">
            Sign in
          </a>

          <button className="bg-sky-500 text-white px-4 py-2 rounded">
            Start Free Trial
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-slate-50 text-center py-20 px-5">
        <h1 className="text-4xl font-bold leading-tight">
          The modern landing page for
          <br />
          <span className="text-sky-500">React developer</span>
        </h1>

        <p className="text-gray-500 text-sm mt-4">
          The easiest way to build React landing page in seconds.
        </p>

        <button className="bg-sky-500 text-white px-5 py-3 rounded mt-9 text-sm font-semibold">
          Start your 14-day Free Trial
        </button>
      </section>

      {/* Three Features */}
      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center py-12 px-6">
        <div>
          <div className="bg-sky-400 text-white w-7 h-7 rounded-full mx-auto flex items-center justify-center">
            ↗
          </div>

          <h3 className="font-semibold text-sm mt-3">Your title</h3>

          <p className="text-gray-500 text-xs mt-2 leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div>
          <div className="bg-sky-400 text-white w-7 h-7 rounded-full mx-auto flex items-center justify-center">
            ⚛
          </div>

          <h3 className="font-semibold text-sm mt-3">Your title</h3>

          <p className="text-gray-500 text-xs mt-2 leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div>
          <div className="bg-sky-400 text-white w-7 h-7 rounded-full mx-auto flex items-center justify-center">
            ↗
          </div>

          <h3 className="font-semibold text-sm mt-3">Your title</h3>

          <p className="text-gray-500 text-xs mt-2 leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </section>

      {/* Features Heading */}
      <section className="text-center max-w-2xl mx-auto px-6 pt-14">
        <p className="text-sky-500 text-xs">Features</p>

        <h2 className="text-2xl font-bold mt-2">Your title here</h2>

        <p className="text-gray-500 text-xs mt-3 leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          malesuada nisi tellus, non imperdiet nisi tempor at.
        </p>
      </section>

      {/* First Feature */}
      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 py-16">
        <div className="text-center md:text-right">
          <h2 className="text-xl font-semibold">Your title here</h2>

          <p className="text-gray-500 text-sm leading-7 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            bibendum, nunc non posuere consectetur, justo erat semper enim, non
            hendrerit dui odio id enim.
          </p>
        </div>

        <div className="flex justify-center ">
          <img src={laptop} alt="laptop" className="w-64 h-64 object-contain" />
        </div>
      </section>
    </div>
  );
}

export default App;
