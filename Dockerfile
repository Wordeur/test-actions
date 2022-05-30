FROM node
WORKDIR /app
ADD . .
ENTRYPOINT node /app/app.js

