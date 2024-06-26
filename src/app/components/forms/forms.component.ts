import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from 'src/app/services/get-units.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  results = []
  formGroup!: FormGroup

  constructor(private formBuilder: FormBuilder, private unitService : GetUnitsService){}

  ngOnInit(): void {
    this.unitService.getAllUnits().subscribe(data=> console.log(data))
   this.formGroup = this.formBuilder.group({
    hour: '',
    showClosed: false
   })


  }


  onSubmit(){
    console.log(this.formGroup.value)
  }

  onClean(){
    this.formGroup.reset()
  }

}
