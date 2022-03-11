
import random
deck = (
'2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', 
'2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
'2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
'2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
)
current_deck = list(deck)
def draw():
    x = random.choice(current_deck)
    current_deck.remove(x)
    return x
def shuffle():
    current_deck = list(deck)
def count_total(x):
    for card in x:
        if card == 'J' or card == 'Q' or card == 'K':
            card = 10
        total = 0
        total += int(card)
        return total
player_hand = []
dealer_hand = []
player_total = 0
dealer_total = 0
player_hand.append(draw())
player_hand.append(draw())
print ('Player has' + str(player_hand))
player_total = count_total(player_hand)
dealer_hand.append(draw())
print ('Dealer has' + str(dealer_hand))
dealer_total = count_total(dealer_hand)
stop = False
while player_total < 21 and stop == False:
    action = input('Hit or stay? ')
    if action == 'hit' or 'Hit':
        player_hand.append(draw())
        print ('Player has' + str(player_hand))
        player_total = count_total(player_hand)
    else:
        stop = True
if player_total > 21:
    print ('Bust')
else:
    while dealer_total < 17:
        dealer_hand.append(draw())
        dealer_total = count_total(dealer_hand)
    if player_total > dealer_total:
            print ('You win')
    if player_total < dealer_total:
            print ('You lose')
    if player_total == dealer_total:
            print ('Push')
    

