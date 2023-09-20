import React, { useState } from 'react'
import FirstStep from '../../Components/Jobpost/FirstStep';
import HomeLayout from '../../Layouts/HomeLayout';
import SecondStep from '../../Components/Jobpost/SecondStep';
import FinalStep from '../../Components/Jobpost/FinalStep';
import Complete from '../../Components/Jobpost/Completed';

const JobPost = () => {
    const [step, setStep] = useState(1)
    return (
        <HomeLayout displaydir="row">
            {
                step === 1 && <FirstStep setStep={setStep} />
            }{
                step === 2 && <SecondStep setStep={setStep} />
            }{
                step === 3 && <FinalStep setStep={setStep} />
            }{
                step === 4 && <Complete setStep={setStep} />
            }
        </HomeLayout>
    )
}

export default JobPost;
