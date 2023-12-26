import React from 'react';
import { localization } from './generator';
import styles from './HiringPopUp.module.css';
import Alert from '@mui/material/Alert';
import student from "@src/assets/student.jpg";
import recruiter from "@src/assets/recruiter.jpg";

interface HiringPopUpProps {
	setShowPopup:any;
};

interface StudentOrRecruiterProps {
	setIsStudent:any;
    setIsClicked:any;
};

const HiringPopUp: React.FC<HiringPopUpProps>= (props) => {
    const lang = 'ru'
    const {setShowPopup} = props;
    const [isStudent, setIsStudent] = React.useState(true);
    const [isClicked, setIsClicked] = React.useState(true);
    const [isDataAlert, setIsDataAlert] = React.useState(false);
    const [alertText, setAlertText] = React.useState(localization[lang].Alert.addData);

    const showAlert = (alertText:string):void => {
        setAlertText(alertText);
        setIsDataAlert(true);
    };

    return (
        <>
        <div className={styles.popupContainer}>
        
            <div className={styles.popupBody}>
                <button type="button" onClick={(): void => {setShowPopup(false);}} className={styles.closePopupButton} data-modal-hide="medium-modal">
                    <svg className={styles.closeIcon} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className={styles.srOnly}>Close modal</span>
                </button>
                {isClicked? 
                    (<StudentOrRecruiter setIsStudent={setIsStudent} setIsClicked={setIsClicked}/>):
                    (
                        <div>
                        </div>
                    )
                }
                {isDataAlert ? (<Alert sx={{borderRadius:'10rem'}}severity="warning">{alertText}</Alert>):(<></>)}
            </div>
        </div>
        </>
    );
};

export default HiringPopUp;

const StudentOrRecruiter: React.FC<StudentOrRecruiterProps> = (props) => {
    const lang = "ru";
    const {setIsStudent, setIsClicked} = props;

    const handleClick = (isStudent: boolean) => {
        setIsStudent(isStudent);
        setIsClicked(false);
    };

    return(
        <div>
            <p className={styles.popupHeading}>{localization[lang].StudentOrRecruiter.role}</p>
            <div className={styles.studentOrRecruiter}>
                <div>
                    <div className={styles.imageContainer} onClick={()=>{handleClick(true)}}>
                        <img src={student} className={styles.img}/>
                    </div>
                    <p className={styles.imgText}>{localization[lang].StudentOrRecruiter.student}</p>
                </div>
                <div>
                    <div className={styles.imageContainer} onClick={()=>{handleClick(false)}}>
                        <img src={recruiter} className={styles.img}/>
                    </div>
                    <p className={styles.imgText}>{localization[lang].StudentOrRecruiter.recruiter}</p>
                </div>
            </div>
        </div>
    )
};