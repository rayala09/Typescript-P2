import { Component, OnInit } from '@angular/core';

interface Person {
  firstName: string;
  lastName: string;
  sayHi(): string;
}

/** class Customer {
 * constructor() {}
 * sayHi(name): string {
 *  console.log('Hiii'+ name);
 *  return 'Hii' +name;
 * }

}

 class Employee {

 }

*/


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    const customer: Person = {
      firstName: 'Ray',
      lastName: 'Ayala',
      sayHi: (): string => {
        return 'Hi there';
      }
    };

    const employee: Person = {
      firstName: 'Josh',
      lastName: 'Whitter',
      sayHi: (): string => {
        return 'Hello';

      }
    };

    console.log(employee.sayHi());
    console.log(customer.sayHi());
  }

  }
