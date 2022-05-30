function hit
{
    let drawn = current_deck.random()
    player_hand.push(drawn)
    current_deck.delete_at(current_deck.index(drawn))
}
function stay
{
    for (card in player_hand) { }
}
function new_bet(amount) { }

const deck = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2", "A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2", "A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2", "A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
let current_deck
