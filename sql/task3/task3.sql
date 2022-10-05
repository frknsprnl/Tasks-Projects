--q1
SELECT country FROM country WHERE country LIKE 'A%a';

--q2
SELECT country FROM country WHERE country LIKE '%_____n';

--q3
SELECT title FROM film WHERE title ILIKE '%t%t%t%t%';

--q4
SELECT * FROM film WHERE title LIKE 'C%' AND length > 90 AND rental_rate = 2.99;
