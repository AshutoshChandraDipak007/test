import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  shortName:String;
  siino:Number;
  fullName:String;
  flag:String='A';
  
  ngOnInit() {
  }


  onShortNameChange(shortName)
  {
    if(this.fullName==undefined || this.fullName==null) {
  
    }
  }

  onClickTerminateFund()
  {
      if ( this.flag=='A')
     {
        //this.dilogBox.confirm('Please confirm..', 'Do you really want to ... ?');
        this.fullName="this is the my full name";
        this.siino=33842;
     }
     else{
       alert("Transaction cancelled...")
       this.clearForm();  
     }  
   
  }

  clearForm()
  {
    this.fullName=undefined;
    this.siino=undefined;
  }

}
