var Candidats = {

    nom: "",
    prenom: "",
    email: "",
    tel: "",
    adress: "",
    level: "",
    idc: Math.floor(Math.random() * 1000)
}
function ajoutCondidat() {
    var tableau = JSON.parse(localStorage.getItem("ERP"));
    Candidats.nom = document.getElementById("nomc").value;
    Candidats.prenom = document.getElementById("prenomc").value;
    Candidats.email = document.getElementById("emailc").value;
    Candidats.tel = document.getElementById("telc").value;
    Candidats.nom = document.getElementById("nomc").value;
    Candidats.level = document.getElementById("levelc").value;
    Candidats.adress = document.getElementById("addrc").value;

    if (tableau == null) {
        tableau = []
    }
    ERP.Candidat = tableau[3]
    if (ERP.Candidat == null) {
        ERP.Candidat = []
    }
    ERP.Candidat.push(Candidats)
    tableau[3] = ERP.Candidat;
    localStorage.setItem("ERP", JSON.stringify(tableau));
    document.getElementById("nomc").value = null;
    document.getElementById("prenomc").value = null;
    document.getElementById("emailc").value = null;
    document.getElementById("telc").value = null;
    document.getElementById("nomc").value = null;
    document.getElementById("levelc").value = null;
    document.getElementById("addrc").value = null;

    location.href = "./Condidats.html";
}
function show() {
    var tableau = JSON.parse(localStorage.getItem("ERP"));
    var udc = JSON.parse(localStorage.getItem('upd'));
    if (udc != null) {
        localStorage.setItem("upd", null);
    }
    if (tableau == null) {
        tableau = [];
    } else {
        ERP.Candidat = tableau[3];
    }
    var htmlc = '';
    for (let index = 0; index < ERP.Candidat.length; index++) {
        htmlc += '<div class="col-md-4 col-sm-4">'
        htmlc += '<div class="panel panel-success">'
        htmlc += '<div class="panel-heading">' + ERP.Candidat[index].idc + '</div>'
        htmlc += '<div class="panel-body">'
        htmlc += '<p>' + ERP.Candidat[index].nom + '</p>'
        htmlc += '<p>' + ERP.Candidat[index].prenom + '</p>'
        htmlc += '<p>' + ERP.Candidat[index].email + '</p>'
        htmlc += '<p>' + ERP.Candidat[index].adress + '</p>'
        htmlc += '<p>' + ERP.Candidat[index].level + '</p>'
        htmlc += '</div>'
        htmlc += '<div class="panel-footer">'
        htmlc += '<p>' + ERP.Candidat[index].tel + '</p>'
        htmlc += '<p><button onclick="modifier(' + ERP.Candidat[index].idc + ')">modif</button>'
        htmlc += '<p><button onclick="supprimer(this)">supp</button>'

        htmlc += '</div>'
        htmlc += '</div>'
        htmlc += '</div>'
        document.getElementById('listc').innerHTML = htmlc;
    }
    htmlc = '';
}
function supprimer(i) {
    var tableau = JSON.parse(localStorage.getItem('ERP'));
    tableau[3].splice(i, 1); 
    localStorage.setItem("ERP",JSON.stringify(tableau));
    location.href = "./Condidats.html";
}
function modifier(idc) {
    localStorage.setItem('upd', idc);
    location.href = "./AjoutCondidats.html"
}
function modif() {
    var udc = JSON.parse(localStorage.getItem('upd'));
    var tab = JSON.parse(localStorage.getItem('ERP'));
    tab[3].forEach(element => {
        if (element.idc == udc) {
            element.nom = document.getElementById("nomc").value;
            element.prenom = document.getElementById("prenomc").value;
            element.email = document.getElementById("emailc").value;
            element.tel = document.getElementById("telc").value;
            element.adress = document.getElementById("addrc").value;
            element.level = document.getElementById("levelc").value;
        }
    });
    localStorage.setItem("ERP", JSON.stringify(tab));
    location.href = "./Condidats.html";
}
function remplir() {
    var udc = JSON.parse(localStorage.getItem('upd'));
    if (udc != null) {
        document.getElementById("modif").style.visibility = "visible";
        document.getElementById("ajout").style.visibility = "hidden";
    }
    else {
        document.getElementById("modif").style.visibility = "hidden";
        document.getElementById("ajout").style.visibility = "visible";
    }
    var tab = JSON.parse(localStorage.getItem('ERP'));
    //   console.log(tab)
    if (tab[3] != null) {
        tab[3].forEach(element => {
            if (element.idc == udc) {
                console.log(element)
                document.getElementById("nomc").value = element.nom;
                document.getElementById("prenomc").value = element.prenom;
                document.getElementById("emailc").value = element.email;
                document.getElementById("telc").value = element.tel;
                document.getElementById("addrc").value = element.adress;
                document.getElementById("levelc").value = element.level;
            }
        });
    }
}
function compteur() {
var nbf=0;
var nbm=0;
var nbco=0;
var nbcan=0;

    var tab = JSON.parse(localStorage.getItem('ERP'));
    if(tab!=null){
        if(tab[0]!=null){
            nbf = tab[0].length;
        }
        if(tab[1]!=null){
            nbm = tab[1].length;
        }
        if(tab[2]!=null){
            nbco=tab[2].length;
        }
        if(tab[3]!=null){
             nbcan = tab[3].length;
        }
     
    }
    
    
    document.getElementById("f").innerHTML = nbf;
    document.getElementById("man").innerHTML = nbm;
       document.getElementById("co").innerHTML=nbco;
    document.getElementById("can").innerHTML = nbcan;
    
}