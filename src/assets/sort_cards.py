import os

CARD_DIRECTORY = './src/lib/Cards/Data'
DIRECTORIES = ["Actions", "Buildings", "Bosses", "Creatures", "Equipments", "Locations", "Items", "Spells"]

def check_items(path):
    nb_item = 0
    f = open(path + "/index.ts", "w")
    content = ""

    array = []
    for file in os.listdir(path):
        if ".svelte" not in file and ".ts" not in file:
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

def check_all():
    for DIRECTORY in DIRECTORIES:
        PATH = CARD_DIRECTORY + "/" + DIRECTORY
        print(f"{check_items(PATH)} {DIRECTORY}")

check_all()