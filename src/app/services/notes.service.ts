import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(public afDB: AngularFireDatabase) { }

  public getNotes() {
    return this.afDB.list('/notes/');
  }

  public getNote(id) {
    return this.afDB.object('/notes/' + id);
  }

  public createNote(note){
    return this.afDB.database.ref('/notes/' + note.id).set(note);
  }

  public editNote(note){
    return this.afDB.database.ref('/notes/' + note.id).set(note);
  }

  public deleteNote(id) {
    return this.afDB.database.ref('/notes/' + id).remove();
  }  
}