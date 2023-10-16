import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/CardSlice';
import { AiFillStar } from "react-icons/ai";

const Cards = ({ id, name, price, desc, rating, img }) => {
    const dispatch = useDispatch();

    return (
     <article className="font-bold w-[250px] py-6 mx-6 flex flex-col gap-2 rounded-xl bg-white p-3 shadow-lg hover:shadow-xl border">
            <img
                src={img}
                alt=""
                className="cursor-grab hover:scale-110 w-auto h-[130px] transition-all duration-300 ease-in-out"
            />
            <div className="text-sm justify-between flex">
                <h2 className='text-slate-700'>{name}</h2>
                <span className="text-lg font-bold text-red-500">₹{price}</span>
            </div> 
            <p className="text-slate-700 mt-1 text-sm font-normal line-clamp-3">{desc}..</p>
            <div className=" flex justify-between">
                <span className="flex justify-center items-center">
                    <AiFillStar className=" mr-1 text-yellow-400" />
                    {rating}
                </span>
                <button
                    onClick={() =>
                        dispatch(
                            addToCart({ id, name, price, rating, img, quantity: 1 }),
                            // handleToast(name)
                        )
                    }
                    className="px-2 py-1 text-white bg-green-500 hover:bg-green-700 rounded text-sm"
                >
                    Add To Cart
                </button>
            </div>
        </article> 
      
    );
}

export default Cards




      /*   <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
        <a href="#">
          <div class="relative flex items-end overflow-hidden rounded-xl">
            <img src={img} alt="Hotel Photo" />
            <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span class="text-slate-400 ml-1 text-sm">4.9</span>
            </div>
          </div>
  
          <div class="mt-1 p-2">
            <h2 class="text-slate-700">The Hilton Hotel</h2>
            <p class="text-slate-400 mt-1 text-sm">Lisbon, Portugal</p>
  
            <div class="mt-3 flex items-end justify-between">
              <p>
                <span class="text-lg font-bold text-blue-500">$850</span>
                <span class="text-slate-400 text-sm">/night</span>
              </p>
  
              <div class="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:text-blue-500 h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </article> */