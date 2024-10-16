    const form = document.getElementById('transaction-form');
    const totalGastosElem = document.getElementById('total-gastos');
    const totalPagosElem = document.getElementById('total-pagos');
    const saldoElem = document.getElementById('saldo');

    let totalGastos = 0;
    let totalPagos = 0;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const tipo = document.getElementById('type').value;
        const monto = parseFloat(document.getElementById('amount').value);
        
        if (isNaN(monto) || monto <= 0) {
            alert('Ingresa un monto válido.');
            return;
        }

        if (tipo === 'gasto') {
            totalGastos += monto;
        } else if (tipo === 'pago') {
            totalPagos += monto;
        }

        actualizarResumen();
        form.reset(); 
    });

    function actualizarResumen() {
        totalGastosElem.textContent = `$${totalGastos.toFixed(2)}`;
        totalPagosElem.textContent = `$${totalPagos.toFixed(2)}`;
        const saldo = totalPagos - totalGastos;
        saldoElem.textContent = `$${saldo.toFixed(2)}`;
    }