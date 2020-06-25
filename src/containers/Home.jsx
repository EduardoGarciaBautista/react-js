import React from 'react';
import {connect} from 'react-redux';
import '../assets/styles/App.scss'
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CaruselItem";

const Home = ({myList, trends, originals}) => {

    if (!myList || !trends || !originals) {
        return <h1>Loading</h1>
    }
    return (
        <>
            <Search/>
            {myList.length > 0 &&
            <Categories title="Mi lista">
                <Carousel>
                    {myList.map(item =>
                        <CarouselItem
                            key={item.id}
                            {...item}
                            isList
                        />
                    )
                    }
                </Carousel>
            </Categories>
            }
            <Categories title="Tendencias">
                <Carousel>
                    {trends.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                    )
                    }
                </Carousel>
            </Categories>
            <Categories title="Originales de platzi">
                <Carousel>
                    {originals.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                    )
                    }
                </Carousel>
            </Categories>
        </>
    )
}

/*
Obtiene del estao principal las propiedades que este componente necesita
 */
const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals
    }
}
export default connect(mapStateToProps, null)(Home);
