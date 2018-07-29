
var classButton = document.getElementsByClassName('classButton');
var wonButton = document.getElementById('wonButton');
var lossButton = document.getElementById('lossButton');
var state = {
    wins: 0,
    losses: 0
}
calcRecord();

for (let btn of classButton) {
    btn.onclick = function() {
        $('#classTitle').text(btn.innerHTML);
    };
};

wonButton.onclick = function() {
    var w = state.wins + 1;
    state.wins = w;
    calcRecord();
    if (state.wins === 12) {
        alert('Wow! You really did it! Start a new run');
        location.reload();
    }
}

lossButton.onclick = function() {
    var l = state.losses + 1;
    state.losses = l;
    calcRecord();
    if (state.losses === 3) {
        alert('Good run. Start a new run');
        location.reload();
    }
}

function calcRecord() {
    $('#record').text(state.wins + ' - ' + state.losses);
}

