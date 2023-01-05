import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'


function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_cpq5w1g', 
            'template_43jei09', 
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

    return (
<body>
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Document</title>
    <link rel="stylesheet" href="back2.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
</head>
<div className="wrapper" style={{background:'rgb(241,243,233)'}}>
    <div className="overlay" style={{background:'rgb(241,243,233)'}}>
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-9">
                <div className="contact-us text-center">
                    <h3>Contact Us</h3>
                    <p className="mb-5">We value your feedback. Leave your feedback using this form or feel free to
                        contact us with the details provided</p>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mt-5 text-center px-3">
                                <div className="d-flex flex-row align-items-center"> <span className="icons"><i
                                            className="fas fa-map-marker"></i></span>
                                    <div className="address text-left"> <span>Address</span>
                                        <p>26540-00100, GoldenLife Victors, Nairobi</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center mt-3"> <span className="icons"><i
                                            className="fa fa-phone"></i></span>
                                    <div className="address text-left"> <span>Phone</span>
                                        <p>+254 (0) 724571997</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center mt-3"> <span className="icons"><i
                                            className="fa fa-envelope-o"></i></span>
                                    <div className="address text-left"> <span>Address</span>
                                        <p>goldenlifeinternational.kenya@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-center px-1">
                                
                                <div className="forms p-4 py-5 bg-white">
                                    <form ref={form} onSubmit={sendEmail}>
                                    <h5>Send Message</h5>
                                    <div className="mt-4 inputs"> <input name="user_name" type="text" className="form-control"
                                            placeholder="Name"/> <input name="user_email" type="email" className="form-control"
                                            placeholder="Email"/>
                                            <input name="subject" type="text" className="form-control"
                                            placeholder="Subject"/> 
                                             <textarea name="message" className="form-control"
                                            placeholder="Type your message"></textarea> </div>
                                    <div className="button mt-4 text-left"> <button type="submit" className="btn btn-dark">Send</button>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</body>
    )
}

export default Contact
