FROM node:13.1.0-alpine

WORKDIR /app

COPY . .

RUN yarn && yarn build

ENTRYPOINT ["yarn", "start"]

EXPOSE 3000
