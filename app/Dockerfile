# Use official Node.js runtime
FROM node:18-alpine

# Create app directory inside container
WORKDIR /app

# Copy package.json first (for caching)
COPY package.json ./

# Install dependencies
RUN npm install --production

# Copy rest of the application
COPY . .

# Expose application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
