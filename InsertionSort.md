## [22, 27, 16, 2 , 18, 60] -> Insertion Sort

### 1. Yukarıda verilen dizinin sort türüne göre aşamalarını yazınız.

    -> 22, 27, 16, 2, 18, 60

    -> 2, 27, 16, 22, 18, 60

    -> 2, 16, 27, 22, 18, 60

    -> 2, 16, 18, 22, 27, 60

---

### 2. Big-O Notation:

    -> O(n²)

---

### 3. Time Complexity:

    -> Average case: Aradığımız sayının ortada olması = 18, 22

    -> Worst case: Aradığımız sayının sonda olması = 60

    -> Best case: Aradığımız sayının dizinin en başında olması. = 2

---

### 4. Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer?

    -> Dizinin ortasında bulunduğu için Average Case

---

### [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımı

    -> [2], 3, 5, 8, [7], 9, 4, 15, 6

    -> 2, 3, [4], 8, 7, 9, [5], 15, 6

    -> 2, 3, 4, [5], 7, 9, [8], 15, 6

    -> 2, 3, 4, 5, [6], 9, 8, 15, [7]
