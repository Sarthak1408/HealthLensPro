export const Contact = () => {
    return (
        <>
            {/* ======= Contact Section ======= */}
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Department of Computer Science CHRIST (Deemed to be University), Bengaluru-29
                        </p>
                    </div>
                </div>
                <div>
                    <iframe style={{border: 0, width: '100%', height: '350px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1955.0989360445421!2d77.60688038954264!3d12.934802644506712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15392f6ea2f9%3A0x851befe3b3f1d0b0!2sCentral%20campus%2C%20Christ%20University!5e0!3m2!1sen!2sin!4v1700858953454!5m2!1sen!2sin" frameBorder={0} allowFullScreen />
                </div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt" />
                                    <h4>Location:</h4>
                                    <p>Christ University, Hosur Road, BLR - 560029</p>
                                </div>
                                <div className="email">
                                    <i className="bi bi-envelope" />
                                    <h4>Email:</h4>
                                    <p>piyush.rai@mca.christuniversity.in</p>
                                    <p>sumit.agrawal@mca.christuniversity.in</p>
                                    <p>sarthak.mathur@mca.christuniversity.in</p>
                                </div>
                                <div className="phone">
                                    <i className="bi bi-phone" />
                                    <h4>Call:</h4>
                                    <p>+91 2222 3333 55</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-5 mt-lg-0">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>{/* End Contact Section */}
        </>
    )
}