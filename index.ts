// required until https://github.com/DefinitelyTyped/DefinitelyTyped/issues/28648
const btoa = require("btoa"); // tslint:disable-line:no-var-requires

import fetch from "node-fetch";

export class Targetprocess {
    private url: string;
    private headers: {
        [index: string]: string;
    };

    constructor(subdomain: string, username: string, password: string) {
        this.url = `https://${subdomain}.tpondemand.com/api/v1`;

        this.headers = {
            "Accept": "application/json",
            "Authorization": "Basic " + btoa(`${username}:${password}`),
            "Cache-Control": "no-cache",
            "Content-Type": "application/json"
        };
    }

    public async getBug(id: number) {
        return this.requestJSON(`Bugs/${id}`, "GET");
    }

    public async getTask(id: number) {
        return this.requestJSON(`Tasks/${id}`, "GET");
    }

    public async getStory(id: number) {
        return this.requestJSON(`Userstories/${id}`, "GET");
    }

    public async addTime(id: number, spent: number, remain: number, date: Date, description: string) {
        const body = {
            Spent: spent,
            Remain: remain,
            Date: date,
            Description: description,
            Assignable: {
                Id: id
            }
        };

        return this.requestJSON(`Times/`, "POST", body);
    }

    private async requestJSON(endpoint: string, method: string, body?: any) {
        const fullUrl = `${this.url}/${endpoint}`;

        const data = { method, headers: this.headers };

        if (body) {
            (data as any).body = JSON.stringify(body);
        }

        const res = await fetch(fullUrl, data);

        if (!res.ok) {
            throw Error(res.statusText);
        }

        return res.json();
    }

}
