FROM node:10

RUN mkdir -p /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json package.json
RUN npm install

COPY . .

CMD ["npm", "start"]