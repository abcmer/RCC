echo 'Building docker images'
docker-compose build --no-cache
export git_commit=$(git rev-parse HEAD)

echo Tagging rcc-server with tag $git_commit
docker tag rcc-server:latest abcmer/rcc-server:$git_commit
echo Publishing rcc-server:$git_commit
docker push abcmer/rcc-server:$git_commit

echo Tagging rcc-client with tag $git_commit
docker tag rcc-client:latest abcmer/rcc-client:$git_commit
echo Publishing rcc-client:$git_commit
docker push abcmer/rcc-client:$git_commit
