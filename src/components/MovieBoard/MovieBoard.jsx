import React, { useContext, useState } from "react";
import { GetData } from "../../data/data";
import Rating from "./Rating";
import MovieCover from "../../DynamicUrl/MovieCover";
import MovieModal from "./MovieModal";
import { addCartMovie } from "../../contex/AddCartContex";
import Tag from '../../assets/tag.svg'
import { toast } from "react-toastify";


export default function MovieBoard() {
  const [showMovieModal, setShowMovieModal] = useState(false);
  const [modalMovie, setModalMovie] = useState(null);
  const { addCartMovieDetails, setAddCartMovieDetails } =
    useContext(addCartMovie);
  const movieData = GetData();

  function handleMovieDetailsModal(movie) {
    setModalMovie(movie);
    setShowMovieModal(true);
  }
  function handleHideModal() {
    setModalMovie("");
    setShowMovieModal(false); 
  }
  function handleAddToCart(e, movie) {
    e.stopPropagation();

    const found = addCartMovieDetails.find(movies=>movies.id === movie.id)
    if(!found){
      setAddCartMovieDetails([...addCartMovieDetails, movie]);
      toast.success(`Added  ${movie.title} to Cart !`, {
        position: "bottom-right",
    });
} else {
    toast.error( `The movie ${movie.title} has been added to the cart already`, {
      position: "bottom-right",
    });
}
  }
  return (
    <div>
      {showMovieModal && (
        <MovieModal onCloseModal={handleHideModal} Movie={modalMovie} AddToCart={handleAddToCart}/>
      )}
      <div className="content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {movieData.map((movie) => (
            <div key={movie.id} onClick={() => handleMovieDetailsModal(movie)}>
              <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <img
                  className="w-full object-cover"
                  src={MovieCover(movie.cover)}
                  alt={movie.title}
                />
                <figcaption className="pt-4">
                  <h3 className="text-xl mb-1">{movie.title}</h3>
                  <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>

                  <Rating Rating={movie.rating} />
                  <div className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm" onClick={(e) => handleAddToCart(e, movie)}>
                    <img src={Tag} alt="" />
                    <span >
                      ${movie.price} | Add to Cart
                    </span>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
