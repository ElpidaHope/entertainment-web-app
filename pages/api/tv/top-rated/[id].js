export default async function handler(req, res) {
  const {id} = req.query
  try {
    const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=09f21591e8b68886e7ff5c7bcf85cafd&sort_by=vote_count.desc&page=${id}`);

    const data = await response.json()

    res.status(200).json({
      results: data.results,
      total_pages: data.total_pages
    })
  }

  catch (err) {
    res.status(500).json({
      error: err.message
    })
  }
}