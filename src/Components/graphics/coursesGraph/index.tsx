import { Cursos } from "@/@example_arrays";
import React, { Component } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import _ from 'lodash'

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type State = {
   series: {
      name: string;
      data: { x: string; y: number }[]; }[];
   options: ApexOptions;
};

class CoursesGraph extends Component<{}, State> {
   constructor(props: {}) {
      super(props);

      this.state = {
         series: [
            {
               name: "Matrículas",
               data: Cursos.map((item, index) => ({
                  x:
                     item.name.length + 1 <= 15
                        ? item.name.concat(` ${index + 1}`)
                        : _.truncate(item.name, {
                           length: 18,
                           omission: `..${index+1}`
                        }),
                  y: item.enrollmentsNumber,
               })),
            },
            {
               name: "Preços",
               data: Cursos.map((item, index) => ({
                  x:
                     item.name.length + 1 <= 15
                        ? item.name.concat(` ${index + 1}`)
                        : _.truncate(item.name, {
                           length: 18,
                           omission: `..${index+1}`
                        }),
                  y: item.price,
               })),
            },
         ],
         options: {
            chart: {
               height: 500,
               type: "area",
               animations: {
                  enabled: true,
                  speed: 100,
               },
            },
            colors: ["#a21caf", "#ede9fe"],
            dataLabels: {
               enabled: false,
            },
            fill: {
               opacity: [1, 1, 1, 1],
            },
            stroke: {
               curve: "smooth",
               width: [5, 5, 3, 3],
            },
            legend: {
               show: true,
               markers: {
                  fillColors: ["#a21caf", "#ede9fe"],
               },
               labels: {
                  useSeriesColors: true,
               },
            },
            title: {
               text: "Dados - Cursos",
               style: {
                  color: "#f4f4f5",
               },
            },
            markers: {
               hover: {
                  sizeOffset: 5,
               },
            },
            xaxis: {
               labels: {
                  show: true,
                  rotate: -80,
                  style: {
                     colors: "#f4f4f5", // Define as cores do texto do eixo X aqui
                  },
               },
            },
            yaxis: {
               labels: {
                  style: {
                     colors: "#f4f4f5", // Define a cor do texto do eixo Y aqui
                  },
               },
            },
         },
      };
   }
   render() {
      return (
         <div id="chart">
            {typeof window != "undefined" && (
               <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="area"
                  height={350}
               />
            )}
         </div>
      );
   }
}

export default CoursesGraph;
