import React from "react";
import Header from "./components/Header";
import MovieBoard from "./components/MovieBoard/MovieBoard";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export default function Pages() {
  return (
    <div>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieBoard />
        </div>
      </main>
      <Footer />
    </div>
  );
}
