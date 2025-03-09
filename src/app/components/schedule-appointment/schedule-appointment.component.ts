import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {merge} from 'rxjs';

@Component({
  selector: 'app-schedule-appointment',
  templateUrl: './schedule-appointment.component.html',
  styleUrl: './schedule-appointment.component.scss',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleAppointmentComponent {
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  readonly name = new FormControl('', Validators.required);

  emailErrorMessage = signal('');
  nameErrorMessage = signal('');

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateEmailErrorMessage());

    merge(this.name.statusChanges, this.name.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateNameErrorMessage());
  }

  updateEmailErrorMessage() {
    if (this.email.hasError('required')) {
      this.emailErrorMessage.set('Você precisa inserir um valor.');
    } else if (this.email.hasError('email')) {
      this.emailErrorMessage.set('Entre com um e-mail válido.');
    } else {
      this.emailErrorMessage.set('');
    }    
  }

  updateNameErrorMessage() {
    if (this.name.hasError('required')) {
      this.nameErrorMessage.set('Você precisa inserir um valor.');
    } else {
      this.nameErrorMessage.set('');
    }
  }
}
