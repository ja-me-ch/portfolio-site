import { CustomTheme } from "@mui/material/styles";
import { useTheme } from "@mui/system";

const EmailSvg = function ({ modeColor } : { modeColor: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="EmailSvg_bgCarrier" strokeWidth="0"></g>
            <g
                id="EmailSvg_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="EmailSvg_iconCarrier">
                {" "}
                <path
                    d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                    stroke={modeColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    // data-darkreader-inline-stroke=""
                    // style="--darkreader-inline-stroke:#fcf2e0;"
                ></path>{" "}
                <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke={modeColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    // data-darkreader-inline-stroke=""
                    // style="--darkreader-inline-stroke:#fcf2e0;"
                ></rect>{" "}
            </g>
        </svg>
    );
};

export default EmailSvg;
