import { CustomTheme, styled, Collapse, useTheme } from "@mui/material";
import { alpha } from '@mui/material/styles'
import { useContext, useState } from "react";
import { MainContext } from "../../contexts/MainContext";
import Commit from "./Commit";
import NavbarSvg from "../../public/svg/navbar";

const RootStyle = styled("div")(({ theme }: { theme: CustomTheme }) => ({
    // border: "1px solid black",
    borderRadius: "0.2rem",
    // paddingInline: '0.5rem',
    // paddingBlock: '0.5rem',
    color: theme.themes.modes[theme.themes.selectedMode].contrastText,
    marginBottom: "2rem",
    backgroundColor: alpha(theme.themes.themePalettes[theme.themes.selectedTheme].main, 0.15),
    overflow: "hidden",
}));

const TopBar = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
}))

const Title = styled("h2")(() => ({
    fontFamily: "Roboto Mono",
    fontSize: "1.3rem",
    margin: "0",
    paddingBlock: "1rem",
    paddingLeft: "0.5rem",
}));

const Commits = styled("div")(({ theme } : {theme: CustomTheme}) => ({
    ".commit-item": {
        // marginBottom: '0.3rem',

        // borderBottom: '1px solid black',
        // borderTop: "1px solid black",
        // marginInline: '0.5rem',
        borderTop: `2px solid ${
            theme.themes.themePalettes[theme.themes.selectedTheme].light
        }`,
    },
}));

const ShowMore = styled("div")(({ showMore }: { showMore: boolean }) => ({
    margin: "0",
    padding: "0",
    opacity: showMore ? '1' : '0',
    transition: "0.2s all linear",
}));

const ShowMoreButton = styled('button')(() => ({
    border: 'none',
    backgroundColor: 'transparent'

}))

type CommitInfoProps = {
    abbreviatedOid: string;
    id: string;
    message: string;
    pushedDate: string;
    url: string;
    repository: {
        name: string;
    };
};

const RecentCommit = function ({ props }: { props: CommitInfoProps[] }) {
    const { selectedTheme, themeMode } = useContext(MainContext);
    const theme: CustomTheme = useTheme();
    const [showMore, setShowMore] = useState(false);

    const commits = props.map((c) => {
        return (
            <Commit
                message={c.message}
                abbreviatedOid={c.abbreviatedOid}
                pushedDate={c.pushedDate}
                url={c.url}
                key={c.id}
            />
        );
    });

    const toggleShowMore = function (e) {
        e.preventDefault();
        setShowMore((s) => !s);
    };

    return (
        <RootStyle>
            <TopBar>
                <Title>{props[0].repository.name}</Title>
                <ShowMoreButton onClick={toggleShowMore}>
                    <NavbarSvg
                        toggle={showMore}
                        modeColor={
                            theme.themes.modes[theme.themes.selectedMode]
                                .contrastText
                        }
                    />
                </ShowMoreButton>
            </TopBar>
            <Commits>
                {commits[0]}
                <Collapse in={showMore}>
                    <ShowMore showMore={showMore}>{commits.splice(1)}</ShowMore>
                </Collapse>
            </Commits>
        </RootStyle>
    );
};

export default RecentCommit;
