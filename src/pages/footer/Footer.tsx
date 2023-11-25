import React from "react";
import styled from "../../styles/Footer.module.css"
import { FaInstagram, FaGithubAlt, FaLinkedin, FaRegCopyright, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
    <footer className={styled.footer_container}>
        <div className={styled.footer_credits}>
            <div>
                Desenvolvido com <span className={styled.heart}><FaHeart/> </span> 
                por <span className={styled.developer_name}>Thiago </span>
                <FaRegCopyright/>
            </div>
            <div className={styled.footer_icons}>
                <a className={styled.a} href="https://www.instagram.com/thiago.twenty/"><FaInstagram/></a>
                <a className={styled.a} href="www.linkedin.com/in/thiago-henrique-3b1bb419a"><FaLinkedin/></a>
                <a className={styled.a} href="https://github.com/Akatchin"><FaGithubAlt/></a>
            </div>
        </div>
    </footer>
    )
}