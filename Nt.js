function gerarNotaFiscal() {
    // Capturar valores dos campos
    const valorVenda = parseFloat(document.getElementById("valorVenda").value);
    const itens = document.getElementById("itens").value.trim();
    const irpf = parseFloat(document.getElementById("irpf").value) || 0;
    const pis = parseFloat(document.getElementById("pis").value) || 0;
    const cofins = parseFloat(document.getElementById("cofins").value) || 0;
    const inss = parseFloat(document.getElementById("inss").value) || 0;
    const issqn = parseFloat(document.getElementById("issqn").value) || 0;

    // Validações
    if (isNaN(valorVenda) || valorVenda <= 0) {
        alert("Por favor, insira um valor válido para a venda.");
        return;
    }
    if (!itens) {
        alert("Por favor, insira os itens vendidos.");
        return;
    }

    // Cálculo dos impostos
    const impostoIRPF = (valorVenda * irpf) / 100;
    const impostoPIS = (valorVenda * pis) / 100;
    const impostoCOFINS = (valorVenda * cofins) / 100;
    const impostoINSS = (valorVenda * inss) / 100;
    const impostoISSQN = (valorVenda * issqn) / 100;
    const totalImpostos = impostoIRPF + impostoPIS + impostoCOFINS + impostoINSS + impostoISSQN;

    // Valor líquido
    const valorLiquido = valorVenda - totalImpostos;

    // Exibir a Nota Fiscal
    const notaFiscalDiv = document.getElementById("notaFiscal");
    notaFiscalDiv.style.display = "block";
    notaFiscalDiv.innerHTML = `
        <h2>Nota Fiscal de Serviço</h2>
        <p><strong>Valor da Venda:</strong> R$ ${valorVenda.toFixed(2)}</p>
        <p><strong>Itens Vendidos:</strong> ${itens}</p>
        <h3>Impostos Calculados:</h3>
        <table>
            <tr><td>IRPF:</td><td>R$ ${impostoIRPF.toFixed(2)}</td></tr>
            <tr><td>PIS:</td><td>R$ ${impostoPIS.toFixed(2)}</td></tr>
            <tr><td>COFINS:</td><td>R$ ${impostoCOFINS.toFixed(2)}</td></tr>
            <tr><td>INSS:</td><td>R$ ${impostoINSS.toFixed(2)}</td></tr>
            <tr><td>ISSQN:</td><td>R$ ${impostoISSQN.toFixed(2)}</td></tr>
        </table>
        <p><strong>Total de Impostos:</strong> R$ ${totalImpostos.toFixed(2)}</p>
        <p><strong>Valor Líquido:</strong> R$ ${valorLiquido.toFixed(2)}</p>
    `;
}
