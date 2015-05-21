FROM iojs:2.0.1

ENV NPM_CONFIG_LOGLEVEL http
ENV NODE_ENV production

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json package.json
COPY build/assets assets/
COPY server server/
COPY templates templates/

RUN npm install

EXPOSE 3000

CMD ["node", "/usr/src/app/server/index.js"]
