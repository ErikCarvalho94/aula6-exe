let entrada = '';
while (entrada.toLowerCase() !== 'sair') {
    entrada = prompt('Digite algo ou "sair" para encerrar o programa:');

    if (entrada.toLowerCase() !== 'sair') {
        console.log(`Você digitou ${entrada}`);
    }
}

console.log('Programa encerrado.');
