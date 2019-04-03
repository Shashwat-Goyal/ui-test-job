import React from 'react';
import {
    Row,
    Col,
    Container,
    Badge,
    Nav
} from 'react-bootstrap';
import SearchFilter from './SearchFilter';
import { dummyText, faqs } from '../constants';
import Industries from './Industries';
import FAQ from './FAQ';

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
                icon: ''
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
                icon: ''
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
                icon: ''
            },
            {
                name: 'Travel and Hospitality', 
                categories: [
                    'Travel Tech',
                    'Transport Tech',
                    'Hospitality Tech'
                ]
            },
            {
                name: 'Other verticals', 
                categories: [
                    'Education Tech',
                    'Legal Tech',
                    'Ag Tech'
                ],
                icon: ''
            }
        ]

        return (
            <Container className="content">
                <Row>
                    <Col sm={9}>
                        <div className="theme-bg industry-container">
                            <p className="ft-white">Choose from our smart filters</p>
                            <p className="ft-12">{dummyText} consectetur</p>
                            <Nav justify variant="tabs" defaultActiveKey="/home">
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
                                    <Nav.Link eventKey="sector">Industry</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="sector">Sub-Industry</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="sector">Region</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Row>
                            {
                                faqs.map((faq, i) => {
                                    return <Col sm={6} key={i}><FAQ {...faq} /></Col>
                                })
                            }
                            </Row>
                        </div>
                        <div className="theme-bg industry-container">
                            <p className="ft-white">Discover the popular sectors we track</p>
                            <p className="ft-12">{dummyText} consectetur</p>
                            {
                                industries.map((industry, i) => {
                                    return <Badge key={i} pill variant="dark">
                                        {industry.name}
                                    </Badge>
                                })
                            }
                            <Row>
                                {
                                    industries.map((industry, i) => {
                                        return <Col key={i} sm={6}>
                                            <Industries {...industry} />
                                        </Col>
                                    })
                                }
                            </Row>
                        </div>
                    </Col>
                    <Col sm={3}>
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