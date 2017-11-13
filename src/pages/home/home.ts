import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // private abcSet : any = [
  //     {'name': "a", 'img': 'logo'},
  //     {'name': "b", 'img': 'logo'}
  // ];
  public currentLetter : string = 'a';
  private abcSet : any = [
    // 'a', 'b', 'c', 'd', 'e'
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'
  ];


  constructor(public navCtrl: NavController) {

  }

  setCurrentLetter(event) {
    this.currentLetter = event.target.alt;


    //animate clicked button
    event.target.animate([
      { transform: 'scale(0.8)' },
      { transform: 'scale(1)' }
    ], {
      duration: 750,
      easing: 'ease-in'
    });
    // console.log(event.target.alt);
  }

}
