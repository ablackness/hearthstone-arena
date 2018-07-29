//const config = require('../src/config');
var goButton = document.getElementById("go_button");
var arenaButton = document.getElementById("arena");
var $output = $("#output");
const STANDARD = ["Basic","The Witchwood","Kobolds & Catacombs","Journey to Un'Goro","Knights of the Frozen Throne"];
var selectedClass = "Neutral";
var selectedSet = "Standard";
var STATE = {
    displayed: false
};

$('#class').change(function() {
    selectedClass = $("#class").val();
    STATE.displayed = false;
})

$('#set').change(function() {
    selectedSet = $("#set").val();
    STATE.displayed = false;
})

goButton.onclick = function(){
    console.log(STATE, selectedClass, selectedSet)
    if(!STATE.displayed) {
        STATE.displayed = true;
        $.ajax({
            type: "GET", 
            url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/' + selectedClass +'?collectible=1',
            headers: {"X-Mashape-Key": "LVB7uJHeBDmshKSk9D8U9ofJx1j8p1rVxMejsnbqnrkQoyVhe5"},
            success: function(data) {
                $output.html("");
                console.log(data);
                if (selectedSet === "Standard") {
                    data.map( result => {
                        if (result.cardSet === STANDARD[0] || result.cardSet === STANDARD[1] || result.cardSet === STANDARD[2] || result.cardSet === STANDARD[3] || result.cardSet === STANDARD[4]){
                            $output.append("<img src='" + result.img +"'/>");
                        }
                    })
                } else {
                    data.map( result => {
                        if (result.cardSet === selectedSet){
                            $output.append("<img src='" + result.img +"'/>");
                        }
                    })
                }
            }
        });
    }    
};

arenaButton.onclick = function() {
    window.location.assign('http://localhost:8080/arena');
};