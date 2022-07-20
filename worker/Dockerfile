FROM node:16-alpine

WORKDIR /usr/complex/app/worker

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]