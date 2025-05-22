import React from "react";
import "./css/TopBar.css";

const TopBar: React.FC = () => {
    return (
        <div className="top-bar">
            <div className="bs-tlf">📞 +34 600 123 456</div>
            <div className="bs-webs">
                <a href="https://facebook.com" target="_blank">
                    <img src="/facebook.svg" alt="Facebook" />
                </a>
                <a href="https://instagram.com" target="_blank">
                    <img src="instagram.svg" alt="Instagram" />
                </a>
                <a href="https://x.com" target="_blank">
                    <img src="x.svg" alt="X" />
                </a>
                <a href="https://linkedin.com" target="_blank">
                    <img src="linkedin.svg" alt="LinkedIn" />
                </a>
            </div>
        </div>
    );
};

export default TopBar;