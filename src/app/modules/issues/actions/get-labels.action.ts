import { sleep } from "@/shared/helpers";
import { IGithubLabel } from "../interfaces";
import { environment } from "src/environments/environment.development";

export const getLabels = async (): Promise<IGithubLabel[]> => {
    try {
        await sleep(1500);
        const resp = await fetch(`${environment.baseUrl}/labels`);

        if (!resp.ok) throw "Can't load labels";

        const labels: IGithubLabel[] = await resp.json();
        return labels;

    } catch (error) {
        throw "Can't load labels"
    }
}