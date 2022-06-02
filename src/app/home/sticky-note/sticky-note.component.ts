import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sticky-note',
  templateUrl: './sticky-note.component.html',
  styleUrls: ['./sticky-note.component.scss']
})
export class StickyNoteComponent implements OnInit {

  @Input() name: string;
  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
  }

}
