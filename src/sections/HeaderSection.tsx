import React from 'react';
import stylesFromIntro from "./IntroSection.module.scss";
import styles from './HeaderSection.module.scss'
import classNames from "classnames";

const HeaderSection = () => {
    return (
        <div className={classNames(stylesFromIntro.introSection, styles.header)}>
            <div className={styles.title}>
                we.
                <div style={{color: "#FFF153"}}>wantToSleep</div>
                ()_
            </div>
        </div>
    );
};

export default HeaderSection;
