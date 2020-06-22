import React, {useState, useEffect} from 'react';
import Header from "../components/Header";
import '../assets/styles/App.scss'
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CaruselItem";
import Footer from "../components/Footer";
import useInitialState from "../hooks/useInitialState";
const API = 'http://localhost:3000/initialState';

const App = () => {
const initialState = useInitialState(API);

    if (initialState.length === 0) {
        return <h1>Loading</h1>
    }
    return (
        <div className="App">
            <Header/>
            <Search/>
            {initialState.mylist.length > 0 &&
            <Categories title="Mi lista">
                <Carousel>
                    <CarouselItem/>
                </Carousel>
            </Categories>
            }
            <Categories title="Tendencias">
                <Carousel>
                    {initialState.trends.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                        )
                    }
                </Carousel>
            </Categories>

            <Footer/>
        </div>
    )
}
export default App;
