export const Services = () => {
    return(
        <>
            {/* ======= Services Section ======= */}
            <section id="services" className="services">
                <div className="container">
                    <div className="section-title">
                        <h2>Services</h2>
                        <p>We at HealthLens Pro provides a wide range of early stage disease detection technics at you own place just follow the steps and you can be healthy in minutes. Currently we are using Nail Image to detect the Disease in a human body.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="icon-box">
                                <div className="icon"><i className="fas fa-heartbeat" /></div>
                                <h4><a href={"/check"}>Check Here</a></h4>
                                <p>Upload your Nail Image to check your Health status. This will give you the early stage prediction.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div className="icon-box">
                                <div className="icon"><i className="fas fa-pills" /></div>
                                <h4><a href>Order Medicines</a></h4>
                                <p>Once done checking with the report, get the medicines here to prevent a unhealthy Diaease.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                            <div className="icon-box">
                                <div className="icon"><i className="fas fa-hospital-user" /></div>
                                <h4><a href>Look for Doctors</a></h4>
                                <p>Still not happy with the report you can make an appointment with a doctor and get checked.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                            <div className="icon-box">
                                <div className="icon"><i className="fas fa-dna" /></div>
                                <h4><a href>Coming Soon</a></h4>
                                <p>We  are   in   progress  of  making   new  Things, Pls Stay tuned</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                            <div className="icon-box">
                                <div className="icon"><i className="fas fa-dna" /></div>
                                <h4><a href>Coming Soon</a></h4>
                                <p>We  are   in   progress  of  making   new  Things, Pls Stay tuned</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                            <div className="icon-box">
                                <div className="icon"><i className="fas fa-dna" /></div>
                                <h4><a href>Coming Soon</a></h4>
                                <p>We  are   in   progress  of  making   new  Things, Pls Stay tuned</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{/* End Services Section */}
        </>
    )
}