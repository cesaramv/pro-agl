import { environment } from "src/environments/environment";
import { getIssueCommentsByNumber } from "./get-issue-comments-by-numbre.action";

const issueNumber = '123';
const mockComments: any[] = [
    { id: 1, body: 'First comment', user: { login: 'user1' } },
    { id: 2, body: 'Second comment', user: { login: 'user2' } },
];
const BASE_URL = environment.baseUrl;

describe('getIssueCommentsByNumber action', () => {
    it('Should fetch issue comments successfully', async () => {
        const requestURL = `${BASE_URL}/issues/${issueNumber}/comments`;
        const responseMock = new Response(JSON.stringify(mockComments), { status: 200, statusText: 'ok' });
        spyOn(window, 'fetch').and.resolveTo(responseMock);
        await getIssueCommentsByNumber(issueNumber);
        expect(window.fetch).toHaveBeenCalledWith(requestURL);
    });

    it('Should throw an error if the response is not ok', async () => {
        const responseMock = new Response(null, { status: 404, statusText: 'ok' });
        spyOn(window, 'fetch').and.resolveTo(responseMock);
        try {
            await getIssueCommentsByNumber(issueNumber);
            expect(true).toBeFalsy();
        } catch (error) {
            expect(error).toBe("Can't load issues");
        }
    });
})