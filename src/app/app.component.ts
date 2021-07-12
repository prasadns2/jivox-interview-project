// Angular
import { Component, OnInit } from '@angular/core';

// Rxjs
import { take } from 'rxjs/operators';

// Services
import { RuleApiService } from './services/rule-api.service';

// Interfaces
import { IRule } from './interfaces/rule.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  rulesList: IRule[] = [];

  constructor(private readonly ruleApiService: RuleApiService) { }

  ngOnInit() {
    this.ruleApiService.getRulesList().pipe(take(1)).subscribe((res: IRule[]) => {
      this.rulesList = res.filter((rule: IRule) => rule.ruleName);
    });
  }

  deleteRule(index: number) {
    this.rulesList.splice(index, 1);
  }

  cloneRule(index: number) {
    const cloneRule = {...this.rulesList[index]};
    cloneRule.ruleName += ' Clone';
    this.rulesList.splice(index+1, 0, cloneRule);
  }

  moveUpRule(index: number) {
    const movingItem = this.rulesList[index];
    this.rulesList.splice(index, 1);
    this.rulesList.splice(index - 1, 0, movingItem);
  }

  moveDownRule(index: number) {
    const movingItem = this.rulesList[index];
    this.rulesList.splice(index, 1);
    this.rulesList.splice(index + 1, 0, movingItem);
  }
}
