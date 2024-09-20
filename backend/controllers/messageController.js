const axios = require('axios')

const getMessage = async function(req, res, next){
    try {
        const url = 'http://localhost:8000/message'
        const message = await axios.get(url)
        res.status(200).json({
            msg:'Get message succeed',
            data:message.data
        })
    } catch (error){
        next(error)
    }
}


// in case multiple functions require exporting, {} is added
module.exports = {getMessage}
