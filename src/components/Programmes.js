import React from 'react'
import "./Programmes.css"


function Programmes() {
    return (
        < >
 
            <div className='cardyy'>
                <div className="p-5 text-center">
                    <pre className="mb-2 text-dark">GoldenLife Victors offers a variety of programmes both <br/>
                                                    at the facility and through outreach programmes in the society.They are<br/>
                                                    aimed at reaching as many of those in need of our services and transforming their lives positively.
                    </pre>
                </div>
            </div>
            <a className="float" data-bs-toggle="offcanvas"
                href="#offcanvasExample" role="button"
                aria-controls="offcanvasExample">
                <i className="fas fa-ribbon my-float"></i>
            </a>

            <div className="offcanvas offcanvas-start" tabindex="-1"
                id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Programmes</h5>
                    <button type="button" className="btn btn-outline-info"
                        data-bs-dismiss="offcanvas" aria-label="Close"><i className="fas
                        fa-circle-left"></i></button>
                </div>
                <div className="offcanvas-body bg-transparent">

                    <div className="list-group list-group-light bg-transparent">



                        <a className="list-group-item list-group-item-action
                        border-0" href="/programmes#tourism">
                            <p style={{fontFamily:'Georgia'}} className="note note-info">
                                <strong>
                                    <i>
                                        Medical Tourism
                                    </i>
                                </strong>
                            </p>
                        </a>


                        <a className="list-group-item list-group-item-action
                        border-0" href="/programmes#volunteer">
                            <p style={{fontFamily:'Georgia'}} className="note note-info">
                                <strong>
                                    <i>
                                        Volunteer Service
                                    </i>
                                </strong>
                            </p>
                        </a>


                        <a className="list-group-item list-group-item-action
                        border-0" href="/programmes#icgp">
                            <p style={{fontFamily:'Georgia'}} className="note note-info">
                                <strong>
                                    <i>
                                        International Centre for Global Practices
                                    </i>
                                </strong>
                            </p>
                        </a>

                    </div>
                    <hr />
                    <div className="list-group list-group-light">

                        <a className=" list-group-item list-group-item-action
                        border-0" href="/programmes#school">
                            <p style={{fontFamily:'Georgia'}} className="note note-success">
                                <strong>School-based Therapy</strong>
                                <br />
                                "<small><i>Roots & Wings Program</i></small>"
                            </p>
                        </a>
                        <a className="list-group-item list-group-item-action
                        border-0" href="/programmes#adolescent">

                            <p style={{fontFamily:'Georgia'}} className="note note-success">
                                <strong>Youth Therapy</strong>
                                <br />
                                "<small><i>Active Minds Program</i></small>"
                            </p>
                        </a>
                        <a className="list-group-item list-group-item-action
                        border-0" href="/programmes#addiction">
                            <p style={{fontFamily:'Georgia'}} className="note note-success">
                                <strong>Male Therapy</strong>
                                <br />
                                "<small><i>Wellness Warriors Program</i></small>"
                            </p>
                        </a>
                        <a className="list-group-item list-group-item-action
                        border-0" href="/programmes#pastoral">
                            <p style={{fontFamily:'Georgia'}} className="note note-success">
                                <strong>Religion-based Therapy</strong>
                                <br />
                                "<small><i>Spiritual Heal Program</i></small>"
                            </p>
                        </a>
                        <a className="list-group-item list-group-item-action
                        border-0" href="/programmes#natal">
                            <p style={{fontFamily:'Georgia'}} className="note note-success">
                                <strong>Mother & Child Therapy</strong>
                                <br />
                                "<small><i>BeyondBump Program</i></small>"
                            </p>
                        </a>
                        <a className="list-group-item list-group-item-action
                        border-0" href="/programmes#family">
                            <p style={{fontFamily:'Georgia'}} className="note note-success">
                                <strong>Family Therapy</strong>
                                <br />
                                "<small><i>Mending Minds Program</i></small>"
                            </p>
                        </a>
                        <a className="list-group-item list-group-item-action
                        border-0" href="/programmes#corporate">
                            <p style={{fontFamily:'Georgia'}} className="note note-success">
                                <strong>Corporate/Workplace-related Therapy</strong>
                                <br />
                                "<small><i>Empowered Minds Program</i></small>"
                            </p>
                        </a>
                        <a className="list-group-item list-group-item-action
                        border-0" href="/programmes#adopt">
                            <p style={{fontFamily:'Georgia'}} className="note note-success">
                                <strong>Rehabilitation Therapy</strong>
                                <br />
                                "<small><i>Mental Shift Program</i></small>"
                            </p>
                        </a>
                        <a className="list-group-item list-group-item-action
                        border-0" href="/programmes#grief">
                            <p style={{fontFamily:'Georgia'}} className="note note-success">
                                <strong>Grief Therapy</strong>
                                <br />
                                {/* "<small><i>  Program</i></small>" */}
                            </p>
                        </a>

                    </div>

                </div>
            </div>
            <section style={{ backgroundColor:'rgb(241, 243, 233)'}}>
                <div className="grid w-100 rimg" id="adopt">
                    <div className="picha h-100" >
                        <h2 className="mt-1" style={{fontFamily:'Verdana'}}>
                           Rehabilitation Therapy
                        </h2>
                            <br/><small className='text-muted note mt-0 note-info'><b><i>Mental Shift Program</i></b></small>
                        <hr className="w-50" />
                        <p style={{fontFamily:'Georgia'}} >
                            Rehabilitation improves the quality of life of people experiencing alcohol and substance use disorder through
                             detoxification and rehabilitation services. However, this program is faced by challenges since most of those affected are often unable to cover the costs of rehabilitation, which can be 
                             costly. To make this program more achievable, we have come up with an initiative called <b><i>Adopt an Addict</i></b> whereby you can assist a recovering addict
                                by providing support, both financial and moral. Financial support can be given either fully or by covering part of the cost of treatment depending on the donor's ability through our 
                            <a href="/donate"><b className='text-success'> donate page</b></a>.Moral support can be done by career or professional mentorship since one of the most crucial parts of the recovery journey is to have a good support system.
                             Mentorship can be provided by filling this <a href="/contact"><b className='text-warning'> form <i className='fas fa-scroll'></i></b></a> to inquire more about opportunities for mentorship or hosting a recovering
                              addict on their journey to recovery.
                        </p>
                    </div>
                    <div className=" rounded">
                        <img src={process.env.PUBLIC_URL + '/images/addict.jpg'} alt="" className="img h-100 rounded" />
                    </div>
                </div>
                <hr style={{color:'transparent'}}/>
                <div className="grid w-100 limg h-100" id="tourism">
                    <div className="h-100 rounded">
                        <img src={process.env.PUBLIC_URL + '/images/medical_tourism.jpg'} alt="" className="img rounded h-50  w-50" />
                        <img src={process.env.PUBLIC_URL + '/images/naiv.jpg'} alt="" className="img rounded h-50  w-50" />
                        <img src={process.env.PUBLIC_URL + '/images/mkenya.jpg'} alt="" className="img rounded h-50  w-50" />
                        <img src={process.env.PUBLIC_URL + '/images/samb.jpg'} alt="" className="img rounded h-50  w-50" />
                    </div>
                    <div className="picha1 h-100">
                        <h2 className="mt-1" style={{fontFamily:'Verdana'}}>
                            Medical Tourism
                        </h2>
                        <hr className="w-50" />
                        <p style={{fontFamily:'Georgia'}}>
                            Our medical tourism programme is aimed at exposing the addict(s) to differrent cultures and environments through tourism and exchange programs. This is important for them as it serves to
                            take them away from their initial environment that might have influenced their condition. They will also get a chance to acquire new techniques, practices and cultures that they can take
                            back with them to help with their recovery journey.For more information or inquiries, contact us through this  <a href="/contact"><b className='text-warning'>form<i className='fas fa-scroll'></i></b></a> 
                        </p>
                    </div>
                </div>
                <hr style={{color:'transparent'}}/>
                <div className="grid w-100 rimg" id="volunteer">
                    <div className="picha2 h-100">
                        <h2 className="mt-1" style={{fontFamily:'Verdana'}}>
                            Volunteer Service
                        </h2>
                        <hr className="w-50" />
                        <p style={{fontFamily:'Georgia'}}>
                            Volunteer Service is a program where a wide range of volunteers are incorporated to offer their services and expertise to help our patients learn/acquire new skills.
                            To volunteer your services, you can fill out our <a href="/contact"><b>contact form</b></a> and we will get back to you with available positions and any further relevant information.
                            For more information or inquiries, contact us through this  <a href="/contact"><b className='text-warning'>form<i className='fas fa-scroll'></i></b></a> 

                        </p>
                    </div>
                    <div className="rounded h-100">
                        <img src={process.env.PUBLIC_URL + '/images/3.jpg'} alt="" className="img h-50 w-50 rounded " />
                        <img src={process.env.PUBLIC_URL + '/images/community.jpg'} alt="" className="h-50 w-50 rounded " />
                        <img src={process.env.PUBLIC_URL + '/images/community.jpg'} alt="" className="h-50 w-50 rounded " />                        
                        <img src={process.env.PUBLIC_URL + '/images/religion.jpg'} alt="" className="h-50 w-50 rounded " />
                    </div>
                </div>
                <hr style={{color:'transparent'}}/>
                <div className="grid w-100 limg" id="icgp">
                <div className="rounded h-100">
                        <img src={process.env.PUBLIC_URL + '/images/globe.jpg'} alt="" className="h- w-50 " />
                        <img src={process.env.PUBLIC_URL + '/images/globes.jpg'} alt="" className="h-100 w-50 " />
                    </div>
                    <div className="picha1 h-100">
                        <h2 className="mt-1" style={{fontFamily:'Verdana'}}>
                            International Centre for Global Practices
                        </h2>
                        <hr className="w-50" />
                        <p style={{fontFamily:'Georgia'}}>
                        GoldenLife runs an innovation hub for knowledge and leadership
                        management by creating a platform for conversation on ideas, research and practices leading to developing countries,
                        institutions, individuals to attain global standards in their processes and activities. We offer seminars,webinars, continous medical education and training 
                        on various topics of local and global concern as shown on<a href='/book_s'><b style={{color:'goldenrod'}}> this page</b></a>.
                        </p>
                    </div>
                </div>
                <hr style={{color:'transparent'}}/>
                <div className="grid w-100 rimg" id="adolescent">
                    <div className="picha2 h-100">
                    <h2 className="mt-1" style={{fontFamily:'Verdana'}}>
                           Youth Therapy
                        </h2>
                            <br/><small className='text-muted note mt-0 note-info'><b><i>Active Minds Program</i></b></small>
                        <hr className="w-50" />
                        <p style={{fontFamily:'Georgia'}}>
                            GoldenLife employs a variety of ways to give
                            adolescents/youths emotional support to help them
                            resolve conflict with people, help them understand
                            their feelings and problems and to try out new
                            solutions to old problems in addition to harnessing
                            their talents/areas of excellence, guide and train on
                            the best way to put them into positive use.The program 
                            functions within college, universities and out-of-college
                            frameworks.For more information or inquiries, contact us through this  <a href="/contact"><b className='text-warning'>form<i className='fas fa-scroll'></i></b></a> 
                        </p>
                    </div>
                    <div className="rounded ">
                        <img src={process.env.PUBLIC_URL + '/images/adole.jpg'} alt="" className="h-100 rounded" />
                    </div>
                </div>
                <hr style={{color:'transparent'}}/>
                <div className="grid w-100 limg" id="school">
                <div className="rounded h-100">
                        <img src={process.env.PUBLIC_URL + '/images/children.jpg'} alt="" className="h-100 w-50 rounded" />                        
                        <img src={process.env.PUBLIC_URL + '/images/watoto3.jpg'} alt="" className="h-100 w-50 rounded" />
                    </div>
                    <div className="picha1 h-100">
                        <h2 className="mt-1" style={{fontFamily:'Verdana'}}>
                            School-based Therapy
                        </h2>
                            <br/><small className='text-muted note mt-0 note-info'><b><i>Roots & Wings Program</i></b></small>
                        <hr className="w-50" />
                        <p style={{fontFamily:'Georgia'}}>
                            GoldenLife offers therapy that integrates mental health
                            treatment for children, pupils and students
                            as well as parents, teachers and other staff. This therapy works within
                            preschool, elementary, middle and high
                            school facilities in helping the school fraternity overcome behavioral,
                            emotional and social problems that might
                            interfere with success at school and at home and to
                            support teachers so that they give their
                            best output and find a life-balance.For more information or inquiries, contact us through this  <a href="/contact"><b className='text-warning'>form<i className='fas fa-scroll'></i></b></a> 
                        </p>
                    </div>
                </div>
                <hr style={{color:'transparent'}}/>
                <div className="grid w-100 rimg" id="pastoral">
                    <div className="picha2 h-100">
                        <h2 className="mt-1" style={{fontFamily:'Verdana'}}>
                            Religion-based Therapy
                        </h2>
                            <br/><small className='text-muted note mt-0 note-info'><b><i>Spiritual Heal Program</i></b></small>
                        <hr className="w-50" />
                        <p style={{fontFamily:'Georgia'}}>
                            This program integrates mental health treatment for
                            religious groups, churches, mosques and other religious set-ups to help
                            members overcome behavioral, emotional and social problems that
                            interfere with the success of religious activities and socialization.For more information or inquiries, contact us through this  <a href="/contact"><b className='text-warning'>form<i className='fas fa-scroll'></i></b></a> 
                        </p>
                    </div>
                    <div className="rounded ">
                    <div className="rounded h-100">
                        <img src={process.env.PUBLIC_URL + '/images/church.jpg'} alt="" className="h rounded " />
                    </div>
                    </div>
                </div>
                <hr style={{color:'transparent'}}/>
                <div className="grid w-100 limg" id="natal">
                    <div className=" ">
                        <img src={process.env.PUBLIC_URL + '/images/baby_therapy.jpg'} alt="" className="h-100 rounded" />
                    </div>
                    <div className="picha1 h-100">
                        <h2 className="mt-1" style={{fontFamily:'Verdana'}}>
                            Mother and Child Therapy
                        </h2>
                            <br/><small className='text-muted note mt-0 note-info'><b><i>BeyondBump Program</i></b></small>
                        <hr className="w-50" />
                        <p style={{fontFamily:'Georgia'}}>
                            Therapists at GoldenLife help to prepare a mum-to-be
                            for the roles and responsibilities
                            ahead in a gift-giving party held for a mum-to-be in
                            anticipation of her newborn. We also
                            teach them about pregnancy and childbirth in-order to curb
                            puerperal psychosis and pregnancy related stresses leading to a health mother, healthy
                            baby and healthy family. For more information or inquiries, contact us through this  <a href="/contact"><b className='text-warning'>form<i className='fas fa-scroll'></i></b></a> 
                        </p>
                    </div>
                </div>
                <hr style={{color:'transparent'}}/>
                <div className="grid w-100 rimg" id="corporate">
                    <div className="picha2 h-100">
                        <h2 className="mt-1" style={{fontFamily:'Verdana'}}>
                            Workplace related Therapy
                        </h2>
                            <br/><small className='text-muted note mt-0 note-info'><b><i>Empowered Minds Program</i></b></small>
                        <hr className="w-50" />
                        <p style={{fontFamily:'Georgia'}}>
                            Therapists at GoldenLife help employers and employees implement
                            solutions to the issues in their lives or
                            develop more effective ways of coping with challenges.
                            This helps to increase their motivation
                            and boost co-operation leading to more productivity at the workplace. For more information or inquiries, contact us through this  <a href="/contact"><b className='text-warning'>form<i className='fas fa-scroll'></i></b></a> 
                        </p>
                    </div>
                    <div className="rounded ">
                        <img src={process.env.PUBLIC_URL + '/images/workplace.jpg'} alt="" className="h-100 rounded" />
                    </div>
                </div>
                <hr style={{color:'transparent'}}/>
                <div className="grid w-100 Limg" id="addiction">
                    <div className="rounded h-100">
                        <img src={process.env.PUBLIC_URL + '/images/drugs.jpg'} alt="" className="h-100 rounded" />
                    </div>
                    <div className="picha2 h-100">
                        <h2 className="mt-1" style={{fontFamily:'Verdana'}}>
                            Male Therapy
                        </h2>
                            <br/><small className='text-muted note mt-0 note-info'><b><i>Wellness Warriors Program</i></b></small>
                        <hr className="w-50" />
                        <p style={{fontFamily:'Georgia'}}>
                            Society's expectations and traditional gender roles play a role in why men are less likely to discuss or seek help for
                            their mental health issues. GoldenLife offers a safe space for men of all ages to share their experiences and learn from each otheras well as from professionals.For more information or inquiries, contact us through this  <a href="/contact"><b className='text-warning'>form<i className='fas fa-scroll'></i></b></a> 
                        </p>
                    </div>
                </div>
                <hr style={{color:'transparent'}}/>
                <div className="grid w-100 Rimg" id="family">
                    <div className="picha2 h-100">
                        <h2 className="mt-1" style={{fontFamily:'Verdana'}}>
                            Family Therapy
                        </h2>
                            <br/><small className='text-muted note mt-0 note-info'><b><i>Mending Minds Program</i></b></small>
                        <hr className="w-50" />
                        <p style={{fontFamily:'Georgia'}}>
                            This therapy seeks to improve communication and interaction within the family set-up to help members distinguish healthy boundaries, different abilities and feelings. 
                            This helps to prevent and manage conflict. For more information or inquiries, contact us through this  <a href="/contact"><b className='text-warning'>form<i className='fas fa-scroll'></i></b></a> 
                        </p>
                    </div>
                    <div className="rounded h-100 m-auto">
                        <img src={process.env.PUBLIC_URL + '/images/fam.jpg'} alt="" className="h-100 rounded" />
                    </div>
                </div>
                <div className="grid w-100 Limg" id="grief">
                    <div className="rounded h-100">
                        <img src={process.env.PUBLIC_URL + '/images/grief1.jpg'} alt="" className="h-100 rounded" />
                    </div>
                    <div className="picha2 h-100">
                        <h2 className="mt-1" style={{fontFamily:'Verdana'}}>
                            Grief Therapy
                        </h2>
                            {/* <br/><small className='text-muted note mt-0 note-info'><b><i>Wellness Warriors Program</i></b></small> */}
                        <hr className="w-50" />
                        <p style={{fontFamily:'Georgia'}}>
                            This program is meant to give support and coping mechanisms to people who have experienced loss in their life for example loss of a loved one, loss of a job, loss of property and divorce. For more information or inquiries, contact us through this  <a href="/contact"><b className='text-warning'>form<i className='fas fa-scroll'></i></b></a> 
                        </p>
                    </div>
                </div>
            </section>
        </ >   
    )
}

export default Programmes
