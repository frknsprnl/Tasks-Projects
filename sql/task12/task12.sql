--q1
SELECT COUNT(*) FROM film
WHERE length > (
SELECT AVG(length) FROM film
);

--q2
SELECT COUNT(*) FROM film
WHERE rental_rate = (
SELECT MAX(rental_rate) FROM film
);

--q3
SELECT * FROM film
WHERE rental_rate = (
SELECT MIN(rental_rate) FROM film) 
AND 
replacement_cost = (
SELECT MIN(replacement_cost) FROM film);

--q4
SELECT customer.customer_id, COUNT(*) FROM customer
JOIN rental ON rental.customer_id = customer.customer_id
GROUP BY 1
HAVING COUNT(*) > 1
ORDER BY count DESC;
