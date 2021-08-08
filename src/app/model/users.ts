export interface Users {
  idUser?: number;
  sexe?: number;
  pseudo?: string;
  firstname?: string;
  lastname?: string;
  email: string;
  password: string;
  dateBirth?: string;
  image?:string;
  adresseLivraison?: string ;
  adresseFacturation?: string ;  
  tel?: string ;
}
