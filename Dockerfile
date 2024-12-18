#### VARIABLES DE DESPLIEGUE ####
ARG  NODE_VERSION=latest
ARG  NGINX_VERSION=latest
FROM node:${NODE_VERSION} AS builder
RUN echo "VERSION NODE: $NODE_VERSION"

# CREACION DE CARPETA
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

# INSTALACION DE PAQUETES PACKAGE.JSON
RUN npm install --force
RUN npm install -g ts-node

# CREA CARPETA DIST DE ANGULAR SEGUN EL AMBIENTE
RUN npm run build

# COPIA CARPETA DIST AL NGINX DEL SERVIDOR
FROM nginx:${NGINX_VERSION}
COPY --from=builder /usr/src/app/dist/hbd/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# PUBLICACION DE PUERTOS
EXPOSE 8080 443
ENTRYPOINT ["nginx", "-g", "daemon off;"]
