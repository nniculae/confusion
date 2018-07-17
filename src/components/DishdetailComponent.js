import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
/**
 * It displays the details of a selected dish
 */
class Dishdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };
    render() {
        if (this.props.selectedDish) {
            let dish = this.props.selectedDish;
            return (

                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish.comments)}
                    </div>

                </div>
            );
        } else 
            return (
                <div></div>
            );
        }
    renderComments(commentsArray) {
        if (!commentsArray) 
            return <div></div>;
            let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        const comments = commentsArray.map((comment) => {
            return (
                <ul className="list-unstyled">
                    <li>{comment.comment}</li>
                    <li>--{comment.author}, {new Date(comment.date).toLocaleDateString('nl-NL', options)}</li>
                </ul>
            );
        });
        return ( <div>{comments}</div>);

    }

}
export default Dishdetail;