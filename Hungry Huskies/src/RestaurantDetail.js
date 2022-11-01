import React from 'react';
import { useParams } from 'react-router';
import _ from 'lodash';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function RestaurantDetail(props) {

    const restaurantNameString = useParams().restaurantName;
    let restaurant = _.find(props.restaurants, {name: restaurantNameString});

    return (
        <div>
            <h2>{restaurant.name}</h2>
            <ul>
                <h3>Details</h3>
                <li>Stars: {restaurant.stars}</li>
                <li>Price Level: {restaurant.price}</li>
                <li>Area: {restaurant.area}</li>
                <li>Category: {restaurant.category}</li>
            </ul>
            <Button outline><Link to='/restaurants'>Back</Link></Button>
        </div>
    );
}

export default RestaurantDetail;