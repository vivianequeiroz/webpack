module.exports = {

    entry: './app/src/js/app.js',
    output: {
        filename: 'bundle.js',
        path: './app/dist'
    }
}

// executado na plataforma node
//todos os scripts são gerados em único bundle, o único que será carregado no navegador