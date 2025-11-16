# Base
FROM node:20-alpine

# Directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el proyecto
COPY . .

# Exponer puerto 80 para la app Angular
EXPOSE 80

# Comando para iniciar la app
CMD ["npm", "start"]
