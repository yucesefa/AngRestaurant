import { Component } from '@angular/core';
import { About } from '../_models/about';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  about:About={id:1,title:'başlık',description:'açıklama'}
  about2:About={id:2,title:'başlık2',description:'açıklama2'}
  about3:About={id:3,title:'başlık3',description:'açıklama3'}
  about4:About={id:4,title:'başlık4',description:'açıklama4'}



  abouts:About[]=[this.about,this.about2,this.about3,this.about4]
}
