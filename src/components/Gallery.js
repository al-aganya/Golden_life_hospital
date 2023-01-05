import React from 'react'
import "./gallery.css"

function Gallery() {
  return (

    <div className='gallery'>
      <h1>GoldenLife Victors Gallery</h1>
      <div className="containerg">

        <div className="gallery-container w-3 h-2">
          <div className="gallery-item">
            <div className="image">
              <img src={process.env.PUBLIC_URL + '/images/children.jpg'} alt="nature" />
            </div>
            <div className="text">School-Based therapy</div>
          </div>
        </div>

        <div className="gallery-container w-3 h-3">
          <div className="gallery-item">
            <div className="image">
              <img src={process.env.PUBLIC_URL + '/images/20221121_123208.jpg'} alt="people" />
            </div>
            <div className="text">Classrooms</div>
          </div>
        </div>

        <div className="gallery-container h-2 w-3">
          <div className="gallery-item">
            <div className="image">
              <img src={process.env.PUBLIC_URL + '/images/20221121_122537.jpg'} alt="sport" />
            </div>
            <div className="text">GoldenLife Naivasha</div>
          </div>
        </div>


        <div className="gallery-container w-2 h-1">
          <div className="gallery-item">
            <div className="image">
              <img src={process.env.PUBLIC_URL + '/images/watoto.jpg'} alt="food" />
            </div>
            <div className="text">Community Outreach</div>
          </div>
        </div>

        <div className="gallery-container">
          <div className="gallery-item">
            <div className="image">
              <img src={process.env.PUBLIC_URL + '/images/community.jpg'} alt="travel" />
            </div>
            <div className="text">Adolescent therapy </div>
          </div>
        </div>

        <div className="gallery-container h-2">
          <div className="gallery-item">
            <div className="image">
              <img src={process.env.PUBLIC_URL + '/images/van.jpg'} alt="art" />
            </div>
            <div className="text">Rehabilitation</div>
          </div>
        </div>

        <div className="gallery-container w-5 h-2">
          <div className="gallery-item">
            <div className="image">
              <img src={process.env.PUBLIC_URL + '/images/20221121_122506.jpg'} alt="cars" />
            </div>
            <div className="text">Services</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Gallery
