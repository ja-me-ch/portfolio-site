import { useContext } from "react";
import { CustomTheme, styled, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import Link from "next/link";
import { MainContext } from "../../contexts/MainContext";
import getRelativeDate from "../../helper-functions/relativeDate";

const RootStyle = styled("div")(
    ({ fontColor, bgColor }: { fontColor: string; bgColor: string }) => ({
        // border: "1px dashed green",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        color: fontColor,
        // marginBottom: "1rem",
        paddingInline: "0.5rem",
        paddingBlock: "0.4rem",
        fontFamily: "Roboto Mono",
        "&:hover": {
            backgroundColor: alpha(bgColor, 0.3),
            // borderRadius: "0.5rem",
            // margin: '0'
            // borderTopRightRadius: "unset",
            // borderTopLeftRadius: "unset",
            // borderBottomRightRadius: "unset",
            // borderBottom: `2px solid ${
            //     theme.themes.themePalettes[selectedTheme.value].dark
            // }`,
            // borderLeft: `2px solid ${
            //     theme.themes.themePalettes[selectedTheme.value].dark
            // }`,
        },
    })
);

const LeftSide = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
}));

const Message = styled("span")(() => ({
    fontSize: "0.8rem",
    fontWeight: "600",
    "&:hover": {
        textDecoration: "underline",
    },
}));

const RightSide = styled("div")(() => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
}));

const RelativeDate = styled("span")(() => ({
    fontSize: "0.7rem",
    fontWeight: "600",
    marginLeft: "0.7rem",
}));

const AbbreviatedOid = styled("span")(() => ({
    fontSize: "0.7rem",
    fontWeight: "600",
    marginRight: "0.5rem",
    alignSelf: "center",
    "&:hover": {
        textDecoration: "underline",
    },
}));

type CommitProps = {
    message: string;
    abbreviatedOid: string;
    pushedDate: string;
    url: string;
};

const Commit = function (props: CommitProps) {
    const { message, abbreviatedOid, pushedDate, url } = props;
    const { selectedMode, selectedTheme } = useContext(MainContext);
    const theme: CustomTheme = useTheme();
    return (
        <RootStyle
            className="commit-item"
            fontColor={theme.themes.modes[selectedMode.value].contrastText}
            bgColor={theme.themes.themePalettes[selectedTheme.value].light}
        >
            <LeftSide>
                <Message>
                    <Link href={url} rel="noopener noreferrer" target="_blank">
                        {message}
                    </Link>
                </Message>
                <RelativeDate>{`commited ${getRelativeDate(
                    pushedDate
                )}`}</RelativeDate>
            </LeftSide>
            <RightSide>
                <AbbreviatedOid>
                    <Link href={url} rel="noopener noreferrer" target="_blank">
                        {abbreviatedOid}
                    </Link>
                </AbbreviatedOid>
            </RightSide>
        </RootStyle>
    );
};

export default Commit;
