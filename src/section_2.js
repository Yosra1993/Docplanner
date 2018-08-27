import React from 'react'

const Section_2=({list, patients:{background,title,description,picture}})=>
{return (
<div className='section_22' style={{background,borderRadius:'3%', marginLeft:'2%'}}>
   
<p style={{color: 'white',opacity:'0.8'}}>{title}</p>
  
<h2 style={{color:'white',fontWeight:'normal',width:'50%',marginLeft:'4%'}}>{description}</h2>
{list}   
<img src={picture} style={{width:'53%', marginLeft:'45%'}}/>



</div>)
}
export default Section_2;
