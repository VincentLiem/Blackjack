function hit() {
    let drawn = current_deck[Math.floor(Math.random() * current_deck.length)];
    player_hand.push(drawn);
    current_deck.pop(current_deck.indexOf(drawn));
    document.getElementById("player_hand").value += " " + drawn;
    console.log("Current Deck: " + current_deck);
    console.log("Player Hand: " + player_hand);
}
function stay() {
    let total = 0
    for (card in player_hand) {
        if (card === "K" || card === "Q" || card === "J") { card = 10 } total += card;
    }
}
function new_bet() {
    current_deck = deck;
    bet = document.getElementById("bet_amount").value;
    console.log("Bet Amount: " + bet);
    for (x = 0; x <= 1; x++) {
        let drawn = current_deck[Math.floor(Math.random() * current_deck.length)];
        player_hand.push(drawn);
        current_deck.pop(current_deck.indexOf(drawn));
        document.getElementById("player_hand").value += " " + drawn;
    }
    for (x = 0; x <= 1; x++) {
        let drawn = current_deck[Math.floor(Math.random() * current_deck.length)];
        dealer_hand.push(drawn);
        current_deck.pop(current_deck.indexOf(drawn));
        document.getElementById("dealer_hand").value += " " + drawn;
    }
}
const deck = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2",
    "A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2",
    "A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2",
    "A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
let current_deck = deck;
let bet = 0;
console.log("Current Deck: " + current_deck);
console.log("Bet Amount: " + bet);
player_hand = []
dealer_hand = []
