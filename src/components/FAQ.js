import React from 'react';
import {
    Badge
} from 'react-bootstrap';

export default ({question, tag}) => {
    console.log(tag, "tag")
    return (
        <div className="faq">
            <p className="nomargin">{question} <span className="faq-tag"><Badge pill className={tag.className}>{tag.name}</Badge></span></p>
        </div>
    )
}