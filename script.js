document.querySelector("#cep").addEventListener("blur", buscar)

function buscar() {
    let cep = document.querySelector("#cep").value
    let url = `https://viacep.com.br/ws/${cep}/json/`
    console.log(url)
    fetch(url).then(response => response.json())
        .then(preencherDados)
}

function preencherDados(json) {
    console.log(json)
    document.querySelector("#uf").value = json.uf
    document.querySelector("#localidade").value = json.localidade
    document.querySelector("#bairro").value = json.bairro
    document.querySelector("#logradouro").value = json.logradouro
}