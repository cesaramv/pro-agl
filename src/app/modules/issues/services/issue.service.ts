import { inject, Injectable, signal } from '@angular/core';
import {
  injectMutation,
  injectQuery,
  QueryClient
} from '@tanstack/angular-query-experimental'
import { getIssueByNumber, getIssueCommentsByNumber, getIssuess, getLabels } from '../actions';
import { IGitHubIssue } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private queryClient = inject(QueryClient);
  public issueNumber = signal<string | null>(null);

  issueQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber()],
    queryFn: () => getIssueByNumber(this.issueNumber()!),
    enabled: this.issueNumber() !== null,
    staleTime: 1000 * 60 * 5
  }));

  issueCommentsQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber(), 'Comments'],
    queryFn: () => getIssueCommentsByNumber(this.issueNumber()!),
    enabled: this.issueNumber() !== null
  }));

  public setIssueNumber(issueId: string) {
    this.issueNumber.set(issueId);
  }

  public setIssueData(issue: IGitHubIssue) {
    this.queryClient.setQueryData(
      ['issue', issue.number.toString()],
      issue,
      { updatedAt: Date.now() * 1000 * 60 })
  }
}
