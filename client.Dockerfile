FROM node:21-alpine3.18

WORKDIR /decoverse

COPY client .
RUN apk add --no-cache python3 make g++
RUN npm install

ENV NODE_ENV=production

ENTRYPOINT [ "npm", "run", "dev" ]