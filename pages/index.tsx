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
                    .edges.map((e) => {
                        return e.node;
                    });
            });
        });
    };

    const data = await Promise.all(await getAll());

    console.log('data:');
    console.log(data[0]);

    

    return {
        props: {
            data: data
        },
    };
}

export default function Home(props) {
    // console.log(props);

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
