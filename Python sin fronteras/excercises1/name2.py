def impriRev(namef,lastnamef):
    concat=namef+' '+lastnamef
    print(concat[::-1])


if __name__ == '__main__':
    namef= input('Wrtie your name: ')
    lastnamef= input('Write your lastnem: ') 
    print(impriRev(namef,lastnamef))

