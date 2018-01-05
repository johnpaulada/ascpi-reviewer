FROM node:9
COPY ./app/ /home/app/
WORKDIR /home/app
EXPOSE 3000
RUN yarn
ENTRYPOINT [ "yarn", "start" ]