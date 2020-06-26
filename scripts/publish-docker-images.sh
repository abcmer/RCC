docker-compose build
export git_commit=$(git rev-parse HEAD)

docker tag oscars-club-server:latest abcmer/oscars-club-server:$git_commit
docker push abcmer/oscars-club-server:$git_commit

docker tag oscars-club-client:latest abcmer/oscars-club-client:$git_commit
docker push abcmer/oscars-club-client:$git_commit
