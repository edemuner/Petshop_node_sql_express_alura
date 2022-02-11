const fs = require('fs')
const path = require('path')

const getFile = (imagepath, fileName, cbCreatedImage) => {

    return new Promise((resolve, reject) => {
        
        const validExtensions = ['.jpg', '.png', '.jpeg']
        const extension = path.extname(imagepath)
        const invalidExtension = validExtensions.indexOf(extension) === -1

        if (invalidExtension){
            const error = 'Invalid extension'
            console.log(error)
            reject(cbCreatedImage(error))

        } else {
            const newPath = `./assets/images/${fileName}${extension}`
            resolve(
                fs.createReadStream(imagepath)
                .pipe(fs.createWriteStream(newPath))
                .on('finish', () => cbCreatedImage(false, newPath))
            )
        }
    })
}


module.exports = getFile

