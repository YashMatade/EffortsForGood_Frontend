import React from 'react';
import logo from "../Assets/logo.png";
import fif from "../Assets/50@50.png";


const Header = () => {
    const handleOnfocus = (e) => {
        e.preventDefault();
        var companyNameInput = document.getElementById('companyNameInput');
        if (companyNameInput) {
            companyNameInput.focus();
        }
    }
    return (
        <div>
            <nav class="navbar navbar-light" style={{ backgroundColor: "#F5FAFF" }}>
                <div class="container">
                    <a class="navbar-brand" ><img src={logo} alt="" style={{ borderRight: "2px solid lightblue" }} /><img src={fif} alt="" className='ms-3' /></a>
                    <form class="d-flex">
                        <button class="btn ps-3 pe-3 pt-2 pb-2 text-white" style={{ backgroundColor: "#EF601D", borderRadius: "15px", fontWeight: "400", fontSize: "16px" }} type="submit" onClick={handleOnfocus}>Pledge Now</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Header;
