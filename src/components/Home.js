import React from 'react'
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';


function Home() {
    return (

        <div >

            <MDBCarousel showIndicators fade>
                <MDBCarouselItem
                    className='w-100'
                    style={{size:'fill'}}
                    itemId={1}
                    src={process.env.PUBLIC_URL + '/images/20221121_122537.jpg'}
                    alt='...'
                >
                
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src={process.env.PUBLIC_URL + '/images/20221121_122547.jpg'}
                    alt='...'
                >
                   
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src={process.env.PUBLIC_URL + '/images/mh4.jpg'}
                    alt='...'
                >
                    
                </MDBCarouselItem>
            </MDBCarousel>

            <section className="info">
                <div className="containerh text-center">
                    <h3 className="info-headin text-center mt-5 lg">
                        Welcome to GoldenLife Victors
                    </h3>
                    <p className="mb-5" style={{ color: "black" }}>
                        GoldenLife Victors is an organization that focuses on mental health issues and community wellness programs that foster 
                        mental well-being and growth. GoldenLife also offers exceptional rehabilitation services for people with alcohol and substance use 
                        disorder to overcome addiction and develop lifelong tools for recovery. Our community outreach programs are:
                        <ul className='list' style={{listStyle:"inside circle",textDecorationStyle:"dashed",textDecoration:"underline"}}>
                         <a href='/programmes#school'><li>Roots&Wings Program</li></a>
                         <a href='/programmes#adolescent'><li>Active Minds Program</li></a>
                         <a href='/programmes#addiction'><li>Wellness Warriors Program</li></a>   
                         <a href='/programmes#pastoral'><li>Spiritual Heal Program</li></a>
                         <a href='/programmes#natal'><li>BeyondBump Program</li></a>
                         <a href='/programmes#family'><li>Mending Minds Program</li></a>
                         <a href='/programmes#corporate'><li>Empowered Minds Program</li></a>
                         <a href='/programmes#adopt'><li>Mental Shift Program</li></a>
                        </ul> 
                    </p>

                    <div className="grid grid-3">
                        <div className="card1">
                            <i className="fa-solid fa-ribbon fa-3x" style={{ color: 'green', marginBottom: '15px' }}></i>
                            <h3 style={{ color: "blue" }}>Rehabilitation</h3>
                            <p style={{ color: "black" }}> 
                                This program improves the quality of life of people experiencing alcohol and substance use disorder through various forms of therapy
                                to facilitate their recovery and reintegration into the community.
                            </p>

                            <a href='/programmes'><button style={{ backgroundColor: "gold" }} type="submit" value="" className="btn btns m-auto">Learn more</button></a>

                        </div>

                        <div className="card1">
                            <i className="bi-solid bi-globe fa-3x" style={{ color: "blue" }}></i>
                            <h3 style={{ color: "blue" }}>Global Practices</h3>
                            <p style={{ color: "black" }}>This is an innovation hub for knowledge and leadership
                        management, done by creating a platform for conversation on ideas, research and practices in developing countries,
                        institutions and individuals to attain global standards in their processes and activities. We offer seminars,webinars, continous medical education and training 
                        on various topics of local and global concern</p>
                            <a href='/book_s'><button style={{ backgroundColor: "gold" }} type="submit" value="" className="btn btns m-auto">Learn more</button></a>
                        
                        </div>

                        <div className="card1">
                            <i className="bi bi-people-fill fa-3x"></i>
                            <h3 style={{ color: "blue" }}>Community Outreaches</h3>
                            <p style={{ color: "black" }}>These are a number of programs that are tailored towards community mental health support.
                             They include Roots&Wings Program, Active Minds Program, Wellness Warriors Program and the BeyondBump Program among others.</p>

                            <a href='/programmes#volunteer'><button style={{ backgroundColor: "gold" }} type="submit" value="" className="btn btns m-auto">Learn more</button></a>
                        </div>

                    </div>
                </div>
            </section>

            <section className="about" >
                <div className="card2 containerh grid">
                    <div className="about-content text-center m-1">
                        <h1 className="logos" style={{ color: "rgb(193, 196, 66)" }}>Why GoldenLife Victors?</h1>
                        <p style={{ color: "black" }}>
                            We provide comprehensive individualized physical, psychological, social and spiritual care in the recovery journey
                    through a supportive environment which fosters human dignity. Our treatment specialists take your information and craft a personalised treatment plan just for you.</p>

                        {/* <button style={{ backgroundColor: "gold" }} type="submit" value="" className="btn btn-outline-success btns" >Learn more</button> */}
                    </div>

                    <img src={process.env.PUBLIC_URL + '/images/doctor.jpg'} alt="" />
                    

                </div>
            </section>


        </div>

    )
}

export default Home
