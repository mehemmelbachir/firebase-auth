export class User {
  // public username : string;
  public email : string;
  public password1: string;
  public password2: string;

  public passwordMatche(){
    return this.password1 == this.password2;
  }
}
