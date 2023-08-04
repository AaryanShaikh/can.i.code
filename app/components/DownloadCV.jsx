import React, { useState } from 'react'
import styles from '../styles/DownloadCV.module.css'
import { GoDownload } from 'react-icons/go'
import { BsFillStopFill } from 'react-icons/bs'

const DownloadCV = () => {
    const [isActive, setisActive] = useState(false)
    const onActive = () => {
        setisActive(true)
        setTimeout(() => {
            setisActive(false)
            handleDownloadPDF()
        }, 2500)
    }
    const handleDownloadPDF = () => {
        // Replace 'path_to_your_pdf.pdf' with the actual path to your PDF file
        const pdfPath = '../../assets/aaryan-resume.pdf';

        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = 'Aaryan\'s Resume.pdf'; // Specify the desired file name
        // link.target = '_blank'; // Open the PDF in a new tab (optional)

        // Append the anchor to the document body and trigger the click event
        document.body.appendChild(link);
        link.click();

        // Clean up - remove the temporary anchor
        document.body.removeChild(link);
    };
    return (
        <div className={styles.container} onClick={onActive}>
            <div className={`${styles.outBorder} ${isActive ? styles.active : ""}`}>
                <div className={`${styles.progress} ${isActive ? styles.active : ""}`}>
                    <div className={`${styles.content} ${isActive ? styles.active : ""}`}>
                        <div className={`${styles.icon} ${isActive ? styles.active : ""}`}>
                            <GoDownload />
                            <BsFillStopFill />
                        </div>
                        <div className={`${styles.text} ${isActive ? styles.active : ""}`}>Download CV</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadCV