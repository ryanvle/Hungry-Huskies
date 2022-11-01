import React, { useState } from 'react';
import { Form, Input, Label, Button, FormGroup } from 'reactstrap';

export function SearchAndFilterForm(props) {

    const [filterItem, setFilterItem] = useState('');

    let selectCallBck = (event) => {
        if (event.target.value != filterItem) {
            setFilterItem(event.target.value);
        }
    }

    let submitButtonCallBck = (event) => {
        props.applyFilter(filterItem);
    }


    return (
        <Form>
            <Label for='selectFilter'>
                Select Filter (Category or Area)
            </Label>
            <FormGroup>
            <Input id='selectFilter'name='select' type='select' onChange={selectCallBck}>
                <option value=''>Select Filter </option>
                <option value='The Ave'>The Ave </option>
                <option value='UVillage'>UVillage </option>
                <option value='Boba'>Boba </option>
                <option value='Burgers'>Burgers </option>
                <option value='Chinese'>Chinese </option>
                <option value='Coffee/Tea'>Coffee/Tea </option>
                <option value='Fast Food'>Fast Food </option>
                <option value='Greek'>Greek </option>
                <option value='Japanese'>Japanese </option>
                <option value='Korean'>Korean </option>
                <option value='Mexican'>Mexican </option>
                <option value='Sandwiches'>Sandwiches </option>
                <option value='Taiwanese'>Taiwanese </option>
                <option value='Tea'>Tea </option>
                <option value='Thai'>Thai </option>
                <option value='Vietnamese'>Vietnamese </option>
            </Input>
            </FormGroup>
            
            <FormGroup>
                <Button color='primary' outline active onClick={submitButtonCallBck}> 
                    Submit
                </Button>
            </FormGroup>

        </Form>
    );
}