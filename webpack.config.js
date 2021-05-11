const path = require('path');

module.exports = {

    entry: './app/src/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist')
    }
}

// executado na plataforma nodejs
//todos os scripts são gerados em único bundle, o único que será carregado no navegador
// o path exige um caminho absoluto. __dirname indica o diretório atual em que o arquivo de config se encontra 
    // indica todo o caminho desde a raiz de qualquer SO até a pasta dist