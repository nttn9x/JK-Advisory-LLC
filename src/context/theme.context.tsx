import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { createMuiTheme, Theme, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ThemeProvider } from "@material-ui/styles";

import {
  getPrimaryObject,
  getSecondaryObject,
  isDarkThemeMode,
  MODE_THEME,
  setModeTheme,
} from "utils/setting-themes";
import { LayoutApp } from "components/ui-own";

import { loadFont } from "utils/font.util";

export const ThemesContext = createContext<any>(null);

const ThemesProvider = ({ children, ...props }: any) => {
  const themeUI = useTheme();
  const isMobile = useMediaQuery(themeUI.breakpoints.down("sm"));
  const isTablet = useMediaQuery(themeUI.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(themeUI.breakpoints.up("md"));

  const generateTheme = useCallback(function generateTheme() {
    const primary = getPrimaryObject();
    const secondary = getSecondaryObject();
    return createMuiTheme({
      palette: {
        type: isDarkThemeMode() ? MODE_THEME.DARK : MODE_THEME.LIGHT,
        background: {
          default: isDarkThemeMode() ? "#303030" : "#f5f5f5",
        },
        primary,
        secondary,
        text: { primary: "#000" },
      },
    });
  }, []);

  const [theme, setTheme] = useState<Theme>(() => {
    const theme = generateTheme();

    return theme;
  });

  useEffect(() => {
    loadFont();
  }, []);

  useEffect(() => {
    const { palette, spacing, shape, typography } = theme;
    const { primary, secondary, error } = palette;

    document.body.style.setProperty("--sidebar-color", primary.dark);
    document.body.style.setProperty(
      "--background-color",
      palette.background.default
    );
    document.body.style.setProperty("--color-primary-dark", primary.dark);
    document.body.style.setProperty("--color-primary-main", primary.main);
    document.body.style.setProperty("--color-primary-light", primary.light);
    document.body.style.setProperty("--color-secondary-light", secondary.light);
    document.body.style.setProperty("--color-error-main", error.main);
    document.body.style.setProperty(
      "--color-contrast-text",
      primary.contrastText
    );
    document.body.style.setProperty("--gutter-component", spacing(1.5) + "px");
    document.body.style.setProperty("--gutter-container", spacing(3) + "px");
    document.body.style.setProperty(
      "--border-radius-input",
      shape.borderRadius + "px"
    );
    document.body.style.setProperty(
      "--border-radius-button",
      shape.borderRadius + "px"
    );
    document.body.style.setProperty(
      "--border-radius-card",
      shape.borderRadius * 2 + "px"
    );
    document.body.style.setProperty(
      "--border-radius-page",
      shape.borderRadius * 3 + "px"
    );
    document.body.style.setProperty("--text-primary", palette.text.primary);
    document.body.style.setProperty("--text-secondary", palette.text.secondary);
    document.body.style.setProperty("--font-size", typography.fontSize + "px");
    document.body.style.setProperty(
      "--font-weight-bold",
      String(typography.fontWeightBold)
    );
    document.body.style.setProperty(
      "--font-weight-medium",
      String(typography.fontWeightMedium)
    );
    document.body.style.setProperty(
      "--font-weight-regular",
      String(typography.fontWeightRegular)
    );
    document.body.style.setProperty(
      "--border-solid-divider",
      `1px solid ${palette.divider}`
    );
  }, [theme]);

  useEffect(() => {
    setTheme(generateTheme());
  }, [generateTheme]);

  function changeModeType(isDarkTheme: boolean) {
    setModeTheme(isDarkTheme);

    setTheme(generateTheme());
  }

  function changeColor() {
    setTheme(generateTheme());
  }

  return (
    <ThemesContext.Provider
      value={{ changeModeType, changeColor, isMobile, isTablet, isLargeScreen }}
    >
      <ThemeProvider theme={theme} {...props}>
        <LayoutApp>{children}</LayoutApp>
      </ThemeProvider>
    </ThemesContext.Provider>
  );
};

export const useThemesContext = () => useContext<any>(ThemesContext);

export default ThemesProvider;
