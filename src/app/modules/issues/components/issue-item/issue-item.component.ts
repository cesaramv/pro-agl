import { Component, input } from '@angular/core';
import { IGitHubIssue, State } from '../../interfaces';
import { RouterLink } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'issue-item',
  standalone: true,
  imports: [RouterLink, NgStyle],
  templateUrl: './issue-item.component.html'
})
export class IssueItemComponent {
  public issue = input.required<IGitHubIssue>();

  get isOpen() {
    return this.issue().state === State.Open;
  }
}
