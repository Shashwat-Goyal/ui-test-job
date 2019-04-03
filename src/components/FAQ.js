import React from 'react';
import {
    Badge
} from 'react-bootstrap';

export default ({question, tag}) => {
    return (
        <div className="faq">
            <p>{question} <span className="faq-tag">{tag}</span></p>
        </div>
    )
}