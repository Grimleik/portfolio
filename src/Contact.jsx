

import React from "react";

export default function Contact() {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'PatrikFjellstedt_CV.pdf'; // Specify the file path here
        link.download = 'PatrikFjellstedt_CV.pdf'; // Specify the file name here
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <React.Fragment>
            <h1>Contact</h1>
            <p> You can contact me at: </p>
            <ul>
                <li id="email">
                    <a href="mailto:patrik.fjellstedt@gmail.com">Email</a>
                </li>
                <li id="github">
                    <a href="github.com/Grimleik">Github</a>
                </li>
            </ul>
            <button className="button-cv" onClick={handleDownload}>Download CV</button>
        </React.Fragment>
    );
}