import json

with open('words_dictionary.json') as file:
    words = json.load(file)

def short_elimination(word):
    if(len(word) > 4): return word


words = set(map(short_elimination, words.keys()))

with open('teste_dump.json', 'w') as outfile:
    json.dump(list(words), outfile)

with open('teste_dumps.json', 'w') as outfile:
    words = json.dumps(list(words))
    json.dump(words, outfile)