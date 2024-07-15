# Utiliser l'image de base officielle Node.js compatible avec Prisma
FROM node:18-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le fichier package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le reste du code de l'application dans le répertoire de travail
COPY . .

# Supprimer node_modules et réinstaller les dépendances
RUN rm -rf node_modules
RUN npm install

# Construire l'application
RUN npm run build

# Recompiler bcrypt
RUN npm rebuild bcrypt

# Exposer le port sur lequel l'application va tourner
EXPOSE 3001

# Commande pour démarrer l'application avec migrations et seeding
CMD ["sh", "-c", "npx prisma migrate deploy && npx ts-node prisma/seed.ts && npm run start:dev"]
