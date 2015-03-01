FROM nginx
ADD app/public/fonts /usr/share/nginx/html/fonts
ADD app/public/css /usr/share/nginx/html/css
ADD app/public/images /usr/share/nginx/html/images
ADD app/public/js /usr/share/nginx/html/js
ADD app/public/application.js /usr/share/nginx/html/application.js
ADD app/public/index.html /usr/share/nginx/html/index.html
ADD robots.txt /usr/share/nginx/html/robots.txt

ADD default.conf /etc/nginx/conf.d/default.conf

RUN sed -i 's/localhost/panaderia.nahikari.me/g' /etc/nginx/conf.d/default.conf
RUN chmod 777 -R /usr/share/nginx/html
RUN chown www-data:www-data -R /usr/share/nginx/html
