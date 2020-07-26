FROM node
RUN mkdir /app/
WORKDIR /app/
COPY ./ /app/
RUN npm update && \
    npm install && \
    npm i -g nodemon --save