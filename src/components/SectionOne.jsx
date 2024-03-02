import React from 'react';
import grp from "../Assets/Group 3.png";
import fif from "../Assets/50@50.png";

const SectionOne = () => {
    const handleOnfocus = (e) => {
        e.preventDefault();
        var companyNameInput = document.getElementById('companyNameInput');
        if (companyNameInput) {
            companyNameInput.focus();
        }
    }
    return (
        <div className='container'>
            <div className="row mt-5">
                <div className="col-lg-6 my-auto">
                    <div style={{ fontSize: "30px", fontWeight: "500", color: "#2B3A86" }}>
                        #AIforSocialGood
                    </div>
                    <div>
                        <img src={fif} alt="" style={{ height: "50px" }} />
                    </div>
                    <div className='mt-2' style={{ fontWeight: "400", fontSize: "16px", color: "#999999" }}>
                        An ambitious project to transform Bharat’s future by upgrading 50,000 classrooms to Atomo.
                    </div>
                    <div className='mt-5'>
                        <button class="btn ps-3 pe-3 pt-2 pb-2 text-white" onClick={handleOnfocus} style={{ backgroundColor: "#EF601D", borderRadius: "15px", fontWeight: "400", fontSize: "16px" }} type="submit">Pledge Now</button>
                    </div>
                    <div className='mt-2' style={{ fontWeight: "400", fontSize: "16px", color: "#999999" }}>
                        for CSR Partners
                    </div>
                </div>
                <div className="col-lg-6">
                    <img src={grp} className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    )
}

export default SectionOne;