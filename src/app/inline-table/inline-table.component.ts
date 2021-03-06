import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { Router, NavigationStart } from '@angular/router';
import { AppService } from '../services/app.service';

const employees = require('./data.json');
declare var require;

@Component({
  selector: 'app-inline-table',
  templateUrl: './inline-table.component.html',
  styleUrls: ['./inline-table.component.css']
})
export class InlineTableComponent implements OnInit, OnDestroy {

  public employees: any[];
  public form: FormGroup;

  public get employeeFormArray() {
    return this.form.get('employees') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private appService: AppService
  ) { }

  ngOnInit() {
    // this.appService.setStickyClass('sticky-footer');
    this.employees = employees;
    this.initForm();
  }

  ngOnDestroy() {
    // this.appService.setStickyClass('');
  }


  private initForm() {
    this.form = this.fb.group({
      employees: this.fb.array([])
    });
    this.employees.forEach((employee) => {
      this.employeeFormArray.push(this.fb.group({
        first_name: employee.first_name,
        last_name: employee.last_name,
        email: employee.email,
        gender: employee.gender,
        department: employee.department,
        isEdit: false,
        isDeleted: false
      }));
    });
  }

  edit(employee: FormGroup) {
    this.displayAll();
    employee.get('isEdit').setValue(true);
  }

  displayAll() {
    this.employeeFormArray.controls.forEach((ctrl: FormGroup) => {
      ctrl.get('isEdit').setValue(false);
    });
  }

}
