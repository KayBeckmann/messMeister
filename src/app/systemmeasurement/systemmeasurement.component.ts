import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { liveQuery } from 'dexie';
import { ActivatedRoute, Router } from '@angular/router';
import { db } from '../services/db.service';
import { FormsModule } from '@angular/forms';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
// import { style } from '@angular/animations';

@Component({
  selector: 'app-systemmeasurement',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './systemmeasurement.component.html',
  styleUrl: './systemmeasurement.component.scss',
})
export class SystemmeasurementComponent {
  locationId!: number;
  devices$ = liveQuery(() =>
    db.device.where('locationId').equals(this.locationId).toArray()
  );
  name!: string;
  description!: string;
  current!: number;
  body!: any[];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.locationId = params['id'];
    });
    this.devices$ = liveQuery(() =>
      db.device.where('locationId').equals(this.locationId).toArray()
    );
  }

  addNewDevice() {
    db.device.add({
      name: this.name,
      description: this.description,
      locationId: this.locationId,
      current: this.current,
      rcdId: 0,
      type: 'LS B',
    });
    this.name = '';
    this.description = '';
    this.current = 0;
  }

  generatePDF() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const documentDefinition = {
      content: ['Hier ist dein PDF-Inhalt.'],
    };
    pdfMake.createPdf(documentDefinition).download('mein_pdf_dokument.pdf');
  }
}
