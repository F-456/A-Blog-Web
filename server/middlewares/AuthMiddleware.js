const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
    const accessToken = req.header("accessToken");
    if (!accessToken) return res.json({ error: "You have to login to perform the action" });

    try {
        const validToken = verify(accessToken, "somesecret");
        // if token is valid and ok to proceed next
        if (validToken) {
            return next();
        };
    } catch (err) {
        return res.json({ error: err });
    };
};


module.exports = { validateToken };