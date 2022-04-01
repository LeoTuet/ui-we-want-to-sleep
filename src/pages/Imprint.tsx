import React from "react";
import styles from "./ImprintAndPrivacy.module.scss";
import { StickyLegalHeader } from "../components/StickyHeader";
import { LegalSection } from "../sections/LegalSection";

export const Imprint = () => {
  return (
    <>
      <StickyLegalHeader text="unser.impressum()" hlStart={6} hlEnd={15} />
      <main className={styles.legalBackground}>
        <div className={styles.legalContainer}>
          <LegalSection header="Angaben gemäß § 5 TMG">
            <h3>Inhaber:</h3>
            <p>
              Leopold Tüting <br />
              Starnberger Weg 15c <br />
              82110 Germering
            </p>
            <h3>Kontakt:</h3>
            <p>
              E-Mail: <a href="info@wewanttosleep.de">info@wewanttosleep.de</a>
            </p>
            <h3>Verantwortungen:</h3>
            <p>
              Verantwortlicher für den Inhalt ist gemäß § 55 Abs. 2
              Rundfunkstaatsvertrag (RStV): Leopold Tüting
            </p>
            <p>
              Quellenangaben für die verwendeten Bilder und Grafiken: Leopold
              Tüting
            </p>
          </LegalSection>
          {/* <h3>Haftungsausschluss:</h3> */}
          <LegalSection header="Haftungsbeschränkung">
            <p>
              Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt
              erstellt. Der Anbieter übernimmt jedoch keine Gewähr für die
              Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten
              Inhalte. Die Nutzung der Inhalte der Website erfolgt auf eigene
              Gefahr des Nutzers. Namentlich gekennzeichnete Beiträge geben die
              Meinung des jeweiligen Autors und nicht immer die Meinung des
              Anbieters wieder. Mit der reinen Nutzung der Website des Anbieters
              kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem
              Anbieter zustande.
            </p>
          </LegalSection>
          <LegalSection header="Haftung für Links">
            <p>
              Die auf dieser Website veröffentlichten Inhalte unterliegen dem
              deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen
              Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung
              bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder
              jeweiligen Rechteinhabers. Dies gilt insbesondere für
              Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung,
              Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder
              anderen elektronischen Medien und Systemen. Inhalte und Rechte
              Dritter sind dabei als solche gekennzeichnet. Die unerlaubte
              Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter
              Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung
              von Kopien und Downloads für den persönlichen, privaten und nicht
              kommerziellen Gebrauch ist erlaubt. Die Darstellung dieser Website
              in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.
            </p>
          </LegalSection>
          <LegalSection header="Urheber- und Leistungsschutzrechte">
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
              Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
            </p>
          </LegalSection>
          <LegalSection header="Besondere Nutzungsbedingungen">
            <p>
              Soweit besondere Bedingungen für einzelne Nutzungen dieser Website
              von den vorgenannten Paragraphen abweichen, wird an entsprechender
              Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im
              jeweiligen Einzelfall die besonderen Nutzungsbedingungen.
            </p>
          </LegalSection>
        </div>
      </main>
    </>
  );
};
