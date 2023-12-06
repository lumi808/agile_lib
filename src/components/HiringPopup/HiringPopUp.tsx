import React from 'react';
import { localization } from './generator';
import Alert from '@mui/material/Alert';

interface HiringPopUpProps {
	setShowPopup:any;
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
        <div>
            Hello World from JASAIM
        </div>
        </>
    );
};

export default HiringPopUp;