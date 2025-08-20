FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

# Installation spécifique de jsPDF pour la génération de PDF
RUN npm install jspdf

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"] 