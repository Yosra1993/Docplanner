import React from 'react';
import Section_5 from './section_5';

const Payslist=(props)=>
{
    return (
        props.payslist.map((elm,i) =>
        
        <Section_5 key={i} pays={elm} />
        
    )
)
}
export default Payslist;