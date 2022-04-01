import random

def draw():
    x = random.choice(current_deck)
    current_deck.remove(x)
    return x

def count_total(x):
    total = 0
    for card in x:
        if card == 'J' or card == 'Q' or card == 'K':
            card = 10
        if card == 'A':
            card = 1
        total += int(card)
    return total

player_total = 0
dealer_total = 0
keep_playing = 'yes'
money = input('Enter starting money. >> ')
money = float(money.replace('$',''))

while keep_playing.lower() != 'no' and keep_playing.lower() != 'n':
    current_deck = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'] * 4
    player_hand = []
    dealer_hand = []
    bet_amount = input('Enter bet amount. >> ')
    bet_amount = float(bet_amount.replace('$',''))
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
        if action.lower() == 'hit' or action.lower() == 'h':
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
        money -= bet_amount
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
                money += bet_amount
        if player_total < dealer_total and dealer_total <= 21:
                print ('You lose')
                money -= bet_amount
        if player_total == dealer_total:
                print ('Push')
        if dealer_total > 21:
                print ('Dealer busts, you win')
                money += bet_amount
    print('You have $' + str(money) + '.')
    keep_playing = input('Keep playing? ')
