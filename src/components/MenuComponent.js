import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
class Menu extends Component {
    render() {
        const menu = this
            .props
            .dishes
            .map((dish, index) => {
                return (
                    <div  key={dish.id}  className="col-md-6 p-1">
                        <Card onClick={() => this.props.onDishSelect(dish.id)}>
                            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                );
            });
        return (
            <div className="row">
                {menu}
            </div>
        );
    }
}
export default Menu;