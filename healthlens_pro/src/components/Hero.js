export const Hero = () => {
    return(
        <>
            {/* ======= Hero Section ======= */}
            <section id="hero" className="d-flex align-items-center ">
                <div className="container">
                    <h1>Welcome to HealthLens Pro</h1>
                    <h2>An Early Disease Detector using Human Nail Image</h2>
                    <a href="#services" className="btn-get-started scrollto">Get Started</a>
                </div>
            </section>{/* End Hero */}

            <main id="main">
                {/* ======= Why Us Section ======= */}
                <section id="why-us" className="why-us">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 d-flex align-items-stretch">
                                <div className="content">
                                    <h3>Why Choose HealthLens Pro?</h3>
                                    <p>

                                    </p>
                                    <div className="text-center">
                                        <a href="#about" className="more-btn">Learn More <i className="bx bx-chevron-right" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 d-flex align-items-stretch">
                                <div className="icon-boxes d-flex fle x-column justify-content-center">
                                    <div className="row">
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <i className="bx bx-receipt" />
                                                <h4>Convenience and Accessibility</h4>
                                                <p>"HealthLens Pro" provides individuals with the convenience of conducting initial screenings from the comfort of their own homes.</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <i className="bx bx-cube-alt" />
                                                <h4>Reduced Anxiety</h4>
                                                <p>For individuals who may be anxious about visiting healthcare facilities or have concerns about specific symptoms.</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <i className="bx bx-images" />
                                                <h4>Privacy and Comfort</h4>
                                                <p>Some individuals may feel more comfortable conducting a preliminary assessment in the privacy of their own space rather than in a clinical setting.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* End .content*/}
                            </div>
                        </div>
                    </div>
                </section>{/* End Why Us Section */}
            </main>
        </>
    )
}