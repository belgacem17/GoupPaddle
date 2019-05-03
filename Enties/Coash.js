
class Coash extends Personne {
    constructor(id,nom,prenom,email,tel,addrress,categorie,salaire){
        super(id,nom,prenom,email,tel,addrress,categorie);
        this.salaire = salaire;
}
}