import React from "react";
import { FaAward, FaRegCalendarAlt } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GiForkKnifeSpoon, GiTrophyCup } from "react-icons/gi";
import { GiFoodTruck } from "react-icons/gi";
import { GiMusicalNotes } from "react-icons/gi";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaUserDoctor } from "react-icons/fa6";

function EventPage() {
    let detail = [
        {
            icon: <FiClock />,
            title: "Time :",
            detail: "04:00 PM Onwards",
            col: "col-12 col-md-3"
        },
        {
            icon: <FaRegCalendarAlt />,
            title: "Date:",
            detail: "12 October 2025​",
            col: "col-12 col-md-3"
        },
        {
            icon: <HiOutlineLocationMarker />,
            title: "Venue:",
            detail: 'સમસ્ત લેઉવા પાટીદાર સમાજ ટ્રસ્ટ, સારોલી “ સાંસ્કૃતિક ભવન "કુંભારીયા બસ સ્ટેન્ડની સામે, પૂણા-કુંભારીયા રોડ, મુ.પો. સારોલી, તા.ચોર્યાસી, જી. સુરત-૩૯૫૦૧૦.',
            col: "col-12 col-md-6"
        },
    ]
    const details = [
        {
            icon: <FaRegCalendarAlt />,
            title: "DATE :",
            detail: "12/10/2025 (Sunday)",
        },
        {
            icon: <HiOutlineLocationMarker />,
            title: "VENUE :",
            detail: 'સમસ્ત લેઉવા પાટીદાર સમાજ ટ્રસ્ટ, સારોલી “ સાંસ્કૃતિક ભવન "કુંભારીયા બસ સ્ટેન્ડની સામે, પૂણા-કુંભારીયા રોડ, મુ.પો. સારોલી, તા.ચોર્યાસી, જી. સુરત-૩૯૫૦૧૦.',
        },
        {
            icon: <FiClock />,
            title: "TIME :",
            detail: "4:00 PM onwards 🕔",
        },
    ];

    const highlights = [
        {
            icon: <PiMicrophoneStageFill />,
            title: "LIVE GARBA MUSIC 🎶",
            desc: "Groove to the energetic  tunes of live Garba music that will keep your feet tapping all night long.",
        },
        {
            icon: <GiMusicalNotes />,
            title: "TRADITIONAL GARBA & RAAS 💃",
            desc: "Join us for an unforgettable night of Garba and Raas. Don your best traditional attire and show off your dance moves.",
        },
        {
            icon: <GiForkKnifeSpoon />,
            title: "DELICIOUS FOOD 🍽",
            desc: "Savor a variety of mouthwatering Gujarati snacks and delicacies to keep your energy high.",
        },
        {
            icon: <FaAward />,
            title: "FUN & PRIZES 🏆",
            desc: "Participate in our dance competitions and stand a chance to win exciting prizes.",
        },
    ];

    return (
        <div className=" text-white py-4">
            <div className="container">
                {/* Title Section */}
                <div className="text-center mb-4">
                    <h2 className="fw-bold text-warning"> 💥 Celebrate Navaratri With LGDA 💥 </h2>
                    <div className='text-center text-white fw-bold'>
                        <h5 className='title py-2'> You're Invited To Our Grand
                            <span className="text-danger"> LGDA NAVRATRI THANGANAT - 2025 🛕🛕 </span></h5>
                    </div>
                    {/* <h5 className="text-light">
            <span className="text-danger">  LGDA NAVRATRI THANGANAT -2025 🛕🛕</span>
          </h5> */}
                    <div className="bg-warning text-dark text-center p-2 rounded-3 mb-4 fw-bold">
                        ગરબા " માં " ની ભક્તિ નું એક રૂપ છે, ગરબા આનંદ ની પ્રસ્તુતિ નું એક સ્વરૂપ છે
                    </div>
                    {/* <div className="lightviolet ">
                            <div className="row px-1 d-flex align-items-center mx-1 justify-content-center">
                                {
                                    detail.map((x, i) => {
                                        return (
                                            <div className={`p-1 ${x.col}`} key={i}>
                                                <div className="d-flex align-items-center  text-white fw-medium">
                                                    <div className=' display-5 pe-3 d-flex align-items-center justify-content-center' style={{color:"#8f82ee"}}>{x.icon}</div>
                                                    <div>
                                                        <h5>{x.title}</h5>
                                                        <h6>{x.detail}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div> */}
                </div>

                {/* Event Info */}
                <div className="row text-center my-4">
                    {details.map((d, i) => (
                        <div className="col-md-4 my-3" key={i}>
                            <div className="p-3 border rounded  h-100 " style={{ backgroundColor: "#4700249f" }}>
                                <div className="display-4" style={{ color: "#8f82ee" }}>{d.icon}</div>
                                <h5 className="mt-2 text-warning">{d.title}</h5>
                                <p>{d.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Invitation Text */}
                <div className="bg_image py-5 my-5">
                    <div className="row justify-content-center">
                        <div className="col-10 col-md-8">

                            <div className="  rounded my-5 text-center text-white p-0 p-md-3" style={{ backgroundColor: "#08004eb9" }}>
                                <h4 className="fw-bold text-warning">➡ You're Invited!</h4>
                                <p>
                                    Dear Doctors, get ready to dance 💃 to the beats 🎶 of joy, revel in
                                    vibrant colors, and immerse yourself in the spirit of NAVARATRI!
                                    <br />
                                    LGDA invites you to <b className="text-warning">"NAVARATRI THANGANAT 2025"</b>.
                                </p>
                            </div>
                        </div>
                        <div className="col-10 col-md-6">

                            <div className="  rounded text-center text-white p-3" style={{ backgroundColor: "#07004baf" }}>
                                <div className=" text-white p-3 rounded ">
                                    <h4 className="text-warning">➡ DRESS CODE:</h4>
                                    <p className="text-capitalize">Traditional Gujarati attire or colorful outfits.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                {/* Highlights */}
                <div className="my-5 py-3">
                    <h4 className="text-center text-warning mb-3">➡ EVENT HIGHLIGHTS :</h4>
                    <div className="row">
                        {highlights.map((h, i) => (
                            <div className="col-md-6 mb-3" key={i}>
                                <div className="p-3 border rounded  h-100" style={{ backgroundColor: "#4700249f" }}>
                                    <div className="fs-3">{h.icon}</div>
                                    <h6 className="fw-bold">{h.title}</h6>
                                    <p>{h.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>



                <div className="h-100 bg-white rounded-4 p-3 d-flex flex-column justify-content-between">
                    <div className='text-center rounded p-3 py-4 bg-warning'>
                        <div className='fw-bold display-6'>
                            Registration is compulsory !
                        </div>
                        {/* <div className='fw-bold'>
                                        for couples and their childrens
                                    </div> */}
                        <div className='fw-bold text-dark pt-2 ' style={{ fontSize: 14 }}>
                            Note : “Registration is compulsory for childrens above 10 years.”
                        </div>
                    </div>
                    <div className='mt-2 darkviolet rounded'>
                        <Link to={"/buynow"} className='text-decoration-none '>
                            <button className='buttons w-100 btn text-light' type="button" style={{ fontFamily: "Sora, Sans-serif", fontWeight: 700 }}>Register Now</button>
                        </Link>
                    </div>
                </div>

                {/* Dress Code */}


                {/* Team Section */}
<div className="text-center pt-5">
  <h3 className="fw-bold text-warning mb-4">❤ TEAM LGDA ❤</h3>
  <div className="row justify-content-center">
    {/* President */}
    <div className="col-12 col-md-4 mb-4">
      <div className="p-4 rounded-4 shadow-lg bg-gradient text-white h-100">
        <div className="d-flex flex-column align-items-center">
        <h2 className=""><FaUserDoctor /></h2>
          <h5 className="fw-bold text-warning">DR. VIJAY PATIL</h5>
          <p className="fst-italic">PRESIDENT</p>
        </div>
      </div>
    </div>

    {/* Vice President */}
    <div className="col-12 col-md-4 mb-4">
      <div className="p-4 rounded-4 shadow-lg bg-gradient text-white h-100">
        <div className="d-flex flex-column align-items-center">
       <h2 className=""><FaUserDoctor /></h2>
          <h5 className="fw-bold text-warning">DR. KIRAN Y PATIL</h5>
          <p className="fst-italic">VICE PRESIDENT</p>
        </div>
      </div>
    </div>

    {/* Secretary */}
    <div className="col-12 col-md-4 mb-4">
      <div className="p-4 rounded-4 shadow-lg bg-gradient text-white h-100">
        <div className="d-flex flex-column align-items-center">
       <h2 className=""><FaUserDoctor /></h2>
          <h5 className="fw-bold text-warning">DR. GIRISH D. VAVDIYA</h5>
          <p className="fst-italic">SECRETARY</p>
        </div>
      </div>
    </div>
  </div>
</div>



                <div className="text-center mt-3">
                    <h5 className="text-danger">💥 Let's make this Navaratri unforgettable 💥</h5>
                </div>
            </div>
        </div>
    );
}

export default EventPage;
