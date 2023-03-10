FROM node:18.12.1-alpine3.17

COPY . /app

WORKDIR /app

RUN npm install \
    && npm run build

CMD [ "node", "build" ]