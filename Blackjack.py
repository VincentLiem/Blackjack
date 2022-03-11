import random

deck = (
'2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
'2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
'2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
'2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
)

def draw():
    x = random.choice(current_deck)
    current_deck.remove(x)
    return x
def shuffle():
    current_deck = list(deck)
def count_total(x):
    total = 0
    for card in x:
        if card == 'J' or card == 'Q' or card == 'K':
            card = 10
        if card == 'A':
            card = 1
        total += int(card)
    return total

player_hand = []
dealer_hand = []
player_total = 0
dealer_total = 0
current_deck = list(deck)
player_hand.append(draw())
player_hand.append(draw())

print ('Player has ' + str(player_hand))
player_total = count_total(player_hand)
print ('Player point total is ' + str(player_total), end = '')
if 'A' in player_hand:
    print(' or ' + str(player_total+10))
else:
    print('')
dealer_hand.append(draw())
print ('Dealer has ' + str(dealer_hand))
dealer_total = count_total(dealer_hand)
print ('Dealer point total is ' + str(dealer_total), end = '')
if 'A' in dealer_hand:
    print(' or ' + str(dealer_total+10))
else:
    print('')
stop = False
action = ''
while player_total < 21 and stop == False:
    action = input('Hit or stay? ')
    if action == 'hit' or action == 'Hit':
        player_hand.append(draw())
        print ('Player has ' + str(player_hand))
        player_total = count_total(player_hand)
        print ('Player point total is ' + str(player_total), end = '')
        if 'A' in player_hand:
            print(' or ' + str(player_total+10))
        else:
            print('')
    else:
        stop = True
if player_total > 21:
    print ('Player busts, you lose')
else:
    while dealer_total < 17 or (dealer_total + 10 < 17 and 'A' in dealer_hand):
        dealer_hand.append(draw())
        dealer_total = count_total(dealer_hand)
        print ('Dealer has ' + str(dealer_hand))
        print ('Dealer point total is ' + str(dealer_total), end = '')
        if 'A' in dealer_hand:
            print(' or ' + str(dealer_total+10))
        else:
            print('')
    if 'A' in player_hand and player_total + 10 <= 21:
        player_total += 10
    if 'A' in dealer_hand and dealer_total + 10 <= 21:
        dealer_total += 10
    if player_total > dealer_total:
            print ('You win')
    if player_total < dealer_total and dealer_total <= 21:
            print ('You lose')
    if player_total == dealer_total:
            print ('Push')
    if dealer_total > 21:
            print ('Dealer busts, you win')

