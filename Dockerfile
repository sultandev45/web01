#Base Image
FROM ubuntu

#Add discription in label
LABEL maintainer="sultandev45 <mubashersultanmehmood@gmail.com>"
LABEL description="This Dockerfile installs apache2 server using base image ubuntu and host wep-app."

#mantainer email Add detail in image
MAINTAINER Mubasher Sultan Mehmood < mubashersultanmehmoodgmail.com >

#Get update
RUN apt-get update

#Install apache2
RUN apt-get -y install apache2 && apt-get -y install apache2-utils
RUN apt-get clean

#Install git
RUN apt-get -y install git

#Clone repository from git hub
RUN git clone https://github.com/sultandev45/web01.git

#Copy site from host to server directory
#ADD ./Keyboard /var/www/html/

#Move clone repository to server Directory
RUN mv ./web01/Keyboard/* /var/www/html/


# Expose the port for access
EXPOSE 80/tcp

#config server-name
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Run the apache server
CMD apachectl -D FOREGROUND
