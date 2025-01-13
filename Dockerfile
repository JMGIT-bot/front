FROM nginx:stable-alpine3.20
COPY dist/ /usr/share/nginx/html
