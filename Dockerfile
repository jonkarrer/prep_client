FROM node:18.12.1-alpine3.17

COPY . /app

WORKDIR /app

ENV VITE_API_ENDPOINT=https://prep-api.onrender.com

RUN npm install \
    && npm run build

CMD [ "node", "build" ]