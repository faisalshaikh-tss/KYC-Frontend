export interface ClassifyResponce { 
    success:String,
    message:String,
    data:{
        ovdType:String
    },
    requestId:String
} 

export interface ClassifyRequest {
    imageData:String
}
export interface ILoaction{
    latitude:String,
    longitude:String
} 

export interface SubmitRequest{ 
    username  : string;
    poaDocumentType : string;
    poaDataFront : string;
    poaDataBack : string;
    pancardData : string;
    wetSignData : string;
    selfieData : string;
    latitude : string;
    longitude : string;
} 

export interface getallDocumentsResponce {
    id : number 
    poaDocumentname : String
}