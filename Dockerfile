FROM node:22-alpine AS build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

EXPOSE ${PORT}

CMD ["yarn", "dev", "--host", "0.0.0.0"]
