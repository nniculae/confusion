import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem
} from 'reactstrap';
import {Link} from 'react-router-dom';
function RenderDish({dish}) {
    if (dish) {
        return (
            <div className="col-md-6 p-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    } else 
        return (
            <div></div>
        );
    }
function RenderComments({commentsArray}) {
    if (!commentsArray) 
        return <div></div>;
    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const comments = commentsArray.map((comment) => {
        return (
            <ul key={comment.id} className="list-unstyled">
                <li>{comment.comment}</li>
                <li>--{comment.author}, {new Date(comment.date).toLocaleDateString('nl-NL', options)}</li>
            </ul>
        );
    });
    return (
        <div className="col-md-6 p-1">{comments}</div>
    );
}
const DishDetail = (props) => {
    if (!props.dish) {
        return (
            <div></div>
        );
    }
    return (
        <React.Fragment>
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/home'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                    <Link to='/menu'>Menu</Link>
                </BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <RenderDish dish={props.dish}/>
                <RenderComments commentsArray={props.comments}/>
            </div>
        </React.Fragment>
    );
}
export default DishDetail;