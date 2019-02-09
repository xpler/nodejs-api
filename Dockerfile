#Use NodeJS Base Image
FROM node 

# Create app directory
WORKDIR /app

#Set Maintainer
LABEL Maintainer "rj@digipromedia.com"


#RUN npm install
# If you are building your code for production
# RUN npm install --only=production

#Expose Docker Port
EXPOSE 3000

#CMD [ "node", "server.js" ]


#Set Healthy Check
# HEALTHCHECK --interval=5s \
#     --timeout=5s \
#     CMD curl -f http://127.0.0.1:3000 || exit 1
