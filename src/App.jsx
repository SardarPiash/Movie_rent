import { useContext, useState } from "react";
import Header from "./components/Header";
import MovieBoard from "./components/MovieBoard/MovieBoard";
import Sidebar from "./components/Sidebar";
import { addCartMovie } from "./contex/AddCartContex";

export default function App() {
  const [addCartMovieDetails,setAddCartMovieDetails] = useState([]);
  return (
    <div>
      <addCartMovie.Provider value={{addCartMovieDetails,setAddCartMovieDetails}}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieBoard />
        </div>
      </main>
      </addCartMovie.Provider>
    </div>
  );
}
