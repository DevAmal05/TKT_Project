import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tkt';
  names=[
    {firstname:'amal',age:'28'},
    {firstname:'zakaria',age:'30'}
  ]
  ImageURL=[
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCgW_HXr3LayQnrQt1Qj3981cTlNueZ8ew2c7XFOXx&s',
    'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg',
    'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg'
  ]
  index=0;
  BackGround=this.ImageURL[this.index]
date=new Date()
isSpecial=false



  constructor(){
setInterval(()=>{
this.date=new Date()
},1000)


    setInterval(()=>{
this.index++;
if(this.index==this.ImageURL.length){
this.index=0;
this.BackGround=this.ImageURL[this.index]
}else
{
  this.BackGround=this.ImageURL[this.index]
}
    },3000)
  }
}
