import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import EventPage from './EventPage';

function Homepage() {
   
    return (
        <>
            <div className='darkviolet'>
                <div className="container">
                    <div className="pt-3">
                        <div className='titlebg border-2 border border-danger text-white  text-center pt-1'>
                            <h5>ADWAITA cancer hospital & LGDA pariwar presents Thanganat 2.0 ( Rangtali ) co. Powered by Candor IVF</h5>
                        </div>
                        {/* <div className='text-center text-white fw-bold'>
                            <h2 className='title pt-3'> You're Invited to Our Grand
                                <span className="text-warning"> NAVARATRI THANGANAT 2025 </span></h2>
                        </div> */}
                        <div className="row d-flex justify-content-center py-3 ">
                            <div className="col-12 col-md-6 col-lg-6">
                                <img src={require("../Assets/Images/poster.jpg")} alt="" className='img-fluid object-fit-cover rounded-4 border border-secondary border-4 w-100 h-100' />
                            </div>
                        </div>

                    </div>
                </div>
<EventPage/>
            </div>
        </>
    );
}

export default Homepage;
