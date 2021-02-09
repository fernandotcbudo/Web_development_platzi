def countWord(word):
    counter= 0
    for i in word:
        counter += 1 if i == 'a' or i == 'e' or i == 'i' or i == 'o' or i == 'u' else + 0
    return print(f'The number of vocals is {counter}')


if __name__ == '__main__':
    word= input('Write a word: ')
    countWord(word)