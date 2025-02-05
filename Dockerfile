# USE Node.js base image 
FROM node:18-slim 

# Set the working directory 
WORKDIR /app 

# COPY package.json and install dependencies 
COPY package.json .
RUN npm install 

# Copy the application code 

COPY . .

# Expose the application port 

EXPOSE 3000

# Run the application 

CMD ["npm", "start"]

