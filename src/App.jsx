import './App.css'
import Header from './Header'
import SideBar from './SideBar'

function App() {

  return (
    <>
      <>
        <Header></Header>
        <main>
          <div class="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <SideBar></SideBar>
          </div>
        </main>

      </>
    </>
  )
}

export default App
