import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'

function Webinar(props) {

    const { _id, name,author, description, date,location, time } = props.book;
    const history = useNavigate();

    const { user } = useSelector((state) => state.auth)

    const deleteHandler = async () => {
        await axios
            .delete(`https://reactback.onrender.com/books/${_id}`)
            .then((res) => res.data)
            .then(() => history("/book_s"))
            .then(() => history("/book_s"));

    };
  return (
    <div className="card" style={{width: '300px', backgroundColor: '#f4f4f4', borderRadius: '10px', padding: '20px', textAlign: "center",  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",  marginBottom: "20px",  marginTop: "20px"}}>
    <img style={{width:'150px', borderRadius: '50%', marginBottom: "20px", margin: 'auto'}} src={process.env.PUBLIC_URL + '/images/harry.jpg'} alt="presenter" />
    <h2 style={{ color: '#333', fontSize: '20px', marginBottom: '10px'}}>Webinar Title</h2>
    <p style={{ color: '#777', fontSize: '14px', marginBottom: '5px'}}> Speaker: {author}</p>
    <p style={{ color: '#777', fontSize: '14px', marginBottom: '5px'}}><FontAwesomeIcon icon={faMapMarkerAlt} style={{color: 'blue', marginRight: '5px'}}/>Location: Online</p>
    <p style={{ color: '#777', fontSize: '14px', marginBottom: '5px'}}>Date and Time: June 15, 2023, 2:00 PM (GMT)</p>
    <p style={{ color: '#777', fontSize: '14px', marginBottom: '5px'}}>Topic: Lorem ipsum dolor sit amet</p>
  </div>
  )
}

export default Webinar