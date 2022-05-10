import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /* userName = '';
   imageUrl = 'https://scontent.fcmb3-2.fna.fbcdn.net/v/t39.30808-1/198821882_1331672790563362_8267126580845086811_n.jpg?stp=dst-jpg_p111x111&_nc_cat=102&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=vaa0zeEom2QAX9pLwoj&_nc_ht=scontent.fcmb3-2.fna&oh=00_AT975Z1qzvWMa-wgAAGDFPRpAG91E_qcHCkkGoNWzLBjPA&oe=626C18E8';

   public showUserName(name: string): void {
     this.userName = name;
   }*/
  userName: string = '';
}
