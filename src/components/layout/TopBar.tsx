import React from "react";
import "./css/TopBar.css";

const TopBar: React.FC = () => {
    return (
        <div className="top-bar">
            <div className="bs-tlf">📞 +34 600 123 456</div>
            <div className="bs-webs">
                <a href="https://facebook.com" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com" target="_blank">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://x.com" target="_blank">
                    <i className="fab fa-x-twitter"></i>
                </a>
                <a href="https://linkedin.com" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
        </div>
    );
};

export default TopBar;