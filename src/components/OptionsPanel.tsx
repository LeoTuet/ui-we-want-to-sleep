import styles from "./OptionsPanel.module.scss";
import { SelectSlider } from "./SelectSlider";
import halfMoon from "../assets/moon_outline.svg";
import sun from "../assets/sun_outline.svg";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useTheme } from "../hooks/useTheme";
import { actions } from "../stores/ui";

export type Language = "de-DE" | "en-US";

export function OptionsPanel() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className={styles.outer}>
      <SelectSlider
        name={t("ui.language")}
        options={[
          { name: "de-DE", node: "Deutsch" },
          { name: "en-US", node: "English" },
        ]}
        value={i18n.language}
        onChange={i18n.changeLanguage}
      />
      <SelectSlider
        name="Theme"
        options={[
          {
            name: "light",
            node: (
              <img
                src={sun}
                alt="Sun icon for light theme"
                aria-label={t("ui.light_theme")}
                title={t("ui.light_theme")}
              />
            ),
          },
          {
            name: "dark",
            node: (
              <img
                src={halfMoon}
                alt="Moon icon for dark theme"
                aria-label={t("ui.dark_theme")}
                title={t("ui.dark_theme")}
              />
            ),
          },
        ]}
        value={theme}
        onChange={(theme) => dispatch(actions.setTheme(theme))}
      />
    </div>
  );
}
