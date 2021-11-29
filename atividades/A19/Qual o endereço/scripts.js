const btn = document.querySelector('[type="button"]')
const inputCEP = document.querySelector('[name="cep"]')
const inputEnd = document.querySelector('[name="end"]')
const inputDistrict = document.querySelector('[name="district"]')
const inputCity = document.querySelector('[name="city"]')
const inputUf = document.querySelector('[name="uf"]')

btn.addEventListener('click', event => {
    let cep = inputCEP.value
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resp => resp.json())
        .then(dadosCEP => {
            inputEnd.value = dadosCEP.logradouro
            inputDistrict.value = dadosCEP.bairro
            inputCity.value = dadosCEP.localidade
            inputUf.value = dadosCEP.uf
        })
        .catch(reject => console.log(reject))
})

const masks = {
    cep(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1')
    },
}

document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)
    }, false)
})