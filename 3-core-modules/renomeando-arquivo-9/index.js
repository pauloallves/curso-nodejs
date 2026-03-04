const fs = require('fs');

fs.rename('arquivo.txt', 'newarquivo.txt', function(err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Arquio renomeado!');
    }
});