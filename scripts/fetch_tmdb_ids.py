import json

import requests

class MovieList(object):
    def __init__(self):
        self.movies = []
        self.output_data = []

    def read_json_data(self, filepath):
        with open(filepath) as f:
            lines = f.read()
            for m in json.loads(lines):
                movie = Movie()
                movie.title = m['title']
                movie.awardShowYear = m['awardShowYear']
                movie.awardShowIndex = m['awardShowIndex']
                self.movies.append(movie)                

        return self

    def lookup_movie_ids(self):
        for movie in self.movies:
            movie.lookup_id()

    def write_movies_to_file(self, filepath):
        movies_data = [m.__dict__ for m in self.movies]
        with open(filepath, 'w') as outfile:
            json.dump(movies_data, outfile) 

def main():
    movie_list = MovieList()
    movie_list.read_json_data('./input.json')
    movie_list.lookup_movie_ids()
    movie_list.write_movies_to_file('./movies.json')


class Movie(object):
    def __init__(self):
        self.tmdbId = None
        self.title = None
        self.awardShowIndex = None
        self.awardShowYear = None

    def lookup_id(self):
        print(f'lookup_id for {self.title}')
        title = self.title.replace(' ', '+')
        url = f'https://api.themoviedb.org/3/search/movie?query={title}&api_key={API_KEY}'
        response = requests.get(url)

        for movie in response.json()['results']:
            release_year = movie.get('release_date', '0-0-0').split('-')[0]
            if not release_year:
                continue
            movie_id = movie['id']
            if abs(int(release_year) - self.awardShowYear) <= 1:
              self.tmdbId = movie_id
              print('tmdbId', self.tmdbId)
              break                        

if __name__ == '__main__':
    API_KEY = input('TMDB API Key:')
    main()