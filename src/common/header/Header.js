import React from 'react';
import "./Header.css";
import { FaReply } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { MdLocalShipping } from "react-icons/md";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";

function Header(props) {
    return (
        <div className='header-language-background'>
            <div className="header-language-container">
                <div className="lifetime-exchange">
                    <ul className="home-site-features">
                        <li>
                            <FaReply />
                            30 Day Returns
                        </li>
                        <li>
                        <LiaRupeeSignSolid />
                            100% Refund
                        </li>
                        <li>
                        <LiaRupeeSignSolid />
                            Cash On Delivery
                        </li>
                        <li>
                        <MdLocalShipping />
                            Free Insured Shipping
                        </li>
                        <li>
                       
                        <RiArrowLeftRightFill />
                            Lifetime Exchange
                        </li>
                        <li>
                            <FaReply />
                            BIS Hallmark
                        </li>
                        <li>
                        <LiaCertificateSolid />

                            Certified Diamonds
                        </li>
                        <li>
                        <FaPhone />

                            +91-7043 557779
                        </li>
                        <li>
                        <FaRegEnvelope />

                            contactus@sarvadajewels.com
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;