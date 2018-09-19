FROM node:8

WORKDIR /usr/src/app

COPY package.json package.json

RUN npm install

COPY app.js app.js

EXPOSE 3000

ENTRYPOINT ["npm", "start"]