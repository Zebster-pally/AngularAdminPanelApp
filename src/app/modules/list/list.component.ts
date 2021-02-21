import { Component, OnInit } from '@angular/core';
import { IItem } from '../shared/models/item.model';
import { ItemsService } from '../shared/services/items.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  search: string = '';

  item: IItem = { title: null, body: null }

  items: IItem[] = []

  limit: number = 20

  startPosition: number = 0

  constructor(private itemsService: ItemsService) { }

  showMore() {
    this.itemsService.get(this.startPosition, this.limit).subscribe((data: IItem[]) => {
      this.items = [...this.items, ...data];
      this.startPosition += this.limit;
    })
  }

  ngOnInit(): void {
    this.showMore()
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    if (pos == max) {
      this.showMore()
    }
  }
}
