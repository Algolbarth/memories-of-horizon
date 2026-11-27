import os

CARD_DIRECTORY = './src/lib/cards/data'
CARD_TYPES = ["actions", "bosses", "buildings", "creatures", "equipments", "items", "locations", "spells"]
DECK_PATH = './src/lib/deck/data'
STORY_PATH = './src/lib/lore/data'

def sort_items(path):
    nb_item = 0
    f = open(path + "/index.ts", "w")
    content = ""

    array = []
    for file in os.listdir(path):
        if "index.ts" not in file:
            array.append(file.replace(".ts", ""))

    array.sort()

    for file in array:
        nb_item += 1

        if nb_item > 1:
            content += "\n"

        content += f"export * from './{file}';"

    f.write(content)
    f.close()
    
    return nb_item

def check_cards():
    total_cards = 0
    for TYPE in CARD_TYPES:
        PATH = CARD_DIRECTORY + "/" + TYPE
        nb_cards =  sort_items(PATH)
        total_cards += nb_cards
        print(f"{nb_cards} {TYPE}")
    print(f"{total_cards} cards")

def check_decks():
    nb_decks = sort_items(DECK_PATH)
    print(f"{nb_decks} decks")

def check_stories():
    nb_stories = sort_items(STORY_PATH)
    print(f"{nb_stories} histoires")

def check_all():
    check_cards()
    check_decks()
    check_stories()

check_all()