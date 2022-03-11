import random
deck = (
'2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', 
'2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
'2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
'2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
)
current_deck = list(deck)
card_points = {
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  'J': 10,
  'Q': 10,
  'K': 10,
  'A': (1,11),
}
def draw():
    x = random.choice(current_deck)
    current_deck.remove(x)
    return x
def shuffle():
    current_deck = list(deck)
player_hand = ['']
dealer_hand = ['']

player_hand = draw()
print (player_hand)

    

