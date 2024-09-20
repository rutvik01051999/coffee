import { Outlet, Link } from "react-router-dom";
import '../css/style.css';
import '../css/animate.css';
import '../css/icomoon.css';
import '../css/bootstrap.css';
import '../css/magnific-popup.css';
import '../css/owl.carousel.min.css';
import '../css/owl.theme.default.min.css';
import '../App'
import App2 from '../App'
import Popup from './Popup'; // Import the Popup component
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ethers } from "ethers"
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';


const Layout = ({ state }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [value, onChange] = useState('10:00');

    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const buyChai = async (event) => {
        console.log('enter in function')
        event.preventDefault();
        console.log(event.target.date.value); //
        console.log(event.target.person.value); //

        setShowPopup(!showPopup);


        const { contract } = state;
        const person = event.target.person.value;
        const date = event.target.date.value;
        const time = event.target.time.value;

        console.log(person, date, time)

        // const amount = { value: ethers.utils.parseEther("6") }
        // const transaction = await contract.buyChai2(person, date, time, amount)
        // console.log(transaction)
        // await transaction.wait();
        // alert("Transaction is successul");
        // window.location.reload();
    }
    return (
        <>

            <div id="page">
                <div className="page-inner">
                    <nav className="gtco-nav" role="navigation">
                        <div className="gtco-container">
                            <div className="row">
                                <div className="col-sm-4 col-xs-12">
                                    <div id="gtco-logo"><a href="index.html">Savory <em>.</em></a></div>
                                </div>
                                <div className="col-xs-8 text-right menu-1">
                                    <ul>
                                        <li><a href="menu.html">Menu</a></li>
                                        <li className="has-dropdown">
                                            <a href="services.html">Services</a>
                                            <ul className="dropdown">
                                                <li><a href="#">Food Catering</a></li>
                                                <li><a href="#">Wedding Celebration</a></li>
                                                <li><a href="#">Birthday's Celebration</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                        <li className="btn-cta"><a href="#"><span>Reservation</span></a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </nav>

                    <header id="gtco-header" className="gtco-cover gtco-cover-md" role="banner" data-stellar-background-ratio="0.5">
                        <div className="overlay"></div>
                        <div className="gtco-container">
                            <div className="row">
                                <div className="col-md-12 col-md-offset-0 text-left">


                                    <div className="row row-mt-15em">
                                        <div className="col-md-7 mt-text animate-box" data-animate-effect="fadeInUp">
                                            <span className="intro-text-small">Hand-crafted by <a href="http://gettemplates.co" target="_blank">GetTemplates.co</a></span>
                                            <h1 className="cursive-font">All in good taste!</h1>
                                        </div>
                                        <div className="col-md-4 col-md-push-1 animate-box" data-animate-effect="fadeInRight">
                                            <div className="form-wrap">
                                                <div className="tab">

                                                    <div className="tab-content">
                                                        <div className="tab-content-inner active" data-content="signup">
                                                            <h3 className="cursive-font">Table Reservation</h3>
                                                            <form onSubmit={buyChai}>
                                                                <div className="row form-group">
                                                                    <div className="col-md-12">
                                                                        <label htmlFor="person">Persons</label>
                                                                        <select id="person" name="person" className="form-control">
                                                                            <option value="">Persons</option>
                                                                            <option value="1">1</option>
                                                                            <option value="2">2</option>
                                                                            <option value="3">3</option>
                                                                            <option value="4">4</option>
                                                                            <option value="5">5+</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="row form-group">
                                                                    <div className="col-md-12">
                                                                        <label htmlFor="date-start">Date</label>
                                                                        <DatePicker id="date" name="date" selected={startDate} onChange={(date) => setStartDate(date)} className="form-control" />

                                                                    </div>
                                                                </div>
                                                                <div className="row form-group">
                                                                    <div className="col-md-12">
                                                                        <label htmlFor="date-start">Time</label>
                                                                        {/* <input id="time" aria-label="Time" type="time" /> */}

                                                                        <TimePicker id="time" name="time" onChange={onChange} value={value} className="form-control" />
                                                                    </div>
                                                                </div>

                                                                <div className="row form-group">
                                                                    <div className="col-md-12">
                                                                        <input type="submit" className="btn btn-primary btn-block" value="Reserve Now" disabled={!state.contract} />
                                                                    </div>
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
                    </header>

                    {/* <button onClick={togglePopup}>Open Popup</button> */}

                    <div className="gtco-section">
                        <div className="gtco-container">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
                                    <h2 className="cursive-font primary-color">Popular Dishes</h2>
                                    <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <a href="/images/img_1.jpg" className="fh5co-card-item image-popup">
                                        <figure>
                                            <div className="overlay"><i className="ti-plus"></i></div>
                                            <img src="images/img_1.jpg" alt="Image" className="img-responsive" />
                                        </figure>
                                        <div className="fh5co-text">
                                            <h2>Fresh Mushrooms</h2>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                            <p><span className="price cursive-font">$19.15</span></p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <a href="images/img_2.jpg" className="fh5co-card-item image-popup">
                                        <figure>
                                            <div className="overlay"><i className="ti-plus"></i></div>
                                            <img src="images/img_2.jpg" alt="Image" className="img-responsive" />
                                        </figure>
                                        <div className="fh5co-text">
                                            <h2>Cheese and Garlic Toast</h2>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                            <p><span className="price cursive-font">$20.99</span></p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <a href="images/img_3.jpg" className="fh5co-card-item image-popup">
                                        <figure>
                                            <div className="overlay"><i className="ti-plus"></i></div>
                                            <img src="images/img_3.jpg" alt="Image" className="img-responsive" />
                                        </figure>
                                        <div className="fh5co-text">
                                            <h2>Grilled Chiken Salad</h2>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                            <p><span className="price cursive-font">$8.99</span></p>

                                        </div>
                                    </a>
                                </div>


                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <a href="images/img_4.jpg" className="fh5co-card-item image-popup">
                                        <figure>
                                            <div className="overlay"><i className="ti-plus"></i></div>
                                            <img src="images/img_4.jpg" alt="Image" className="img-responsive" />
                                        </figure>
                                        <div className="fh5co-text">
                                            <h2>Organic Egg</h2>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                            <p><span className="price cursive-font">$12.99</span></p>
                                        </div>
                                    </a>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <a href="images/img_5.jpg" className="fh5co-card-item image-popup">
                                        <figure>
                                            <div className="overlay"><i className="ti-plus"></i></div>
                                            <img src="images/img_5.jpg" alt="Image" className="img-responsive" />
                                        </figure>
                                        <div className="fh5co-text">
                                            <h2>Tomato Soup with Chicken</h2>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                            <p><span className="price cursive-font">$23.10</span></p>
                                        </div>
                                    </a>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <a href="images/img_6.jpg" className="fh5co-card-item image-popup">
                                        <figure>
                                            <div className="overlay"><i className="ti-plus"></i></div>
                                            <img src="images/img_6.jpg" alt="Image" className="img-responsive" />
                                        </figure>
                                        <div className="fh5co-text">
                                            <h2>Salad with Crispy Chicken</h2>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia..</p>
                                            <p><span className="price cursive-font">$5.59</span></p>
                                        </div>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div id="gtco-features">
                        <div className="gtco-container">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
                                    <h2 className="cursive-font">Our Services</h2>
                                    <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="feature-center animate-box" data-animate-effect="fadeIn">
                                        <span className="icon">
                                            <i className="ti-face-smile"></i>
                                        </span>
                                        <h3>Happy People</h3>
                                        <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="feature-center animate-box" data-animate-effect="fadeIn">
                                        <span className="icon">
                                            <i className="ti-thought"></i>
                                        </span>
                                        <h3>Creative Culinary</h3>
                                        <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="feature-center animate-box" data-animate-effect="fadeIn">
                                        <span className="icon">
                                            <i className="ti-truck"></i>
                                        </span>
                                        <h3>Food Delivery</h3>
                                        <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>


                    <div className="gtco-cover gtco-cover-sm" data-stellar-background-ratio="0.5">
                        <div className="overlay"></div>
                        <div className="gtco-container text-center">
                            <div className="display-t">
                                <div className="display-tc">
                                    <h1>&ldquo; Their high quality of service makes me back over and over again!&rdquo;</h1>
                                    <p>&mdash; John Doe, CEO of XYZ Co.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="gtco-counter" className="gtco-section">
                        <div className="gtco-container">

                            <div className="row">
                                <div className="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
                                    <h2 className="cursive-font primary-color">Fun Facts</h2>
                                    <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                                </div>
                            </div>

                            <div className="row">

                                <div className="col-md-3 col-sm-6 animate-box" data-animate-effect="fadeInUp">
                                    <div className="feature-center">
                                        <span className="counter js-counter" data-from="0" data-to="5" data-speed="5000" data-refresh-interval="50">1</span>
                                        <span className="counter-label">Avg. Rating</span>

                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 animate-box" data-animate-effect="fadeInUp">
                                    <div className="feature-center">
                                        <span className="counter js-counter" data-from="0" data-to="43" data-speed="5000" data-refresh-interval="50">1</span>
                                        <span className="counter-label">Food Types</span>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 animate-box" data-animate-effect="fadeInUp">
                                    <div className="feature-center">
                                        <span className="counter js-counter" data-from="0" data-to="32" data-speed="5000" data-refresh-interval="50">1</span>
                                        <span className="counter-label">Chef Cook</span>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 animate-box" data-animate-effect="fadeInUp">
                                    <div className="feature-center">
                                        <span className="counter js-counter" data-from="0" data-to="1985" data-speed="5000" data-refresh-interval="50">1</span>
                                        <span className="counter-label">Year Started</span>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <Popup show={showPopup} handleClose={togglePopup}>
                        <h2>This is a Popup!</h2>
                        <p>Some content for the popup.</p>
                    </Popup>

                    <div id="gtco-subscribe">
                        <div className="gtco-container">
                            <div className="row animate-box">
                                <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
                                    <h2 className="cursive-font">Subscribe</h2>
                                    <p>Be the first to know about the new templates.</p>
                                </div>
                            </div>
                            <div className="row animate-box">
                                <div className="col-md-8 col-md-offset-2">
                                    <form className="form-inline">
                                        <div className="col-md-6 col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="email" className="sr-only">Email</label>
                                                <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <button type="submit" className="btn btn-default btn-block">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <footer id="gtco-footer" role="contentinfo" data-stellar-background-ratio="0.5">
                        <div className="overlay"></div>
                        <div className="gtco-container">
                            <div className="row row-pb-md">




                                <div className="col-md-12 text-center">
                                    <div className="gtco-widget">
                                        <h3>Get In Touch</h3>
                                        <ul className="gtco-quick-contact">
                                            <li><a href="#"><i className="icon-phone"></i> +1 234 567 890</a></li>
                                            <li><a href="#"><i className="icon-mail2"></i> info@GetTemplates.co</a></li>
                                            <li><a href="#"><i className="icon-chat"></i> Live Chat</a></li>
                                        </ul>
                                    </div>
                                    <div className="gtco-widget">
                                        <h3>Get Social</h3>
                                        <ul className="gtco-social-icons">
                                            <li><a href="#"><i className="icon-twitter"></i></a></li>
                                            <li><a href="#"><i className="icon-facebook"></i></a></li>
                                            <li><a href="#"><i className="icon-linkedin"></i></a></li>
                                            <li><a href="#"><i className="icon-dribbble"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-12 text-center copyright">
                                    <p><small className="block">&copy; 2016 Free HTML5. All Rights Reserved.</small>
                                        <small className="block">Designed by <a href="http://gettemplates.co/" target="_blank">GetTemplates.co</a> Demo Images: <a href="http://unsplash.com/" target="_blank">Unsplash</a></small></p>
                                </div>

                            </div>



                        </div>
                    </footer>
                </div>

            </div>

            <div className="gototop js-top">
                <a href="#" className="js-gotop"><i className="icon-arrow-up"></i></a>
            </div>

            <Outlet />
        </>
    )
};

export default Layout;