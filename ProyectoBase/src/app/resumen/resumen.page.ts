import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { NavController } from '@ionic/angular';
import { ViewChild } from '@angular/core'

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss'],
})
export class ResumenPage implements OnInit {
  @ViewChild('doughnutCanvas', { static: false }) doughnutCanvas;
  doughnutChart: any;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  displayChartIngresos() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: "doughnut",
      data: {
        labels: ["Deuda", "Hogar", "Alimento", "Entretenimiento", "Transporte",
          "Educacion", "Regalos", "Viajes", "Ingresos", "Ropa y Calazado"],

        datasets: [
          {
            label: "# de Porcentaje",
            data: [15, 5, 13, 7, 10, 8, 12, 10, 14, 6],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(245, 178, 102,)", 
              "rgba(225, 159, 64)", 
              "rgba(185, 102, 102)", 
              "rgba(205, 153, 204)", 
              "rgba(173, 255, 153)" 
            ],

            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB",
              "#FFCE56", "#33FF99", "#FF9933",
              "#99FF33", "#66B2FF"]

          }
        ]
      }

    }

    );

  }

  displayChartEgresos() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: "doughnut",
      data: {
        labels: ["Deuda", "Hogar", "Alimento", "Entretenimiento", "Transporte",
          "Educacion", "Regalos", "Viajes", "Ingresos", "Ropa y Calazado"],

        datasets: [
          {
            label: "# de Porcentaje",
            data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(245, 178, 102,)", 
              "rgba(225, 159, 64)", 
              "rgba(185, 102, 102)", 
              "rgba(205, 153, 204)", 
              "rgba(173, 255, 153)" 
            ],

            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB",
              "#FFCE56", "#33FF99", "#FF9933",
              "#99FF33", "#66B2FF"]

          }
        ]
      }

    }

    );

  }
}