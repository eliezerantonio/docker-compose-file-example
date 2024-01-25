# /app /usr/lib
# FROM  node:19.2-alpine3.16
# FROM --platform=linux/arm64 node:19.2-alpine3.16
FROM --platform=$BUILDPLATFORM node:19.2-alpine3.16

#cd app
WORKDIR /app

#Dest /app
COPY package.json ./

# install dependencies
RUN npm install

COPY . ./

# execute tests

RUN npm run test

# delete unecessary archives

RUN rm -rf tests && rm -rf node_modules

RUN npm install --prod
# Comand what run the image
CMD [ "node", "app.js" ]