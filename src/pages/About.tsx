import { ReactNode } from "react";

import LeopoldTuetingImg from "../assets/leopold_tueting.jpeg";
import LuisHaitzerImg from "../assets/luis_haitzer.jpg";
import { NavigationBar } from "../components/NavigationBar";
import { StarBackground } from "../components/StarBackground";
import styles from "./About.module.scss";

interface ProfileCardProps {
  img?: string;
  name: string;
  projectRole: string;
  children?: ReactNode;
}

const ProfileCard = ({
  children,
  projectRole,
  img,
  name,
}: ProfileCardProps) => {
  return (
    <div className={styles.profileCardContainer}>
      <div className={styles.profileCard}>
        {img ? (
          <img className={styles.profileImage} src={img} alt={name} />
        ) : (
          <div className={styles.profileImage} />
        )}
        <p className={styles.name}>{name}</p>
        <p className={styles.projectRole}>{projectRole}</p>
        <div className={styles.description}>{children}</div>
      </div>
    </div>
  );
};

export const AboutUs = () => {
  return (
    <div className={styles.profileView}>
      <StarBackground className={styles.adjustedStarBackground}>
        <NavigationBar />
      </StarBackground>
      <div className={styles.profileGrid}>
        <ProfileCard
          img={LeopoldTuetingImg}
          name="Leopold Tueting"
          projectRole="Project Lead"
        />
        <ProfileCard
          img={LuisHaitzerImg}
          name="Luis Haitzer"
          projectRole="Desgin Lead"
        />
        <ProfileCard name="Maik Kowol" projectRole="FullStack & Reviews" />
        <ProfileCard name="Ludwig Stecher" projectRole="Frontend" />
        <ProfileCard name="Marc Schwaiger" projectRole="Backend & Security" />
      </div>
    </div>
  );
};
