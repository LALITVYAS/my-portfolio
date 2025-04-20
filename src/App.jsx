import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold bg-red-500">My Portfolio</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:text-teal-400">Home</Link>
      <Link to="/about" className="hover:text-teal-400">About</Link>
      <Link to="/projects" className="hover:text-teal-400">Projects</Link>
      <Link to="/contact" className="hover:text-teal-400">Contact</Link>
    </div>
  </nav>
);

const Home = () => (
  <section className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
    <h2 className="text-4xl font-bold mb-4">Hi, I'm Lalit Kumar Vyas</h2>
    <p className="text-lg">I'm a web developer who loves building beautiful UIs and clean code.</p>
  </section>
);

const About = () => (
  <section className="p-10 bg-white min-h-screen">
    <h2 className="text-3xl font-bold mb-4">About Me</h2>
    <p className="text-gray-700">I specialize in front-end development using React and Tailwind CSS. Passionate about design and clean code.</p>
  </section>
);

const Projects = () => (
  <section className="p-10 bg-gray-100 min-h-screen">
    <h2 className="text-3xl font-bold mb-6">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-6 bg-white rounded-xl shadow-md">
        <h3 className="text-xl font-semibold">Project Image Viewer</h3>
        <p className="text-gray-600">A responsive web application built with React.js and Tailwind CSS.</p>
      </div>
      <div className="p-6 bg-white rounded-xl shadow-md">
        <h3 className="text-xl font-semibold">Project Education Planner</h3>
        <p className="text-gray-600">A dynamic web platform for students and educators.</p>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="p-10 bg-white min-h-screen">
    <h2 className="text-3xl font-bold mb-4">Contact</h2>
    <form className="space-y-4 max-w-md">
      <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
      <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
      <textarea placeholder="Your Message" className="w-full p-2 border rounded" rows="4" />
      <button className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">Send</button>
    </form>
  </section>
);

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
