FROM node:21-alpine3.18

WORKDIR /decoverse

COPY backend .

RUN npm install
RUN apk add --no-cache python3 make g++


ENV NODE_ENV="production"

ENTRYPOINT [ "npm", "start" ]