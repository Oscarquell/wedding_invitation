import React from 'react';
import SecondSectionKg from "../../secondSection/indexKg";
import RulesKg from "../../rules-section/indexKg";
import FeedbackFormKg from "../../feedbackForm/feedbackKG";
import TimerBlockKg from "../../timerBlock/timer";
import FooterKg from "../../footer/indexKg";

const MainPageRus = () => {
    return (
        <>
            <SecondSectionKg/>
            <RulesKg />
            <TimerBlockKg />
            <FeedbackFormKg />
            <FooterKg />
        </>
    );
};

export default MainPageRus;

