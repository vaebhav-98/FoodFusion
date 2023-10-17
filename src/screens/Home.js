import React from 'react'
import FoodItems from '../components/FoodItems'
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../components/Cart';
import FoodMenu from '../components/FoodMenu';
import FoodSearch from '../components/FoodSearch';

const Home = () => {
    const cartItems = useSelector((state) => state.cart.cart);
    cartItems.length > 0 ? (console.log(cartItems)) : console.log(cartItems)
    return (
        <div>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl text-center mt-8">
                Taste Fusion
            </h2>

            <p className="max-w-md mx-auto mt-4 text-gray-500 text-center">
                The ultimate destination for culinary enthusiasts. <strong>Taste Fusion</strong> is the result of our passion for food and our commitment to providing you with an exceptional dining experience.
            </p>

            <h1 class="text-4xl font-bold tracking-tight text-gray-900 max-w-7xl mx-auto px-6 lg:px-8 mt-8">Discover our menu</h1>
            <FoodSearch/>
            {/* <FoodMenu /> */}
            <FoodItems />
            <Cart />
        </div>
    )
}

export default Home