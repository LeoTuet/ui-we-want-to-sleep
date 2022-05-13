import { t } from "i18next";
import { ExternalLink } from "../components/ExternalLink";
import { StickyLegalHeader } from "../components/StickyHeader"
import { LegalSection } from "../sections/LegalSection";
import { useTranslation } from "react-i18next";
import styles from "./Shared.module.scss";


export const Sources = () => {

    const { t } = useTranslation();

    return(<>
     <StickyLegalHeader text={t("sources.header")} />
     <main className={styles.background}>
        <div className={styles.container}>
            <LegalSection header={t("sources.videos")}>
                <p className={styles.list}>
                    <ExternalLink href="https://www.youtube.com/watch?v=1otF0N6surM" />
                    <ExternalLink href="https://youtu.be/a_UjKdfIj3Q" />
                </p>
            </LegalSection>
            <LegalSection header={t("sources.article")}>
                <p className={styles.list}>
                    <ExternalLink href="https://www.cdc.gov/sleep/features/schools-start-too-early.html" />
                    <ExternalLink href="https://www.sleepfoundation.org/school-and-sleep/later-school-start-times" />
                    <ExternalLink href="https://www.sciencenewsforstudents.org/article/survey-finds-us-schools-start-too-early" />
                    <ExternalLink href="https://www.educationnext.org/do-schools-begin-too-early/" />
                    <ExternalLink href="https://www.br.de/nachrichten/wissen/muede-schueler-faengt-die-schule-zu-frueh-an,ReJa68f" />                    
                    <ExternalLink href="https://www.rtl.de/cms/beginnt-die-schule-morgens-zu-frueh-4416894.html" />                    
                </p>
            </LegalSection>
        </div>
    </main>
    </>)

}