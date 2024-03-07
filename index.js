let entrada = '';
while (true) {
    entrada = prompt('Digite algo ou "sair" para encerrar o programa:');

    if (entrada === 'sair' || entrada === 'SAIR') {
        break; 
    }

    console.log(`Você digitou ${entrada}`);
}

console.log('Programa encerrado.');
