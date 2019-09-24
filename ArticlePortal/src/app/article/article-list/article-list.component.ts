import { Component, OnInit } from '@angular/core';
import { StateDispatchersService } from 'src/app/store/state.dispatchers.service';
import { StateSelectorsService } from 'src/app/store/state.selectors.service';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {


  constructor(
    private stateDispatcher: StateDispatchersService,
    public stateSelector: StateSelectorsService
  ) { }

  ngOnInit() {
    this.stateDispatcher.loadUsers();
  }

}
