import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg, CardImgOverlay, Button } from 'reactstrap';
export function MainPage() {
  return(
    <div>
      <Card inverse>
        <CardImg alt="Uw food" src="./img/UW-Fries.jpg" width="100%" class='imgCard' />
        <CardImgOverlay>
          <CardTitle >We are Hungry Huskies!</CardTitle>
          <Card body className="text-center">
            <CardTitle tag="h5">
              <div class="cardTitle">Keeping the Huskies Fed</div>
            </CardTitle>
            <CardText>
              <div class="cardText"> 
                Hungry Huskies is a website that makes finding the perfect place to eat around the University of Washington as a student easier!
                Our website provides a variety of filtering functions allowing users to do a quick sort of restaurants around the area and help make their choices!
              </div>
            </CardText>
          </Card>
        </CardImgOverlay>
      </Card>
    </div>
  );

}