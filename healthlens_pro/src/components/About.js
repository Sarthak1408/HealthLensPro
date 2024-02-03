export const About = () => {
    return (
        <>
            {/* ======= About Section ======= */}
            <section id="about" className="about">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                            <a href="https://youtu.be/_wW74LwHBiQ?si=lPVyBhksWHLj9EmC" className="glightbox play-btn mb-4" />
                        </div>
                        <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                            <h3>What HealthLens-Pro does...</h3>
                            <p>We propose a system that uses human nail image processing and machine learning to diagnose up to 16 diseases based on nail color. which is a deep convolutional neural network that has been proven to perform well on image classification tasks.</p>
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-fingerprint" /></div>
                                <h4 className="title"><a href>Enhanced Disease Management</a></h4>
                                <p className="description">Early detection allows for more effective disease management strategies, which can lead to better long-term outcomes for individuals living with chronic conditions.</p>
                            </div>
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-gift" /></div>
                                <h4 className="title"><a href>Support for Healthcare Professionals</a></h4>
                                <p className="description">By providing detailed analysis reports, "HealthLens Pro" can assist healthcare professionals in making more accurate and informed decisions about patient care.
                                </p>
                            </div>
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-atom" /></div>
                                <h4 className="title"><a href>Feature</a></h4>
                                <p className="description">Our system aims to provide a fast, accurate, and convenient way of detecting diseases from nail images, and to raise awareness about the importance of nail health.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{/* End About Section */}
        </>
    )
}