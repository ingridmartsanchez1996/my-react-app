import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx'
import Main from './Components/Main.jsx'
import AboutMe from './Components/AboutMe.jsx'
import Astros from './Components/Astros.jsx'
import './App.css'

function App() {

    const linksData = [
      { name: 'Home', href: '/'},
      { name: 'About', href: '/about'},
      { name: 'Astros', href: '/astros'},
    ]

  return (
    <>
      <Navbar header='Navbar' links={linksData} />
      <Routes>
          <Route
            element={<Main />}
            path='/'
          />
          <Route
            element={<AboutMe />}
            path='/about'
          />
          <Route
            element={<Astros />}
            path='/astros'
          />
      </Routes>
    </>
  )
}

export default App
