import React from 'react';
import { Outlet } from "react-router-dom";
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody } from 'reactstrap';


export function RestaurantPage(props) {
    return (
            <div>
                <div>
                    <Card inverse>
                        <CardImg alt="Uw food"
                            src="./img/uw_food.jpeg"
                            height="200"/>
                        <CardImgOverlay>
                            <CardTitle tag='h1'>Restaurants</CardTitle>
                        </CardImgOverlay>
                        
                    </Card>
                </div>
                <Outlet/>
            </div>
    );
}