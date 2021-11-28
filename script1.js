//問題の配列を作成
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

const answers = ["たかなわ", "かめいど", "こうじまち", "おなりもん", "とどろき", "しゃくじい", "ぞうしき", "おかちまち", "ししぼね", "こぐれ"]


for(let i = 0; i < questions.length; i++) {
  //要素が来ているのを確認
  console.log(i);
  //最初の文章を表示
  document.getElementById("question").innerHTML = `${i+1}. この地名はなんて読む？`;
  //問題の画像を表示
  document.getElementById("image").src = images[i];
  
  //シャッフル関数を作成
  function Shuffle() {
    for(j = questions[i].length - 1; j > 0; j--) {
      let k = Math.floor(Math.random() * (j + 1));
      let tmp = questions[i][j];
      questions[i][j] = questions[i][k];
      questions[i][k] = tmp;
    }
  };
  //選択肢をシャッフルする
  Shuffle();
 
  //選択肢を表示
  document.getElementById("part1").innerHTML = questions[i][0];
  document.getElementById("part2").innerHTML = questions[i][1];
  document.getElementById("part3").innerHTML = questions[i][2];
  
  //正解と不正解の時のCSS変化
  function ClickAnswer() {
    let answer = doc;

    const button = document.querySelector(".primary");

    if(answer === answers[i]) {
      document.getElementById("result").innerHTML = "正解！";
      document.getElementById("answer").innerHTML = "正解は" + answers[i] + "です！";
      button.classList.add("blue");
    } else {
      document.getElementById("result").innerHTML = "不正解！";
      document.getElementById("answer").innerHTML = "正解は" + answers[i] + "です！";
      button.classList.add("blue");
      button.classList.add("red");
    }
  }
} 




