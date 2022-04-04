import styles from "./OptionsPanel.module.scss";
import { Option, SelectSlider } from "./SelectSlider";
import moon from "../assets/moon_outline.svg";
import sun from "../assets/sun_outline.svg";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useTheme } from "../hooks/useTheme";
import { actions } from "../stores/ui";
import { Theme } from "../models";

/**
 * Component for selecting the language and theme
 */
export function OptionsPanel() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className={styles.outer}>
      <SelectSlider
        name={t("ui.language")}
        options={[
          { name: "de", node: "Deutsch" },
          { name: "en", node: "English" },
        ]}
        value={i18n.language}
        onChange={i18n.changeLanguage}
      />
      <SelectSlider
        name="Theme"
        options={[
          option("light", sun, "Sun icon for light theme", t("ui.lightTheme")),
          option("dark", moon, "Moon icon for dark theme", t("ui.darkTheme")),
        ]}
        value={theme}
        onChange={(theme) => dispatch(actions.setTheme(theme))}
      />
    </div>
  );
}

/**
 * Creates an option for a {@link SelectSlider} selecting a theme.
 */
function option(
  name: Theme,
  src: string,
  alt: string,
  label: string
): Option<Theme> {
  return {
    name,
    node: <img src={src} alt={alt} aria-label={label} title={label} />,
  };
}
