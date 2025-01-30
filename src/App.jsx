import { useState } from 'react'
import './App.css'
import MovieList from './cine/MovieList'
import { MovieContext, ThemeContext } from './context'
import Footer from './footer'
import Header from './Header'
import SideBar from './SideBar'

function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            <div className={`h-full w-full ${darkMode? 'dark':''}`}>
              <Header></Header>
              <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                  <SideBar></SideBar>
                  <MovieList></MovieList>
                </div>
              </main>
              <Footer></Footer>
            </div>
          </ThemeContext.Provider>
        </MovieContext.Provider>
      </>
    </>
  )
}

export default App
