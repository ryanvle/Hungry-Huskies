import React, {useState} from 'react';
import _ from 'lodash';
import { Button, Table } from 'reactstrap';
import { Link } from "react-router-dom";
import { SearchAndFilterForm } from './SearchAndFilterForm';

export function RestaurantList(props) {

    const [sortByItem, setSortByItem] = useState(null);
    const [isAscending, setIsAscending] = useState(null);
    
    const handleClick = (event) => {
        if (event.currentTarget.name != sortByItem) {
            setSortByItem(event.currentTarget.name);
            setIsAscending(true);
        }
        else {
            if (isAscending) {
                setIsAscending(false);
            }
            else {
                setSortByItem(null);
                setIsAscending(null);
            }
        }
    }

    const sortedFoodData = _.sortBy(props.restaurants, sortByItem);
    if (setSortByItem != null && isAscending == false) {
            _.reverse(sortedFoodData);
    }
    const rows = sortedFoodData.map((restaurant) => {
        return <RestaurantRow key={restaurant.name} food={restaurant} />
      });

    return (
        <div >
            <SearchAndFilterForm applyFilter={props.applyFilteCallBckr}/>
            <Table>
                <thead >
                    <tr>
                        <th>
                            
                            <SortButton name='name' onClick={handleClick}/>
                        </th>
                        <th>
                            
                            <SortButton name='stars' onClick={handleClick}/>
                        </th>
                        <th>
                            
                            <SortButton name='price' onClick={handleClick}/>
                        </th>
                        <th>
                            
                            <SortButton name='area' onClick={handleClick}/>
                        </th>
                        <th>
                            <SortButton name='category' onClick={handleClick}/>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
        </div>
    );
}

function SortButton(props) {
    return (
        <Button name={props.name} onClick={props.onClick} color='primary' outline active block>
            {props.name[0].toUpperCase() + props.name.slice(1)}
        </Button>
    );
}

function RestaurantRow({food}) {
    return(
        <tr>
            <th><Link to={"/restaurants/"+food.name}>{food.name}</Link></th>
            <th>{food.stars}</th>
            <th>{food.price}</th>
            <th>{food.area}</th>
            <th>{food.category}</th>
        </tr>
    );
}