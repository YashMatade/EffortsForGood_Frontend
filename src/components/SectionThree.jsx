import React, { useState } from 'react';
import pledge from '../Assets/Pledge Form.png';
import world from '../Assets/World-bro 1.png';
import { savePledge } from '../Routes/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SectionThree = () => {
    const [comanyName, setCompanyName] = useState();
    const [representativename, setRepresentativeName] = useState();
    const [officeEmail, setOfficeEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [Message, setMessage] = useState();
    const [err, setErr] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        let validate = true;
        let data = {
            companyName: comanyName,
            representativeFullName: representativename,
            officeEmail,
            phoneNummber: phoneNumber,
            message: Message
        }

        if (data.companyName === "" || data.companyName === undefined) {
            setErr("All fileds required");
            validate = false;
        }
        if (data.representativeFullName === "" || data.representativeFullName === undefined) {
            setErr("All fileds required");
            validate = false;
        }
        if (data.officeEmail === "" || data.officeEmail === undefined) {
            setErr("All fileds required");
            validate = false;
        }
        if (data.phoneNummber === "" || data.phoneNummber === undefined) {
            setErr("All fileds required");
            validate = false;
        }
        if (data.message === "" || data.message === undefined) {
            setErr("All fileds required");
            validate = false;
        }

        if (validate === true) {
            setErr("")
            savePledge(data).then((res) => {
                if (res?.err === 200) {
                    setCompanyName("");
                    setMessage("");
                    setOfficeEmail("");
                    setPhoneNumber("");
                    setRepresentativeName("");
                    toast.success(res.msg);
                } else {
                    toast.warning("server error");
                }
            })
        }


    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <img src={pledge} className='img-fluid' alt="" />
                        </div>
                        <div style={{ color: "#999999" }}>
                            Use this form to pledge your CSR Commitment towards 50@50.
                        </div>
                        <div>
                            <img src={world} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 pt-5 ps-5 pe-5" style={{ fontWeight: "600" }}>
                        <form action="">
                            <div className="row">
                                <div className="col-lg-6 mt-4">
                                    <label htmlFor="">
                                        Company Name
                                    </label>
                                    <input value={comanyName} id="companyNameInput" required onChange={(e) => { setCompanyName(e.target.value); setErr("") }} type="text" className='form-control w-100' name="" style={{ backgroundColor: "#F8F5F5" }} />
                                </div>
                                <div className="col-lg-6 mt-4">
                                    <label htmlFor="">
                                        Representative Full Name
                                    </label>
                                    <input required value={representativename} type="text" onChange={(e) => { setRepresentativeName(e.target.value); setErr("") }} className='form-control w-100' name="" style={{ backgroundColor: "#F8F5F5" }} id="" />
                                </div>

                                <div className="col-lg-6 mt-4">
                                    <label htmlFor="">
                                        Office Email
                                    </label>
                                    <input type="email" required value={officeEmail} onChange={(e) => { setOfficeEmail(e.target.value); setErr("") }} className='form-control w-100' name="" style={{ backgroundColor: "#F8F5F5" }} id="" />
                                </div>
                                <div className="col-lg-6 mt-4">
                                    <label htmlFor="phoneNumber">
                                        Phone Number
                                    </label>
                                    <input type="phone" required value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value); setErr("") }} className="form-control" name="phoneNumber" id="phoneNumber" style={{ backgroundColor: "#F8F5F5" }} />
                                </div>

                                <div className="col-lg-12 mt-4">
                                    <label htmlFor="phoneNumber">
                                        Message
                                    </label>
                                    <textarea value={Message} onChange={(e) => { setMessage(e.target.value); setErr("") }} className='form-control' name="" id="" cols="30" rows="10" style={{ backgroundColor: "#F8F5F5" }}>
                                    </textarea>
                                </div>
                            </div>

                            {
                                err && <div class="alert alert-danger mt-3" role="alert">
                                    {err}
                                </div>
                            }

                            <button class="btn ps-5 pe-5 pt-2 pb-2 text-white mt-5" style={{ backgroundColor: "#EF601D", borderRadius: "10px", fontWeight: "400", fontSize: "16px" }} type="submit" onClick={handleSubmit}>Submit</button>
                            <div style={{ color: "#999999" }}>
                                Our Representative will get in touch with you shortly.
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default SectionThree;