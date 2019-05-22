const multer = require('multer')
const crypto = require('crypto')
const path = require('path')

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve('..', '..', 'tmp', 'uploads'),
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, raw) => {
                if (err) return cb(err)

                cb(null, raw.toString('hex') + path.extname(file.originalname))
            })
        }
    })
}
