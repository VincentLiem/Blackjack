function hit() {
    draw_cards(player_hand, "player_hand")
    console.log("Current Deck: " + current_deck);
    console.log("Player Hand: " + player_hand);
    player_total = total_hand(player_hand)
    console.log("Player Total: " + player_total);
    if (player_total > 21) {
        document.getElementById("status").value = "You Bust, You Lose";
        current_money -= bet
        document.getElementById("current_money").value = current_money;
        console.log("Current Money: " + current_money);
        setup_game()
    }
}
function stay() {
    player_total = total_hand(player_hand)
    while (dealer_total <= 16) {
        draw_cards(dealer_hand, "dealer_hand");
        dealer_total = total_hand(dealer_hand);
        console.log("Dealer Hand: " + dealer_hand);
        console.log("Dealer Total: " + dealer_total);
    }
    if (dealer_total > 21) {
        document.getElementById("status").value = "Dealer Busts, You Win";
        current_money += bet
        document.getElementById("current_money").value = current_money;

    }
    else if (player_total == dealer_total) {
        document.getElementById("status").value = "Push";
    }
    else if (player_total > dealer_total) {
        document.getElementById("status").value = "You Win";
        current_money += bet
        document.getElementById("current_money").value = current_money;
    }
    else if (player_total < dealer_total) {
        document.getElementById("status").value = "You Lose";
        current_money -= bet
        document.getElementById("current_money").value = current_money;
    }
    console.log("Current Money: " + current_money);
    setup_game()
}

function new_bet() {
    document.getElementById("dealer_hand").value = [];
    document.getElementById("player_hand").value = [];
    document.getElementById('bet_amount').readOnly = true;
    document.getElementById("dealer_hand").value = null;
    bet = parseFloat(document.getElementById("bet_amount").value);
    console.log("Bet Amount: " + bet);
    for (x = 0; x <= 1; x++) {
        draw_cards(player_hand, "player_hand")
    }
    draw_cards(dealer_hand, "dealer_hand")
    player_total = total_hand(player_hand);
    dealer_total = total_hand(dealer_hand);
    console.log("Current Deck: " + current_deck);
    console.log("Player Hand: " + player_hand);
    console.log("Player Total: " + player_total);
    console.log("Dealer Hand: " + dealer_hand);
    console.log("Dealer Total: " + dealer_total);
    document.getElementById("hit_button").disabled = false;
    document.getElementById("stay_button").disabled = false;
    document.getElementById("submit_bet").disabled = true;
    document.getElementById("status").value = "Hit or Stay";
}

function draw_cards(hand, element) {
    let drawn = current_deck[Math.floor(Math.random() * current_deck.length)];
    hand.push(drawn);
    current_deck.pop(current_deck.indexOf(drawn));
    document.getElementById(element).value += " " + drawn;
}

function total_hand(hand) {
    let total = 0
    for (var i = 0; i < hand.length; i++) {
        card = hand[i]
        if (card === "K" || card == "Q" || card == "J" || card == "10") { total += 10; }
        if (card === "9") { total += 9; }
        if (card === "8") { total += 8; }
        if (card === "7") { total += 7; }
        if (card === "6") { total += 6; }
        if (card === "5") { total += 5; }
        if (card === "4") { total += 4; }
        if (card === "3") { total += 3; }
        if (card === "2") { total += 2; }
        if (card === "A") { total += 1; }
    }
    if (hand.includes("A") && total <= 11) { total += 10; }
    return total
}

function setup_game() {
    console.log("Reset");
    current_deck = deck
    bet = 0;
    dealer_hand = []
    player_hand = []
    dealer_total = 0
    player_total = 0
    document.getElementById('bet_amount').readOnly = false;
    document.getElementById("bet_amount").value = null;
    document.getElementById("submit_bet").disabled = false;
    document.getElementById("hit_button").disabled = true;
    document.getElementById("stay_button").disabled = true;
}
const deck = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2",
    "A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2",
    "A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2",
    "A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
let current_deck = deck
let bet = 0;
let dealer_hand = []
let player_hand = []
let dealer_total = 0
let player_total = 0
let current_money = 10000
document.getElementById("hit_button").disabled = true;
document.getElementById("stay_button").disabled = true;

console.log("Current Deck: " + current_deck);
console.log("Player Hand: " + player_hand);
console.log("Dealer Hand: " + dealer_hand);
console.log("Player Total: " + player_total);
console.log("Dealer Total: " + dealer_total);
console.log("Current Money: " + current_money);
