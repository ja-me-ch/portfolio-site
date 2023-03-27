import { useEffect, useState } from "react";
import Contact from "../components/Contact";
import MakeRequest from "../helper-functions/graphql/MakeRequest";
import Query from "../helper-functions/graphql/query";
import master from "../helper-functions/previews/master";
import RecentCommit from "../components/projects/RecentCommit";
import { CustomTheme, styled } from "@mui/material";
import getRelativeDate from "../helper-functions/relativeDate";

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

const RootStyle = styled('div')(({ theme } : {theme: CustomTheme}) => ({
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '1200px',
    width: '100%',
    gap: '1.5rem',
    // border: '1px solid red',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        gap: '1rem'
    }
}))

const RecentCommits = styled('section')(() => ({
    flexBasis: '70%',
    flexGrow: '1',
}));

export default function Home(props) {
    const [commitState, setCommitState] = useState(null);

    // useEffect(() => {
    //     if (props.data) {
    //         setCommitState(props.data);
    //     }
    // }, [props.data])
    const { data } = props;
    console.log(data);

    const time = "2023-03-27T23:22:47Z";
    const currentTime = Date.now();

    const diff = Date.now() - Date.parse(time);
    // console.log(diff / (1000 * 60 * 60 * 24));

    const recentCommits = data.map((e) => {
        return <RecentCommit props={e} key={`${e[0].repository.name}-recentCommits`} />
    });

    return (
        <RootStyle>
            <RecentCommits>
                
                {recentCommits}
            </RecentCommits>
            <Contact />
        </RootStyle>
    );
}
