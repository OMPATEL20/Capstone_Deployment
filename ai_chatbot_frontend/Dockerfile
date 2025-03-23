# Use official Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy frontend code
COPY . .

# Install dependencies
RUN npm install

# Build the React project
RUN npm run build

# Install serve to serve the build folder
RUN npm install -g serve

# Expose frontend port
EXPOSE 3000

# Serve the built React app
CMD ["serve", "-s", "build"]
