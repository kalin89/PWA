import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { NotesService } from './services/notes.service';
import { MatSnackBar} from '@angular/material';
import { AuthService } from './services/auth.service';
import { MessagingService } from './services/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PWA';
  panelOpenState = false;
  categorias: any = ['Trabajo' , 'Personal'];
  nota: any = {}
  notas: any = [];
  message: any = {};
  constructor(private swUpdate: SwUpdate, private noteService: NotesService, private _snackBar: MatSnackBar, public servicesAuth: AuthService, public messagingService: MessagingService){
    this.noteService.getNotes().valueChanges().subscribe((notes) => {
      this.notas = notes;
      console.log(this.notas)
    }), (error) => {
      console.log(error);
    }
    this.messagingService.getPermission();
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;
  }

  ngOnInit(): void{ 
    if(this.swUpdate.isEnabled){
      this.swUpdate.available.subscribe( ()=> {
        window.location.reload();
      })
    }
  }

  guardarNota() {
    if(!this.nota.id){
      this.nota.id = Date.now();
    }
    
    console.log(this.nota);
    this.noteService.createNote(this.nota).then((data) =>{
      this.nota = {};
      this._snackBar.open('Nota Creada', null, {
        duration: 2000,
      });
    }, (error) => {
      console.log('error');
    })
  }

  seleccionarnota(nota){
    console.log(nota);
    this.nota = nota;
  }

  login() {
    this.servicesAuth.loginWithFacebook();
  }

  
}


// curl https://fcm.googleapis.com/fcm/send \
// -H "Content-Type: application/json" \
// 	-H "Authorization: key=AAAA3yyXaVI:APA91bHPR8Dvzle5BvW2tMf6eTR7MMhDtvOvRv1Lz1nVpmEqu9t4iwiJrQkAcbhFTrTBu74MZylPSXrmQSkG2lT2MdlNjHuTZCeGaa0qQIRuQfLdT3ZTOOgHYjx_Rjv4lonGyPrEmaeh" \
// -d '{ "notification": { "title": "Nueva Feature!", "body": "Hay nuevas features","icon":"https://url-de-tu-icono", "click_action": "http://www.platzi.com"}, "to" : "f8utmA4ANKXBfk3B8CTIyn:APA91bHKHlDC6eKbCgtF1JKaI6EqCmy4baFtRbU3sSGJ08pqNCxtyMQKQwoCs6Ehfq-qCDizRdk7xTCjK5aQqQD9EPvvS9Z2KY7xVB5ywcYtDfSyOGnG5sOequCvhM9ugyTLMLJ6YysF"
// }'
