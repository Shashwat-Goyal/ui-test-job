import React from 'react';
import {
    Badge
} from 'react-bootstrap';

export default ({icon='', name='', categories=[]}) => {
    
    return (
        <div className="industry-section padding">
            <p><i className={icon}></i> <span className="ft-white">{name}</span> <span className="pull-right ft-12">VIEW INDUSTRIES</span></p>
            {
                categories.map((tag, i) => {
                    return <Badge variant="dark">{tag}</Badge>
                })
            }
        </div>
    )
}