import GeraCPF from '../src/modules/GeraCPF';

import '../src/assets/style.css';

(function(){
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpfGerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
})();