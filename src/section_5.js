import React, { Component } from 'react';

const Section_5=({pays:{image,title}})=>
{
    return(
       <div className='Section_5'>
          <a href="#">  <img className='image_pays' src={image} style={{ borderRadius:'2%'}}/>
          <div style={{display:'flex'}} >
            <p>{title}</p>
            <input className='button1' type='button' value='SEE OPENINGS' style={{height:'39px',marginTop:'6%'}}/>
            </div></a>
    
        </div>
    
    )
}
export default Section_5;