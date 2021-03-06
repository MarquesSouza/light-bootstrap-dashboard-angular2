import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {environment} from '../../../environments/environment';
import {Local} from 'protractor/built/driverProviders';


@Component({
  selector: 'app-minhas-inscricoes',
  templateUrl: './minhas-inscricoes.component.html',
  styleUrls: ['./minhas-inscricoes.component.scss']
})
export class MinhasInscricoesComponent implements OnInit {

  constructor(private http: Http) { }
    inscricoesObj: object = {};
    inscricoes ;


    fetchData = function() {
        this.http.get(`${environment.web_url}/user/event/inscricao?event_id=1&user_id=1`).subscribe(
            (res: Response) => {
                this.inscricoes = res.json();
                   console.log( this.inscricoes);
               this.inscricoes;
            }

        );

    };

    // addNewDtEvent = function(dtevent) {
    //     this.dteventObj = {
    //         'nome': dtevent.nome,
    //         'descricao': dtevent.descricao,
    //         'local': dtevent.local,
    //         'data_inicio': dtevent.data_inicio,
    //         'data_conclusao': dtevent.data_conclusao,
    //         'situacao': dtevent.situacao,
    //         'status': dtevent.status,
    //         'coordenador': dtevent.coordenador,
    //     };
    //     this.http.post('http://sciec.test/admin/event/store', this.dteventObj).subscribe((res: Response) => {
    //         console.log(res);
    //         this.fetchData();
    //     });
    // };

    ngOnInit() {
        this.fetchData();
    }
    public clique(id){
        localStorage.setItem('idevent', id);
        window.location.href = '/certificado';
    }

}
