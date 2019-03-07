import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TennisCourt } from './tenniscourt';
import { CourtService } from './Court.service';

@Component({
  templateUrl: './Court-Details.component.html',
})
export class CourtDetailComponent implements OnInit {
  pageTitle = 'Court Detail';
  errorMessage = '';
  court: TennisCourt | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private courtService: CourtService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getCourt(id);
    }
  }

  getCourt(id: number) {
    this.courtService.getCourt(id).subscribe(
      court => this.court = court,
      error => this.errorMessage = <any>error);
  }


  onBack(): void {
    this.router.navigate(['/products']);
  }

}