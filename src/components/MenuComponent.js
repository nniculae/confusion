import React from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

const RenderMenuItem = ({dish, onDishSelect}) => {
    return (
        <Card onClick={() => onDishSelect(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}
const Menu = (props) => {
    const menu = props
        .dishes
        .map((dish, index) => {
            return (
                <div key={dish.id} className="col-md-6 p-1">
                    <RenderMenuItem dish={dish} onDishSelect={props.onDishSelect}/>
                </div>
            );
        });
    return (
        <div className="row">
            {menu}
        </div>
    );
}

export default Menu;
// export default RenderMenuItem;