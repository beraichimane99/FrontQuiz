import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsersServiceService } from 'src/app/services/getUsers/users-service.service';


@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']
})


export class ClassementComponent implements OnInit {
  num : number= 0 ;
  displayedColumns: string[] = ['Nom', 'Score'];
  dataSource = new MatTableDataSource<any>();
  
  constructor(private rankingService : UsersServiceService) { }

  ngOnInit(): void {
    this.rankingService.getRanking().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
