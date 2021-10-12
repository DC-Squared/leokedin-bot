FROM node:16-alpine

WORKDIR /home/bot

COPY . /home/bot/

RUN yarn install --frozen-lockfile

EXPOSE 3000

CMD yarn start