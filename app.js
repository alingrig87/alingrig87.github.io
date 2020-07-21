function createTeams(){
    var urna1 = document.getElementsByClassName("urna1");
    var urna2 = document.getElementsByClassName("urna2");
    var urna3 = document.getElementsByClassName("urna3");
    var urna4 = document.getElementsByClassName("urna4");
    var urna5 = document.getElementsByClassName("urna5");

    var urna1Text = [], urna2Text=[], urna3Text=[], urna4Text=[], urna5Text=[];

    for (var i = 0; i <=2; i++){
        urna1Text.push(urna1[i].value);
        urna2Text.push(urna2[i].value);
        urna3Text.push(urna3[i].value);
        urna4Text.push(urna4[i].value);
        urna5Text.push(urna5[i].value);
    }

    // console.log(suffle(urna2Text));

    var allPlayers = [suffle(urna1Text),suffle(urna2Text),suffle(urna3Text), suffle(urna4Text), suffle(urna5Text)];

    var echipa1 = document.getElementsByClassName("echipa1");
    var echipa2 = document.getElementsByClassName("echipa2");
    var echipa3 = document.getElementsByClassName("echipa3");

    for(var i = 0; i < 5; i++){
        echipa1[i].innerHTML = allPlayers[i][0] + " ";
        console.log(echipa1[i].innerHTML);
        echipa2[i].innerHTML = allPlayers[i][1] + " ";
        echipa3[i].innerHTML = allPlayers[i][2] + " ";
    }

}

function suffle(array){
    for(var i = array.length -1; i > 0; i--){
        var j = Math.floor(Math.random() * (i+1));
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array;
}