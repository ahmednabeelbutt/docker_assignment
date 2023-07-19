# Specify the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Expose the port that the application listens on
EXPOSE 5008

# Start the application
CMD ["node", "server.js"]
