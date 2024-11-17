FROM node:latest AS dev-deps
WORKDIR /app
COPY package.json package.json
RUN npm install --frozen-lockfile


FROM node:latest AS builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
# RUN yarn test
RUN npm build

FROM node:latest AS prod-deps
WORKDIR /app
COPY package.json package.json
RUN npm install --prod --frozen-lockfile


FROM node:latest AS prod
EXPOSE 80 443
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

CMD [ "node","dist/main.js"]
