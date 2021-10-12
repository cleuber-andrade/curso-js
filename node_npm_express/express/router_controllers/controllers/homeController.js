exports.paginaInicial = (req, res) =>{
    res.send(`
    <form action="/" method ="POST">
    Nome do cliente:<input type="text" name="qualquerCoisa">
    <button>Enviar</button>
    </form>
    `);
};