import { inject, Injectable, signal } from '@angular/core';
import {
  injectMutation,
  injectQuery,
  QueryClient
} from '@tanstack/angular-query-experimental'
import { getIssueByNumber, getIssueCommentsByNumber, getIssuess, getLabels } from '../actions';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  public issueNumber = signal<string | null>(null);

  issueQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber()],
    queryFn: () => getIssueByNumber(this.issueNumber()!),
    enabled: this.issueNumber() !== null
  }));

  issueCommentsQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber(), 'Comments'],
    queryFn: () => getIssueCommentsByNumber(this.issueNumber()!),
    enabled: this.issueNumber() !== null
  }));

  public setIssueNumber(issueId: string) {
    this.issueNumber.set(issueId);
  }
}
