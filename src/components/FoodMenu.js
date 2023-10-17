import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../features/CategorySlice';
import foodList from '../assets/data';
const FoodMenu = () => {
    const dispatch = useDispatch();
    const [categories, setCategories] = useState([]);
    const selectedCategory = useSelector((state) => state.category.category);

    const listUniqueCategories = () => {
        const uniqueCategories = [
            ...new Set(foodList.map((food) => food.category)),
        ];
        setCategories(uniqueCategories);
    };

    useEffect(() => {
        listUniqueCategories();
        console.log(categories);
    }, []);

    return (
        <div className="flex flex-col items-center">
            {/* <h3 className="font-semibold">Discover our menu</h3> */}
            <div className="flex flex-wrap gap-2 overflow-x-auto scroll-smooth lg:overflow-hidden">
                <button
                    onClick={() => dispatch(setCategory("All"))}
                    className={`px-3 py-2 bg-gray-200 text-sm font-medium text-gray-700 rounded-lg hover:text-orange-400  ${selectedCategory === "All" && "text-orange-400"
                        }`}
                >
                    All
                </button>

                {categories.map((category, index) => {
                    return (
                        <button
                            onClick={() => dispatch(setCategory(category))}
                            key={index}
                            className={` px-3 py-2 bg-gray-200 text-sm font-medium text-gray-700  rounded-lg hover:text-orange-400  ${selectedCategory === category && "text-orange-400"
                                }`}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>
        </div>
    )
}

export default FoodMenu