//　モーダル
$(function () {
  $('.js-open').click(function () {
    $('#overlay, .modal-window').fadeIn();
  });
  $('.js-close').click(function () {
    $('#overlay, .modal-window').fadeOut();
  });
});

//　ドーナツチャート
  let ctx = document.getElementById("myDoughnutChart1").getContext("2d")
  let myDoughnutChart= new Chart(ctx, {
    type: 'doughnut',
    data: {
      // labels: ['JavaScript', 'CSS', 'PHP', 'HTML', 'Laravel', 'SQL', 'SHELL', '情報システム基礎知識'], //データ項目のラベル
      datasets: [{
          backgroundColor: [
            'rgb(3, 69, 236)',
            'rgb(15, 113, 189)',
            'rgb(32, 189, 222)',
            'rgb(60, 206, 254)',
            'rgb(178, 158, 243)',
            'rgb(109, 70, 236)',
            'rgb(74, 23, 239)',
            'rgb(49, 5, 192)',
          ],
          data: [42, 18, 10, 6, 6, 6, 6, 6], //グラフのデータ
          hoverOffset: 4,
          borderColor: 'transparent'
      }]
    },
    options: {
      title: {
        display: true
      },
      plugins: {
        datalabels: {
            render: 'percentage',
            color: '#fff',
            formatter: (value, ctx) => {
                if (value < 10) 
                return ''
                return value + '%';
            }
        }
      }
    }
  });

  ctx = document.getElementById("myDoughnutChart2").getContext('2d');
  myDoughnutChart= new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
          backgroundColor: [
            'rgb(3, 69, 236)',
            'rgb(15, 113, 189)',
            'rgb(32, 189, 222)',
          ],
          data: [42, 33, 25], //グラフのデータ
          hoverOffset: 4,
          borderColor: 'transparent'
      }]
    },
    options: {
      title: {
        display: true,
      },
      plugins: {
        datalabels: {
            color: '#fff',
            formatter: (value, ctx) => {
                return value + '%';
            },
        }
    }
    }
  });
  

//棒グラフ
let target = document.getElementById('time_graph')
ctx = target.getContext('2d')
gradient = ctx.createLinearGradient(0, 0, 0, 1000)
gradient.addColorStop(0, 'rgb(59, 204, 254)')
gradient.addColorStop(1, 'rgb(17, 117, 191)')

let content = new Chart(target, {
    type: 'bar',
    data: {
        labels: ["", "", "2", "", "4", "", "6", "", "8", "", "10", "", "12", "", "14", "", "16", "", "18", "", "20", "", "22", "", "24", "", "26", "", "28", "", "30", ""],
        datasets: [{
            data: [0,3,4,5,3,0,0,4,2,2,8,8,2,2,1,7,4,4,3,3,3,2,2,6,2,2,1,1,1,7,8,3],
            backgroundColor: gradient,
            fill: false,
        }],
    },

    options: {                       // オプション
      responsive: false,  // canvasサイズ自動設定機能を使わない。HTMLで指定したサイズに固定
      title: {                           // タイトル
          display: false,                     // 表示設定
          fontSize: 18,                      // フォントサイズ
          fontFamily: "sans-serif",
          text: 'タイトル'                   // タイトルのラベル
      },
      legend: {                          // 凡例
          display: false                     // 表示の有無
          // position: 'bottom'              // 表示位置
      },
      scales: {                          // 軸設定
          xAxes: [                           // Ｘ軸設定
              {
                  display: true,                // 表示の有無
                  barPercentage: 0.8,           // カテゴリ幅に対する棒の幅の割合
                  //categoryPercentage: 0.8,    // 複数棒のスケールに対する幅の割合
                  scaleLabel: {                 // 軸ラベル
                      display: false,                // 表示設定
                      labelString: '横軸ラベル',    // ラベル
                      fontColor: "red",             // 文字の色
                      fontSize: 16                  // フォントサイズ
                  },
                  gridLines: {                   // 補助線
                      display: false,             // 補助線なし
                      drawBorder: false
                  },
                  ticks: {                      // 目盛り
                      fontColor: '#97b9d1',             // 目盛りの色
                      fontSize: 14,                  // フォントサイズ
                      min: 1,
                      max: 31,
                      stepSize: 2
                  },
              }
          ],
          yAxes: [                           // Ｙ軸設定
              {
                  display: true,                 // 表示の有無
                  scaleLabel: {                  // 軸ラベル
                      display: false,                 // 表示の有無
                      labelString: '縦軸ラベル',     // ラベル
                      fontFamily: "sans-serif",      // フォントファミリー
                      fontColor: "white",             // 文字の色
                      fontSize: 16                   // フォントサイズ
                  },
                  gridLines: {                   // 補助線
                      display: false,               // 補助線なし
                      color: "rgba(0, 0, 255, 0.2)", // 補助線の色
                      zeroLineColor: "black",         // y=0（Ｘ軸の色）
                      drawBorder: false
                  },
                  ticks: {                       // 目盛り
                      min: 0,                        // 最小値
                      max: 8,                       // 最大値
                      stepSize: 2,                   // 軸間隔
                      fontColor: "#97b9d1",             // 目盛りの色
                      fontSize: 14,                   // フォントサイズ
                      callback: (tick) => {
                        return tick.toString() + 'h'
                      }
                  },
              }
          ],
      },
      layout: {                          // 全体のレイアウト
          padding: {                         // 余白
              left: 20,
              right: 10,
              top: 40,
              bottom: 0
          }
      }
  }
});

flatpickr('.flatpickr');

let submit = document.getElementById('submit')
let submitButton = document.getElementById('submit-button')
let modalContent = document.getElementById('modalContent')
let loading = document.getElementById('loading')
let complete = document.getElementById('complete')

submit.addEventListener('click',() => {
modalContent.classList.add("none")
loading.classList.remove("none")
submitButton.classList.add("none")
setTimeout(() => {
    loading.classList.add("none")
    complete.classList.remove("none")
}, 5000);
},false)