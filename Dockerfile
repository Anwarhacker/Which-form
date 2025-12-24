FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Next.js dev server port
EXPOSE 3000

# IMPORTANT: --hostname 0.0.0.0 is required for Kubernetes
CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0", "-p", "3000"]
