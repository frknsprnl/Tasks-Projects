--q1
SELECT DISTINCT replacement_cost FROM film;

--q2
SELECT COUNT (DISTINCT replacement_cost) FROM film;

--q3
SELECT COUNT (title) FROM film WHERE title LIKE 'T%' AND rating = 'G';

--q4
SELECT COUNT (country) FROM country WHERE country LIKE '_____';

--q5
SELECT COUNT (city) FROM city WHERE city ILIKE '%r'; 