import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  modalReference: NgbModalRef;
  notes: any[] = [];

  constructor(private modalService: NgbModal, private noteService: NoteService) { }

  async ngOnInit(): Promise<void> {
    await this.getNotes();
  }

  async getNotes(): Promise<void> {
    this.notes = await this.noteService.fetchNotes();
  }

  open(modalContent) {
    this.modalReference = this.modalService.open(modalContent, {ariaLabelledBy: 'modal-basic-title'});
  }

  close() {
    this.getNotes();
    this.modalReference.close();
  }

}
