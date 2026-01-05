FROM node:22-alpine AS build

WORKDIR /home/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:22-alpine AS prod

WORKDIR /app

COPY --from=build /home/app/.output ./.output

COPY package.json package-lock.json ./

RUN npm install --omit=dev

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]