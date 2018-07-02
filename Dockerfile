FROM node:8.11.3-alpine

COPY package.json /var/app/package.json
WORKDIR /var/app
RUN yarn

COPY . /var/app

CMD [ "node", "ngrok.js" ]