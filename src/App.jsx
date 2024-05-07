import { useContext, useState } from "react";
import { addCartMovie,darkMode } from "./contex/AddCartContex";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Pages from "./Pages";

export default function App() {
  const [addCartMovieDetails,setAddCartMovieDetails] = useState([]);
  const [showDarkMode,setShowDarkMode]=useState(false);
  return (
    <div className={`h-full w-full ${showDarkMode ? "dark" : ""}`} >
      <darkMode.Provider value={{showDarkMode,setShowDarkMode}} >
      <addCartMovie.Provider value={{addCartMovieDetails,setAddCartMovieDetails}}>
        <Pages />
        <ToastContainer />
      </addCartMovie.Provider>
      </darkMode.Provider>
    </div>
  );
}
