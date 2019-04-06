import React, { Fragment } from 'react';
import {
    Row,
    Col,
    Container,
    Badge,
    Nav,
    Button,
    Carousel
} from 'react-bootstrap';
import SearchFilter from './SearchFilter';
import { dummyText, faqs, tags } from '../constants';
import Industries from './Industries';
import FAQ from './FAQ';
import ArrowChart from '../arrow-chart.png';
import BarChart from '../bar-chart.png';
import Slider from 'react-slick';

export default class Content extends React.Component {
    render() {

        const filters = [
            {title: 'Find strategic gaps', subTitle: dummyText, placeholder: 'Search a company', icon: 'fa fa-th-large', type: "text"},
            {title: 'Explore market maps', subTitle: dummyText, placeholder: 'Select a sector', icon: 'fa fa-search', type: "select"},
            {title: 'Identify potential acquirers', subTitle: dummyText, placeholder: 'Search a company', icon: 'fa fa-pie-chart', type: "text"},
            {title: 'Identify companies due for Exit', subTitle: dummyText, placeholder: 'Select a sector', icon: 'fa fa-sign-out', type: "select"},
            {title: 'Identify growth Companies', subTitle: dummyText, placeholder: 'Select a sector', icon: 'fa fa-line-chart', type: "select"}
        ];

        const industries = [
            {
                name: 'Enterprise Infrastructure', 
                categories: [
                    'Enterprise Networking',
                    'Enterprise Servers & Systems',
                    'Enterprise Storage',
                    'Application Development & Integration',
                    'Cyber Security',
                    'Enterprise IT Operations Management'
                ],
                icon: 'fa fa-plane'
            },
            {
                name: 'Enterprise Software', 
                categories: [
                    'AdTech',
                    'AR/VR',
                    'Blockchain',
                    'Digital Marketing',
                    'Enterprise Communications',
                    'Financial Management Tech',
                    'Human Capital Management Tech',
                    'Sales & CRM Software',
                    'Supply Chain Management',
                ],
                icon: 'fa fa-desktop'
            },
            {
                name: 'AI & Analytics', 
                categories: [
                    'Artificial Intelligence',
                    'Data Management & Analytics'
                ],
                icon: 'fa fa-desktop'
            },
            {
                name: 'Internet of Things', 
                categories: [
                    'IoT - Devices & Platforms',
                    'IoT - Auto',
                    'IoT - Commercial Buildings',
                    'IoT - Consumer',
                    'IoT - Industrial',
                    'IoT - Smart City',
                    'IoT - Utilities'
                ],
                icon: 'fa fa-globe'
            },
            {
                name: 'FinTech', 
                categories: [
                    'Alternative Lending & Financing',
                    'Banking Tech',
                    'Capital Markets Tech',
                    'Financial Data & Analytics',
                    'Insurance Tech - Auto',
                    'Insurance Tech - Life & Health',
                    'Insurance Tech - Property & Casualty',
                    'Payment & Transfers',
                    'RegTech',
                    'WealthTech'
                ],
                icon: 'fa fa-desktop'
            },
            {
                name: 'Industrial Tech', 
                categories: [
                    '3D Printing',
                    'Auto Tech',
                    'Drones',
                    'Manufacturing Tech',
                    'Robotics',
                    'Utilities Tech',
                    'IoT- Auto',
                    'IoT - Industrial',
                    'IoT - Utilities'
                ],
                icon: 'fa fa-wrench'
            },
            {
                name: 'Retail & Ecommerce Tech', 
                categories: [
                    'Retail Tech',
                    'Ecommerce Tech'
                ],
                icon: 'fa fa-desktop'
            },
            {
                name: 'Travel and Hospitality', 
                categories: [
                    'Travel Tech',
                    'Transport Tech',
                    'Hospitality Tech'
                ],
                icon: 'fa fa-desktop'
            },
            {
                name: 'Other verticals', 
                categories: [
                    'Education Tech',
                    'Legal Tech',
                    'Ag Tech'
                ],
                icon: 'fa fa-desktop'
            }
        ]

        var settings = {
            arrows: false,
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            className: 'faq-slider'
        };

        return (
            <Container className="content">
                <Row>
                    <Col lg={9} md={12} sm={12} xs={12}>
                        <div className="theme-bg industry-container">
                            <h4 className="ft-white">Choose from our smart filters</h4>
                            <p>{dummyText} consectetur</p>
                            <Nav justify variant="tabs" defaultActiveKey="company">
                                <Nav.Item>
                                    <Nav.Link eventKey="company">Company</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="investor">Investor</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="person">Person</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="sector">Sector</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="industry">Industry</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="sub-industry">Sub-Industry</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="region">Region</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Row>
                                <Fragment>
                                    <div className="mt-10 col-12">
                                        {
                                            tags.map(tag => {
                                                return <Badge pill className={tag.className}>{tag.name}</Badge>
                                            })
                                        }
                                    </div>
                                    <div className="col-12">
                                        <Slider {...settings}>
                                            {
                                                [...new Array(4)].map(item => (<div>
                                                    <Row className="nomargin mb-4">
                                                        {
                                                            faqs.map((faq, i) => {
                                                                return <Col sm={6} xs={12} key={i}><FAQ {...faq} /></Col>
                                                            })
                                                        }
                                                    </Row>
                                                    </div>
                                                ))
                                            }
                                        </Slider>
                                    </div>
                                </Fragment>
                            </Row>
                        </div>
                        <div className="charts-container">
                            <Row>
                                <Col lg={6} md={12} sm={12} xs={12}>
                                    <Row className="nomargin theme-bg res-text-center">
                                        <Col md={6} sm={12} xs={12}>
                                            <img src={ArrowChart} height={120} />
                                            <p className="ft-white margin-set">Run select use cases for</p>
                                        </Col>
                                        <Col md={6} sm={12} xs={12}>
                                            <Button className='charts-btn' block variant="outline-dark">Buy side PE</Button>
                                            <Button className='charts-btn' block variant="outline-dark">Buy side Corporate</Button>
                                            <Button className='charts-btn' block variant="outline-dark">Sell side</Button>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={6} md={12} sm={12} xs={12}>
                                    <Row className="nomargin theme-bg res-text-center">
                                        <Col md={4} sm={12} xs={12}>
                                            <img src={BarChart} height={120} />
                                            <p className="ft-white margin-set">Top Charts</p>
                                        </Col>
                                        <Col md={8} sm={12} xs={12} className="nopadding">
                                            <Button size="sm" className='charts-btn' variant="outline-dark">Acquirers</Button>
                                            <Button size="sm" className='charts-btn' variant="outline-dark">Founders</Button>
                                            <Button size="sm" className='charts-btn' variant="outline-dark">Board members</Button>
                                            <Button size="sm" className='charts-btn' variant="outline-dark">Investment partners</Button>
                                            <Button size="sm" className='charts-btn' variant="outline-dark">Corporate VCs</Button>
                                            <Button size="sm" className='charts-btn' variant="outline-dark">Smart money investors</Button>
                                            <Button size="sm" className='charts-btn' variant="outline-dark">Private Equity</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                        <div className="theme-bg industry-container">
                            <h4 className="ft-white">Discover the popular sectors we track</h4>
                            <p className='placeholder_paragraph'>{dummyText} consectetur</p>
                            {
                                industries.map((industry, i) => {
                                    return <Badge key={i} pill variant="dark">
                                        {industry.name}
                                    </Badge>
                                })
                            }
                            <Row>
                                <Col md={6} sm={12} xs={12} className="nopadding">
                                    {
                                        industries.filter((industry, i) => i%2 == 0).map((industry, i) => {
                                            return <Col key={i} sm={12}>
                                                <Industries {...industry} />
                                            </Col>
                                        })
                                    }
                                </Col>
                                <Col md={6} sm={12} xs={12} className="nopadding">
                                    {
                                        industries.filter((industry, i) => i%2 != 0).map((industry, i) => {
                                            return <Col key={i} sm={12}>
                                                <Industries {...industry} />
                                            </Col>
                                        })
                                    }
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={3} md={12} sm={12} xs={12}>
                        {filters.map(filter => {
                            return <SearchFilter 
                                {...filter}
                            />
                        })}
                    </Col>
                </Row>
            </Container>
        )
    }
}