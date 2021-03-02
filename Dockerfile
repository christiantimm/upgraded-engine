FROM php:7.4

WORKDIR /app

COPY . .

EXPOSE 80

CMD ["php", "-S", "0.0.0.0:80", "-t", "dist" ]