FROM python:3.7.0

EXPOSE 8080
ENTRYPOINT python runserver.py

WORKDIR /usr/src/app

COPY requirements.txt ./
COPY runserver.py ./
COPY ma_frontend_demo ./ma_frontend_demo
COPY templates ./templates

RUN pip install --no-cache-dir -r requirements.txt
