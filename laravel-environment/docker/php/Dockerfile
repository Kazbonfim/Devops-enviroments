FROM php:8.2-fpm-alpine

# Install system dependencies
RUN apk add --no-cache \
    build-base \
    linux-headers \
    zlib-dev \
    libpng-dev \
    jpeg-dev \
    freetype-dev \
    libzip-dev \
    postgresql-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install \
    gd \
    zip \
    pdo \
    pdo_mysql \
    pdo_pgsql \
    pcntl \
    bcmath \
    sockets

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Create a non-root user
RUN addgroup -g 1000 laravel && adduser -u 1000 -G laravel -s /bin/sh -D laravel
USER laravel

WORKDIR /var/www/html

CMD ["php-fpm"]

EXPOSE 9000
