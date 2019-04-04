import React from 'react';
import {
    Badge
} from 'react-bootstrap';

export default ({question, tag}) => {
    return (
        <div className="faq">
            <p className="nomargin">{question} <span className="faq-tag"><Badge pill variant="dark">{tag}</Badge></span></p>
        </div>
    )
}