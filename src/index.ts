// required until https://github.com/DefinitelyTyped/DefinitelyTyped/issues/28648
const btoa = require("btoa");

import fetch from "node-fetch";

class TargetProcess {
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
        
        return fetch(fullUrl, { method: "GET", headers: this.headers })
            .then(res => res.json());
    }

    public async getBug(id: number) {
        return this.requestJSON(`Bugs/${id}`);
    }

}
