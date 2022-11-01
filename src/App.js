import React, { useState, useEffect } from 'react';
import { PageHeader } from './PageHeader';
import { NavBar } from './NavBar';
import { PageFooter } from './PageFooter';

import { RestaurantPage } from './RestaurantPage';
import { MainPage } from './MainPage';
import RestaurantDetail from './RestaurantDetail';
import { RestaurantList } from './RestaurantList';

import {Routes, Route, Navigate} from 'react-router-dom';
import 'whatwg-fetch';
import 'bootstrap/dist/css/bootstrap.min.css';

export function App(props) {

  const [filterByItem, setFilterByItem] = useState('');
  let [food, setFood] = useState([]);

  useEffect(() => {
    fetch("./uw-food.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setFood(data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])
  
  if (filterByItem != '') {
    food = food.filter(restaurant => restaurant.area == filterByItem || restaurant.category == filterByItem);
  }
  let applyFilter = function(item) {
    setFilterByItem(item);
  }
  
  return (
      <div>
        <PageHeader />
        <NavBar />

        <main>
          <Routes>
            <Route path='main' element={<MainPage />} />
            <Route path='restaurants' element={<RestaurantPage />}>
              <Route path=':restaurantName' element={<RestaurantDetail restaurants={food} />} />
              <Route index element={<RestaurantList restaurants={food} applyFilteCallBckr={applyFilter}/>} />
            </Route>
            <Route path='/*' element={<Navigate to='/main'/>} />
          </Routes>

        </main>

        <PageFooter />
      </div>
  );
}

export default App;