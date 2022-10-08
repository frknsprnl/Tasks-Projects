--q1
SELECT city, country FROM city
JOIN country ON country.country_id = city.country_id;

--q2
SELECT payment_id, customer.first_name, customer.last_name FROM payment
JOIN customer ON customer.customer_id = payment.customer_id;

--q3
SELECT rental_id, first_name, last_name FROM rental
JOIN customer ON customer.customer_id = rental.customer_id;