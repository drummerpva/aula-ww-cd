FROM skyrkt/nginx-node:latest
WORKDIR /usr/share/nginx
RUN rm -rf /usr/share/nginx/html
COPY . /usr/share/nginx
RUN npm install

