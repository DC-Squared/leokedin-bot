FROM zenato/puppeteer

USER root

WORKDIR /home/bot

RUN yarn global add n
RUN n latest

RUN yarn install --frozen-lockfile

EXPOSE 3000

CMD yarn start