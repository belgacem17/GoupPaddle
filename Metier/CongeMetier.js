class CongeMetier {
    Conge;
    tabERP;
    Update;
    coash;
    manager;
    select;
    isUpdate = false;
    poste;
    constructor() {
        this.Conge = new Conge(0, '', '', 0, '');
    }
    Consult() {
        var html1 = '';
        var html = '';
        var h = '';
        if (localStorage.getItem("ERP") == null) {
            this.tabERP = []
        }
        else {
            this.tabERP = JSON.parse(localStorage.getItem("ERP"));
            // if (this.tabERP[1] != null) {
            //     ERP.Conge = this.tabERP[0];
            // }
            html1 += '<option>-----Manager------</option>'
            html += '<option>-----Coash------</option>'
            ERP.Manager = this.tabERP[1];
            ERP.Coash = this.tabERP[2];
            ERP.Conge = this.tabERP[4];
            if (ERP.Conge == null) {
                ERP.Conge = []
                html1 += `<option value="M${ERP.Manager[0].id}" >${ERP.Manager[0].nom}</option>`
                html += `<option value="M${ERP.Coash[0].id}" >${ERP.Coash[0].nom}</option>`

            }
        }



        if (ERP.Manager != null) {


            for (let index = 0; index < ERP.Manager.length; index++) {

                for (let j = 0; j < ERP.Conge.length; j++) {
                    if ((ERP.Manager[index].id != ERP.Conge[j].idp) && (ERP.Conge[j].poste == 'M')) {
                        html1 += `<option value="M${ERP.Manager[index].id}" >${ERP.Manager[index].nom}</option>`
                        j = ERP.Conge.length;
                    }


                }
            }

        }
        document.getElementById("personne").innerHTML += html1;
        if (ERP.Coash != null) {

            for (let index = 0; index < ERP.Coash.length; index++) {
                for (let j = 0; j < ERP.Conge.length; j++) {
                    console.log((ERP.Coash[index].id == ERP.Conge[j].idp) || (ERP.Conge[j].poste == 'C'))
                    if ((ERP.Coash[index].id != ERP.Conge[j].idp) || (ERP.Conge[j].poste.substr(1) == 'C')) {
                        html += '<option value="C' + ERP.Coash[index].id + '" >' + ERP.Coash[index].nom + '</option>'
                        j = ERP.Conge.length;

                    }
                }
            }

        }
        document.getElementById("personne").innerHTML += html;



    }
    selection() {

        var sel = document.getElementById('personne');

        var selected = sel.options[sel.selectedIndex].value;

        if (selected.indexOf('M') != -1) {
            var M = selected.substr(1);
            var n = parseInt(M, 10);

            for (let index = 0; index < ERP.Manager.length; index++) {
                if (n == ERP.Manager[index].id) {
                    this.manager = ERP.Manager[index];
                    this.select = this.manager;
                    this.poste = "M :" + ERP.Manager[index].nom
                }

            }

        }

        if (selected.indexOf('C') != -1) {
            var C = selected.substr(1);
            var a = parseInt(C, 10);
            for (let index = 0; index < ERP.Coash.length; index++) {
                if (a == ERP.Coash[index].id) {
                    this.coash = ERP.Coash[index];
                    this.select = this.coash;
                    this.poste = "C : " + ERP.Coash[index].nom
                }

            }
        }
    }
    add() {
        var idConge = 0;
        this.Consult();
        //this.selection()
        var p = this.poste
        var personne = document.getElementById('personne').value;
        var dated = document.getElementById('dateD').value;
        var datef = document.getElementById('dateF').value;
        if (this.isUpdate == false) {

            if ((ERP.Conge).length != 0) {
                idConge = (ERP.Conge[((ERP.Conge).length) - 1].idConge) + 1;
            }

            this.Conge = new Conge(idConge, dated, datef, this.select.id, this.poste);

            console.log("ksks k " + this.Conge)
            ERP.Conge.push(this.Conge);
        }
        this.tabERP[4] = ERP.Conge;
        localStorage.setItem("ERP", JSON.stringify(this.tabERP));
        this.isUpdate = false;
        location.href = './conge.html';
    }

    show() {
        this.Consult();

        var html = '';
        var tab = ['warning', 'danger'];
        var i = 0;


        for (let index = 0; index < ERP.Conge.length; index++) {
            if (i > 2) {
                i = 0;
            }
            html += '<tr class="' + tab[i] + '">'
            html += '<td>' + ERP.Conge[index].idConge + '</td>'
            html += ' <td>' + ERP.Conge[index].dateD + '</td>'
            html += ' <td>' + ERP.Conge[index].dateF + '</td>'
            html += ' <td>' + ERP.Conge[index].poste + '</td>'
            html += '</tr>'

            i++


        }
        document.getElementById("table").innerHTML += html;
        html = '';
    }

}
CongeMetier = new CongeMetier();