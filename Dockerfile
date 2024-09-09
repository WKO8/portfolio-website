# Use an official Node.js runtime as a parent image
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the Next.js app
RUN npm run build

# Production stage
FROM node:18 AS production

# Set the working directory in the container
WORKDIR /app

# Copy only the necessary files for production
COPY --from=build /app/package*.json ./
COPY --from=build /app/.next ./
COPY --from=build /app/public ./

# Install only production dependencies
RUN npm install --only=production

# Start the Next.js app
CMD ["npm", "start"]
