import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GrClose } from "react-icons/gr";
import ItemCart from './ItemCart';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Cart = () => {
    const [activeCart, setActiveCart] = useState(false);
    const cartItems = useSelector((state) => state.cart.cart);

    const totalQuantity = cartItems.reduce((totalQnty, item) => totalQnty + item.quantity,
        0);

    const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price,
        0);

    const navigate = useNavigate();

    return (
        <>
            <div
                className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white ${activeCart ? "translate-x-0" : "translate-x-full"
                    } transition-all duration-500 z-50`}
            >
                <div className=" flex justify-between items-center p-5">
                    <span className=" text-xl font-bold text-gray-9   00">My Order </span>
                    <GrClose
                        onClick={() => setActiveCart(!activeCart)}
                        className=" border-2 border-gray-400 font-bold p-1 text-xl rounded-md hover:text-red-400 hover:border-red-500 cursor-pointer"
                    />
                </div>

                {cartItems.map((food) => {
                    return (
                        <ItemCart
                            key={food.id}
                            id={food.id}
                            name={food.name}
                            price={food.price}
                            img={food.img}
                            quantity={food.quantity}
                        />
                    );
                })}
                <div className=" absolute bottom-0 mb-5 p-3">
                    <h3 className=" text-gray-700 font-semibold">
                        Items : {totalQuantity}
                    </h3>
                    <h3 className=" text-gray-700 font-semibold">
                        Total Amount : ₹{totalPrice}
                    </h3>
                    <hr className=" w-[90vw] lg:w-[18vw]" />
                    <button
                        onClick={() => navigate("/access")}
                        className=" bg-green-500 text-white font-bold px-3 py-2 rounded-lg lg:w-[18vw] w-[90vw] items-center"
                    >
                        Checkout
                    </button>
                </div>
            </div>
            <AiOutlineShoppingCart
                onClick={() => setActiveCart(!activeCart)}
                className={`scale-200 text-5xl bottom-5 right-4 rounded-full p-3 fixed bg-white hover:cursor-pointer hover:bg-gray-200 ${totalQuantity > 0 && " animate-bounce transition-all text-red-700"
                    }`}
            />
        </>
    )
}

export default Cart