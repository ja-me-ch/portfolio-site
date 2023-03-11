import { CustomTheme } from "@mui/material";

export type OffsetProps = {
    offset: string;
    theme?: CustomTheme;
};

export type WaveProps = {
    duration: number;
    scale: number[];
    theme?: CustomTheme;
}

export type NavItemProps = {
    theme?: CustomTheme;
    href: string
}
