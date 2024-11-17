FROM node:latest AS dev-deps
WORKDIR /app
COPY package.json package.json
RUN npm install --frozen-lockfile
CMD ["npm", 'start']
