export const resolvers = {
  Query: {
    popularMovies: (_, __, { dataSources }) =>
    Promise.all(
      Object.keys(dataSources).map(source => 
        dataSources[source].getPopularMovies()
      )
    ).then(result => result.reduce((acc, data) =>  acc.concat(data), [])),
  }
}