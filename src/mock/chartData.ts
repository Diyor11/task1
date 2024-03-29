type ChartSerie = {name: string, data: number[]}
type StatesChart = {
    series: ChartSerie[],
    options: any
}
export const statesChart: StatesChart = {
    series: [
      {
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, 
      {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      },
      {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      },
      {
          name: 'Values',
          data: [11, 22, 101, 88, 66, 100, 91, 20, 94]
      }
    ],
    options: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val: String) {
              return "$ " + val + " thousands"
            }
          }
        }
      },
}
