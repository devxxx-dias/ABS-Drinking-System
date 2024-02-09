const validarJoi_Body = joiSchema => async (req, res, next) => {
    try {
        await joiSchema.validateAsync(req.body);
        next()
    } catch (error) {
        console.log(error);
        return res.status(400).json({ Mensagem: error.message })
    }
};

module.exports = validarJoi_Body;