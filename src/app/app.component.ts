import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  value1 = '';
  value2 = '';
  value3 = '';
  operator = '';
  equal = '';

  insertValue(value: string) {
    if (this.value3 != '') this.clean();
    if (this.operator === '') {
      this.value1 = this.value1 + value;
    } else {
      this.value2 = this.value2 + value;
    }
  }

  insertPoint() {
    if (this.value3 == ""){
      if (this.operator === "" && !this.value1.includes('.'))
        this.value1 = this.value1 + '.';
      else if (this.operator != "" && !this.value2.includes('.'))
        this.value2 = this.value2 + '.';
    }
  }

  insertOperator(operator: string) {
    if (this.operator != "" && this.value2 != "") {
      this.result();
      this.value1 = this.value3;
      this.value2 = "";
      this.value3 = "";
      this.equal = "";
    }
    this.operator = operator;
  }

  insertMinus(){
    if (this.value1 == "")
      this.value1 = "-";
    else if (this.value1 != "-" && (this.operator != "-" || this.value2 != ""))
      this.insertOperator("-");
  }

  result() {
    if (this.value2 != "") {
      this.equal = '=';
      let result = 0;
      if (this.operator === '+')
        result = Number(this.value1) + Number(this.value2);
      else if (this.operator === '-')
        result = Number(this.value1) - Number(this.value2);
      else if (this.operator === 'x')
        result = Number(this.value1) * Number(this.value2);
      else if (this.operator === '÷')
        result = Number(this.value1) / Number(this.value2);
      this.value3 = result.toString();
    }
  }

  clean() {
    this.value1 = '';
    this.value2 = '';
    this.value3 = '';
    this.operator = '';
    this.equal = '';
  }
}
