# Use Node.js image to build the frontend
FROM node:18 as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Use Nginx for serving static files
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Copy default nginx config
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
