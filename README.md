docker compose -f docker-compose.yml build
docker push docker.io/okhubvn/honghao:latest
docker pull docker.io/okhubvn/honghao:latest && docker stop honghao && docker rm honghao && docker run -d -p 3000:3000 --name honghao docker.io/okhubvn/honghao:latest && docker image prune
