import { useContext, useEffect, useState } from "react";
import Contact from "../components/Contact";
import MakeRequest from "../helper-functions/graphql/MakeRequest";
import Query from "../helper-functions/graphql/query";
import master from "../helper-functions/previews/master";
import RecentCommit from "../components/projects/RecentCommit";
import { CustomTheme, styled, useTheme } from "@mui/material";
import getRelativeDate from "../helper-functions/relativeDate";
import NextJsSvg from "../public/svg/technologies/nextjs";
import EmailSvg from "../public/svg/email";
import { MainContext } from "../contexts/MainContext";
import Head from "next/head";
import Technologies from "../components/technologies/Technologies";

export async function getServerSideProps() {
    const makeCall = async function (name: string) {
        return await MakeRequest(Query(name));
    };

    const getAll = async function () {
        return master.map(async (e) => {
            return await makeCall(e.name).then((res) => {
                return res.data.repository.defaultBranchRef.target.history.edges.map(
                    (e) => {
                        return e.node;
                    }
                );
            });
        });
    };

    const data = await Promise.all(await getAll());

    return {
        props: {
            data: data.sort((a: Number, b: Number) => {
                if (
                    Date.parse(a[0].pushedDate) - Date.parse(b[0].pushedDate) >
                    0
                )
                    return -1;
                else return 1;
            }),
        },
    };
}

const RootStyle = styled("div")(({ theme }: { theme: CustomTheme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    maxWidth: `${theme.breakpoints.values.lg}px`,
    width: "100%",
    gap: "1rem",
    // border: '1px solid red',
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        gap: "1rem",
    },
}));

const RecentCommits = styled("section")(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "0rem",
    flexBasis: "90%",
    flexGrow: "1",
}));

export default function Home({ data }) {
    const { selectedMode } = useContext(MainContext);
    const theme: CustomTheme = useTheme();

    const recentCommits = data.map((e) => {
        return (
            <RecentCommit
                props={e}
                key={`${e[0].repository.name}-recentCommits`}
            />
        );
    });

    return (<>
        <Head>
            <title>Home | Jacky C.</title>
        </Head>
        <RootStyle>
            <div style={{
                flexGrow: '1'
            }}>
                <Technologies/>
                <RecentCommits>{recentCommits}</RecentCommits>
            </div>
            <Contact />
        </RootStyle>
                            </>
    );
}
