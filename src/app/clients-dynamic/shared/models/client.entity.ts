import { DOCUMENT_TYPE } from "./constants";

export class ClientEntity{
    constructor(
        public fullName: string,
        public documentType: DOCUMENT_TYPE,
        public documentNumber: string,
        public roles: Array<number> 
    ){}

    getFullName(){
        return this.fullName;
    }

    getDocumentType() {
        return this.documentType;
    }

    getDocumentNumber() {
        return this.documentNumber;
    }

    getRoles(){
        return this.roles;
    }
}