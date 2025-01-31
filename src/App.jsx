import { useReducer, useState } from 'react'
import './App.css'
import MovieList from './cine/MovieList'
import { MovieContext, ThemeContext } from './context'
import Footer from './footer'
import Header from './Header'
import SideBar from './SideBar'
import { cartReducer, initialState } from './reducers/CartReducer'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  // const [cartData, setCartData] = useState([]);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <>
        <MovieContext.Provider value={{ state, dispatch }}>
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
            <ToastContainer></ToastContainer>
          </ThemeContext.Provider>
        </MovieContext.Provider>
      </>
    </>
  )
}

export default App
