import './App.css';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
function App() {
  return (
    <div>
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white">
        <h1>Wessam Alnahhal</h1>
        <div className='flex gap-6'>
          <a href="" className="hover:text-blue-400">About me</a>
          <a href="" className="hover:text-blue-400">Skills</a>
          <a href="" className="hover:text-blue-400">My Projects</a>
          <a href="" className="hover:text-blue-400">Contact me</a>
        </div>
      </nav>
      <section className="flex  items-center justify-between h-screen">
        <div className="pl-16">
          <h2 className="font-sans text-5xl font-bold mb-4">Hi, I'm Wessam Alnahhal</h2>
          <h3 className="font-sans text-4xl font-bold mb-4">Front-End Developer</h3>
          <button className="rounded-lg px-6 py-3 bg-blue-500 text-white">Contact me</button>
        </div>
        <div>
          <img className="w-64 h-64 object-cover rounded-full" src="/pic/mine.jpg" alt="wessam" />
        </div>
      </section>
      <section className="text-center py-16 px-8">
        <h3 className="text-3xl font-bold mb-10">My Skills</h3>
        <div className="skills">
          <div className="grid grid-cols-3 gap-6 p-16">
          <div className="flex flex-col items-center p-6 border rounded-xl">
            <FaHtml5 className="text-5xl mb-2 text-orange-500" />
            <p>HTML 5</p>
          </div>
          <div className="flex flex-col items-center p-6 border rounded-xl">
            <FaCss3 className="text-5xl mb-2 text-blue-500" />
            <p>CSS3</p>
          </div>
          <div className="flex flex-col items-center p-6 border rounded-xl">
            <FaJs className="text-5xl mb-2 text-yellow-500" />
            <p>JS</p>
          </div>
          <div className="flex flex-col items-center p-6 border rounded-xl">
            <FaReact className="text-5xl mb-2 text-blue-500" />
            <p>React.js</p>
          </div>
          <div className="flex flex-col items-center p-6 border rounded-xl">
            <RiTailwindCssFill className="text-5xl mb-2 text-blue-500" />
            <p>TailWind</p>
          </div>
          <div className="flex flex-col items-center p-6 border rounded-xl">
            <FaBootstrap className="text-5xl mb-2 text-pink-500" />
            <p>Bootstrap 5</p>
          </div>
          </div>
        </div>

      </section>
    <section id="projects" className="py-16 px-8 text-center">
  <h2 className="text-3xl font-bold mb-10">My Projects</h2>
  <div className="grid grid-cols-3 gap-6">
    
    <div className="border rounded-xl overflow-hidden shadow-md">
      <img src="/pic/store.png" alt="React Store" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">React Store</h3>
        <p className="text-gray-500 mb-4">E-commerce store built with React</p>
        <a href="https://github.com/wesamalnaHAL/store" className="text-blue-500">GitHub →</a>
      </div>
    </div>

    <div className="border rounded-xl overflow-hidden shadow-md">
      <img src="/pic/todo.png" alt="Todo App" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">Todo App</h3>
        <p className="text-gray-500 mb-4">Task management app built with Vue</p>
        <a href="https://github.com/wesamalnaHAL/Todo-app" className="text-blue-500">GitHub →</a>
      </div>
    </div>

    <div className="border rounded-xl overflow-hidden shadow-md">
      <img src="/pic/my-store.png" alt="Wessam Store" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">Wessam Store</h3>
        <p className="text-gray-500 mb-4">E-commerce store with React & API</p>
        <a href="https://github.com/wesamalnaHAL/wessam-store" className="text-blue-500">GitHub →</a>
      </div>
    </div>

  </div>
</section>
  <section className="py-16 px-8 max-w-xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
    <p className="text-gray-500 mb-6">exewesam1@gmail.com</p>
    <form action="">
      <input type="text" className="w-full border rounded-lg p-3 mb-4" placeholder='Your Name' />
      <input type="email" className="w-full border rounded-lg p-3 mb-4" placeholder='example@gmail.com' />
      <textarea name="" className="w-full border rounded-lg p-3 mb-4" placeholder='Your Messege Here'></textarea>
      <button className="bg-blue-500 text-white px-6 py-3 rounded-lg w-full">Send</button>
    </form>
  </section>  
    <footer className="bg-gray-900 text-white text-center py-6">
      <p>© 2024 Wessam Alnahhal. All rights reserved.</p>
    </footer>
    </div>
  );
}

export default App;