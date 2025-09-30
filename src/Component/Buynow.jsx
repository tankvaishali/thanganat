import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Buynow() {
    const [obj, setobj] = useState({});
    let [blankobj, setblankobj] = useState({});
    const [errormsg, seterrormsg] = useState({});

    const getdata = (e) => {
        const { name, value } = e.target;
        obj[name] = value;
        blankobj[name] = "";
        setobj({ ...obj });
        setblankobj({ ...blankobj });

        if (name === "name") {
            if (!value) {
                errormsg[name] = "Name is required!";
            } else if (!/^[a-zA-Z ]{1,40}$/.test(value)) {
                errormsg[name] = "Name must be alphabet.";
            } else {
                errormsg[name] = "";
            }
        }

        if (name === "phnumber") {
            if (!value) {
                errormsg[name] = "Phone Number is required!";
            } else if (value.length < 10) {
                errormsg[name] = "Phone Number must be 10 digits.";
            } else if (value.length > 10) {
                errormsg[name] = "Phone Number is not valid.";
            } else {
                errormsg[name] = "";
            }
        }

        if (name === "pass") {
            if (!value || value < 1 || value > 2) {
                errormsg.pass = "Please select a valid number of adult passes!";
            } else {
                errormsg.pass = "";
            }
        }

        // childrenpass mate koi validation nathi

        seterrormsg({ ...errormsg });
    };

    const savedata = () => {
        let tempError = { ...errormsg };

        if (!obj.name) tempError.name = "Name is required!";
        if (!obj.phnumber) tempError.phnumber = "Phone Number is required!";
        if (!obj.pass || obj.pass < 1 || obj.pass > 2) {
            tempError.pass = "Please select a valid number of adult passes!";
        }

        seterrormsg(tempError);

        if (Object.values(tempError).every(x => x === "")) {
            axios.post("https://thanganat-backend.vercel.app/", {
                ...obj,
                phnumber: Number(obj.phnumber),
                childrenpass: obj.childrenpass ? Number(obj.childrenpass) : 0, // default 0
            })
                .then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Your form has been submitted successfully.',
                        timer: 2000,
                        showConfirmButton: false
                    });
                    setobj({ ...blankobj });
                })
                .catch(err => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: err.response?.data?.error || "Something went wrong!"
                    });
                });
        }
    };

    return (
        <>
            <div className="TicketForm_bg w-100 h-auto d-flex position-relative">
                <div className="w-100 h-100 position-relative z-1 d-flex align-items-center">
                    <div className="container py-4">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-12 col-lg-6 p-4 p-lg-5">
                                <div className="h-100">
                                    <div className="title fs-3 mt-3 mb-2 fw-bold">LGDA Navratri Thanganat 2025</div>
                                    <div className="rounded" style={{ width: "50px", border: "3px solid var(--orange)" }}></div>
                                    <div className="my-3">
                                        <div><span className="fw-bold">Date :</span> 12 October 2025 (Sunday)</div>
                                        <div className="my-1"><span className="fw-bold">Time :</span> 4:00 PM Onwards</div>
                                        <div><span className="fw-bold">Venue :</span> Samast Leuva Patidar Samaj Trust, Saroli “Sanskrit Bhavan” Opposite Kumbhariya Bus Stand, Pune-Kumbhariya Road, Saroli, Ta.Choryasi, Surat-395010. </div>
                                    </div>
                                    <div className="w-100 h-100">
                                        <img src={require("../Assets/Images/poster.jpg")} className="img-fluid object-fit-cover rounded w-100 h-100" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 px-3 pb-4 p-lg-5">
                                <div className="h-100">
                                    <div className="bg-white shadow p-3 p-md-4 rounded" style={{ border: "5px double black" }}>
                                        <div className="title fs-5 fw-bold"> LGDA Navratri Thanganat 2025 Registration Form</div>
                                        <div className="rounded mt-2" style={{ width: "50px", border: "3px solid var(--orange)" }}></div>

                                        <div className="w-100 mt-4">
                                            <label htmlFor="name" className="w-25 fw-medium">Name</label>
                                            <input type="text" placeholder="Enter Name" className="w-75 input_form rounded border border-1 border-secondary px-2 py-1" name="name" value={obj.name || ""} onChange={getdata} id="name" />
                                            <div className='text-danger w-75 ms-auto'>{errormsg.name}</div>
                                        </div>

                                        <div className="w-100 mt-4">
                                            <label htmlFor="phone" className="w-25 fw-medium">Phone No.</label>
                                            <input type="number" placeholder="Enter Phone No." className="w-75 input_form rounded border border-1 border-secondary px-2 py-1" name="phnumber" value={obj.phnumber || ""} onChange={getdata} id="phone" />
                                            <div className='text-danger w-75 ms-auto'>{errormsg.phnumber}</div>
                                        </div>

                                        <div className="w-100 mt-4">
                                            <label htmlFor="pass" className="w-25 fw-medium">No. Of <br /> Adults</label>
                                            <select id="pass" className="w-75 input_form rounded border border-1 border-secondary px-2 py-1" name="pass" value={obj.pass || ""} onChange={getdata}>
                                                <option value="">Select Pass</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                            <div className='text-danger w-75 ms-auto'>{errormsg.pass}</div>
                                        </div>

                                        <div className="w-100 mt-4">
                                            <label htmlFor="childrenpass" className="w-25 fw-medium">No. Of Children</label>
                                            <select id="childrenpass" className="w-75 input_form rounded border border-1 border-secondary px-2 py-1" name="childrenpass" value={obj.childrenpass || "0"} onChange={getdata}>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                        </div>

                                        <div className="text-dark fw-bold mt-3" style={{ fontSize: "14.5px" }}>
                                            Note : Registration is compulsory for childrens above 10 years.
                                        </div>
                                        <div className="text-dark fw-bold mt-1 mb-3" style={{ fontSize: "14.5px" }}>
                                            We will reach out to you promptly once the pass is available.
                                        </div>

                                        <div className="w-100">
                                            <Link to={""} className="text-decoration-none">
                                                <button className="buttons w-100 btn text-light" type="button" onClick={savedata} style={{ fontFamily: "Sora, Sans-serif", fontWeight: 700 }}>Submit</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Buynow