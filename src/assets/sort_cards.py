import os

CARD_DIRECTORY = './src/lib/Cards/Data'
ACTIONS_DIRECTORY = CARD_DIRECTORY + '/Actions'
BATIMENTS_DIRECTORY = CARD_DIRECTORY + '/Batiments'
BOSSES_DIRECTORY = CARD_DIRECTORY + '/Bosses'
CREATURES_DIRECTORY = CARD_DIRECTORY + '/Creatures'
EQUIPEMENTS_DIRECTORY = CARD_DIRECTORY + '/Equipements'
LIEUX_DIRECTORY = CARD_DIRECTORY + '/Lieux'
OBJETS_DIRECTORY = CARD_DIRECTORY + '/Objets'
SORTS_DIRECTORY = CARD_DIRECTORY + '/Sorts'

def check_actions():
    print(f"{check_items(ACTIONS_DIRECTORY)} actions")

def check_batiments():
    print(f"{check_items(BATIMENTS_DIRECTORY)} bâtiments")

def check_bosses():
    print(f"{check_items(BOSSES_DIRECTORY)} boss")

def check_creatures():
    print(f"{check_items(CREATURES_DIRECTORY)} créatures")

def check_equipements():
    print(f"{check_items(EQUIPEMENTS_DIRECTORY)} équipements")

def check_lieux():
    print(f"{check_items(LIEUX_DIRECTORY)} lieux")

def check_objets():
    print(f"{check_items(OBJETS_DIRECTORY)} objets")

def check_sorts():
    print(f"{check_items(SORTS_DIRECTORY)} sorts")

def check_items(path):
    nb_item = 0
    f = open(path + "/index.js", "w")
    content = ""

    array = []
    for file in os.listdir(path):
        if ".svelte" not in file and ".js" not in file:
            array.append(file)

    array.sort()

    for file in array:
        nb_item += 1

        if nb_item > 1:
            content += "\n"

        content += f"export * from './{file}';"

    f.write(content)
    f.close()
    
    return nb_item

check_actions()
check_batiments()
check_bosses()
check_creatures()
check_equipements()
check_lieux()
check_objets()
check_sorts()
