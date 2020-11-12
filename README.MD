# Red Carpet Challenge

Web app for offering users a checklist for Best Picture nominees they have seen.

## Generating Seed Data

Create an account and obtain and api token from [api.themoviedb.org](https://developers.themoviedb.org/3/getting-started/introduction)

Install Python 3 [here](https://www.python.org/downloads/)

Change to scripts directory
```
cd scripts
```

Create and activate python virtual environment
```
python3 -m venv venv
pip install -r requirements.txt
source venv/bin/activate
```

Run script to lookup tmdb ids, providing api token at runtime.
```
python fetch_tmdb_ids.py
```

Replace existing movies.json within server directory.
```
cp movies.json ../server/seed-data/movies.json
```
## Setting up Development Environment

Install Dependencies
- [docker](https://docs.docker.com/get-docker/)
- [docker-compose](https://docs.docker.com/compose/install/)

Start dev docker images
```
docker-compose up --build
```

Navigate to http://localhost to test

