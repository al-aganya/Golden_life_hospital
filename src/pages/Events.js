import React from 'react'
import './events.css'

function Events() {
  return (
    <div>
      <section className="about-section">
    <div className="containerh ">
        <div className="row">                
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                <div className="inner-column">
                    <div className="sec-title">
                        <span className="title">Global practices</span>
                        <h2>We are an international center for global practices</h2>
                    </div>
                    <div style={{color:'black'}} className="text">GoldenLife runs an innovation hub for knowledge and leadership
                    management by creating a platform for conversation on ideas, research and practices leading to developing countries,
                    institutions, individuals to attain global standards in their processes and activities. We offer seminars,webinars, continous medical education and training 
                    on various topics of local and global concern. We offer the following special courses, register today to cover the following topics with us.</div>
                    <ul className="list-style-one ul">
                        <li>Certified nurse assistant</li>
                        <li>NCLEX nurses' preperation</li>
                        <li>IELTS preparation</li>
                        <li>Global diplomacy</li>
                    </ul>
                    <div className="btn-box">
                        <a href="/book_s#gizmo" className="a theme-btn btn-style-one ">View upcoming events</a>
                    </div>
                </div>
            </div>

           
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column wow fadeInLeft">
                    <figure className="image-1"><a href="#!" className="a lightbox-image" data-fancybox="images"><img className='img1' src={process.env.PUBLIC_URL + '/images/globes.jpg'} alt="" /></a></figure>
                    <figure className="image-2"><a href="#!" className="a lightbox-image" data-fancybox="images"><img className='img1' src={process.env.PUBLIC_URL + '/images/globe.jpg'} alt="" /></a></figure>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Events