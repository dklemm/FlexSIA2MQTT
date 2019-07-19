FROM node:10.16-slim

WORKDIR /server

COPY . /server
RUN npm install

CMD [ "npm", "start" ]
