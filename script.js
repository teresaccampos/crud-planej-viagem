let viagens = {};

function mostrarMenu(opcao) {
    const formSection = document.getElementById('form-section');
    const outputSection = document.getElementById('output-section');
    formSection.innerHTML = '';
    outputSection.innerHTML = '';

    if (opcao === 1) {
        formSection.innerHTML = `
            <h2>Adicionar Nova Viagem</h2>
            <form id="novaViagemForm">
                <input type="text" id="id_viagem" placeholder="ID da Viagem" required><br><br>
                <input type="text" id="destino" placeholder="Destino" required><br><br>
                <input type="date" id="data_partida" placeholder="Data de Partida" required><br><br>
                <input type="date" id="data_retorno" placeholder="Data de Retorno" required><br><br>
                <input type="number" id="orcamento" placeholder="Orçamento" required><br><br>
                <input type="text" id="hospedagem" placeholder="Hospedagem" required><br><br>
                <input type="text" id="passeios" placeholder="Passeios" required><br><br>
                <button type="button" onclick="adicionarViagem()">Salvar Viagem</button>
            </form>
        `;
    } else if (opcao === 2) {
        verViagens();
    } else if (opcao === 3) {
        formSection.innerHTML = `
            <h2>Atualizar Viagem</h2>
            <input type="text" id="id_atualizar" placeholder="ID da Viagem" required><br><br>
            <button type="button" onclick="atualizarViagem()">Atualizar</button>
        `;
    } else if (opcao === 4) {
        formSection.innerHTML = `
            <h2>Deletar Viagem</h2>
            <input type="text" id="id_deletar" placeholder="ID da Viagem" required><br><br>
            <button type="button" onclick="deletarViagem()">Deletar</button>
        `;
    }
}

function adicionarViagem() {
    const idViagem = document.getElementById('id_viagem').value;
    const destino = document.getElementById('destino').value;
    const dataPartida = document.getElementById('data_partida').value;
    const dataRetorno = document.getElementById('data_retorno').value;
    const orcamento = document.getElementById('orcamento').value;
    const hospedagem = document.getElementById('hospedagem').value;
    const passeios = document.getElementById('passeios').value;

    if (viagens[idViagem]) {
        alert("ID já existe! Tente novamente.");
        return;
    }

    viagens[idViagem] = {
        destino,
        dataPartida,
        dataRetorno,
        orcamento,
        hospedagem,
        passeios
    };

    alert(`Viagem para ${destino} adicionada com sucesso!`);
    document.getElementById('novaViagemForm').reset();
}

function verViagens() {
    const outputSection = document.getElementById('output-section');
    if (Object.keys(viagens).length === 0) {
        outputSection.innerHTML = "<p>Nenhuma viagem cadastrada.</p>";
    } else {
        outputSection.innerHTML = "<h2>Todas as Viagens</h2>";
        for (const [id, detalhes] of Object.entries(viagens)) {
            outputSection.innerHTML += `
                <div>
                    <h3>ID: ${id}</h3>
                    <p>Destino: ${detalhes.destino}</p>
                    <p>Data de Partida: ${detalhes.dataPartida}</p>
                    <p>Data de Retorno: ${detalhes.dataRetorno}</p>
                    <p>Orçamento: ${detalhes.orcamento}</p>
                    <p>Hospedagem: ${detalhes.hospedagem}</p>
                    <p>Passeios: ${detalhes.passeios}</p>
                </div><br>
            `;
        }
    }
}

function atualizarViagem() {
    const idViagem = document.getElementById('id_atualizar').value;

    if (!viagens[idViagem]) {
        alert("Viagem não encontrada.");
        return;
    }

    const novoDestino = prompt("Novo destino (ou pressione Enter para manter o atual):", viagens[idViagem].destino);
    const novaDataPartida = prompt("Nova data de partida (ou pressione Enter para manter a atual):", viagens[idViagem].dataPartida);
    const novaDataRetorno = prompt("Nova data de retorno (ou pressione Enter para manter a atual):", viagens[idViagem].dataRetorno);
    const novoOrcamento = prompt("Novo orçamento (ou pressione Enter para manter o atual):", viagens[idViagem].orcamento);
    const novaHospedagem = prompt("Nova hospedagem (ou pressione Enter para manter a atual):", viagens[idViagem].hospedagem);
    const novosPasseios = prompt("Novos passeios (ou pressione Enter para manter o atual):", viagens[idViagem].passeios);

    viagens[idViagem] = {
        destino: novoDestino || viagens[idViagem].destino,
        dataPartida: novaDataPartida || viagens[idViagem].dataPartida,
        dataRetorno: novaDataRetorno || viagens[idViagem].dataRetorno,
        orcamento: novoOrcamento || viagens[idViagem].orcamento,
        hospedagem: novaHospedagem || viagens[idViagem].hospedagem,
        passeios: novosPasseios || viagens[idViagem].passeios
    };

    alert(`Viagem ID ${idViagem} atualizada com sucesso!`);
}

function deletarViagem() {
    const idViagem = document.getElementById('id_deletar').value;

    if (!viagens[idViagem]) {
        alert("Viagem não encontrada.");
        return;
    }

    delete viagens[idViagem];
    alert("Viagem deletada com sucesso!");
}

function sair() {
    alert("Saindo do Planejador de Viagens.");
}
