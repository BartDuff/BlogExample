import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    posts= [
    {
      title: "Mon premier post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      loveIts: 0 ,
      created_at: new Date() 
    },
    {
      title: "Mon deuxième post",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      loveIts: 0 ,
      created_at: new Date()  
    },
    {
      title: "Encore un post",
      content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum ",
      loveIts: 0 ,
      created_at: new Date()  
    }
  ];

  constructor() {
  }
}
