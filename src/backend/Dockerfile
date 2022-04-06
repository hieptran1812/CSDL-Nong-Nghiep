FROM python:3.8

WORKDIR /app

RUN apt-get update 

RUN pip install flask_pymongo \
flask_cors \
flask \
dnspython


COPY . /app


EXPOSE 5000
CMD python app.py
