ARG  NODE_VERSION=latest
ARG  NGINX_VERSION=latest

FROM node:${NODE_VERSION} AS builder
RUN echo "VERSION NODE: $NODE_VERSION"

# CREACION DE CARPETAS ------------------
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

# INSTALACION DE PAQUETES ------------------
RUN npm install --force
RUN npm install -g ts-node
# RUN npm run overwrite-environments

# CONSTRUCCION ANGULAR ------------------
# ARG BUILD_ENV
# RUN echo "AMBIENTE DE CONSTRUCCION: $BUILD_ENV"
RUN npm run "build"

# COPIAR DIST AL NGINX ------------------
FROM nginx:${NGINX_VERSION}
RUN echo "VERSION NGINX: $NGINX_VERSION"

COPY nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html/
COPY --from=builder /usr/src/app/dist/angular-sockets/ /usr/share/nginx/html

# PUBLICACION DE PUERTOS ------------------
EXPOSE 80 443
CMD nginx -g 'daemon off;'
