// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

import { BrowserRouter, Routes } from "react-router-dom";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
// import Welcome from './Components/Welcome';
// import StudentCard from './Components/StudentCard';


// function App() {
//   return (
//     <div style={{color:'yellow', border: '1px solid red',  peding: '10px' , margin:'200px'}}>
//       <h1 style={{ fontFamily: 'Georgia',fontStyle: 'italic'}}> My React Application</h1>

//       {/* <StudentCard name="Haseeb" /> */}
//       <StudentCard  name='Sir Abdul Wadood' age={32}
//       subject='Python Lead-Manager' />

//       <StudentCard name='Haseeb Ahmed'age={20}
//       subject='Python' />
//     </div>
    
//   );
// }
// import ProfileCard from './Components/ProfileCard';

// function App() {
//   return (
//     <div style={{color:'yellow', border: '1px solid red',  peding: '10px' , margin:'200px'}}>
//       <h1 style={{ fontFamily: 'Georgia',fontStyle: 'italic'}}>My React Application</h1>

//       <ProfileCard
//         firstName="Haseeb"
//         lastName="Ahmed"
//         age={20}
//       />

//       <ProfileCard
//         firstName="Sir Abdul"
//         lastName="Wadood"
//         age={32}
//       />

//       <ProfileCard
//         firstName="Ali"
//         lastName="Khan"
//         age={16}
//       />
//     </div>
//   );
// }
// export default App;

// import SubjectList from "./Components/SubjectList";

// function App() {
//   const subjects = ["Math", "English", "Science", "Computer"];

//   return (
//     <div>
//       <h1>My App</h1>

//       <SubjectList subjects={subjects} />
//     </div>
//   );
// }

// export default App;


// import Counter from "./Components/Counter";

// function App(){

//   return(
//     <div>
//       <h1>Event Hnadling Demo</h1>
//       <Counter/>
//     </div>
//   )
// }

// export default App;


// import NameInput from "./Components/NameInput";

// function App() {
//   return (
//     <div>
//       <h1>React Event Handling Demo</h1>

//       <NameInput />
//     </div>
//   );
// };

// export default App;

// import UserForm from "./Components/UserForm";
// import NameInput from "./Components/NameInput";
// import Counter from "./Components/Counter";
// import HoverMessage from "./Components/HoverMessage";
// import KeyPress from "./Components/KeyPress"

// function App() {
//   return (
//     <div>
//       <h1>React User Form</h1>
//       <UserForm/>
//       <NameInput />
//       <HoverMessage/>
//       <keyPress/>
//       <Counter/>
//     </div>
//   );

// }
// export default App;

import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from "./Components/navbar";
import Contact from "./Pages/Contact";
import About from "./Pages/About";



function App (){
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>    
      <Route path='/About' element={<About/>}/>   
      <Route path='/Contact' element={<Contact/>}/>   
    </Routes>
    </BrowserRouter>
  )
}

export default App;


