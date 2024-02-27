import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts'

interface Month {
  entrate: number,
  uscite: number
}

const ChartComponent: React.FC<Month> = (month) => {
  // const colorChart = ["#f6511d", "#00a6ed", "#ffb400", "#ec0868", "#7fb800", "#cbdbf1", "#c200fb", "#ec7d10", "#ffbc0a", "#dd7373", "#3b3561", "#fc2f00", "#ead94c", "#d1d1d1", "#51a3a3"]
  const colorChart = [
    "#66E66E", // Verde pastello vivace con buon contrasto
    "#FF7373", // Rosso pastello vivace con buon contrasto
    "#F08888", // Rosa pastello vivace con buon contrasto
    "#3A99D8", // Azzurro pastello vivace con buon contrasto
    "#B98DFF", // Viola pastello vivace con buon contrasto
    "#FFEB57", // Giallo pastello vivace con buon contrasto
    "#67A5E3", // Azzurro grigio pastello vivace con buon contrasto
    "#7FFFD4", // Verde-azzurro pastello vivace con buon contrasto
    "#D8D8D8", // Grigio chiaro pastello vivace
    "#FFADAD", // Rosa chiaro pastello vivace con buon contrasto
    "#A5FFD6", // Verde-azzurro chiaro pastello vivace con buon contrasto
    "#ADD8E6", // Azzurro medio pastello vivace con buon contrasto
    "#FFB6C1", // Rosa pastello medio vivace con buon contrasto
    "#FFC58A", // Pesca pastello vivace con buon contrasto
    "#A5C8E6", // Azzurro medio scuro pastello vivace con buon contrasto
    "#FFAFCC", // Rosa chiaro pastello vivace con buon contrasto
  ];

  const monthRef = month;

  const options: ApexOptions = {// opzioni per grafico pie/donut
    series: [monthRef.entrate, monthRef.uscite],
    labels: [ 
      "Entrate",
      "Uscite",
    ],
    plotOptions: {
      pie: {
        donut: {
          size: '40%',
          labels: {
            show: true,
            name: {
              show: false,
              fontSize: '20px',
              fontFamily: undefined,
              color: undefined,
              offsetY: -10,
            },
            value: {
              show: true,
              fontSize: '20px',
              fontFamily: undefined,
              color: undefined,
              offsetY: 16,
              formatter: function (val: any) {
                return val + '%';
              }
            },
            total: {
              show: false,
              label: 'Total',
              color: '#373d3f',
              formatter: function (w: any) {
                return w.globals.seriesTotals.reduce((a: any, b: any) => {
                  return a + b;
                }, 0) + '%';
              }
            }
          }
        }
      }
    },
    title: {
      text: '',// `Numero Di ${this.columns.find((column: Column) => column.key === this.metricKey).label} - ${this.columns.find((column: Column) => column.key === this.labelKey).label}`,
      align: 'left',
      margin: 25,
      offsetX: 30,
      offsetY: -10,
      floating: false,
      style: {
        fontSize: '20px',
        fontWeight: 'bold',
        fontFamily: undefined,
        color: '#ffffff'
      },
    },
    chart: {
      dropShadow: {
        // neomorphism
        enabled: true,
        enabledOnSeries: [0, 1, 2, 3, 4],
        top: 1,
        left: 1,
        blur: 2,
        color: '#1d1d1f',
        opacity: 0.12,

      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 80,
        animateGradually: {
          enabled: true,
          delay: 0
        },

      },
      height: 300,
      type: 'donut',
      offsetX: 0,
      selection: {
        enabled: true
      },
      zoom: {
        enabled: true,
        type: 'x',
        autoScaleYaxis: false,
        zoomedArea: {
          fill: {
            color: '#90CAF9',
            opacity: 0.4
          },
          stroke: {
            color: '#0D47A1',
            opacity: 0.4,
            width: 1
          }
        }
      },
      toolbar: {
        show: false,
        offsetX: 0,
        offsetY: 50,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
        },
        export: {
          csv: {
            filename: 'chart',
            columnDelimiter: ',',
            headerCategory: 'riepilogo',
            headerValue: 'value',
            dateFormatter(timestamp?: string | number | Date) {
              if (timestamp === undefined) {
                return '';
              }
              return new Date(timestamp).toDateString();
            }
          },
          svg: {
            filename: 'chart',
          },
          png: {
            filename: 'chart',
          }
        },
        autoSelected: 'zoom'
      },

    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: colorChart,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        //stops: [0, 50, 100],
        //colorStops: []
      }
    },
    colors: colorChart,
    legend: {
      show: true,
      position: 'right',
      horizontalAlign: 'right',
      offsetX: -20,
      offsetY: 100,
      fontSize: '15px',
      labels: {
        colors: 'white',
        useSeriesColors: true
      },
      itemMargin: {
        horizontal: 0,
        vertical: 5
      }
    },

    tooltip: {


      custom: function (data:any) {

        var series = data.series
        var indexData = data.seriesIndex
        var label = data.w.globals.labels[indexData]
        var colors = data.w.globals.colors
        return `
            <div style="padding: 5px 7px; background-color: ${colors[indexData]}">
            <span>${label}</span>
            </div>`;
      }
    },
    dataLabels: {
      style: {
        colors: ['white'],
        fontSize: '15px',
      },
    },
    responsive: [{
      breakpoint: 1200,
      options: {
        chart: {
          height: '300',
          // offsetX: 0,
        },
        legend: {
          show: true,
          position: 'bottom',
          horizontalAlign: 'center',
          offsetX: -20,
          offsetY: 10,
          fontSize: '15px',
          labels: {
            colors: 'white',
            useSeriesColors: true
          },
          itemMargin: {
            horizontal: 10,
            vertical: 5
          }
        },
      }
    }],
  };

  return(
      <Chart
        options={options}
        series={options.series}
        type="donut"
        width="100%"
        height="300"
      />
  );
}

export default ChartComponent;