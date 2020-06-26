docker-compose build
export git_commit=$(git rev-parse HEAD)

docker tag rcq-server:latest abcmer/rcq-server:$git_commit
docker push abcmer/rcq-server:$git_commit

docker tag rcq-client:latest abcmer/rcq-client:$git_commit
docker push abcmer/rcq-client:$git_commit
