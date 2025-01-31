import React, { useContext, useState } from 'react';
import { getImageUrl } from '../utils/cine-utility';
import Rating from './Rating';
import MovieDetailsModal from './MovieDetailsModal';
import { MovieContext } from '../context';
import { toast } from 'react-toastify';

function MovieCard({ movie }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const { state, dispatch } = useContext(MovieContext)



    function handleModalClose() {
        setSelectedMovie(null);
        setShowModal(false);
    }

    function handleMovieSelection(movie) {
        setSelectedMovie(movie);
        setShowModal(true);
    }

    function handleAddToCart(event, movie) {
        event.stopPropagation();
        const found = state.cartData.find((item) => {
            return item.id === movie.id
        })
        if (!found) {
            // setCartData([...state.cartData, movie])
            dispatch({
                type: "ADD_TO_CART",
                payload: {
                    ...movie
                }
            });

            toast.success('Movie added in cart!')
        } else {
            toast.error(`The movie ${movie.title} has already been added!`)
        }

    }
    return (
        <>
            {showModal && <MovieDetailsModal onCartAdd={handleAddToCart} movie={selectedMovie} onClose={handleModalClose}></MovieDetailsModal>}
            <figure
                className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <a onClick={() => { handleMovieSelection(movie) }}>
                    <img className="w-full object-cover" src={getImageUrl(movie.cover)} alt="" />
                    <figcaption className="pt-4">
                        <h3 className="text-xl mb-1">{movie.title}</h3>
                        <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                        <div className="flex items-center space-x-1 mb-5">
                            <Rating value={movie.rating}></Rating>
                        </div>
                        <button
                            onClick={(e) => handleAddToCart(e, movie)}
                            className="bg-green-400 rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                        >
                            <img src="./assets/tag.svg" alt="" />
                            <span>${movie.price} | Add to Cart</span>
                        </button>
                    </figcaption>
                </a>
            </figure>
        </>
    );
}

export default MovieCard;