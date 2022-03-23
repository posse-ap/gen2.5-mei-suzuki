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
  var ctx = document.getElementById("myDoughnutChart1");
  var myDoughnutChart= new Chart(ctx, {
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
        display: true,
      }
    }
  });

  var ctx = document.getElementById("myDoughnutChart2");
  var myDoughnutChart= new Chart(ctx, {
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
      }
    }
  });
  

//棒グラフ
$.ajax({
  type: 'GET', // リクエストのタイプ
  url: 'http://posse-task.anti-pattern.co.jp/1st-work/study_time.json', // リクエストを送信するURL
  dataType: 'json' // サーバーから返却される型
})
// ajaxからリクエストを受けとり
.done(function (data) {
  var study_day = [];
  var study_time = [];
  // chart.jsに渡すため配列に格納する
  $(data).each(function(index, study) {
    study_day.push(study.day);
    study_time.push(study.time);
  });
  chart_func.bar_chart(document, study_day, study_time);
})

var ctx = document.getElementById("time_graph");
var gradientStroke = ctx.createLinearGradient(0, 0, 0, 100);
gradientStroke.addColorStop(0, rgb(15, 113, 189));
gradientStroke.addColorStop(1, rgb(60, 206, 254));

var config = {
  type: 'bar',
  data: {
      datasets: [{
          data: datas,
          backgroundColor: gradientStroke,
          borderRadious: '9999px',
          fill: false,
      }],
      labels: labels
    },
    options: {
        responsive: true
    },
    scales: {  
      yAxes: [{ 
          display: true, 
          scaleLabel: {
             display: true
          },
          ticks: {         
              min: 0,      
              max: 30,        
              fontSize: 15
          },
      }],
      xAxes: [{                     
          display: true,
          scaleLabel: {             
             display: true            
          },
          ticks: {
              fontSize: 15 
          }
      }],
  },
   };

 window.myPie = new Chart(ctx, config);