FROM node:12-alpine

WORKDIR /app

COPY package*.json ./
RUN npm cache clean --force && rm -rf node_modules && npm install

COPY . .

EXPOSE 3000
EXPOSE 1337

CMD npm start