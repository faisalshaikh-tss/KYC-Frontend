import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { ClassifyRequest, ClassifyResponce, SubmitRequest } from './classify-DTO';

@Injectable({
  providedIn: 'root'
})
export class ClassifyServiceService {
   
  private apiUrl = 'https://kyc-sb.trackwizz.app/api/classify/';
  private authToken = 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcGkiOjIsInNjcCI6WyJjbGFzc2lmeSJdLCJpLWVudiI6InNhbmRib3giLCJpc3MiOiJUcmFja1dpenpDb25uZWN0IiwiaWF0IjoxNzEyNTc5MDM0LCJleHAiOjE3NDQxMTUwMzR9.XmrJWq3Y721nQ7qfjfPimVyLobOQzayuPeR3lEimLHWn_CavC0CA0FKhCYRzfSJB7b_6NVbgDuAptuPkk4sJFA';   

  imageData : ClassifyRequest ;  
   
  selectedoptions:Array<string> = []
   

  constructor(private http: HttpClient) { }

  postData(data: ClassifyRequest ): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json').set('Authorization', 'Bearer '+this.authToken).set('Request-Id', '115');
    return this.http.post(`${this.apiUrl}`, JSON.stringify(data), { headers });
  }  
  
  saveData(data : SubmitRequest):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type','application/json').set('Accept','*/*');
    return this.http.post('http://192.168.110.116:7007/digilocker_demo/saveUser', JSON.stringify(data),{headers}); 
  }
   
  getallDocuments():Observable<any>{
    const headers = new HttpHeaders().set('Content-Type','application/json').set('Accept','*/*');
    return this.http.get('http://192.168.110.116:7007/digilocker_demo/getalldocumnetname',{headers});
  }
  
}
