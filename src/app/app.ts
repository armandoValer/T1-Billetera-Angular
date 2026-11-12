import { Component } from '@angular/core';

import { Billetera } from './billetera/billetera';

@Component({
  selector: 'app-root',
  imports: [Billetera],
  templateUrl: './app.html',
})
export class App {}
