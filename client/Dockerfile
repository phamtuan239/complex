FROM node:16-alpine as builder

WORKDIR /usr/complex/app/client

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx 

EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /usr/complex/app/client/build /usr/share/nginx/html