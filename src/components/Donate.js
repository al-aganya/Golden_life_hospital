import React, {Component} from 'react'
import "./donate.css"
import $ from 'jquery'
import { render } from '@testing-library/react';
import { useState} from 'react';
import Paypal from './Paypal';



function Donate (){
    
    const [phone, setPhone] = useState("");
    const [amount, setAmount] =useState("");
    function alertDonate() {
        alert("Your donation is being processed.Thank you!");
      };

    function handleSubmit (e) {
        e.preventDefault();
        const itemData =  {
            phone : phone,
            amount: amount
        };
        fetch("https://mpesa98778.onrender.com/stk", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(itemData),
        })
        .then((resp) => resp.json())
        .then((data) => console.log(data));
    }
    return (
        <div style={{background:'rgb(241,243,233)'}}>
            
            <div className="container px-4 py-5 mx-auto">
                <div className="cards">
                    <div className="d-flex flex-lg-row flex-column-reverse father">
                        <div className="card cards card1D">
                            <div className="row justify-content-center my-auto">
                                <form className="col-md-8 col-10 my-5" onSubmit={handleSubmit}>
                                    <div className="row justify-content-center px-3
                                    mb-3">
                                        <img className="col-lg-2 col-md-2 mx-auto img-thumbnail" style={{minWidth:"75px",minHeight:"65px"}} src={process.env.PUBLIC_URL + '/images/logo.svg'} alt='' />

                                    </div>
                                    <h3 className="mb-5 text-center heading">Donate to
                                        <span style={{color: 'gold'}}> GoldenLife
                                            Victors</span> </h3>

                                    <h6 className="msg-info">Please fill in the form
                                        below</h6>

                                    <div className="form-group">
                                        <label className="form-control-label
                                        text-muted">
                                            <i className="fas fa-phone"></i> Phone Number</label>
                                        <input type="integer"
                                            name='phone'
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-control-label
                                        text-muted"><i className="fas fa-coins"></i> Amount</label>
                                        <input type="integer"
                                            name='amount'
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                        />
                                    </div>

                                    <div className="row justify-content-center my-3
                                    px-3 row">
                                         <button   onClick={() => { alert("Your donation is being processed. We appreciate your generosity!");}} type="submit" className="btn-block btn-color col-7 btn-outline-success" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/mpesa.png'})`,backgroundRepeat: 'no-repeat'}}> 
                                            <small style={{float:'right'}}> 
                                                Donate
                                                {/* <span style={{color:'green' }}>(M-Pesa)</span> */}
                                            </small>
                                        </button>
                                        
                                    </div>
                                    <hr/>
                                </form>
                                                {/* <a href="https://www.paypal.com/donate/?hosted_button_id=W9MAEZWGU39PG">
                                        <button  className="btn btn-block btn-color col-7 btn-outline-success" style={{}}> 
                                            <small style={{float:'right'}}> Donate
                                                <span style={{color:'green' }}>(M-Pesa)</span>
                                            </small>
                                        </button>
                                        </a> */}
                            </div>

                        </div>
                        <div className="card card2D">
                            <div className="container main">
                                
                                    <div className="accordian">
                                        <div className='mt-5'>
                                            <h5 className="text-primary">
                                                Here's how your donation will help
                                                us do more.
                                            </h5>
                                            <hr className="w-100 mb-5" style={{color: 'gold'}}/>
                                        </div>
                                        <div class="accordion accordion-flush" id="accordionFlushExample1">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="flush-headingOne">
                                                <button
                                                    class="accordion-button collapsed"
                                                    type="button"
                                                    data-mdb-toggle="collapse"
                                                    data-mdb-target="#flush-collapseOne"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseOne"
                                                >
                                                    Adopt an Addict
                                                </button>
                                                </h2>
                                                <div
                                                id="flush-collapseOne"
                                                class="accordion-collapse collapse"
                                                aria-labelledby="flush-headingOne"
                                                data-mdb-parent="#accordionFlushExample1"
                                                >
                                                <div class="accordion-body">
                                                    You can opt to cover all or part of the costs of one or more residents at the rehabilitation center for the
                                                    duration of their program depending on your ability. Contact us <a href="/contact" className='text-info'>here </a>for more information on associated costs.
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br/>
                                        <div class="accordion accordion-flush" id="accordionFlushExample2">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="flush-headingTwo">
                                                <button
                                                    class="accordion-button collapsed"
                                                    type="button"
                                                    data-mdb-toggle="collapse"
                                                    data-mdb-target="#flush-collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseTwo"
                                                >
                                                    Periodic Donation
                                                </button>
                                                </h2>
                                                <div
                                                id="flush-collapseTwo"
                                                class="accordion-collapse collapse"
                                                aria-labelledby="flush-headingTwo"
                                                data-mdb-parent="#accordionFlushExample2"
                                                >
                                                <div class="accordion-body">
                                                    If you choose to donate using PayPal, you have the option to make a periodic donation to the organization(usually monthly).
                                                    This goes mainly towards covering the recurrent costs of running the facility.
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br/>
                                        <div class="accordion accordion-flush" id="accordionFlushExample3">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="flush-headingThree">
                                                <button
                                                    class="accordion-button collapsed"
                                                    type="button"
                                                    data-mdb-toggle="collapse"
                                                    data-mdb-target="#flush-collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseThree"
                                                >
                                                    One-Time Donation
                                                </button>
                                                </h2>
                                                <div
                                                id="flush-collapseThree"
                                                class="accordion-collapse collapse"
                                                aria-labelledby="flush-headingThree"
                                                data-mdb-parent="#accordionFlushExample3"
                                                >
                                                <div class="accordion-body">
                                                    Every amount donated is appreciated and we consider all those who take their time and resources to support us as part of our wider community.
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

 
export default Donate