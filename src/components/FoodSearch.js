import React from 'react'
import { setSearch } from '../features/SearchSlice'
import { useDispatch } from 'react-redux'
import FoodMenu from './FoodMenu';

const FoodSearch = () => {
    const dispatch = useDispatch();

    return (
        <nav className="flex flex-col lg:flex-row justify-between gap-8 items-center py-3 mb-5 max-w-7xl mx-auto px-6 lg:px-8 mt-4 ">
            {/* <div>
                <h3 className=" text-gray-800 text-xl font-blod ">
                    {new Date().toUTCString()}
                </h3>
                <h1 className="font-bold text-2xl">TasteFusion</h1>
            </div> */}
            <FoodMenu/>
            <div>
                <input
                    type="text"
                    name="search"
                    id=""
                    placeholder="Search Here"
                    autoComplete="false"
                    onChange={(e) => dispatch(setSearch(e.target.value))}
                    className="w-full rounded-full border shadow p-2 text-sm border-orange-300 px-4"
                />
            </div>
        </nav>
    )
}

export default FoodSearch