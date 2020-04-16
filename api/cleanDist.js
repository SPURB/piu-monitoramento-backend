import mkdirp from 'mkdirp'
import rimraf from 'rimraf'

const dir = './dist'

mkdirp(dir)
  .then(made => `dir ${made} was created`)
  .catch(err => console.error(err))

rimraf(dir, () => `${dir} is is empty`)
