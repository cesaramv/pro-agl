import { TestBed } from "@angular/core/testing";
import { IssuesService } from "./issues.service"
import { provideTanStackQuery, QueryClient } from "@tanstack/angular-query-experimental";

describe('IssuesService', () => {
    let service: IssuesService;
    const queryClient = new QueryClient();

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideTanStackQuery(new QueryClient)
            ]
        })
        service = TestBed.inject(IssuesService);
    });
    it('Should be created', () => {
        expect(service).toBeTruthy();
    })
})