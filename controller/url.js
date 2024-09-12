const shortid = require('shortid');
const URL = require('../models/url')

async function handelGenerateShoerURL(req, resp) {
    const body = req.body;
    if (!body.url) return resp.status(400).json({ error: 'Url is required' })
    const smallId = shortid();
    await URL.create({
        url: smallId,
        redirectURL: body.url,
        visitHistory: [],
    })

    return resp.json({ id: smallId });
}


async function hendleShortidurl(req, resp) {
    const smallId = req.params.smallId;
    const entry = await URL.findOne({
        smallId
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now()
            }
        }
    })
    resp.redirectURL(entry.redirectURL)
}


module.exports = {
    handelGenerateShoerURL,
    hendleShortidurl,
}