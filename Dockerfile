FROM node:lts-alpine3.16 AS development
ENV NODE_ENV development

RUN set -xe \
    && apk add --update

WORKDIR /app
CMD [ "yarn", "start" ]