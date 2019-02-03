FROM node:10
# RUN apt-get update && apt-get install -y firefox-esr
WORKDIR /usr/src/dockerApps/lit-element-env
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD npm run bundle:prod
