FROM node:9
COPY ./app/ /home/app/
WORKDIR /home/app
EXPOSE 4000
RUN yarn
ENTRYPOINT [ "node", "." ]