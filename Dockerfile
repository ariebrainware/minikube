FROM node:10.15.3-alpine
EXPOSE 8080
COPY server.js .
CMD ["node","server.js"]