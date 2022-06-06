export default async function handler(req, res) {
  const { id } = req.query

  try {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=09f21591e8b68886e7ff5c7bcf85cafd`)

    const response2 = await fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=09f21591e8b68886e7ff5c7bcf85cafd`)
    
    const data = await response.json()
    const data2 = await response2.json()

    res.status(200).json({
      details: data,
      credits: data2
    })
  }

  catch (err) {
    res.status(500).json({
      error: err.message
    })
  }
}