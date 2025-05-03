import { sleep } from "@/shared/helpers";
import { IGitHubIssue } from "../interfaces";
import { environment } from "src/environments/environment.development";

export const getIssuess = async (): Promise<IGitHubIssue[]> => {
    try {
        await sleep(1500);
        const resp = await fetch(`${environment.baseUrl}/issues`);

        if (!resp.ok) throw "Can't load issues";

        const issues: IGitHubIssue[] = await resp.json();
        return issues;

    } catch (error) {
        throw "Can't load issues"
    }
}