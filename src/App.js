import React, { Component } from 'react';
import Header from './header'
import Section_2 from './section_2'
import Section_3 from './section_3'
import Section_4 from './section_4'
import Payslist from './payslist'
import Footer from './footer'

import './App.css';

const Paragraph=()=>
{
  return (<div className='section_1'>
  <div className='paragraph'><p style={{marginLeft:'67px'}}>We want patients to find the perfect doctor and book an appointment 
  in the most easy way. The patient journey should be enjoyable, 
  and thats why we are always next to them to help them find the best possible care. 
  Anytime, anywhere.
  </p>
  </div>
  <div className='paragraph'><p>We also help doctors to better manage their practice and build their online reputation. 
    With our integrated end-to-end solution, doctors are able not only to improve their online presence, 
    but also to devote their time to what really matters: their patients.

  </p>
  </div>
  </div>)
}

const List=
    (<select >
    <option selected>CHOOSE COUNTRY</option>
    <option value='#'>Argentina</option>
    <option  value='#'>Australia</option>
    <option value='#'>Brazil</option>
    <option value='#'>Chile</option>
    <option value='#'>Colombia</option>

</select>)

const objpatients=
{
background: '#00ccb1',
title:'For patients',
description:'Find a doctor, book a visit and solve any health-related doubt',
picture:"https://www.docplanner.com/img/screen-marketplace@2x.png",
}
const objdoctors=
{
background: '#3d83df',
title:'For doctors',
description:'Save time managing visits and cut no-shows by half',
picture:"https://www.docplanner.com/img/screen-saas@2x.png",
}


const Objstatique=
{
background:'#FFFFFF',
image:'https://www.docplanner.com/img/flag.png',
title:'Leader in 8 countries',
description:'Poland, Turkey, Spain, Italy, Mexico, Brazil, Argentina and Chile',

}
const Objstatique1=
{
background:'#FFFFFF',
image:'https://www.docplanner.com/img/visits.png',
title:'600 000 appointments',
description:'booked last month',
}

const Objstatique2=
{
background:'#FFFFFF',
image:'https://www.docplanner.com/img/patients.png',
title:'20 million unique patients',
description:'visit us every month',
}
const Objstatique3=
{
background:'#FFFFFF',
image:'https://www.docplanner.com/img/doctors.png',
title:'35 000 active doctors',
description:'trust in our solutions',
}

const pays1=
{
image:'https://www.docplanner.com/images/warsaw.png',
title:'Warsaw'
}
const pays2=
{
image:'https://www.docplanner.com/images/barcelona.png',
title:'Barcelona'
}
const pays3=
{
image:'https://www.docplanner.com/images/istanbul.png',
title:'Istanbul'
}
const pays4=
{
image:'https://www.docplanner.com/images/rome.png',
title:'Rome'
}
const pays5=
{
image:'https://www.docplanner.com/images/mexico-city.png',
title:'Mexico City'
}
const pays6=
{
image:'https://www.docplanner.com/images/curitiba.png',
title:'Curitiba'
}
const payslist=[pays1,pays2,pays3]
const payslist1=[pays4,pays5,pays6]
class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <div className='titre'>
       <img className='logo' src='https://www.docplanner.com/img/sygnet.png'/> 
       <h1>Making the healthcare experience more human</h1>
       </div>
       <Paragraph/>
       <div className="section_2">
       <Section_2 patients={objpatients} list={List}/>
       <Section_2 patients={objdoctors} />
       </div>
       <Section_3 />
       <div className='section_4' style={{background:'#e5faf8', display: 'flex'}}>
       <div className="bloc1">
        <p className='tt'>The world's biggest healthcare platform</p>
        <p className='desc'>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
        <img src='https://www.docplanner-platform.com/img/general/about-us/img/logo.png'/>
        </div>
        <div>
        <div style={{display: 'flex'}}>
        <Section_4 Objstatique={Objstatique}/>
        <Section_4 Objstatique={Objstatique1}/>
        </div >
        <div style={{display: 'flex'}}>
        <Section_4 Objstatique={Objstatique2}/>
        <Section_4 Objstatique={Objstatique3}/>
        </div>
        </div>
        </div>
        <center>
        <p className='tt' style={{lineHeight:'115%'}}>Improve the lives of millions.<br/> Change yours forever</p>

        <p className='desc' style={{lineHeight:'168%'}}>More than 500 team mates share our same vision, 
        goals and passion.<br/> With offices in Warsaw, Barcelona, Istanbul, Rome, 
        Mexico City and <br/>Curitiba, our search for great talent never stops.</p>
        </center>
         <div style={{display:'flex', justifyContent: 'space-around',padding: '11%',marginTop:'-10%'}}>
    
        <Payslist payslist={payslist}/>
        </div>
        <div style={{display:'flex',justifyContent: 'space-around',padding: '11%',marginTop:'-21%'}}>
        <Payslist payslist={payslist1}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
