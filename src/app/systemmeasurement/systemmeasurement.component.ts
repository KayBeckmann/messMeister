import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { liveQuery } from 'dexie';
import { ActivatedRoute, Router } from '@angular/router';
import { db } from '../services/db.service';
import { FormsModule } from '@angular/forms';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

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

  async ngOnInit() {
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
    this.devices$.subscribe(async (devices) => {
      const doc = new jsPDF();

      // Tabellenkopf
      const head = [['BMK', 'Bezeichnung', 'Nennstrom']];

      // Tabellenkörper
      const data = devices.map((device, index) => [
        device.name,
        device.description,
        device.current,
      ]);

      // Hinzufügen der Tabelle zum PDF
      (doc as any).autoTable({
        head: head,
        body: data,
      });

      // Speichern des PDFs
      doc.save('devices.pdf');
    });
  }
}
