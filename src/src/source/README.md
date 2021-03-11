# Source

[[toc]]
## Src
* [source](https://zababurinsv.github.io/src/)

## Environment
* [c_compiler](https://www.onlinegdb.com/online_c_compiler)
* [py_anaconda](https://www.onlinegdb.com/online_c_compiler)
* [sql_install](https://docs.microsoft.com/ru-ru/sql/linux/quickstart-install-connect-ubuntu?view=sql-server-ver15)

### Вывод в консоль сообщения "Hello, World!"
        
    #include <stdio.h> // STandardInputOutput — стандартная библиотека ввода вывода.
    #include <stdlib.h> // STandardLIBrary — cтандартная библиотека для Си.
    int main(/* Место для аргумента, которого может и не быть*/) // Главная функция программы, программа ВСЕГДА "входит" через main, главная точка входа.
    { // main есть в каждой программе языка, основанного на Си.
    printf("Hello World!");// не забывайте ставить кавычки, они дают системе понять, где конец операции.
    //функция printf выводит любые символы, поставленные между кавычек внутри круглых скобок. Круглые скобки — хранилище аргумента. Аргументом является все, что находится между ними.
    return 0; //возвращаемое значение функции. Main всегда возвращает в точку выхода функции.
    } // возвращаемое число отображает место ее выхода, что помогает понять, каким был результат работы.
    
### Вывод значения переменной в консоль  
        
    #include <stdio.h> // STandardInputOutput — стандартная библиотека ввода вывода.
    #include <stdlib.h> // STandardLIBrary — стандартная библиотека для Си.
    int main(/* Место для аргумента, которого может и не быть*/) // Главная функция программы, программа ВСЕГДА "входит" через main, главная точка входа
    { // main есть в каждой программе языка, основанного на Си.
    int a,b,c;//декларация переменных под типом int — целые числа.
    printf("Алгоритм: a = b + c");
    printf("\n"); //начинает новую строку.
    printf("Пожалуйста, введите b \n");//как мы уже знаем, это функция вывода значения в консоль.
    scanf("%d", &b); // %d — это форматирование в десятичный формат введенных данных, &b — это адрес памяти к которому привязан b.
    printf("Пожалуйста, введите с\n");
    scanf("%d",&c);// функция, что позволяет набрать в консоль значения b и c.
    a = b + c;// переменной а присваивается значение b+c.
    printf("a=%d",a);//вывод в консоль подсчитанного значения а.
    return 0; //возвращаемое значение функции. Main всегда возвращает в точку выхода функции.
    } //
        
### Циклический вывод значения переменной в консоль  
        
    #include <stdio.h> // STandardInputOutput — стандартная библиотека ввода вывода.
    #include <stdlib.h> // STandardLIBrary — cтандартная библиотека для Си.
    int main()
    {
    int i; // декларация переменной.
    for ( i =0; i < 100; ++i) //цикл. Он будет выполняться для изначальной i = 0, до тех пор, пока i не станет равен 100 при прибавлении 1 к i.
    {
    printf("%d" , i); //выводит значение i.
    printf("\n"); //начинает новую строку.
    }
    return 0;
    }


### Пузырьковая сортировка
```
arr = [-2, 45, 0, 11, -9]

print("Начальный массив: ")
print(arr)

i = len(arr)-1
while i > 0:
    j = 0
    while j < len(arr)-1:
        if arr[j] > arr[j+1]:
            tmp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = tmp
        j+=1

    print("Шаг " + str(len(arr)-i) + ": ")
    print(arr)

    i-=1

print("Конечный массив: ")
print(arr)
```

### Сортировка по ведрам
```
arr = [11, 9, 21, 8, 17, 19, 13, 1, 24, 12]
arr_sorted = []

max = max(arr)
min = min(arr)

if len(arr)%2 != 0:
    bucket_count = round(len(arr)/2)
else:
    bucket_count = len(arr)/2
step = (max-min)/bucket_count
bucket_arr = []

print("Начальный массив:")
print(arr)


for i in range(int(bucket_count)):
    bucket_arr.append([])
print("Пустые корзины:")
print(bucket_arr)

for i in range(len(bucket_arr)):
    for j in range(len(arr)):
        if arr[j] < int(step*i + step) and arr[j] >= int(step*i):
            bucket_arr[i].append(arr[j])
print("Заполненные корзины:")
print(bucket_arr)

for i in range(len(bucket_arr)):
    bucket_arr[i].sort()
print("Отсортированные корзины:")
print(bucket_arr)

for i in range(len(bucket_arr)):
    for j in range(len(bucket_arr[i])):
        arr_sorted.append(bucket_arr[i][j])

print("Конечный массив")
print(arr_sorted)
```

## Task
* [0](https://exam.sberbank-school.ru/atdata/Report/b2c45b7c-690b-4162-bb6a-549829f42d82)
* [1](https://exam.sberbank-school.ru/atdata/Report/5f7073f1-513d-4fb3-84df-e290299617d6)
* [2](https://exam.sberbank-school.ru/atdata/Report/ebaf3ce2-48cb-4738-8e4d-9c33fd05c378)
* [3](https://exam.sberbank-school.ru/atdata/Report/40cb13e1-7caf-496f-bcf8-1de80a14631c)
* [4](https://exam.sberbank-school.ru/atdata/Report/f27e9bb4-0b17-4ed7-8f1a-63432dda14de)