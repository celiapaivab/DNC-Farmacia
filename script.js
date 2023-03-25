let meds = [];

function addMed() {
    event.preventDefault();

    let med = {
        "name": document.getElementById('medName').value,
        "quant": document.getElementById('medQuant').value,
        "classe": document.getElementById('medClass').value,
    }

    document.getElementById('medName').value = "";
    document.getElementById('medQuant').value = "";
    document.getElementById('medClass').value = "";

    meds.push(med);

    renderTable();
}

function renderTable() {

    let table = document.getElementById('tabela');
    table.innerHTML = ` <tr>
    <th> ID </th>
    <th> Medicamento </th>
    <th> Quantidade </th>
    <th> Classe de Medicamento </th>
    <th style="background-color: rgba(62, 61, 61, 0.75);"> Remover </th>
</tr>`;

    for (let i = 0; i < meds.length; i++) {

        table.innerHTML = table.innerHTML + `<tr>
        <td> ${i} </td>
        <td> ${meds[i].name} </td>
        <td> ${meds[i].quant} </td>
        <td> ${meds[i].classe} </td>
        <td><img src="remove.svg" width="25px" height="25px" onclick="removeMed(${i})"></td>
        </td>`
    }

}

function removeMed(index) {

    meds.splice(index, 1);
    renderTable();
}