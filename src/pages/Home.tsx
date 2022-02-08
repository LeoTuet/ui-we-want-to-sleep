import React, {useEffect, useState} from "react";
import {ContentSection} from "../sections/ContentSection";
import {IntroSection} from "../sections/IntroSection";
import {VotingSection} from "../sections/VotingSection";


export const Home = () => {
    const [token, setToken] = useState<string | undefined>(undefined);

    useEffect(() => {
        console.log(token)
    }, [token])

    return (
        <div>
            <IntroSection/>
            <ContentSection/>
            <VotingSection onTokenReceive={setToken}/>
            <div style={{height: "200vh"}}></div>
        </div>
    );
};
