FROM node:18-alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install --force

# add app
COPY . ./
RUN npm run build
CMD ["npm", "start"]