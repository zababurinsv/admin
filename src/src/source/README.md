# Source

[[toc]]
## [code](https://zababurinsv.github.io/src/)

### Compiler
* [c](https://www.onlinegdb.com/online_c_compiler)
  
## [Вводный курс](https://partner.sberbank-school.ru/programs/11904/item/459723)
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
### Тесты
#### Успешно
* [Основы Программирования Итоговый тест](https://exam.sberbank-school.ru/atdata/Report/b2c45b7c-690b-4162-bb6a-549829f42d82)
#### Неуспешно
* [Основы Программирования Итоговый тест](https://exam.sberbank-school.ru/atdata/Report/b2c45b7c-690b-4162-bb6a-549829f42d82)


## [SQL](https://partner.sberbank-school.ru/programs/11906/item/460433)
* [Установка](https://docs.microsoft.com/ru-ru/sql/linux/quickstart-install-connect-ubuntu?view=sql-server-ver15)


Получим ли мы единственную запись таблицу Users с помощью запроса?
`нет`



Какие опции могут быть использованы в операторах выборки данных?  
ORDER BY  
WHERE  
HAVING  
FROM  
GROUP BY  


`SELECT	* FROM	product	WHERE	price	>= 100 AND price <= 200`


UPPER  
SUBSTRING  
LOWER   

SELECT


MAX  
COUNT  
AVG  
SUM  

Список студентов-двоечников



Все перечисленные ключевые слова относятся к DML (Язык манипуляции данными): INSERT, CREATE, DELETE, UPDATE

да


* https://exam.sberbank-school.ru/atdata/Report/a98e37a7-ef91-42f5-be34-67c93eb92a43

https://exam.sberbank-school.ru/atdata/Report/75ab90ed-3d4d-4fac-b54c-fda0ce1ff475

https://exam.sberbank-school.ru/atdata/Report/3fdd06fa-e521-4e59-a76d-f1f07bcf1c96

https://exam.sberbank-school.ru/atdata/Report/5f7073f1-513d-4fb3-84df-e290299617d6

```
#include <stdio.h>
int
main(void)
{
  int x[10]; /* резервируем место для 10 целочисленных элементов */
  int i;
  for(i = 0; i < 10; ++i)
    x[i] = i; /* заполняем массив */
  for(i = 0; i < 10; ++i)
    printf("%d ", x[i]); /* выводим  поочередно элементы массива на экран */
  return 0;
}
```

# Пузырьковая сортировка
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

## Сортировка по ведрам
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

Распределяет данные по небольшим контейнерам, сравнивает эти контейнеры между собой, а затем соединяет в нужном порядке   

Элементы, соединенные в структуру для более простого и понятного доступа к ним  

* https://exam.sberbank-school.ru/atdata/Report/c98ab3cf-3720-4248-b078-170fe977ac62
* https://exam.sberbank-school.ru/atdata/Report/ebaf3ce2-48cb-4738-8e4d-9c33fd05c378
* https://exam.sberbank-school.ru/atdata/Report/d4d9706d-e991-4826-ab02-d2ed4688d9b6
* https://exam.sberbank-school.ru/atdata/Report/b7453404-04f0-4935-9e1d-dcda3f1e1265
* https://exam.sberbank-school.ru/atdata/Report/ebaf3ce2-48cb-4738-8e4d-9c33fd05c378



* https://exam.sberbank-school.ru/atdata/Report/40cb13e1-7caf-496f-bcf8-1de80a14631c
* https://exam.sberbank-school.ru/atdata/Report/1162d2cf-4bc0-465c-89dc-9588a4f64839


```
for i in range(3):
    if i < 1:
        print(i)
    else:
        print(i)
        break
```

```
a = [1, 2, 3]
b = [4, 5, 6]
c = a + b
print(len(c))
```

```
a=""
for i in range(0,5):
    a = i
    print(a)
```

```
x = 'From marquard@uct.ac.za'
print(x[14:17])
```

```
print("оценка за тест" + 5)
```


* https://exam.sberbank-school.ru/atdata/Report/f3ce8524-b6c1-43ba-9802-87cd6c563f06
* https://exam.sberbank-school.ru/atdata/Report/f27e9bb4-0b17-4ed7-8f1a-63432dda14de