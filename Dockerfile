FROM node:lts

# this is a development Dockerfile
# and is not intended for production use
WORKDIR /var/www/cinemory-frontend

COPY package.json /var/www/cinemory-frontend/
RUN npm install

COPY . /var/www/cinemory-frontend

# this what make hot reloading works
# because you are starting your project
# in the same way you running it locally
RUN npm run build
CMD npm start