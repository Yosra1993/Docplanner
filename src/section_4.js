import React, { Component } from 'react';

const Section_4=({Objstatique:{background,image,title,description}})=>
    
   { return  (<div className="bloc2" style={{background, marginTop:'9%',width: '35%',marginLeft: '11%',height:'262px'}}>

  
   <center> <img src={image} style={{marginTop:'16%'}}/>
     <h3 style={{color:'#00b39b',fontWeight:'normal'}}>{title}</h3>
    
     <p style={{fontSize:'80%',color:'gray'}}>{description}</p></center>
    
    </div>)

}
export default Section_4;