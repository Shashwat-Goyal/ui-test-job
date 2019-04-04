import React, { Component } from 'react';
import {
    Form,
    Col,
    Row
} from 'react-bootstrap';

export default class SearchFilter extends Component {
    render() {
        
        const {icon, title='', subTitle='', type='text', placeholder='' } = this.props;

        return (
            <div className="theme-bg search-filter">
                <p className="mb-10 ft-white"><span className="icon">
                    <i className={icon}></i>
                </span>{title}</p>
                <p className="mb-10 subtitle">{subTitle}</p>
                <Row>
                    <Col xs={10}>
                        {type !== 'select' ? 
                            <Form.Group className="nomargin" controlId="exampleForm.ControlInput1">
                                <Form.Control className="theme-bg" type={type} placeholder={placeholder} />
                            </Form.Group>
                            : <Form.Group className="nomargin" controlId="exampleForm.ControlSelect1">
                                <Form.Control className="theme-bg" as="select">
                                <option value="">{placeholder}</option>
                                <option value="option 1">1</option>
                                <option value="option 2">2</option>
                                <option value="option 3">3</option>
                                <option value="option 4">4</option>
                                </Form.Control>
                            </Form.Group>
                        }
                    </Col>
                    <Col xs={2} className="justify-center">
                        <span className="theme-bg"><i className="ft-white ft-12 fa fa-chevron-right"></i></span>
                    </Col>
                </Row>   
            </div>
        )
    }
}