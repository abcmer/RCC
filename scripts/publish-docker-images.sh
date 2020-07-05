docker-compose build
export git_commit=$(git rev-parse HEAD)

docker tag rcc-server:latest abcmer/rcc-server:$git_commit
docker push abcmer/rcc-server:$git_commit

docker tag rcc-client:latest abcmer/rcc-client:$git_commit
docker push abcmer/rcc-client:$git_commit
