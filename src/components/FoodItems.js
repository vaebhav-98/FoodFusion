import React from 'react'
import foodList from "../assets/data";
import Cards from './Cards';
import { useSelector } from 'react-redux';

const FoodItems = () => {
    const Search = useSelector((state) => state.search.search);
  const category = useSelector((state) => state.category.category);
    return (
        <div className=''>
            
            <div className='grid grid-cols-1 gap-6 px-6 lg:px-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto border-t border-gray-200 py-6'>
                {/*  {
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
                } */}

                {
                    foodList.filter((food) => {
                        if (category === "All") {
                          return food.name.toLowerCase().includes(Search.toLowerCase());
                        } else {
                          return (
                            category === food.category &&
                            food.name.toLowerCase().includes(Search.toLowerCase())
                          );
                        }
                      }).map((item) => {
                        return <Cards
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            desc={item.desc.slice(0, 100)}
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