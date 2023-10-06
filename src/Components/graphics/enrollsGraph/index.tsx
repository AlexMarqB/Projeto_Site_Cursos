import { Cursos } from "@/@example_arrays";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Component } from "react";
import _ from 'lodash'

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface GraphState {
   series: { data: number[] }[];
   options: ApexOptions;
}

class EnrollGraph extends Component<{}, GraphState> {
   constructor(props: {}) {
      super(props);

      // Mapeie os valores de avaliação do vetor "Cursos" para uma série de dados
      const seriesData = Cursos.map((item) => item.rating);

      this.state = {
         series: [
            {
               data: seriesData,
            },
         ],
         options: {
            chart: {
               height: 350,
               type: "bar",
            },
            title: {
               text: "Avaliações por curso",
               style: {
                  color: "#f4f4f5",
               },
            },
            colors: ["#a21caf"],
            plotOptions: {
               bar: {
                  columnWidth: "25%",
                  distributed: true,
               },
            },
            dataLabels: {
               enabled: false,
            },
            legend: {
               show: false,
            },
            xaxis: {
               categories: Cursos.map((item, index) =>
                  item.name.length + 1 <= 10
                     ? item.name
                     : _.truncate(item.name, {
                        length: 18,
                     })
               ), // Use os nomes dos cursos como rótulos no eixo x
               labels: {
                  rotate: -80,
                  style: {
                     colors: "#f4f4f5",
                     fontSize: "12px",
                  },
               },
            },
            yaxis: {
               labels: {
                  style: {
                     colors: "#f4f4f5",
                     fontSize: "12px",
                  },
               },
            },
         },
      };
   }

   render() {
      return (
         <div id="chart">
            <Chart
               options={this.state.options}
               series={this.state.series}
               type="bar"
               height={350}
            />
         </div>
      );
   }
}

export default EnrollGraph;
