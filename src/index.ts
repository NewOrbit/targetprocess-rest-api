// required until https://github.com/DefinitelyTyped/DefinitelyTyped/issues/28648
const btoa = require("btoa");

import fetch from "node-fetch";

export class TargetProcess {
    private url: string;
    private headers: {
        [index: string]: string;
    };

    constructor(subdomain: string, username: string, password: string) {
        this.url = `https://${subdomain}.tpondemand.com/api/v1`;
        
        this.headers = {
            "Accept": "application/json",
            "Authorization": "Basic " + btoa(`${username}:${password}`),
            "Cache-Control": "no-cache"
        };
    }

    private async requestJSON(endpoint: string) {
        const fullUrl = `${this.url}/${endpoint}`;
        
        const res = await fetch(fullUrl, { method: "GET", headers: this.headers });

        if (!res.ok) {
            throw Error(res.statusText);
        }

        return res.json();
    }

    public async getBug(id: number) {
        return this.requestJSON(`Bugs/${id}`);
    }

    public async getTask(id: number) {
        return this.requestJSON(`Tasks/${id}`);
    }

    public async getStory(id: number) {
        return this.requestJSON(`Userstories/${id}`);
    }

}
