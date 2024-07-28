import { Component, OnInit } from '@angular/core';
import { ClassifyServiceService } from '../classify-service.service';
import { Router } from '@angular/router';
import { getallDocumentsResponce } from '../classify-DTO';


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss'
}) 

export class ConfigComponent implements OnInit { 
   
  constructor(private service : ClassifyServiceService, private route : Router) {

    this.initializeDropdown();
  }   
 
  allDocuments! : getallDocumentsResponce[]; 
  
  ngOnInit(): void {
   this.service.getallDocuments().subscribe(
    (data) => {
      this.allDocuments = data;
    }
   )
  }

initializeDropdown() {
 document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.getElementById('multiSelectDropdown') as HTMLSelectElement;
  const tableBody = document.getElementById('selectedOptionsTable')!.getElementsByTagName('tbody')[0];
  const resetButton = document.getElementById('resetButton') as HTMLButtonElement;
  const submitButton = document.getElementById('submitButton') as HTMLButtonElement; 

  const initialOptions = [
      { value: 'D1', text: 'Pancard' },
      { value: 'D2', text: 'AddressProof' },
      { value: 'D3', text: 'Wet-Sign' },
      { value: 'D4', text: 'Selfie' },
  ];
 
  let outputOptions:Array<string> = [ ] 

  dropdown.addEventListener('change', function() {
      const selectedOptions = Array.from(this.selectedOptions);
      selectedOptions.forEach((option) => {
          outputOptions.push((option.value).toString());
          const newRow = tableBody.insertRow(tableBody.rows.length);
          const indexCell = newRow.insertCell(0);
          const optionCell = newRow.insertCell(1);
          indexCell.textContent = (tableBody.rows.length).toString();
          optionCell.textContent = option.textContent!; 
          option.remove(); 
      });
  });

  resetButton.addEventListener('click', () => {
      tableBody.innerHTML = '';
      dropdown.innerHTML = '';
      initialOptions.forEach(opt => {
          const optionElement = document.createElement('option');
          optionElement.value = opt.value;
          optionElement.text = opt.text;
          dropdown.add(optionElement); 
          outputOptions.splice(0,4); 
      });
  }); 
   
  submitButton.addEventListener('click', ()=>{
    console.log(outputOptions.toString()); 
     localStorage.setItem("sequence",outputOptions.toString());
    //this.route.navigateByUrl("/file-upload"); 
  });
});   
} 
}