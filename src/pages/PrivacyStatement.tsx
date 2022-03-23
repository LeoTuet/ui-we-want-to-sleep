import React from "react";
import styles from "./ImprintAndPrivacy.module.scss";
import { LegalHeader } from "../components/LegalHeader";
import { ExternalLink } from "../components/ExternalLink";
import { LegalSection } from "../sections/LegalSection";

export const PrivacyStatement = () => {
  return (
    <div>
      <LegalHeader text={"unser.datenschutz()"} hlStart={6} hlEnd={17} />
      <main className={styles.legalBackground}>
        <div className={styles.legalContainer}>
          <LegalSection header="Einleitung">
            <p>
              Mit der folgenden Datenschutzerklärung möchten wir Sie darüber
              aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend
              auch kurz als „Daten“ bezeichnet) wir zu welchen Zwecken und in
              welchem Umfang im Rahmen der Bereitstellung unserer Applikation
              verarbeiten.
            </p>
            <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
            <p>Stand: 7. Februar 2022</p>
          </LegalSection>
          <LegalSection header="Inhaltsübersicht">
            {" "}
            <ul className="index">
              <li>
                <a className="index-link" href="#m1870">
                  Einleitung
                </a>
              </li>
              <li>
                <a className="index-link" href="#m3">
                  Verantwortlicher
                </a>
              </li>
              <li>
                <a className="index-link" href="#mOverview">
                  Übersicht der Verarbeitungen
                </a>
              </li>
              <li>
                <a className="index-link" href="#m13">
                  Maßgebliche Rechtsgrundlagen
                </a>
              </li>
              <li>
                <a className="index-link" href="#m27">
                  Sicherheitsmaßnahmen
                </a>
              </li>
              <li>
                <a className="index-link" href="#m25">
                  Übermittlung von personenbezogenen Daten
                </a>
              </li>
              <li>
                <a className="index-link" href="#m12">
                  Löschung von Daten
                </a>
              </li>
              <li>
                <a className="index-link" href="#m225">
                  Bereitstellung des Onlineangebotes und Webhosting
                </a>
              </li>
              <li>
                <a className="index-link" href="#m182">
                  Kontakt- und Anfragenverwaltung
                </a>
              </li>
              <li>
                <a className="index-link" href="#m17">
                  Newsletter und elektronische Benachrichtigungen
                </a>
              </li>
              <li>
                <a className="index-link" href="#m408">
                  Umfragen und Befragungen
                </a>
              </li>
              <li>
                <a className="index-link" href="#m10">
                  Rechte der betroffenen Personen
                </a>
              </li>
              <li>
                <a className="index-link" href="#m42">
                  Begriffsdefinitionen
                </a>
              </li>
            </ul>
          </LegalSection>
          <LegalSection header="Verantwortlicher">
            <p>
              Muster, Max <br />
              Musterstraße 1 <br />
              1111, Muster, Deutschland
            </p>
            <p>E-Mail-Adresse:</p>
            <p>
              <a href="mailto:max@muster.de">max@muster.de</a>
            </p>
          </LegalSection>
          <LegalSection header="Übersicht der Verarbeitungen">
            <p>
              Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten
              und die Zwecke ihrer Verarbeitung zusammen und verweist auf die
              betroffenen Personen.
            </p>
            <h3>Arten der verarbeiteten Daten</h3>
            <ul>
              <li>Bestandsdaten.</li>
              <li>Kontaktdaten.</li>
              <li>Inhaltsdaten.</li>
              <li>Nutzungsdaten.</li>
              <li>Meta-/Kommunikationsdaten.</li>
            </ul>
            <h3>Kategorien betroffener Personen</h3>
            <ul>
              <li>Kommunikationspartner.</li>
              <li>Nutzer.</li>
            </ul>
            <h3>Zwecke der Verarbeitung</h3>
            <ul>
              <li>Erbringung vertraglicher Leistungen und Kundenservice.</li>
              <li>Kontaktanfragen und Kommunikation.</li>
              <li>Direktmarketing.</li>
              <li>
                Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.
              </li>
            </ul>
          </LegalSection>
          <LegalSection header="Maßgebliche Rechtsgrundlagen">
            <p>
              Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der
              DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten.
              Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO
              nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder
              Sitzland gelten können. Sollten ferner im Einzelfall speziellere
              Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der
              Datenschutzerklärung mit.
            </p>
            <ul>
              <li>
                <strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a. DSGVO)</strong>
                {} - Die betroffene Person hat ihre Einwilligung in die
                Verarbeitung der sie betreffenden personenbezogenen Daten für
                einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.
              </li>
              <li>
                <strong>
                  Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1
                  S. 1 lit. b. DSGVO)
                </strong>
                {} - Die Verarbeitung ist für die Erfüllung eines Vertrags,
                dessen Vertragspartei die betroffene Person ist, oder zur
                Durchführung vorvertraglicher Maßnahmen erforderlich, die auf
                Anfrage der betroffenen Person erfolgen.
              </li>
              <li>
                <strong>
                  Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c. DSGVO)
                </strong>
                {} - Die Verarbeitung ist zur Erfüllung einer rechtlichen
                Verpflichtung erforderlich, der der Verantwortliche unterliegt.
              </li>
              <li>
                <strong>
                  Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO)
                </strong>
                {} - Die Verarbeitung ist zur Wahrung der berechtigten
                Interessen des Verantwortlichen oder eines Dritten erforderlich,
                sofern nicht die Interessen oder Grundrechte und Grundfreiheiten
                der betroffenen Person, die den Schutz personenbezogener Daten
                erfordern, überwiegen.
              </li>
            </ul>
            <p>
              Zusätzlich zu den Datenschutzregelungen der
              Datenschutz-Grundverordnung gelten nationale Regelungen zum
              Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz
              zum Schutz vor Missbrauch personenbezogener Daten bei der
              Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG
              enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum
              Recht auf Löschung, zum Widerspruchsrecht, zur Verarbeitung
              besonderer Kategorien personenbezogener Daten, zur Verarbeitung
              für andere Zwecke und zur Übermittlung sowie automatisierten
              Entscheidungsfindung im Einzelfall einschließlich Profiling. Des
              Weiteren regelt es die Datenverarbeitung für Zwecke des
              Beschäftigungsverhältnisses (§ 26 BDSG), insbesondere im Hinblick
              auf die Begründung, Durchführung oder Beendigung von
              Beschäftigungsverhältnissen sowie die Einwilligung von
              Beschäftigten. Ferner können Landesdatenschutzgesetze der
              einzelnen Bundesländer zur Anwendung gelangen.
            </p>
          </LegalSection>
          <LegalSection header="Sicherheitsmaßnahmen">
            {" "}
            <p>
              Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
              Berücksichtigung des Stands der Technik, der
              Implementierungskosten und der Art, des Umfangs, der Umstände und
              der Zwecke der Verarbeitung sowie der unterschiedlichen
              Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der
              Rechte und Freiheiten natürlicher Personen geeignete technische
              und organisatorische Maßnahmen, um ein dem Risiko angemessenes
              Schutzniveau zu gewährleisten.
            </p>
            <p>
              Zu den Maßnahmen gehören insbesondere die Sicherung der
              Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch
              Kontrolle des physischen und elektronischen Zugangs zu den Daten
              als auch des sie betreffenden Zugriffs, der Eingabe, der
              Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung.
              Des Weiteren haben wir Verfahren eingerichtet, die eine
              Wahrnehmung von Betroffenenrechten, die Löschung von Daten und
              Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner
              berücksichtigen wir den Schutz personenbezogener Daten bereits bei
              der Entwicklung bzw. Auswahl von Hardware, Software sowie
              Verfahren entsprechend dem Prinzip des Datenschutzes, durch
              Technikgestaltung und durch datenschutzfreundliche
              Voreinstellungen.
            </p>
            <p>
              SSL-Verschlüsselung (https): Um Ihre via unserem Online-Angebot
              übermittelten Daten zu schützen, nutzen wir eine
              SSL-Verschlüsselung. Sie erkennen derart verschlüsselte
              Verbindungen an dem Präfix „https://“ in der Adresszeile Ihres
              Browsers.
            </p>
          </LegalSection>
          <LegalSection header="Übermittlung von personenbezogenen Daten">
            <p>
              Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt
              es vor, dass die Daten an andere Stellen, Unternehmen, rechtlich
              selbstständige Organisationseinheiten oder Personen übermittelt
              oder sie ihnen gegenüber offengelegt werden. Zu den Empfängern
              dieser Daten können z.B. mit IT-Aufgaben beauftragte Dienstleister
              oder Anbieter von Diensten und Inhalten, die in eine Webseite
              eingebunden werden, gehören. In solchen Fall beachten wir die
              gesetzlichen Vorgaben und schließen insbesondere entsprechende
              Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen,
              mit den Empfängern Ihrer Daten ab.
            </p>
          </LegalSection>
          <LegalSection header="Löschung von Daten">
            <p>
              Die von uns verarbeiteten Daten werden nach Maßgabe der
              gesetzlichen Vorgaben gelöscht, sobald deren zur Verarbeitung
              erlaubten Einwilligungen widerrufen werden oder sonstige
              Erlaubnisse entfallen (z.B. wenn der Zweck der Verarbeitung dieser
              Daten entfallen ist oder sie für den Zweck nicht erforderlich
              sind).
            </p>
            <p>
              Sofern die Daten nicht gelöscht werden, weil sie für andere und
              gesetzlich zulässige Zwecke erforderlich sind, wird deren
              Verarbeitung auf diese Zwecke beschränkt. D.h., die Daten werden
              gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z.B.
              für Daten, die aus handels- oder steuerrechtlichen Gründen
              aufbewahrt werden müssen oder deren Speicherung zur
              Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
              oder zum Schutz der Rechte einer anderen natürlichen oder
              juristischen Person erforderlich ist.
            </p>
            <p>
              Unsere Datenschutzhinweise können ferner weitere Angaben zu der
              Aufbewahrung und Löschung von Daten beinhalten, die für die
              jeweiligen Verarbeitungen vorrangig gelten.
            </p>
          </LegalSection>
          <LegalSection header="Bereitstellung des Onlineangebotes und Webhosting">
            <p>
              Um unser Onlineangebot sicher und effizient bereitstellen zu
              können, nehmen wir die Leistungen von einem oder mehreren
              Webhosting-Anbietern in Anspruch, von deren Servern (bzw. von
              ihnen verwalteten Servern) das Onlineangebot abgerufen werden
              kann. Zu diesen Zwecken können wir Infrastruktur- und
              Plattformdienstleistungen, Rechenkapazität, Speicherplatz und
              Datenbankdienste sowie Sicherheitsleistungen und technische
              Wartungsleistungen in Anspruch nehmen.
            </p>
            <p>
              Zu den im Rahmen der Bereitstellung des Hostingangebotes
              verarbeiteten Daten können alle die Nutzer unseres Onlineangebotes
              betreffenden Angaben gehören, die im Rahmen der Nutzung und der
              Kommunikation anfallen. Hierzu gehören regelmäßig die IP-Adresse,
              die notwendig ist, um die Inhalte von Onlineangeboten an Browser
              ausliefern zu können, und alle innerhalb unseres Onlineangebotes
              oder von Webseiten getätigten Eingaben.
            </p>
            <ul className="m-elements">
              <li>
                <strong>Verarbeitete Datenarten:</strong> Inhaltsdaten (z.B.
                Eingaben in Onlineformularen); Nutzungsdaten (z.B. besuchte
                Webseiten, Interesse an Inhalten, Zugriffszeiten);
                Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
                IP-Adressen).
              </li>
              <li>
                <strong>Betroffene Personen:</strong> Nutzer (z.B.
                Webseitenbesucher, Nutzer von Onlinediensten).
              </li>
              <li>
                <strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres
                Onlineangebotes und Nutzerfreundlichkeit.
              </li>
              <li>
                <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art.
                6 Abs. 1 S. 1 lit. f. DSGVO).
              </li>
            </ul>
            <h3>
              Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und
              Diensten:
            </h3>
            <ul className="m-elements">
              <li>
                <strong>Erhebung von Zugriffsdaten und Logfiles:</strong> Wir
                selbst (bzw. unser Webhostinganbieter) erheben Daten zu jedem
                Zugriff auf den Server (sogenannte Serverlogfiles). Zu den
                Serverlogfiles können die Adresse und Name der abgerufenen
                Webseiten und Dateien, Datum und Uhrzeit des Abrufs, übertragene
                Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp nebst
                Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor
                besuchte Seite) und im Regelfall IP-Adressen und der anfragende
                Provider gehören. Die Serverlogfiles können zum einen zu Zwecken
                der Sicherheit eingesetzt werden, z.B., um eine Überlastung der
                Server zu vermeiden (insbesondere im Fall von missbräuchlichen
                Angriffen, sogenannten DDoS-Attacken) und zum anderen, um die
                Auslastung der Server und ihre Stabilität sicherzustellen.
                <ul>
                  <li>
                    <strong>Löschung von Daten:</strong> Logfile-Informationen
                    werden für die Dauer von maximal 30 Tagen gespeichert und
                    danach gelöscht oder anonymisiert. Daten, deren weitere
                    Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur
                    endgültigen Klärung des jeweiligen Vorfalls von der Löschung
                    ausgenommen.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Hetzner:</strong> Leistungen auf dem Gebiet der
                Bereitstellung von informationstechnischer Infrastruktur und
                verbundenen Dienstleistungen (z.B. Speicherplatz und/oder
                Rechenkapazitäten).
                <ul>
                  <li>
                    <strong>Dienstanbieter:</strong> Hetzner Online GmbH,
                    Industriestr. 25, 91710 Gunzenhausen, Deutschland
                  </li>
                  <li>
                    <strong>Website:</strong>{" "}
                    <ExternalLink href="https://www.hetzner.com" />
                  </li>
                  <li>
                    <strong>Datenschutzerklärung:</strong>{" "}
                    <ExternalLink href="https://www.hetzner.com/de/rechtliches/datenschutz" />
                  </li>
                  <li>
                    <strong>Auftragsverarbeitungsvertrag:</strong>{" "}
                    <ExternalLink href="https://docs.hetzner.com/de/general/general-terms-and-conditions/data-privacy-faq/" />
                  </li>
                </ul>
              </li>
            </ul>
          </LegalSection>
          <LegalSection header="Kontakt- und Anfragenverwaltung">
            {" "}
            <p>
              Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail,
              Telefon oder via soziale Medien) sowie im Rahmen bestehender
              Nutzer- und Geschäftsbeziehungen werden die Angaben der
              anfragenden Personen verarbeitet soweit dies zur Beantwortung der
              Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich
              ist.
            </p>
            <p>
              Die Beantwortung der Kontaktanfragen sowie die Verwaltung von
              Kontakt- und Anfragedaten im Rahmen von vertraglichen oder
              vorvertraglichen Beziehungen erfolgt zur Erfüllung unserer
              vertraglichen Pflichten oder zur Beantwortung von
              (vor)vertraglichen Anfragen und im Übrigen auf Grundlage der
              berechtigten Interessen an der Beantwortung der Anfragen und
              Pflege von Nutzer- bzw. Geschäftsbeziehungen.
            </p>
            <ul className="m-elements">
              <li>
                <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B.
                Namen, Adressen); Kontaktdaten (z.B. E-Mail, Telefonnummern);
                Inhaltsdaten (z.B. Eingaben in Onlineformularen).
              </li>
              <li>
                <strong>Betroffene Personen:</strong> Kommunikationspartner.
              </li>
              <li>
                <strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und
                Kommunikation; Erbringung vertraglicher Leistungen und
                Kundenservice.
              </li>
              <li>
                <strong>Rechtsgrundlagen:</strong> Vertragserfüllung und
                vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO);
                Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO);
                Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c. DSGVO).
              </li>
            </ul>
            <h3>
              Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und
              Diensten:
            </h3>
            <ul className="m-elements">
              <li>
                <strong>Kontaktformular:</strong> Wenn Nutzer über unser
                Kontaktformular, E-Mail oder andere Kommunikationswege mit uns
                in Kontakt treten, verarbeiten wir die uns in diesem
                Zusammenhang mitgeteilten Daten zur Bearbeitung des mitgeteilten
                Anliegens. Zu diesem Zweck verarbeiten wir personenbezogene
                Daten im Rahmen vorvertraglicher und vertraglicher
                Geschäftsbeziehungen, soweit dies zu deren Erfüllung
                erforderlich ist und im Übrigen auf Grundlage unserer
                berechtigten Interessen sowie der Interessen der
                Kommunikationspartner an der Beantwortung der Anliegen und
                unserer gesetzlichen Aufbewahrungspflichten.
              </li>
            </ul>
          </LegalSection>
          <LegalSection header="Newsletter und elektronische Benachrichtigungen">
            <p>
              Wir versenden Newsletter, E-Mails und weitere elektronische
              Benachrichtigungen (nachfolgend „Newsletter“) nur mit der
              Einwilligung der Empfänger oder einer gesetzlichen Erlaubnis.
              Sofern im Rahmen einer Anmeldung zum Newsletter dessen Inhalte
              konkret umschrieben werden, sind sie für die Einwilligung der
              Nutzer maßgeblich. Im Übrigen enthalten unsere Newsletter
              Informationen zu unseren Leistungen und uns.
            </p>
            <p>
              Um sich zu unseren Newslettern anzumelden, reicht es grundsätzlich
              aus, wenn Sie Ihre E-Mail-Adresse angeben. Wir können Sie jedoch
              bitten, einen Namen, zwecks persönlicher Ansprache im Newsletter,
              oder weitere Angaben, sofern diese für die Zwecke des Newsletters
              erforderlich sind, zu tätigen.
            </p>
            <p>
              <strong>Double-Opt-In-Verfahren:</strong> Die Anmeldung zu unserem
              Newsletter erfolgt grundsätzlich in einem sogenannte
              Double-Opt-In-Verfahren. D.h., Sie erhalten nach der Anmeldung
              eine E-Mail, in der Sie um die Bestätigung Ihrer Anmeldung gebeten
              werden. Diese Bestätigung ist notwendig, damit sich niemand mit
              fremden E-Mail-Adressen anmelden kann. Die Anmeldungen zum
              Newsletter werden protokolliert, um den Anmeldeprozess
              entsprechend den rechtlichen Anforderungen nachweisen zu können.
              Hierzu gehört die Speicherung des Anmelde- und des
              Bestätigungszeitpunkts als auch der IP-Adresse. Ebenso werden die
              Änderungen Ihrer bei dem Versanddienstleister gespeicherten Daten
              protokolliert.
            </p>
            <p>
              <strong>Löschung und Einschränkung der Verarbeitung:</strong> Wir
              können die ausgetragenen E-Mail-Adressen bis zu drei Jahren auf
              Grundlage unserer berechtigten Interessen speichern, bevor wir sie
              löschen, um eine ehemals gegebene Einwilligung nachweisen zu
              können. Die Verarbeitung dieser Daten wird auf den Zweck einer
              möglichen Abwehr von Ansprüchen beschränkt. Ein individueller
              Löschungsantrag ist jederzeit möglich, sofern zugleich das
              ehemalige Bestehen einer Einwilligung bestätigt wird. Im Fall von
              Pflichten zur dauerhaften Beachtung von Widersprüchen behalten wir
              uns die Speicherung der E-Mail-Adresse alleine zu diesem Zweck in
              einer Sperrliste (sogenannte „Blocklist“) vor.
            </p>
            <p>
              Die Protokollierung des Anmeldeverfahrens erfolgt auf Grundlage
              unserer berechtigten Interessen zu Zwecken des Nachweises seines
              ordnungsgemäßen Ablaufs. Soweit wir einen Dienstleister mit dem
              Versand von E-Mails beauftragen, erfolgt dies auf Grundlage
              unserer berechtigten Interessen an einem effizienten und sicheren
              Versandsystem.
            </p>
            <p>
              <strong>Hinweise zu Rechtsgrundlagen:</strong> Der Versand der
              Newsletter erfolgt auf Grundlage einer Einwilligung der Empfänger
              oder, falls eine Einwilligung nicht erforderlich ist, auf
              Grundlage unserer berechtigten Interessen am Direktmarketing,
              sofern und soweit diese gesetzlich, z.B. im Fall von
              Bestandskundenwerbung, erlaubt ist. Soweit wir einen Dienstleister
              mit dem Versand von E-Mails beauftragen, geschieht dies auf der
              Grundlage unserer berechtigten Interessen an einem effizienten und
              sicheren Versand. Das Registrierungsverfahren wird auf der
              Grundlage unserer berechtigten Interessen aufgezeichnet, um
              nachzuweisen, dass es in Übereinstimmung mit dem Gesetz
              durchgeführt wurde.
            </p>
            <h3>Inhalte:</h3>
            <p>
              Informationen zu uns, unseren Leistungen, Aktionen und Angeboten.
            </p>
            <ul className="m-elements">
              <li>
                <strong>Verarbeitete Datenarten:</strong> Bestandsdaten (z.B.
                Namen, Adressen); Kontaktdaten (z.B. E-Mail, Telefonnummern);
                Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
                IP-Adressen); Nutzungsdaten (z.B. besuchte Webseiten, Interesse
                an Inhalten, Zugriffszeiten).
              </li>
              <li>
                <strong>Betroffene Personen:</strong> Kommunikationspartner.
              </li>
              <li>
                <strong>Zwecke der Verarbeitung:</strong> Direktmarketing (z.B.
                per E-Mail oder postalisch).
              </li>
              <li>
                <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1
                S. 1 lit. a. DSGVO); Berechtigte Interessen (Art. 6 Abs. 1 S. 1
                lit. f. DSGVO).
              </li>
              <li>
                <strong>Widerspruchsmöglichkeit (Opt-Out):</strong> Sie können
                den Empfang unseres Newsletters jederzeit kündigen, d.h. Ihre
                Einwilligungen widerrufen, bzw. dem weiteren Empfang
                widersprechen. Einen Link zur Kündigung des Newsletters finden
                Sie entweder am Ende eines jeden Newsletters oder können sonst
                eine der oben angegebenen Kontaktmöglichkeiten, vorzugswürdig
                E-Mail, hierzu nutzen.
              </li>
            </ul>
            <h3>
              Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und
              Diensten:
            </h3>
            <ul className="m-elements">
              <li>
                <strong>Messung von Öffnungs- und Klickraten:</strong> Die
                Newsletter enthalten einen sogenannte „web-beacon“, d.h., eine
                pixelgroße Datei, die beim Öffnen des Newsletters von unserem
                Server, bzw., sofern wir einen Versanddienstleister einsetzen,
                von dessen Server abgerufen wird. Im Rahmen dieses Abrufs werden
                zunächst technische Informationen, wie Informationen zum Browser
                und Ihrem System, als auch Ihre IP-Adresse und der Zeitpunkt des
                Abrufs, erhoben. Diese Informationen werden zur technischen
                Verbesserung unseres Newsletters anhand der technischen Daten
                oder der Zielgruppen und ihres Leseverhaltens auf Basis ihrer
                Abruforte (die mit Hilfe der IP-Adresse bestimmbar sind) oder
                der Zugriffszeiten genutzt. Diese Analyse beinhaltet ebenfalls
                die Feststellung, ob die Newsletter geöffnet werden, wann sie
                geöffnet werden und TODO here is text missing
              </li>
            </ul>
          </LegalSection>
          <LegalSection header="Umfragen und Befragungen">
            <p>
              Die von uns durchgeführten Umfragen und Befragungen (nachfolgend
              „Befragungen“) werden anonym ausgewertet. Eine Verarbeitung
              personenbezogener Daten erfolgt nur insoweit, als dies zu
              Bereitstellung und technischen Durchführung der Umfragen
              erforderlich ist (z.B. Verarbeitung der IP-Adresse, um die Umfrage
              im Browser des Nutzers darzustellen oder mithilfe eines temporären
              Cookies (Session-Cookie) eine Wiederaufnahme der Umfrage zu
              ermöglichen) oder Nutzer eingewilligt haben.
            </p>
            <p>
              <strong>Hinweise zu Rechtsgrundlagen:</strong> Sofern wir die
              Teilnehmer um eine Einwilligung in die Verarbeitung ihrer Daten
              bitten, ist diese Rechtsgrundlage der Verarbeitung, ansonsten
              erfolgt die Verarbeitung der Daten der Teilnehmer auf Grundlage
              unserer berechtigten Interessen an der Durchführung einer
              objektiven Umfrage.
            </p>
            <ul className="m-elements">
              <li>
                <strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z.B.
                E-Mail, Telefonnummern); Inhaltsdaten (z.B. Eingaben in
                Onlineformularen); Nutzungsdaten (z.B. besuchte Webseiten,
                Interesse an Inhalten, Zugriffszeiten);
                Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
                IP-Adressen).
              </li>
              <li>
                <strong>Betroffene Personen:</strong> Kommunikationspartner.
              </li>
              <li>
                <strong>Zwecke der Verarbeitung:</strong> Kontaktanfragen und
                Kommunikation; Direktmarketing (z.B. per E-Mail oder
                postalisch).
              </li>
              <li>
                <strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1
                S. 1 lit. a. DSGVO); Berechtigte Interessen (Art. 6 Abs. 1 S. 1
                lit. f. DSGVO).
              </li>
            </ul>
          </LegalSection>
          <LegalSection header="Rechte der betroffenen Personen">
            <p>
              Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu,
              die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
            </p>
            <ul>
              <li>
                <strong>
                  Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich
                  aus Ihrer besonderen Situation ergeben, jederzeit gegen die
                  Verarbeitung der Sie betreffenden personenbezogenen Daten, die
                  aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt,
                  Widerspruch einzulegen; dies gilt auch für ein auf diese
                  Bestimmungen gestütztes Profiling. Werden die Sie betreffenden
                  personenbezogenen Daten verarbeitet, um Direktwerbung zu
                  betreiben, haben Sie das Recht, jederzeit Widerspruch gegen
                  die Verarbeitung der Sie betreffenden personenbezogenen Daten
                  zum Zwecke derartiger Werbung einzulegen; dies gilt auch für
                  das Profiling, soweit es mit solcher Direktwerbung in
                  Verbindung steht.
                </strong>
              </li>
              <li>
                <strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben
                das Recht, erteilte Einwilligungen jederzeit zu widerrufen.
              </li>
              <li>
                <strong>Auskunftsrecht:</strong> Sie haben das Recht, eine
                Bestätigung darüber zu verlangen, ob betreffende Daten
                verarbeitet werden und auf Auskunft über diese Daten sowie auf
                weitere Informationen und Kopie der Daten entsprechend den
                gesetzlichen Vorgaben.
              </li>
              <li>
                <strong>Recht auf Berichtigung:</strong> Sie haben entsprechend
                den gesetzlichen Vorgaben das Recht, die Vervollständigung der
                Sie betreffenden Daten oder die Berichtigung der Sie
                betreffenden unrichtigen Daten zu verlangen.
              </li>
              <li>
                <strong>
                  Recht auf Löschung und Einschränkung der Verarbeitung:
                </strong>{" "}
                Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu
                verlangen, dass Sie betreffende Daten unverzüglich gelöscht
                werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben
                eine Einschränkung der Verarbeitung der Daten zu verlangen.
              </li>
              <li>
                <strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das
                Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben,
                nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten,
                gängigen und maschinenlesbaren Format zu erhalten oder deren
                Übermittlung an einen anderen Verantwortlichen zu fordern.
              </li>
              <li>
                <strong>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben
                unbeschadet eines anderweitigen verwaltungsrechtlichen oder
                gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer
                Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres
                gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts
                des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die
                Verarbeitung der Sie betreffenden personenbezogenen Daten gegen
                die Vorgaben der DSGVO verstößt.
              </li>
            </ul>
          </LegalSection>
          <LegalSection header="Begriffsdefinitionen">
            <p>
              In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser
              Datenschutzerklärung verwendeten Begrifflichkeiten. Viele der
              Begriffe sind dem Gesetz entnommen und vor allem im Art. 4 DSGVO
              definiert. Die gesetzlichen Definitionen sind verbindlich. Die
              nachfolgenden Erläuterungen sollen dagegen vor allem dem
              Verständnis dienen. Die Begriffe sind alphabetisch sortiert.
            </p>
            <ul className="glossary">
              <li>
                <strong>Personenbezogene Daten:</strong> „Personenbezogene
                Daten“ sind alle Informationen, die sich auf eine identifizierte
                oder identifizierbare natürliche Person (im Folgenden
                „betroffene Person“) beziehen; als identifizierbar wird eine
                natürliche Person angesehen, die direkt oder indirekt,
                insbesondere mittels Zuordnung zu einer Kennung wie einem Namen,
                zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung
                (z.B. Cookie) oder zu einem oder mehreren besonderen Merkmalen
                identifiziert werden kann, die Ausdruck der physischen,
                physiologischen, genetischen, psychischen, wirtschaftlichen,
                kulturellen oder sozialen Identität dieser natürlichen Person
                sind.
              </li>
              <li>
                <strong>Verantwortlicher:</strong> Als „Verantwortlicher“ wird
                die natürliche oder juristische Person, Behörde, Einrichtung
                oder andere Stelle, die allein oder gemeinsam mit anderen über
                die Zwecke und Mittel der Verarbeitung von personenbezogenen
                Daten entscheidet, bezeichnet.
              </li>
              <li>
                <strong>Verarbeitung:</strong> „Verarbeitung“ ist jeder mit oder
                ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder
                jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen
                Daten. Der Begriff reicht weit und umfasst praktisch jeden
                Umgang mit Daten, sei es das Erheben, das Auswerten, das
                Speichern, das Übermitteln oder das Löschen.
              </li>
            </ul>
          </LegalSection>
          <p className="seal">
            <ExternalLink
              href="https://datenschutz-generator.de/"
              title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
              text="Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke"
            />
          </p>
        </div>
      </main>
    </div>
  );
};
