FROM node:15.6-alpine3.10

ARG port=3000

ENV PORT $port

RUN mkdir -p /app
WORKDIR /app

COPY . /app
RUN npm install

RUN npm run build
EXPOSE $port

CMD ["npm", "run", "start"]
