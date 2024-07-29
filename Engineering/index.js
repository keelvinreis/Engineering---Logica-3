const cancelActions = new Set([
  "Cancelar1",
  "Cancelar2",
  "Cancelar3",
  "Cancelar4",
  "Cancelar5",
  "Cancelar6",
  "Cancelar7",
  "Cancelar8",
  "Cancelar9",
  "Cancelar10",
]);

const validActions = new Set([
  "AtivarAcesso1",
  "AtivarAcesso2",
  "AtivarAcesso3",
  "AtivarAcesso4",
  "AtivarAcesso5",
  "AtivarAcesso6",
  "AtivarAcesso7",
  "AtivarAcesso8",
  "AtivarAcesso9",
  "AtivarAcesso10",
]);

const intputServicoS00 = {
  channel: "NAVEGADOR",
  customer: {
    //customer: {billingProfile{}}
    type: "PF",
    socialSec: "999999999999",
    name: "JOAO DA SILVA",
    country: "Brasil",
    birthDate: "12/12/1999",
    sex: "M",
    email: "teste@teste.com",
    telephoneNumber: "9999999999",
    billingProfile: {
      accessType: "Móvel",
      id: "20",
    },
    identity: {
      type: "CPF",
      number: "9999999999",
    },
    quote: {
      msisdn: "999999999999",
      portNum: "09",
      iccid: "9999999999999999999",
      segment: "PRE_PAGO",
      action: "Cancelar8",
      ddd: "19",
      simulation: "false",
      shippingType: "mail",
      printType: "Y",
      pdv: {
        stateCode: "SP",
        channel: "STORE",
      },
      optin: {
        option: "NAO",
      },
    },
  },
};

const outPutServicoS01 = {
  status: "OK",
  customer: {
    quote: {
      newAction: "AtivarAcesso8",
      number: "02",
    },
    score: "627",
    validation: "OK",
  },
  flag: "ON",
};
const { customer, status, flag } = outPutServicoS01;
const {
  quote: { newAction, number },
  score,
  validation,
} = customer;
// Dados de outPutServicoS01

const quoteType = outPutServicoS01.customer.quote.type;

//Destructuring - macro jsonInput: {custumer{},channel}
const { customer: customerInput, channel } = intputServicoS00;

//Destructuring - customer: {billingProfile{}}
const {
  type,
  socialSec,
  name,
  country,
  birthDate,
  sex,
  email,
  telephoneNumber,
  billingProfile: { id, accessType },
} = customerInput;
//Destructuring - custumer:{quote: {optin{}}}
const {
  quote: {
    msisdn,
    portNum,
    iccid,
    segment,
    action,
    ddd,
    simulation,
    shippingType,
    printType,
    optin: { option },
  },
} = customerInput;
// Serviços a serem executados
function servico_01() {
  console.log("SERVIÇO-01");
}
function servico_02() {
  console.log("SERVIÇO-02");
}
function servico_03() {
  console.log("SERVIÇO-03");
}
function servico_04() {
  console.log("SERVIÇO-04");
}
function servico_05() {
  console.log("SERVIÇO-05");
}
function servico_06() {
  console.log("SERVIÇO-06");
}
function servico_07() {
  console.log("SERVIÇO-07");
}
function servico_08() {
  console.log("SERVIÇO-08");
}
function servico_09() {
  console.log("SERVIÇO-09");
}
function servico_10() {
  console.log("SERVIÇO-10");
}
function servico_11() {
  console.log("SERVIÇO-11");
}
function servico_12() {
  console.log("SERVIÇO-12");
}
function servico_13() {
  console.log("SERVIÇO-13");
}
function servico_14() {
  console.log("SERVIÇO-14");
}
function servico_15() {
  console.log("SERVIÇO-15");
}

// Valida a ausência e presença de "valor"
function validCampo(campo) {
  return campo !== undefined && campo !== null && campo.trim() !== "";
}

// Função para validar se "AtivarAcesso" se encontra valido
//cancelActions é acionado se o parametro é de "cancelar"
function veryAcess(params) {
  return validActions.has(params) || cancelActions.has(params);
}

function scope_2() {
  servico_01();
  if (channel === "STORE" && action !== "Cancelar8") {
    servico_02(); // Função servico_02() chamada se condição for verdadeira
  }
}

function scope_3() {
  servico_03();

  if (portNum === "01") {
    servico_04();
  }

  if (veryAcess(newAction) && validCampo(msisdn)) {
    servico_05();
  }
  // esse true não é string - [INPUT-SERVIÇO-00] customer/quote/simulation = true
  if (simulation === true && veryAcess(newAction) && action === "Cancelar8") {
    servico_06();
  }

  servico_07();

  if (validCampo(iccid) && validCampo(msisdn)) {
    servico_08();
    if (veryAcess(newAction) && validation === "OK") {
      servico_09();
    }
    if (id === "11") {
      servico_10();
    } else if (segment !== "PRE_PAGO" || action !== "Cancelar4") {
      servico_11();
    }
  }

  if (
    channel === "STORE" &&
    simulation === "false" &&
    (option === "SIM" ||
      printType === "N" ||
      (accessType !== "Móvel" && type === "PF"))
  ) {
    servico_12();
  } else {
    servico_13();
  }
  if (veryAcess(action) && shippingType === "mail") {
    servico_14();
  }

  if (!validCampo(quoteType) || quoteType !== "N") {
    servico_15();
  }
}

// Chamada da função scope_2 e scope_3
scope_2();
scope_3();
