import React from 'react'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { decerementQty, incrementQty, removeFromCart } from '../features/CardSlice';

const ItemCart = ({ id, name, price, img, quantity }) => {
    const dispatch = useDispatch();
    return (
        <div className=" gap-2 flex shadow-md rounded-lg p-2 m-4">
            <AiOutlineDelete
                onClick={() => {
                    dispatch(removeFromCart({ id, img, name, price, quantity }));
                    // toast.error(`${name} Removed`);
                }}
                className=" absolute right-7 border bg-white hover:bg-gray-400 scale-120 cursor-pointer"
            />
            <img src={img} alt="" className="w-[50px] h-[50px]" />
            <div className=" leading-5 ">
                <h2 className=" font-bold text-gray-950">{name}</h2>
                <div className=" flex justify-between">
                    <span className=" text-green-500 font-bold">
                        <span className=" text-black ">₹</span>
                        {price}
                    </span>
                    <div className=" flex justify-between absolute right-7 gap-2">
                        <AiOutlinePlus
                            onClick={() => dispatch(incrementQty({ id }))}
                            className=" border-2 border-gray-200 hover:bg-green-500 rounded-md p-1 transition-all ease-linear cursor-pointer scale-140 text-xl smooth"
                        />
                        <span>{quantity}</span>
                        <AiOutlineMinus
                            onClick={() =>
                                quantity > 1 ? dispatch(decerementQty({ id })) : (quantity = 1)
                            }
                            className=" border-2 border-gray-200 hover:bg-red-500 rounded-md p-1 transition-all ease-linear cursor-pointer scale-140 text-xl smooth"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCart