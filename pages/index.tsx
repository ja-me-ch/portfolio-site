import { useEffect, useState } from "react";
import Contact from "../components/Contact";
import MakeRequest from "../helper-functions/graphql/MakeRequest";
import Query from "../helper-functions/graphql/query";
import master from "../helper-functions/previews/master";

export async function getServerSideProps() {
    const makeCall = async function (name: String) {
        return await MakeRequest(Query(name));
    };

    // const data = master.map(async (e) => {
    //     // console.log(await makeCall(e.name));
    //     return await makeCall(e.name);
    // });

    // console.log(data);

    const getAll = async function () {
        return master.map(async (e) => {
            return await makeCall(e.name).then((res) => {
                return res.data.repository.defaultBranchRef.target.history
                    .edges;
            });
        });
    };

    const data = await getAll();

    // const res = await MakeRequest(Query("anime-trivia-game"));

    // const data = res.data.repository.defaultBranchRef.target.history.edges;

    // const mapped = data.map((e) => {
    // console.log(e);
    // return e.node;
    // })

    // const newArray = [];

    // for (let i = 0; i < data.length; i++) {
    //   newArray.push(data[i].node)
    // }

    console.log(data)

    return {
        props: {
            atg: await Promise.all(data),
        },
    };
}

export default function Home(props) {
    console.log(props);

    const time = "2023-03-07T23:22:47Z";
    const currentTime = Date.now();

    const diff = Date.now() - Date.parse(time);
    console.log(diff / (1000 * 60 * 60 * 24));

    return (
        <div>
            Home Page - Index.tsx
            <Contact />
        </div>
    );
}
