const button = document.querySelector('.sort')
const buttonReturn = document.querySelector('#button_return')

const sortNumber = () => {
    const max = Math.floor(document.querySelector(".input_max").value)
    const min = Math.ceil(document.querySelector(".input_min").value)
    const quantity = document.querySelector(".input_quantity").value
    const rNome = document.querySelector("#resultadoNome")
    const rNumero = document.querySelector("#resultadoNumero")
    const containerResult = document.querySelector("#container_result")
    const containerOpacity = document.querySelector("#container_opacity")

    const numbersNames = [
        { name: 'Cristiano Alves Martins', number: 1 },
        { name: 'Antônio Carlos da silva', number: 2 },
        { name: 'Cliver Alves Martins', number: 3 },
        { name: 'Priscila de Paiva', number: 4 },
        { name: 'Anedi Alves Martins', number: 5 },
        { name: 'Valmir Antônio amorim', number: 6 },
        { name: 'Alana ayana', number: 7 },
        { name: 'Thais de souza martins', number: 8 },
        { name: 'Bruno Alves Martins', number: 9 },
        { name: 'Cristiano Alves Martins', number: 10 },
        { name: 'Danilo', number: 11 },
        { name: 'Antonio Carlos da silva', number: 12 },
        { name: 'Poliana Saraiva', number: 13 },
        { name: 'Danilo', number: 14 },
        { name: 'Bruno Alves Martins', number: 15 },
        { name: 'Nicolina', number: 16 },
        { name: 'Priscila de Paiva', number: 17 },
        { name: 'Anedi Alves Martins', number: 18 },
        { name: 'Nicolina', number: 19 },
        { name: 'Valmir Antônio amorim', number: 20 },
        { name: 'Pastora Renata', number: 21 },
        { name: 'Moisés', number: 22 },
        { name: 'Pastor Janderson', number: 23 },
        { name: 'Cliver Alves Martins', number: 24 },
        { name: 'Luciana Nunes', number: 25 },
        { name: 'Rogeria Cristina', number: 26 },
        { name: 'Priscila de Paiva', number: 27 },
        { name: 'Valmir Antônio amorim', number: 28 },
        { name: 'Luccas Arruda Marcelos', number: 29 },
        { name: 'Alice Arruda Marcelos', number: 30 },
        { name: 'Leila', number: 31 },
        { name: 'Gabriela Faria', number: 32 },
        { name: 'Beatriz', number: 33 },
        { name: 'Leila', number: 34 },
        { name: 'Valmir Antônio amorim', number: 35 },
        { name: 'Danilo', number: 36 },
        { name: 'Adilson', number: 37 },
        { name: 'Liete', number: 38 },
        { name: 'Leila', number: 39 },
        { name: 'Liete', number: 40 },
        { name: 'Mateus Almeida', number: 41 },
        { name: 'Gabriela Faria', number: 42 },
        { name: 'Elessandra', number: 43 },
        { name: 'Leila', number: 44 },
        { name: 'Claudia Márcia', number: 45 },
        { name: 'Adriano da Silva', number: 46 },
        { name: 'Léo (ex careca)', number: 47 },
        { name: 'Léo (ex careca)', number: 48 },
        { name: 'Leila', number: 49 },
        { name: 'Lauany ayana', number: 50 },
        { name: 'Luciano Nunes', number: 51 },
        { name: 'Rebecca', number: 52 },
        { name: 'Nicolina', number: 53 },
        { name: 'Nicolina', number: 54 },
        { name: 'Rebecca', number: 55 },
        { name: 'Mateus Almeida', number: 56 },
        { name: 'Léo (ex careca)', number: 57 },
        { name: 'Márcia Leandra', number: 58 },
        { name: 'Leila', number: 59 },
        { name: 'Roberto', number: 60 },
        { name: 'Márcia Leandra', number: 61 },
        { name: 'Beatriz', number: 62 },
        { name: 'Léo (Ex careca)', number: 63 },
        { name: 'Renata', number: 64 },
        { name: 'Neide', number: 65 },
        { name: 'Leila', number: 66 },
        { name: 'Márcia Gomes', number: 67 },
        { name: 'Roberto', number: 68 },
        { name: 'Maria José ', number: 69 },
        { name: 'Lucas Rafael', number: 70 },
        { name: 'Danilo', number: 71 },
        { name: 'Levi', number: 72 },
        { name: 'Maria Eduarda dudah', number: 73 },
        { name: 'Aline', number: 74 },
        { name: 'André( Maria Caetana)', number: 75 },
        { name: 'Adriano', number: 76 },
        { name: 'Francisco', number: 77 },
        { name: 'Priscila', number: 78 },
        { name: 'Maria caetana', number: 79 },
        { name: 'Ana Cláudia Souza Felix', number: 80 },
        { name: 'Alana ayana', number: 81 },
        { name: 'Lauany ayana', number: 82 },
        { name: 'Luzia Bebiana', number: 83 },
        { name: 'Gabriel Alexsander', number: 84 },
        { name: 'Ariany Emanuele', number: 85 },
        { name: 'Carlos Henrique', number: 86 },
        { name: 'Leila', number: 87 },
        { name: 'Eva', number: 88 },
        { name: 'Camila', number: 89 },
        { name: 'Leila', number: 90 },
        { name: 'Ayumi', number: 91 },
        { name: 'Márcia Borges', number: 92 },
        { name: 'Leila', number: 93 },
        { name: 'Márcia Borges', number: 94 },
        { name: 'Lucas Rafael', number: 95 },
        { name: 'Fatima', number: 96 },
        { name: 'Tainá', number: 97 },
        { name: 'Camila', number: 98 },
        { name: 'Juninho', number: 99 },
        { name: 'Moisés', number: 100 }
    ]

    const Arr = []
    if (min >= max) {
        alert("Número mínimo não pode ser maior ou igual ao máximo")
    } else {
        for (var i = 0; i < quantity; i++) {

            const result = Math.floor(Math.random() * (max - min + 1)) + min;

            Arr.push(result)
            
        }

        for (const sortedNumbers of numbersNames) {
            if (Arr == sortedNumbers.number) {
                containerOpacity.style.display = 'flex',
                    // resultado.style.color = 'rgba(127,255,0, .9)',

                    rNome.innerHTML = `Name: ${sortedNumbers.name}`
                    rNumero.innerHTML = `Número: ${sortedNumbers.number}`
                    
                    break
            } else {
                    rNome.innerHTML = `Número não encontrado`
                    rNumero.innerHTML = ``
            }

        }
    }
}

function mostrarLoader() {
    // Mostra o spinner
    document.getElementById("container_loader").style.display = "flex";

    // Simula um tempo de carregamento de 3 segundos
    setTimeout(function() {
        // Esconde o spinner
        document.getElementById("container_loader").style.display = "none";

        sortNumber()
    }, 10000);
}

const returnHome = () => {
    const containerOpacity = document.querySelector("#container_opacity")

    containerOpacity.style.display = 'none'

    recarregarPagina()
}

function recarregarPagina() {
    location.reload();
}

button.addEventListener('click', mostrarLoader, sortNumber)
buttonReturn.addEventListener('click', returnHome)