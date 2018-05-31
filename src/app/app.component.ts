import { Component, OnInit } from '@angular/core';

interface Person {
  firstName: string;
  lastName: string;




  sayHi(s: string): string;







}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    this.interfaceTest({firstName: 'Ray', lastName: 'Ayala', sayHi() });
  }

  interfaceTest(x: Person) {
    console.log(`${x.firstName}  ${x.lastName}`);


  }
}
