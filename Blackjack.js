function hit() {
    let drawn = current_deck.random();
    player_hand.push(drawn);
    current_deck.delete_at(current_deck.index(drawn));
    document.getElementById("player_hand").value += drawn;
}
function stay() {
    for (card in player_hand) { }
}
function new_bet() {

    current_deck = deck;
    bet = document.getElementById("bet_amount").value;
    console.log("Bet Amount: " + bet);
}
const deck = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2",
    "A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2",
    "A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2",
    "A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
let current_deck = deck;
let bet = 0;
console.log("Current Deck: " + current_deck);
console.log("Bet Amount: " + bet);
