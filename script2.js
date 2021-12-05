///問題の配列を作成///
const questions = [ 
  ["たかなわ", "たかわ", "こうわ"], 
  ["かめいど", "かめと", "かめど"], 
  ["こうじまち", "おかとまち", "かゆまち"], 
  ["おなりもん", "おかどもん", "ごせいもん"],
  ["とどろき", "たたりき", "たたら"], 
  ["しゃくじい", "せきこうい", "いじい"], 
  ["ぞうしき", "ざっしょく", "ざっしき"], 
  ["おかちまち", "みとちょう", "ごしろちょう"], 
  ["ししぼね", "ろっこつ", "しこね"], 
  ["こぐれ", "こばく", "こしゃく"]
]

///解答の配列を作成///
const answers = ["たかなわ", "かめいど", "こうじまち", "おなりもん", "とどろき", "しゃくじい", "ぞうしき", "おかちまち", "ししぼね", "こぐれ"]

///繰り返し処理を行う///
for(let i = 0; i < questions.length; i++) {
   //選択肢をシャッフル
   for(let j = questions[i].length - 1; j > 0; j--) {
    let k = Math.floor(Math.random() * (j + 1));
    [questions[i][j], questions[i][k]] = [questions[i][k], questions[i][j]];
  }
  //シャッフルした配列の中で解答が何番目にあるのか探す
  let correctNumber = questions[i].indexOf(answers[i])

　const base = `<div class="content-wrapper">`
   + `<section class="box-container">`
   + `<h2 id="question">${i+1}. この地名はなんて読む？</h2>`
   + `<div class="quiz-image-container">`
   + `   <img class="quiz-image" id="image" src="image${i + 1}.png">`
   + `</div>`
   + `   <ul id="quiz-parts">`
   + `     <li class="choice" id="part${i}-0" onclick="CheckAnswer(${i}, 0, ${correctNumber})"></li>`
   + `     <li class="choice" id="part${i}-1" onclick="CheckAnswer(${i}, 0, ${correctNumber})"></li>`
   + `     <li class="choice" id="part${i}-2" onclick="CheckAnswer(${i}, 0, ${correctNumber})"></li>`
   + `   </ul>`
   + ` <div class="quiz-result1">`
   + `  <p id="correct">正解！</p>`
   + `  <p id="answer${i}">正解は${answers[i]}です！</p>`
   + ` </div>`
   + ` <div class="quiz-result2">`
   + `  <p id="false">不正解！</p>`
   + `  <p id="answer${i}">正解は${answers[i]}です！</p>`
   + ` </div>`
   + `</div>`
   + ` </section>`


  document.write(base);
  document.getElementsByClassName("quiz-result1", "quiz-result2").style.display = "none";
  
  //シャッフルされた選択肢を表示
  document.getElementById(`part${i}-0`).innerHTML = questions[i][0];
  document.getElementById(`part${i}-1`).innerHTML = questions[i][1];
  document.getElementById(`part${i}-2`).innerHTML = questions[i][2];

  //下に表示される解答ボックスの生成
  //正解
  //const correctPlus = `<div class="quiz-result">`
  //+   `<p id="correct">正解！</p>`
  //+   `<p id="answer${i}">正解は${answers[i]}です！</p>`
  //+ `</div>`
  //
  ////不正解
  //const falsePlus = `<div class="quiz-result">`
  //+   `<p id="false">不正解！</p>`
  //+   `<p id="answer${i}">正解は${answers[i]}です！</p>`
  //+ `</div>`

  //クリックされた時に実行する関数//
  function CheckAnswer(i, choiceNumber, correctNumber) {
  
    const clickedChoice = document.getElementById(`part${i}-${choiceNumber}`);
    const correctChoice = document.getElementById(`part${i}-${correctNumber}`);
  
    //正解と不正解の判定
    if(choiceNumber === correctNumber) {
      clickedChoice.classList.toggle("correct-result");
    } else {
      document.write(falsePlus);
    }
  
  };  
  
} 
  

