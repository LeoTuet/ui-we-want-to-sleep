import styles from "./ContentSection.module.scss";

export const ContentSection = () =>{
    return (
      <div>
        <p className={styles.content}>
          Gerade Schüler:innen mit langer Anfahrt beschweren sich immer wieder
          darüber, dass sie absurd früh aufstehen müssen. Selbst, wenn man in
          München wohnt und auf den öffentlichen Nahverkehr angewiesen ist (man
          will ja auch nicht bei der kleinsten Verzögerung der U-Bahn zu spät
          kommen), ist 7:30 wahnsinnig früh.
          <br /> <br />
          Wir setzen uns dafür ein, dass die Schule zu einem späteren Zeitpunkt
          startet und so mehr dem von Wissenschaftler:innen empfohlenen
          Biorhythmus entspricht.
          <br /> <br />
          Vor einigen Jahren gab es schon einmal eine Abstimmung, die die
          Uhrzeit bestätigt hat; wir wollen herausfinden ob es mittlerweile eine
          Mehrheit für einen späteren Schulstart gibt.
        </p>
      </div>
    );
}