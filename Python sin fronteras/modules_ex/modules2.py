from modules import pets,hi
from camelcase import CamelCase


print(pets)

for e in pets:
    c=CamelCase()
    var=hi(e)
    print(c.hump(var))
else:
    print('Done!')
