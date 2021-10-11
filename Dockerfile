FROM node:16-alpine

RUN yarn install --frozen-lockfile

WORKDIR /home/bot

EXPOSE 3000

CMD yarn start