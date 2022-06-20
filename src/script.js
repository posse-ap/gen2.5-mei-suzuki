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
   + `   <img class="quiz-image" id="image" src="../images/image${i + 1}.png">`
   + `</div>`
   + `   <ul id="quiz-parts">`
   + `     <li class="choice" id="part${i}-0" onclick="CheckAnswer(${i}, 0, ${correctNumber})"></li>`
   + `     <li class="choice" id="part${i}-1" onclick="CheckAnswer(${i}, 1, ${correctNumber})"></li>`
   + `     <li class="choice" id="part${i}-2" onclick="CheckAnswer(${i}, 2, ${correctNumber})"></li>`
   + `   </ul>`
   //まずは空白でクラスとIDだけ指定
   + ` <div id="quiz-result${i}-1">`
   + `  <p id="correct${i}"></p>`
   + `  <p id="correctAnswer${i}"></p>`
   + ` </div>`
   + ` <div id="quiz-result${i}-2">`
   + `  <p id="false${i}"></p>`
   + `  <p id="falseAnswer${i}"></p>`
   + ` </div>`
   + `</div>`
   + ` </section>`


  document.write(base);
  
  //シャッフルされた選択肢を表示
  document.getElementById(`part${i}-0`).innerHTML = questions[i][0];
  document.getElementById(`part${i}-1`).innerHTML = questions[i][1];
  document.getElementById(`part${i}-2`).innerHTML = questions[i][2];


  //クリックされた時に実行する関数//
  function CheckAnswer(i, choiceNumber, correctNumber) {

    //正解と不正解の判定
    if(choiceNumber === correctNumber) {
      const correctPlus1 = document.getElementById(`correct${i}`);
      correctPlus1.innerHTML = "正解！";
      correctPlus1.classList.add("correctDisplay");
      const correctPlus2 = document.getElementById(`correctAnswer${i}`);
      correctPlus2.innerHTML = `正解は「${answers[i]}」です！`; 
      correctPlus2.classList.add("answerDisplay");

      const resultCorrect = document.getElementById(`quiz-result${i}-1`);
      resultCorrect.classList.add("resultBox");

      //正解cssの追加
      const correctBox = document.getElementById(`part${i}-${correctNumber}`);
      correctBox.classList.add("blue");


      document.getElementById(`part${i}-0`).classList.add("avoidClick");
      document.getElementById(`part${i}-1`).classList.add("avoidClick");
      document.getElementById(`part${i}-2`).classList.add("avoidClick");

    } else {
      const falsePlus1 = document.getElementById(`false${i}`);
      falsePlus1.innerHTML = "不正解！";
      falsePlus1.classList.add("falseDisplay");
      const falsePlus2 = document.getElementById(`falseAnswer${i}`);
      falsePlus2.innerHTML = `正解は「${answers[i]}」です！`; 
      falsePlus2.classList.add("answerDisplay");

      const resultFalse = document.getElementById(`quiz-result${i}-2`);
      resultFalse.classList.add("resultBox");

      //不正解CSSの追加
      const correctBox = document.getElementById(`part${i}-${correctNumber}`);
      correctBox.classList.add("blue");
      const clickedBox = document.getElementById(`part${i}-${choiceNumber}`);
      clickedBox.classList.add("red");


      document.getElementById(`part${i}-0`).classList.add("avoidClick");
      document.getElementById(`part${i}-1`).classList.add("avoidClick");
      document.getElementById(`part${i}-2`).classList.add("avoidClick");

    }
  
  };  
  
} 
  

