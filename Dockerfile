# STEP 1
FROM node:14-alpine3.15 as build-tw-web
RUN mkdir /app
WORKDIR /app
COPY ./package.json /app
COPY ./yarn.lock /app
RUN npm install
COPY . .
#STEP 2
#FROM build-step as development
#RUN mkdir /react
#WORKDIR /react
#COPY --from=build-step /app .
CMD [ "yarn", "run", "build" ]
# CMD ["serve", "-s", "build", "-l", "1337"]
#CMD ["npm", "start"]
# #STEP 3
FROM build as build
RUN npm run build
# #STEP 4
FROM nginx:alpine as production
COPY --from=build /app/build /usr/share/nginx/html