import { t } from "i18next";
import { ExternalLink } from "../components/ExternalLink";
import { StickyLegalHeader } from "../components/StickyHeader"
import { LegalSection } from "../sections/LegalSection";
import styles from "./Shared.module.scss";


export const Sources = () => {
    return(<>
     <StickyLegalHeader text={t("sources.header")} />
     <main className={styles.background}>
        <div className={styles.container}>
            <LegalSection header="Videos">
                <p className={styles.list}>
                    <ExternalLink href="https://www.youtube.com/watch?v=1otF0N6surM" />
                </p>
            </LegalSection>
            <LegalSection header="Lorem ipsum">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </LegalSection>
        </div>
    </main>
    </>)

}