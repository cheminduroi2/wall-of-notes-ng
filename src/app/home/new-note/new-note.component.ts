import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NoteService } from 'src/app/note.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

  @Output() close = new EventEmitter<any>();
  name = new FormControl('');
  message =  new FormControl('');

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {}

  async onSubmit(): Promise<void> {
    await this.noteService.postNote({ Name: this.name.value, Message: this.message.value });
    this.close.emit();
  }

}
