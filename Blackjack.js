function hit() {
    draw_cards(player_hand, "player_hand")
    console.log("Current Deck: " + current_deck);
    console.log("Player Hand: " + player_hand);
}
function stay() {
    total_hand(player_hand, player_total)
    if (player_total == dealer_total) {
        dealer_hand = ["Push"];
    }
    if (player_total > dealer_total) {
        dealer_hand = ["You Win"];
        document.getElementById("current_money").value += bet;
    }
    if (player_total < dealer_total) {
        dealer_hand = ["You Lose"];
        document.getElementById("current_money").value -= bet;
    }
    setup_game()
}
function new_bet() {
    current_deck = deck;
    bet = document.getElementById("bet_amount").value;
    console.log("Bet Amount: " + bet);
    for (x = 0; x <= 1; x++) {
        draw_cards(player_hand, "player_hand")
    }
    for (x = 0; x <= 1; x++) {
        draw_cards(dealer_hand, "dealer_hand")
    }
    total_hand(dealer_hand, dealer_total);
    while (dealer_total <= 16) {
        draw_cards(dealer_hand, "dealer_hand");
        total_hand(dealer_hand, dealer_total);
    }
    console.log("Current Deck: " + current_deck);
    console.log("Player Hand: " + player_hand);
    console.log("Dealer Hand: " + dealer_hand);
    console.log("Dealer Total: " + dealer_total);
}

function draw_cards(hand, element) {
    let drawn = current_deck[Math.floor(Math.random() * current_deck.length)];
    hand.push(drawn);
    current_deck.pop(current_deck.indexOf(drawn));
    document.getElementById(element).value += [" "] + drawn;
}
function total_hand(hand, which_total) {
    let total = 0
    for (card in hand) {
        if (card === "K" || card === "Q" || card === "J" || card === "10") { total += 10 };
        if (card === "9") { total += 9 };
        if (card === "8") { total += 8 };
        if (card === "7") { total += 7 };
        if (card === "6") { total += 6 };
        if (card === "5") { total += 5 };
        if (card === "4") { total += 4 };
        if (card === "3") { total += 3 };
        if (card === "2") { total += 2 };
        if (card === "A") { total += 1 };
    }
    if (hand.includes("A") && total <= 11) { total += 10 };
    which_total = total;

}
const deck = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2",
    "A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2",
    "A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2",
    "A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];

function setup_game() {
    let current_deck = deck;
    let bet = 0;
    console.log("Reset");
    dealer_hand = []
    player_hand = []
    dealer_total = 0
    player_total = 0
}
setup_game()
