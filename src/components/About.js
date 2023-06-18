import React, {Component} from 'react'
import "./about.css"
import $ from 'jquery'
import { render } from '@testing-library/react';

export default class About extends Component {
    jQuerycode = () => {
        $(document).ready(function(){
            $(".sec").eq(0).click(function(){
                $(this).next(".collapsable").slideToggle();
                $(this).children(".section").text("Origins");                           
                $(this).children(".fa").toggleClass("fa-chevron-circle-up right");                        
                
            });
            $(".sec").eq(1).click(function(){
                $(this).next(".collapsable").slideToggle();
                $(this).children(".section").text("Mission");                           
                $(this).children(".fa").toggleClass("fa-chevron-circle-up right");    
                 
            });
            $(".sec").eq(2).click(function(){
                $(this).next(".collapsable").slideToggle();
                $(this).children(".section").text("Vision");                           
                $(this).children(".fa").toggleClass("fa-chevron-circle-up right");    
                 
            });
            $(".sec").eq(3).click(function(){
                $(this).next(".collapsable").slideToggle();
                $(this).children(".section").text("Extras");                           
                $(this).children(".fa").toggleClass("fa-chevron-circle-up right");    
                 
            });
            $(".sec").eq(4).click(function(){
                $(this).next(".collapsable").slideToggle();
                $(this).children(".section").text("Extras2");                           
                $(this).children(".fa").toggleClass("fa-chevron-circle-up right");    
                 
            });
            $(".sec").mouseenter(function(){                           
                $(this).addClass("opacity-35");
                $(this).children(".section").text("Click for more");
                $(this).next(".collapsable").css({"width":"100%"});
            });
            $(".sec").mouseleave(function(){                            
                $(this).removeClass("opacity-35");
                $(".sec").eq(0).children(".section").text("Origins");
                $(".sec").eq(1).children(".section").text("Mission");
                $(".sec").eq(2).children(".section").text("Vision");
                $(".sec").eq(3).children(".section").text("Extras");
                $(".sec").eq(4).children(".section").text("Extras2");
                $(this).next(".collapsable").css({"width":"100%"});
            });
        
        });
    }
    componentDidMount(){
        this.jQuerycode()
    }
    render(){
    return (
    <div>
    <section className="page-section" id="about">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">About Us</h2>
          <h3 className="section-subheading text-muted">Learn a little bit more about <a href='/'><i style={{color:'goldenrod'}}>GoldenLife Victors</i></a> here</h3>
        </div>
        <ul className="timeline">
          <li>
            <div className="timeline-image">
             <h4>
                Our
                <br/>
                <i class="fas fa-history"></i>
                <br />
                Story                
              </h4>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="subheading"><u><i>Our Story</i></u></h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted text-justify">
                      GoldenLife Victors is an organization that begun with the aim of providing integrated 
                     world-class quality and exceptional services on mental health and well-being of the 
                     community around us anywhere through our all-time available professionals.<br/>
                    <b><i>The Travel Psychologists</i></b>
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
            <h4>
                Mission 
                <br />
                <i class="fa-solid fa-bullseye"></i>
                <br/>
                Statement
            </h4>    
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="subheading"><u><i>Our Mission</i></u></h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted text-justify">
                    Our mission is to create a world where mental health is viewed with the same importance as 
                    physical health where individuals receive accessible compassionate and effective care for their
                    mental health create a society that values and prioritize mental wellness, where stigma is eliminated
                    and individuals are supported in their journey towards optimal mental health and well-being.

                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-image">
            <h4>
                Our
                <br />
                <i class="fas fa-low-vision" aria-hidden="true"></i>
                <br/>
                Vision
            </h4>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="subheading"><u><i>Our Vision</i></u></h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted text-justify">
                    Our Vision is to become a world-class center of excellence in mental health and well-being.
                </p>
               </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    </div>
)
}
}


