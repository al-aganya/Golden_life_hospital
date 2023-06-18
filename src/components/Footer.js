import React from 'react'
import "./home.css"

function Footer() {
  return (
    <div>
    <footer id="footer" style={{color:'whitesmoke'}}>
        <div className="footer-top">
            <div className="containerh">
                <div className="row">
                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><i className="bx bx-chevron-right"></i> <a href="/">Home</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/about">About us</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="contact">Contact Us</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/programmes">Programs</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/gallery">Gallery</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Our Programs</h4>
                        <ul>
                        <ul>
                            <li><i className="bx bx-chevron-right"></i> <a href="/programmes#adopt">Rehabilitation Therapy</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/programmes#school">School-Based Therapy</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/programmes#pastoral">Religious Therapy</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/programmes#natal">Mother & Child Therapy</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="/programmes#adolescent">Youth Therapy</a></li>
                        </ul>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-contact">
                        <h4>Contact Us</h4>
                        
                        <p style={{color:'whitesmoke'}}> GoldenLife Victors Hospital <br/>P.O. BOX, 26540-00100<br/> Nairobi. <br/><br/>
                            <strong>Phone:</strong>
                            +254(0) 724571997<br/> <br/><strong>Email:</strong>goldenlifeinternational.kenya@gmail.com<br/>
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-info">
                              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.4785548173695!2d36.47332221472365!3d-0.7477454994544934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182922f6a2315b43%3A0x3ca647edffc48d21!2sGolden%20Life%20Victors%20Hospital!5e0!3m2!1sen!2ske!4v1670166301435!5m2!1sen!2ske"
                               width="300" height="200" style={{border:"0",marginLeft:'2rem'}} allowfullscreen="" loading="lazy"
                               referrerpolicy="no-referrer-when-downgrade"></iframe>
                        {/* <iframe 
                            title='map'
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.242091352655!2d36.8111916!3d-1.287825!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x35aa770d9b0b5e0c!2sGolden%20Life%20International!5e0!3m2!1sen!2ske!4v1666091598238!5m2!1sen!2ske"
                            width="300" height="200" style={{border:"0",marginLeft:'2rem'}} allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                        <div className="social-links mt-3" style={{border:"0",marginLeft:'2rem'}}> <a href="#!" className="twitter"><i className="bx bxl-twitter"></i></a>
                            <a href="#!" className="facebook" style={{background:'blue'}}><i className="bx bxl-facebook" style={{background:'blue'}}></i></a> <a href="#!"
                                className="instagram"><i className="bx bxl-instagram"></i></a> <a href="#!" className="linkedin"><i
                                    className="bx bxl-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright"> &copy;Copyright <strong><span style={{color:'goldenrod'}}>GoldenLife Victors</span></strong>. All Rights Reserved </div>
            <div className="credits"> Designed by <a href="#!" className='text-muted'>Lobeku & Sarima Co.</a> </div>
        </div>
    </footer>


    </div>
  )
}

export default Footer
