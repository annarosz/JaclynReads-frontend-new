import React from 'react';
import IntroSectionFlexi from '../components/IntroSectionFlexi';
import Jaclyn from '../Jaclyn.jpg';
import './AboutMe.css'; 

function AboutMe() {

  return (
    <>
    <div className="containerSecondary" style={{ backgroundColor: '#FFF38A' }}>
      <IntroSectionFlexi 
        headingOne="A little bit about me..." 
        headingTwo="Hi, I'm Jaclyn and I love to read new release books and share my thoughts with you."
      />
      <div className="bioSection">
        <div className="bioSectionLeft">
          <img src={Jaclyn} alt="Jaclyn" />
        </div>
        <div className="bioSectionRight">
          <p>Lorem ipsum dolor amet hell of readymade affogato raclette stumptown, scenester messenger bag church-key austin gastropub occupy. Affogato everyday carry locavore selvage tote bag cold-pressed venmo wayfarers pork belly. Flannel celiac chia, palo santo bicycle rights air plant leggings succulents crucifix. 90's DIY kinfolk, organic farm-to-table mixtape adaptogen fingerstache. Drinking vinegar adaptogen vice literally. Woke pinterest franzen asymmetrical marfa, art party kale chips paleo beard farm-to-table cronut food truck.</p>
          <h2>Want to say hi?</h2>
          <p>I love to talk books (as if you haven't noticed) if you'd like to contact me, you can email me <a href="mailto:roszko_anna@gmail.com">HERE</a>.</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default AboutMe;