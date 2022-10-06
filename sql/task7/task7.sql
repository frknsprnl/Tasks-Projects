--q1
SELECT rating FROM film
GROUP BY rating;

--q2
SELECT replacement_cost, COUNT(*) FROM film
GROUP BY replacement_cost
HAVING COUNT(*) > 50;

--q3
SELECT store_id, COUNT(*) FROM customer
GROUP BY store_id;

--q4
SELECT country_id, COUNT(*)  FROM city
GROUP BY country_id
ORDER BY count DESC
LIMIT 1;
