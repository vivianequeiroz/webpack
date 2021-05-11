const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    entry: './app/src/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist')
    },
    plugins: [new HtmlWebpackPlugin({
        template: './app/src/app.html',
        filename: 'app.html'
    })]
}

// executado na plataforma nodejs
//todos os scripts são gerados em único bundle, o único que será carregado no navegador
// o path exige um caminho absoluto. __dirname indica o diretório atual em que o arquivo de config se encontra 
    // indica todo o caminho desde a raiz de qualquer SO até a pasta dist

//wepack html plugin usado para gerar o html da página dinamicamente em dist
//HtmlWebpackPlugin precisa ser instanciado - pois assim poderá receber parâmetros que permitem alterar algum padrão na criação de arquivos, ex: index.html por app.html 

// em app.js não precisa haver importação do script, pois o que será executado em ambiente dev será o script de bundle.js