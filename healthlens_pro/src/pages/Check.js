import {Navbar} from "../components/Navbar";
import {useState} from "react";
import axios from "axios";
export const Check = () => {

    //States
    const [disImg, setDisImg] = useState(null);

    function getResults() {
        let formData = new FormData();
        formData.append('file', disImg);
        axios.post("http://localhost:5000/upload", formData)
            .then((res)=>{
                console.log(res.data);
            });
    }

    function setImageFile(e) {
        let file = e.target.files[0];
        setDisImg(file);
    }

    return(
        <>
            <Navbar/>

            <section id="appointment" className="appointment section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2>Make an Appointment</h2>
                        <h2>Enter the Details</h2>
                        <p>Make sure the details entered is absolutely correct. <br/>Note : When Uploading the Nail Image please make sure the nail has no artificial colour on it and if there is any please clean up the Nail surface and upload. </p>
                    </div>
                    <form action="forms/appointment.php" method="post" role="form" className="php-email-form">
                        <div className="row">
                            <div className="col-md-4 form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 form-group mt-3">
                                <input type="number" name="age" className="form-control datepicker" id="number" placeholder="Your Age" />
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <select name="gender" id="gender" className="form-select">
                                    <option value>Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Prefer Not to Say</option>
                                </select>
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <select name="doctor" id="doctor" className="form-select">
                                    <option value>Demo</option>
                                    <option value="Doctor 1">Demo</option>
                                    <option value="Doctor 2">Demo</option>
                                    <option value="Doctor 3">Demo</option>
                                </select>
                                <div className="validate" />
                            </div>

                            {/*<section id="upload-section" className="card">*/}

                                {/*<button onClick="processImage()">Check Disease</button>*/}
                            {/*</section>*/}
                        </div>

                        <div>
                            <h6>Upload Nail Image</h6>
                            <input type="file" accept="image/*" id="image-input" onChange={(e)=>{setImageFile(e)}}/>
                        </div>

                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">Your request has been sent successfully. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit" onClick={getResults}>Get Report</button></div>
                    </form>
                </div>
            </section>
        </>
    )
}