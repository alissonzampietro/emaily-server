FROM node
RUN mkdir /app/
WORKDIR /app/
COPY ./ /app/
RUN npm update && npm install
CMD [ "npm", "start"]