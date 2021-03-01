def recur(i):
    if i < 1:
        return i
    else:
        print(i)
        recur(i - 1)

if __name__ == '__main__':
    recur(5)


