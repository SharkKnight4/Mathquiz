player1_name = localStorage.getItem("player1name");
player2_name = localStorage.getItem("player2name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1score").innerHTML = player1_score;
document.getElementById("player2score").innerHTML = player2_score;
document.getElementById("playerQ").innerHTML = "Question Turn - " + player1_name;
document.getElementById("playerA").innerHTML = "Answer Turn - " + player2_name
function send() {
    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;
    diplayQuestion = number1 + "X" + number2;
    answer = number1 * number2;
    char1 = word1.charAt(1);
    console.log(char1);
    lengthdiv2 = Math.floor(word1.length / 2);
    char2 = word1.charAt(lengthdiv2);
    console.log(char2);
    lengthminus1 = word1.length - 1;
    char3 = word1.charAt(lengthminus1);
    console.log(char3);
    replacechar1 = word1.replace(char1, "_");
    replacechar2 = replacechar1.replace(char2, "_");
    replacechar3 = replacechar2.replace(char3, "_");
    console.log(replacechar3);
    question = "<h4 id='word_display'> Question: " + displayQuestion + "</h4>";
    input = "<br> Answer: <input type='text' id='check_box'>";
    checkbutton = "<br> <br> <button class='btn-success' onclick='check()'>Check</button>";
    row = question + input + checkbutton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
question_turn = "player_1";
answer_turn = "player_2";
function check() {
    guess = document.getElementById("check_box").value;
    if (guess == answer) {
        if (answer_turn == "player_1") {
            player1_score = player1_score + 1;
            document.getElementById("player1score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player_1") {
        question_turn = "player_2";
        document.getElementById("playerQ").innerHTML = "Question Turn - " + player2_name;
    }
    else {
        question_turn = "player_1";
        document.getElementById("playerQ").innerHTML = "Question Turn - " + player1_name;
    }
    if (answer_turn == "player_1") {
        answer_turn = "player_2";
        document.getElementById("playerA").innerHTML = "Answer Turn - " + player2_name;
    }
    else {
        answer_turn = "player_1";
        document.getElementById("playerA").innerHTML = "Answer Turn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}