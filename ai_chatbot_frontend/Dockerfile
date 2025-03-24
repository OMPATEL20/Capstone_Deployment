# # Use official Node.js image
# FROM node:18-alpine

# # Set the working directory
# WORKDIR /app

# # Copy frontend code
# COPY . .

# # Install dependencies
# RUN npm install

# # Build the React project
# RUN npm run build

# # Install serve to serve the build folder
# RUN npm install -g serve

# # Expose frontend port
# EXPOSE 3000

# # Serve the built React app
# CMD ["serve", "-s", "build"]




# Use Node.js to build React app
FROM node:18-alpine as build

WORKDIR /app

# Copy and install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy rest of the files
COPY . .

# Build React with environment variables
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL
RUN npm run build

# Serve with a lightweight web server
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
