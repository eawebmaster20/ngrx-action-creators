import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, incrementBy, reset } from './state/counter.actions';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LogicService } from './services/logic.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  resetBool:boolean = false;
  countInputVal = 0;
  counter:Observable<number> = this.store.select('conter');
  constructor(private store: Store<{ conter: number }>, public counterLogicService: LogicService) {  }
  increment(){
    this.store.dispatch(increment());
  }
  increaseBy(){
    this.store.dispatch(incrementBy({payload:this.countInputVal}))
    this.countInputVal = 0;
  }
  decrement(){
    this.store.dispatch(decrement());
  }
  reset() {
    this.animateResetButton();
    this.store.dispatch(reset());
  }
  animateResetButton(){
    this.resetBool = true;
    setTimeout(() => {
      this.resetBool = false;
    }, 1000);
  }
}
