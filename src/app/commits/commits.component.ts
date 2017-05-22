import { Component, OnInit } from '@angular/core';
import { CommitsService } from '../commits.service';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.css']
})
export class CommitsComponent implements OnInit {

  commits: any = [];

  constructor(private commitsService: CommitsService) { }

  ngOnInit() {
    this.commitsService.getAllCommits().subscribe(commits => {
      this.commits = commits;
    });
  }
}
