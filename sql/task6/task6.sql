--q1
SELECT AVG(rental_rate) FROM film;

--q2
SELECT COUNT(title) FROM film WHERE title LIKE 'C%';

--q3
SELECT MAX(length) FROM film WHERE rental_rate IN (0.99);

--q4
SELECT COUNT (DISTINCT replacement_cost) FROM film WHERE length > 150;
