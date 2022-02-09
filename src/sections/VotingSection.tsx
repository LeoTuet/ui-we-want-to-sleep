import styles from "./VotingSection.module.scss";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import React, {useCallback, useState} from "react";

interface VotingSectionProps {
    onTokenReceive: (token: string) => void
}

export const VotingSection = ({onTokenReceive}: VotingSectionProps) => {
    const [captchaSaved, setCaptchaSaved] = useState(false);

    const handleTokenReceive = useCallback((token: string) => {
        if (!token) {
            setCaptchaSaved(false)
        }
        onTokenReceive(token)
        setCaptchaSaved(true)
    }, [onTokenReceive])


    return (
        <div className={styles.votingSection}>
            <h4>Welchen Unterrichtsbeginn wünscht du dir?</h4>
            <p>
                Du kannst nur einmal abstimmen und deine Wahl nicht mehr ändern. Wähle
                weise.
            </p>
            {!captchaSaved && (
                <div className={styles.captchaContainer}>
                    <div style={{marginBottom: "-7px"}}>
                        {/* for vertical alignment */}
                        <HCaptcha
                            sitekey="acdc86a2-5971-49dc-a6e9-ee96e5776e44"
                            onVerify={handleTokenReceive}/>
                    </div>
                </div>
            )}

            {captchaSaved && (
                <div className={styles.buttonContainer}>
                    <button className={styles.voteButton}>07:30 Uhr</button>
                    <button className={styles.voteButton}>08:15 Uhr</button>
                </div>
            )}
        </div>
    );
};
