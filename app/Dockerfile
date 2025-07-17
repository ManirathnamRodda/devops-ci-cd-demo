# Use the official Node.js LTS image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the app code
COPY . .

# Expose the app port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
