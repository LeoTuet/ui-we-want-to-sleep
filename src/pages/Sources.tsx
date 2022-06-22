import { useTranslation } from "react-i18next";

import { ExternalLink } from "../components/ExternalLink";
import { ScienceSource } from "../components/ScienceSource";
import { SharedHeaderSticky } from "../components/SharedHeaderSticky";
import { SharedSection } from "../sections/SharedSection";
import styles from "./Shared.module.scss";

export const Sources = () => {
  const { t } = useTranslation();

  return (
    <>
      <SharedHeaderSticky text={t("sources.header")} />
      <main className={styles.background}>
        <div className={styles.container}>
          <SharedSection header={t("sources.videos")}>
            <div className={styles.list}>
              <ScienceSource
                href="https://www.youtube.com/watch?v=1otF0N6surM"
                name="Warum können wir nicht schlafen?"
                publisher="Vox"
              />
              <ScienceSource
                href="https://youtu.be/a_UjKdfIj3Q"
                name="DARUM sollte die Schule später beginnen! I Pro &amp; Contra"
                publisher="logo!"
              />
            </div>
          </SharedSection>
          <SharedSection header={t("sources.article")}>
            <div className={styles.list}>
              <ScienceSource
                href="https://www.cdc.gov/sleep/features/schools-start-too-early.html"
                name="Schools Start Too Early"
                publisher="CDC"
              />
              <ScienceSource
                href="https://www.sleepfoundation.org/school-and-sleep/later-school-start-times"
                name="How Would Later School Start Times Affect Sleep?"
                publisher="sleepfoundation"
              />
              <ScienceSource
                href="https://www.sciencenewsforstudents.org/article/survey-finds-us-schools-start-too-early"
                name="Survey finds U.S. schools start ‘too early’"
                publisher="ScienceNewsForStudents"
              />
              <ScienceSource
                href="https://www.educationnext.org/do-schools-begin-too-early/"
                name="Do Schools Begin Too Early?"
                publisher="Education Next"
              />
              <ScienceSource
                href="https://www.br.de/nachrichten/wissen/muede-schueler-faengt-die-schule-zu-frueh-an,ReJa68f"
                name="Müde Schüler: Fängt die Schule zu früh an?"
                publisher="BR24"
              />
              <ScienceSource
                href="https://www.rtl.de/cms/beginnt-die-schule-morgens-zu-frueh-4416894.html"
                name="Beginnt die Schule morgens zu früh?"
                publisher="RTL News"
              />
            </div>
          </SharedSection>
        </div>
      </main>
    </>
  );
};
