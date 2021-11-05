const main = document.querySelector('main');
const inputs = document.getElementsByTagName('input');
const textarea = document.getElementById('curriculum-summary');
const selectState = document.getElementById("state");
const startDate = document.getElementById('start-date');
const submitButton = document.getElementById("submit");
const clearButton = document.getElementById("clear");
const states = [
  {
    state: "Acre",
    abbrev: "ac",
  },

  {
    state: "Alagoas",
    abbrev: "al",
  },

  {
    state: "Amapá",
    abbrev: "ap",
  },

  {
    state: "Amazonas",
    abbrev: "am",
  },

  {
    state: "Bahia",
    abbrev: "ba",
  },

  {
    state: "Ceará",
    abbrev: "ce",
  },

  {
    state: "Espírito Santo",
    abbrev: "es",
  },

  {
    state: "Goiás",
    abbrev: "go",
  },

  {
    state: "Maranhão",
    abbrev: "ma",
  },

  {
    state: "Mato Grosso",
    abbrev: "mt",
  },

  {
    state: "Mato Grosso do Sul",
    abbrev: "ms",
  },

  {
    state: "Minas Gerais",
    abbrev: "mg",
  },

  {
    state: "Pará",
    abbrev: "pa",
  },

  {
    state: "Paraíba",
    abbrev: "pb",
  },

  {
    state: "Paraná",
    abbrev: "pr",
  },

  {
    state: "Pernambuco",
    abbrev: "pe",
  },

  {
    state: "Piauí",
    abbrev: "pi",
  },

  {
    state: "Rio de Janeiro",
    abbrev: "rj",
  },

  {
    state: "Rio Grande do Norte",
    abbrev: "rn",
  },

  {
    state: "Rio Grande do Sul",
    abbrev: "rs",
  },

  {
    state: "Rondônia",
    abbrev: "ro",
  },

  {
    state: "Roraima",
    abbrev: "rr",
  },

  {
    state: "Santa Catarina",
    abbrev: "sc",
  },

  {
    state: "São Paulo",
    abbrev: "sp",
  },

  {
    state: "Sergipe",
    abbrev: "se",
  },

  {
    state: "Tocantins",
    abbrev: "to",
  },

  {
    state: "Distrito Federal",
    abbrev: "df",
  },
];

for (let i = 0; i < states.length; i += 1) {
  const state = states[i];
  const option = document.createElement("option");
  option.id = state.abbrev;
  option.name = state.abbrev;
  option.value = state.abbrev;
  option.innerText = state.state;

  selectState.appendChild(option);
}

function inputsValidation() {
  let valid = true;
  for (let i = 0; i < inputs.length; i += 1) {
   if (inputs[i].value === '') {
      valid = false;
    }
  }

  if (textarea.value === '' || selectState.value === 'select-your-state') {
    valid = false;
  }

  return valid;
};

function lengthValidation() {
  let valid = true;

  for (let i = 0; i < inputs.length; i += 1) {
    const maxInputLength = inputs[i].maxLength;
    const inputLength = inputs[i].length;

    if (maxInputLength !== -1) {
      if (maxInputLength < inputLength) {
        valid = false;
      }
    }
  }

  return valid;
};

function dateValidation() {
  let validDate = true;
  const ano = startDate.value.split('-')[0];
  const mes = startDate.value.split('-')[1];
  const dia = startDate.value.split('-')[2];

  if (dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano < 0) {
    validDate = false;
    alert(`A data ${dia}/${mes}/${ano} é inválida. Por favor, digite uma data válida!`);
  }

  return validDate;
}

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const validInput = inputsValidation();
  const validLength = lengthValidation();
  const validDate = dateValidation();
  const div = document.createElement('div');
  if (validInput === true && validLength === true && validDate === true) {
    div.id="curriculum";

    for (let i = 0; i < inputs.length; i += 0 ) {
      div.innerText = inputs[i].value;
    }
    main.appendChild(div);
  }
});

clearButton.addEventListener('click', () => {
  for (let i = 0; i < inputs.length; i += 1) {
    inputs[i].value = '';
  }

  textarea.value = '';
})

