FROM nginx:1.20-1-38
RUN rm -rf /usr/share/nginx/html/*
COPY /build /usr/share/nginx/html
COPY /app/nginx.conf /etc/nginx/nginx.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]