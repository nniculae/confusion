<<<<<<< HEAD
import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

function Contact(props) {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/home'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr/>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Our Address</h5>
                    <address>
                        121, Clear Water Bay Road<br/>
                        Clear Water Bay, Kowloon<br/>
                        HONG KONG<br/>
                        <i className="fa fa-phone"></i>: +852 1234 5678<br/>
                        <i className="fa fa-fax"></i>: +852 8765 4321<br/>
                        <i className="fa fa-envelope"></i>:
                        <a href="mailto:confusion@food.net">confusion@food.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678">
                            <i className="fa fa-phone"></i>
                            Call</a>
                        <a role="button" className="btn btn-info">
                            <i className="fa fa-skype"></i>
                            Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net">
                            <i className="fa fa-envelope-o"></i>
                            Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
=======
import React, {Component} from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Col
} from 'reactstrap';
import {Link} from 'react-router-dom';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            telephoneNumber: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: ''
        };
    }
    handleInputChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox'
            ? target.checked
            : target.value;
        const name = target.name;

        this.setState({
            [name]:value
        });

    }
    handleSubmit = (e) => {

       

        e.preventDefault();

        console.log("Current state: %s", JSON.stringify(this.state));

    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/home'>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br/>
                            Clear Water Bay, Kowloon<br/>
                            HONG KONG<br/>
                            <i className="fa fa-phone"></i>: +852 1234 5678<br/>
                            <i className="fa fa-fax"></i>: +852 8765 4321<br/>
                            <i className="fa fa-envelope"></i>:
                            <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678">
                                <i className="fa fa-phone"></i>
                                Call</a>
                            <a role="button" className="btn btn-info">
                                <i className="fa fa-skype"></i>
                                Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net">
                                <i className="fa fa-envelope-o"></i>
                                Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="div-12">
                        <h3>Send us your feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange}  
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={this.state.firstName}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange}  
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={this.state.lastName}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telephoneNumber" md={2}>Telephone Number</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange}  
                                        type="text"
                                        id="telephoneNumber"
                                        name="telephoneNumber"
                                        placeholder="Telephone Number"
                                        value={this.state.telephoneNumber}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange}  
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        value={this.state.email}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col
                                    md={{
                                    size: 6,
                                    offset: 2
                                }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input onChange={this.handleInputChange}   type="checkbox" name="agree" checked={this.state.agree}/>{' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>

                                </Col>
                                <Col
                                    md={{
                                    size: 3,
                                    offset: 1
                                }}>
                                    <Input onChange={this.handleInputChange}  
                                        type="select"
                                        name="select"
                                        id="contactType"
                                        name="contactType"
                                        value={this.state.contactType}>
                                        <option>Telephone</option>
                                        <option>Email</option>

                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Message</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange}  
                                        type="textarea"
                                        id="message"
                                        name="message"
                                        rows="12"
                                        value={this.state.message}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col
                                    md={{
                                    size: 10,
                                    offset: 2
                                }}>
                                    <Button type="submit" color='primary'>Send Feedback</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>

            </div>
        );
    }

>>>>>>> 511420d... Add Contact Us Form (controlled)
}

export default Contact;