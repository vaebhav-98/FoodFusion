import React from 'react'
import foodList from "../assets/data";
import Cards from './Cards';

const FoodItems = () => {
    return (
        <div>
            <h2 class="text-xl font-bold text-gray-900 sm:text-3xl text-center mt-8">
                Taste Fusion
            </h2>

            <p class="max-w-md mx-auto mt-4 text-gray-500 text-center">
                The ultimate destination for culinary enthusiasts. <strong>Taste Fusion</strong> is the result of our passion for food and our commitment to providing you with an exceptional dining experience.
            </p>
            <div className='grid grid-cols-1 gap-6 px-6 lg:px-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto mt-8'>
                {
                    foodList.map((item) => {
                        return <Cards
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            desc={item.desc.slice(0,100)}
                            rating={item.rating}
                            img={item.img}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default FoodItems