const shortId = require('shortid');
const URL = require('../models/url')

async function handelGenerateShortURL(req, resp) {
    const body = req.body;
    if (!body.url) return resp.status(400).json({ error: 'Url is required' })
    const smallId = shortId();
    await URL.create({
        url: smallId,
        redirectURL: body.url,
        visitHistory: [],
    })

    return resp.json({ id: smallId });
}

async function hendleShortIdUrl(req, resp) {
    const smallId = req.params.smallId;
    const entry = await URL.findOneAndUpdate(
        { url: smallId }, // Ensure you're searching by the correct field (url, not smallId)
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now()
                }
            }
        },
        { new: true } // Ensure it returns the updated document
    );
    if (!entry) {
        return resp.status(404).json({ error: "Short URL not found" });
    }
    resp.redirect(entry.redirectURL); // Correct the redirect
}


async function handelGetAnalytics(req, resp) {
    const smallId = req.params.smallId;
    const result = await URL.findOne({ url: smallId });
    return resp.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    })
}

async function handelDeleteLink(req, resp) {
    const smallId = req.params.smallId;
    await URL.findOneAndDelete({ url: smallId });
    return resp.json({ message: "Link deleted successfully" });
}

module.exports = {
    handelGenerateShortURL,
    hendleShortIdUrl,
    handelGetAnalytics,
    handelDeleteLink,
}