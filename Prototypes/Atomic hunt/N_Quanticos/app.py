import json
import random
import time

with open("periodic-table-lookup.json", "r", errors="ignore") as data:
    table = json.load(data)

def atomic_numbers(electronConfig):
    valenceShell = electronConfig.split()[-1]
    
    n = valenceShell[0]
    l = valenceShell[1]

    match l:
        case "s": l = 0
        case "p": l = 1
        case "d": l = 2
        case "f": l = 3

    electrons = int(valenceShell[2:])
    
    # ml
    ml = (electrons % (l*2 + 1)) - (l + 1)
    if abs(ml) > l: ml = l

    # ms
    match (electrons // (l*2 + 1)):
        case 0: ms = -1/2
        case _: ms = 1/2

    return n, l, ml, ms

def pick_rnd_element(table):
    rndElement_Name = random.choice(table["order"])
    rndElement_Object = table[rndElement_Name]

    z = rndElement_Object["number"]
    symbol = rndElement_Object["symbol"]

    electronConfig = rndElement_Object["electron_configuration"]
    n, l, ml, ms = atomic_numbers(electronConfig)

    return rndElement_Name, z, symbol, n, l, ml, ms

name, z, symbol, n, l, ml, ms = pick_rnd_element(table)

'''---------------------------------------'''
input("Enter para continuar")

spin = ms.as_integer_ratio()
print(f"\nNúmeros:\nn: {n}\nl: {l}\nml: {ml}\nms: {spin[0]}/{spin[1]}")

start = time.time()
input()
end = time.time()

print(f'Resposta:\nNome: {name} ({symbol})\nNº atômico: {z}\n')
print(f"Tempo: {round(end - start, 2)}")