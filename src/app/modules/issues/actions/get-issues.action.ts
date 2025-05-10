import { sleep } from "@/shared/helpers";
import { IGitHubIssue, State } from "../interfaces";
import { environment } from "src/environments/environment.development";

export const getIssuess = async (state: State = State.All, selectedLabels: string[]): Promise<IGitHubIssue[]> => {
    try {
        await sleep(1500);
        const params = new URLSearchParams();
        params.append('state', state);
        if (selectedLabels.length > 0) params.append('labels', selectedLabels.join(','));

        const resp = await fetch(`${environment.baseUrl}/issues?${params}`);

        if (!resp.ok) throw "Can't load issues";

        const issues: IGitHubIssue[] = await resp.json();
        return issues;

    } catch (error) {
        throw "Can't load issues"
    }
}