export class User {
  idUtilisateur!: number;
  nom!: string;
  prenom!: string;
  email!: string;
  motDePasse!: string;
  dateNaissance!: Date;
  adresse?: string;
  telephone?: string;
  role!: string;
  createdAt?: Date;
  updatedAt?: Date;
  token?: string;
  resetPasswordToken?: string;
  resetPasswordExpiry?: Date;
}
