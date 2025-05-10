import { Component, inject, input } from '@angular/core';
import { IGithubLabel } from '../../interfaces';
import { NgStyle } from '@angular/common';
import { IssuesService } from '../../services';

@Component({
  selector: 'issues-labels-selector',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './labels-selector.component.html'
})
export class LabelsSelectorComponent {
  public issuesService = inject(IssuesService);
  public labels = input.required<IGithubLabel[]>();

  isSelectedLabel(labelName: string) {
    return this.issuesService.selectedLabels().has(labelName);
  }

  onToggleLabel(labelName: string) {
    this.issuesService.toggleLabel(labelName);
  }

}
