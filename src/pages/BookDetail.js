import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './details.css'
import emailjs from '@emailjs/browser';

const BookDetail = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_cpq5w1g',
      'template_r85hrkb',
      form.current, 'ospgSxUezhUS_F24A')

      .then((result) => {
        console.log(result.text);
        console.log("message sent");
      }, (error) => {
        console.log(error.text);
      });
    form.current.reset();
    alert("response received");
  };

  const [inputs, setInputs] = useState();
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`https://reactback.onrender.com/books/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.book));
    };
    fetchHandler();
  }, [id]);



  return (
    <div>
      {inputs && (
        <div className="container1 container">
          <div className="row">
            <div className="col-md-4">
              <p className="logo">{inputs.author}<br /><span>{inputs.name}</span></p>
              <br />
              <p>{inputs.location}</p>
              <div className="image"><img src="https://img.icons8.com/color/96/000000/meeting.png" /></div>
              <h6 className="mt-3 text-center">{inputs.description}</h6>
              <p>{inputs.date}</p>
              <p>{inputs.time}</p>
            </div>
            <div className="col-md-8">
              <div className="d-flex pt-3 pr-2">
                <p className="ml-auto mb-0">Want to contact us?</p>
              </div>
              <div className="d-flex pr-2">
                <p className="ml-auto"><strong><i className="fas fa-phone-volume"></i>0719881082</strong></p>
              </div>
              <form className="information" ref={form} onSubmit={sendEmail}>

                <h4 className="form-heading">Register for this Event!</h4>
                <p className="form-para">
                  Join us in our events and take your skills to the next level.
                </p>

                <input
                  type="hidden"
                  className="form-control"
                  name="eventname"
                  defaultValue={inputs.name}
                />

                <div className="form-group"> <input type="email" className="form-control" name="email" id="email" required /><label className="form-control-placeholder" for="email">Email address</label> </div>


                <div className="form-group"> <input type="text" className="form-control" name="name" id="name" required /><label className="form-control-placeholder" for="name" >Name</label> </div>

                <div className="form-group"> <input type="number" className="form-control" name="phone_number" id="phone_number" required /><label className="form-control-placeholder" for="phone_number">Phone Number</label> </div>

                <div className="form-group mt-3"><button type="submit" className="btn btn-block btn-primary"><span>Register for event &nbsp;<i className="fas fa-arrow-right"></i></span></button></div>

                <p className="terms mt-4">By clicking Register for this event you agree to be sent an invitation link for the event you have registered for.</p>
              </form>
            </div>
          </div>
        </div>

      )}
    </div>
  );
};

export default BookDetail;
