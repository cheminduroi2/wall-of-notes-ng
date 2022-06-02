import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  async fetchNotes(): Promise<any[]> {
    let notes: any[];
    try {
      notes = await this.http.get<any[]>('https://localhost:5001/api/Notes').toPromise();
    } catch (err) {
      console.log(err);
      notes = [];
    } finally {
      return notes;
    }
  }

  async postNote(data: any): Promise<any> {
    let newNote: any;
    try {
      newNote = await this.http.post('https://localhost:5001/api/Notes', data).toPromise();
    } catch (err) {
      console.log(err);
      newNote = {};
    } finally {
      return newNote;
    }
  }
}
