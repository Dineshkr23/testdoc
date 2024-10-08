# Use the official Node.js image as a base
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of your application files
COPY . .

# Build the Docusaurus project
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Command to start the Docusaurus server
CMD ["npm", "run", "serve"]
