import { environment } from "src/environments/environment";
import { getIssueByNumber } from "./get-issue-by-numbre.action";

const BASE_URL = environment.baseUrl;
const issueNumber = '123';
const mockIssue = {
    id: 123,
    number: issueNumber,
    body: 'Hi world'
};

describe('getIssueByNumber action', () => {

    it('Should do fetch issue successfully', async () => {
        const requestURL = `${BASE_URL}/issues/${issueNumber}`;
        const issueResponse = new Response(JSON.stringify(mockIssue), { status: 200, statusText: 'ok' });
        spyOn(window, 'fetch').and.resolveTo(issueResponse);

        const issue = await getIssueByNumber(issueNumber);

        expect(window.fetch).toHaveBeenCalledWith(requestURL)
    });

    it('Should not fetch issue successfully', async () => {
        const requestURL = `${BASE_URL}/issues/${issueNumber}`;
        const issueResponse = new Response(null, { status: 404, statusText: 'Not Found' });
        spyOn(window, 'fetch').and.resolveTo(issueResponse);

        try {
            await getIssueByNumber(issueNumber);
            expect(true).toBeFalsy();
        } catch (error) {
            expect(error).toBe(`Can't load issue ${issueNumber}`)
        }

    });
})