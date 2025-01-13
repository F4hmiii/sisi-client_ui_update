import { useState, useContext } from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { ThemeContext } from '../../../context/themeContext';
import { DarkModeContext } from '../../../context/darkModeContext';

import PropTypes from 'prop-types';

const Stepper = ({ desc }) => {
    const { theme: themeMode } = useContext(ThemeContext);
    const { darkMode } = useContext(DarkModeContext);
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = desc.length;

    const handleNext = () => {
        setActiveStep((prev) => Math.min(prev + 1, maxSteps - 1));
    };

    const handleBack = () => {
        setActiveStep((prev) => Math.max(prev - 1, 0)); 
    };

    const dataNum = desc.length;

    return (
        <>
            <div>{desc[activeStep]}</div>
            <MobileStepper
                variant="dots"
                steps={dataNum}
                position="static"
                activeStep={activeStep}
                sx={{ 
                    maxWidth: "100%", 
                    flexGrow: 1,
                    backgroundColor: darkMode ? "#2d2d2d" : "transparent",
                    "& .MuiMobileStepper-dot": {
                        backgroundColor: darkMode ? "#666666" : "darkgray",
                    },
                    "& .MuiMobileStepper-dotActive": {
                        backgroundColor: themeMode.color,
                    }
                }}
                nextButton={
                    <Button 
                        size="small" 
                        onClick={handleNext} 
                        sx={{
                            color: darkMode ? "#fff" : "#000",
                            fontWeight: "bold",
                        }}
                        disabled={activeStep === dataNum - 1}
                    >
                        Next
                        {themeMode.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button 
                        size="small" 
                        onClick={handleBack} 
                        disabled={activeStep === 0}
                        sx={{
                            color: darkMode ? "#fff" : "#000",
                            fontWeight: "bold",
                        }}
                    >
                        {themeMode.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                    </Button>
                }
            />
        </>
    );
}

Stepper.propTypes = {
    desc: PropTypes.array.isRequired,
};

export default Stepper;