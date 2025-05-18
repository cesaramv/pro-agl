import { sleep } from "@/shared/helpers";
import { IGitHubIssue } from "../interfaces";
import { environment } from "src/environments/environment.development";

export const getIssueByNumber = async (issueNumber: string): Promise<IGitHubIssue> => {
    try {
        const resp = await fetch(`${environment.baseUrl}/issues/${issueNumber}`);

        if (!resp.ok) throw "Can't load issue";

        const issue: IGitHubIssue = await resp.json();
        return issue;

    } catch (error) {
        throw `Can't load issue ${issueNumber}`;
    }
}