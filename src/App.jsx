import Homes from "./pages/Homes"
import Fav from "./pages/Fav"
import {Routes,Route} from "react-router-dom"
import {MovieProvider} from "./contexts/MovieContext"
import NavBar from "./components/NavBar"
import "./css/App.css"


function App() {
  
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Homes />}></Route>
          <Route path="/Fav" element={<Fav />}></Route>
        </Routes>
      </main>
    </MovieProvider>
  );
}


export default App
