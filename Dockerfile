# build container
FROM node:lts-alpine as builder
WORKDIR /app
COPY . .
RUN yarn install && yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]
