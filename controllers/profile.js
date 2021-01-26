const handleProfile = (req, res, db) => {
  const { id } = req.params
  db.select('*').from('users').where({ id: id })
    .then(user => {
      if (user.length) {
        res.json(user[0])
      }
      res.status(400).json('not found')
    })
    .catch(() => res.status(400).json('error getting user'))
}

module.exports = {
  handleProfile
}