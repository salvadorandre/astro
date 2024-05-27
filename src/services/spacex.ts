
import { type Doc, type APISpaceXResponse } from "../types/api";

export const getLatestLaunches = async () => {
    const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            query: {},
            options: {
                date_unix: "asc",
            },

            limit: 30,
        }),
    });
    const { docs } = (await res.json()) as APISpaceXResponse;

    return docs
}


export const getLatestLaunchesById = async ({id}: {id:string}) => {
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)
    const doc  = (await res.json()) as Doc;
    return doc
}


