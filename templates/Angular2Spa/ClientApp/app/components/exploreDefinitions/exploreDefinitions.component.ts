import { Definition } from './../../shared/models/Definition';
import { Router, ActivatedRoute } from '@angular/router';
import { DefinitionsService } from './../../shared/definitions.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'exploreDefinitions',
    template: require('./exploreDefinitions.component.html')
})
export class ExploreDefinitionsComponent implements OnInit {
    private definitionID: number;
    public definitions: Definition[];
    constructor(private http: Http, private definitionsService: DefinitionsService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() { 
        this.definitionID = this.route.snapshot.params['id'];
        console.log(this.definitionID);
        this.loadData();
    }

    loadData(){
        this.definitionsService.getByID(this.definitionID).subscribe(result => {
            this.definitions = result;
            console.log(result);
        });
    }
}