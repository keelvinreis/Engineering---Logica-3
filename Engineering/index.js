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

// Dados de outPutServicoS01
const newAction = outPutServicoS01.customer.quote.newAction;
const CustumerValidation = outPutServicoS01.customer.validation;
const quoteType = outPutServicoS01.customer.quote.type;

// Dados de intputServicoS00
const channel = intputServicoS00.customer.quote.pdv.channel;
const action = intputServicoS00.customer.quote.action;
const portNum = intputServicoS00.customer.quote.portNum;
const msisdn = intputServicoS00.customer.quote.msisdn;
const simulation = intputServicoS00.customer.quote.simulation;
const iccid = intputServicoS00.customer.quote.iccid;
const idProfile = intputServicoS00.customer.billingProfile.id;
const segment = intputServicoS00.customer.quote.segment;
const option = intputServicoS00.customer.quote.optin.option;
const printType = intputServicoS00.customer.quote.printType;
const accessType = intputServicoS00.customer.billingProfile.accessType;
const CustumerType = intputServicoS00.customer.type;
const shippingType = intputServicoS00.customer.quote.shippingType;

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

// Valida a ausência e presença
function validCampo(campo) {
  return campo !== undefined && campo !== null && campo.trim() !== "";
}

// Função para validar se a ação está entre as válidas ou canceladas
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
    if (veryAcess(newAction) && CustumerValidation === "OK") {
      servico_09();
    }
    if (idProfile === "11") {
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
      (accessType !== "Móvel" && CustumerType === "PF"))
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
