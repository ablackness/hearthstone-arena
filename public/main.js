//const config = require('../src/config');
var goButton = document.getElementById("go_button");
var $output = $("#output");
//console.log(config.authHeader);
const STANDARD = ["Basic","The Witchwood","Kobolds & Catacombs","Journey to Un'Goro","Knights of the Frozen Throne"];

goButton.onclick = function(){
    $selectedOption = $("#class").val();
    $selectedSet = $("#set").val();
    $.ajax({
        type: "GET", 
        url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/' + $selectedOption +'?collectible=1',
        headers: {"X-Mashape-Key": "LVB7uJHeBDmshKSk9D8U9ofJx1j8p1rVxMejsnbqnrkQoyVhe5"},
        success: function(data) {
            $output.html("");
            console.log(data);
            if ($selectedSet === "Standard") {
                data.map( result => {
                    if (result.cardSet === STANDARD[0] || result.cardSet === STANDARD[1] || result.cardSet === STANDARD[2] || result.cardSet === STANDARD[3] || result.cardSet === STANDARD[4]){
                        $output.append("<img src='" + result.img +"'/>");
                    }
                })
            } else {
                data.map( result => {
                    if (result.cardSet === $selectedSet){
                        $output.append("<img src='" + result.img +"'/>");
                    }
                })
            }
        }
    });    
};