const aiService = require("../services/ai.service")


module.exports.getReview = async (req, res) => {

    const code = req.body.code;

    if (!code) {
        return res.status(400).send("Prompt is required");
    }

    try {
        const response = await aiService(code);
        res.send(response);
    } catch (error) {
        console.error('AI review failed:', error);
        const statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: 'Failed to generate review',
            error: process.env.NODE_ENV === 'production' ? undefined : String(error?.message || error)
        });
    }

}