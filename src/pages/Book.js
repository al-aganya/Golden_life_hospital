import React from 'react'
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import Moment from 'react-moment';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


function Book(props) {


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
        <>

<div  className="card" style={{width: '450', backgroundColor: '#f4f4f4', borderRadius: '10px', padding: '20px', textAlign: "center",  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",  margin: 'auto'}}>
    <img style={{width:'150px', borderRadius: '50%', marginBottom: "20px", margin: 'auto'}} src={process.env.PUBLIC_URL + '/images/lenai.jpg'} alt="presenter" />
    <h2 style={{ color: '#333', fontSize: '20px', marginBottom: '10px'}}>{name}</h2>
    <p style={{ color: '#777', fontSize: '14px', marginBottom: '5px'}}> Speaker: {author}</p>
    <p style={{ color: '#777', fontSize: '14px', marginBottom: '5px'}}><FontAwesomeIcon icon={faMapMarkerAlt} style={{color: 'blue', marginRight: '5px'}}/>Location: Online</p>
    <p style={{ color: '#777', fontSize: '14px', marginBottom: '5px'}}>Date and Time: June 15, 2023, 2:00 PM (GMT)</p>
    <p style={{ color: '#777', fontSize: '14px', marginBottom: '5px'}}>Topic: Lorem ipsum dolor sit amet</p>
  </div>
            {/* <section className="date">
                <time>
                <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }} className="btn btn-black"><i className='fas fa-plus-circle'></i></Button>
                </time>
            </section>
            <section className=" ticket-card-cont">
                <small><i className="fas fa-user-cog"></i>{author}</small>
                <br />
                <h3>{name}</h3>
                <br />
                <div className="row">
                    <div className="even-date col-6 fl-left">
                        <time>
                            <i className="fas fa-calendar-days" > <hr style={{ width: "inherit", color: "inherit", fontWeight: "bolder" }} /></i>
                            <span><Moment format='YYYY/MM/DD'>{date}</Moment></span>
                            <br />
                            <i className="fas fa-clock-four"><hr style={{ width: "inherit", color: "inherit", fontWeight: "bolder" }} /></i>
                            <span>{time}</span>
                            <br />
                        </time>
                    </div>
                    <div className="even-info col-6 fl-right" >
                        <i className="fas fa-map-location-dot"><hr style={{ width: "inherit", color: "inherit", fontWeight: "bolder" }} /></i>
                        <span>{location}</span>
                        <i className="fas fa-scroll"><hr style={{ width: "inherit", color: "inherit", fontWeight: "bolder" }} /></i>
                        <span>{description}</span>
                    </div>
                </div>
                <a href="#!"><Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }} className="fl-left">View</Button></a>

                <ul>
                    {user ? (
                        <li>
                            <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
                                Delete
                            </Button>
                        </li>
                    ) : (
                        <>
                            
                        </>
                    )}
                </ul>
            </section> */}

            {/* <h3>{name}</h3>
            <h3>{description}</h3>
            <p><Moment format='YYYY/MM/DD'>{date}</Moment></p>
            br
            <p>{time}</p>
            <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
                Update
            </Button>

            <ul>
                {user ? (
                    <li>
                        <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
                            Delete
                        </Button>
                    </li>
                ) : (
                    <>
                        hello
                    </>
                )}
            </ul> */}

        </>
    )
}

export default Book
