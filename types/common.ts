import { CustomTheme } from "@mui/material";

export type ThemeContextProps = {
    theme?: CustomTheme;
    selectedTheme?: string;
    selectedMode?: string;
}

export type OffsetProps = {
    offset?: string;
    theme?: CustomTheme;
    selectedTheme?: string;
    selectedMode?: string;
};

export type WaveProps = {
    duration: number;
    scale: number[];
    theme?: CustomTheme;
    selectedTheme?: string;
    selectedMode?: string;
};

export type NavItemProps = {
    theme?: CustomTheme;
    href?: string;
    selectedTheme?: string;
    selectedMode?: string;
};

export type NavProps = {
    theme?: CustomTheme;
    showNavbar: boolean;
    selectedTheme?: string;
    selectedMode?: string;
};


