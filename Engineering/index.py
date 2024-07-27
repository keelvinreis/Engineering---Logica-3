# Definindo os conjuntos de ações
cancel_actions = {
    "Cancelar1", "Cancelar2", "Cancelar3", "Cancelar4", "Cancelar5",
    "Cancelar6", "Cancelar7", "Cancelar8", "Cancelar9", "Cancelar10"
}

valid_actions = {
    "AtivarAcesso1", "AtivarAcesso2", "AtivarAcesso3", "AtivarAcesso4",
    "AtivarAcesso5", "AtivarAcesso6", "AtivarAcesso7", "AtivarAcesso8",
    "AtivarAcesso9", "AtivarAcesso10"
}

# Dados de inputServicoS00
input_servico_00 = {
    "channel": "NAVEGADOR",
    "customer": {
        "type": "PF",
        "socialSec": "999999999999",
        "name": "JOAO DA SILVA",
        "country": "Brasil",
        "birthDate": "12/12/1999",
        "sex": "M",
        "email": "teste@teste.com",
        "telephoneNumber": "9999999999",
        "billingProfile": {
            "accessType": "Móvel",
            "id": "20"
        },
        "identity": {
            "type": "CPF",
            "number": "9999999999"
        },
        "quote": {
            "msisdn": "999999999999",
            "portNum": "09",
            "iccid": "9999999999999999999",
            "segment": "PRE_PAGO",
            "action": "Cancelar8",
            "ddd": "19",
            "simulation": "false",
            "shippingType": "mail",
            "printType": "Y",
            "pdv": {
                "stateCode": "SP",
                "channel": "STORE"
            },
            "optin": {
                "option": "NAO"
            }
        }
    }
}

# Dados de outPutServicoS01
output_servico_01 = {
    "status": "OK",
    "customer": {
        "quote": {
            "newAction": "AtivarAcesso8",
            "number": "02"
        },
        "score": "627",
        "validation": "OK"
    },
    "flag": "ON"
}

# Extraindo dados de output_servico_01
new_action = output_servico_01["customer"]["quote"]["newAction"]
customer_validation = output_servico_01["customer"]["validation"]
quote_type = output_servico_01["customer"]["quote"].get("type")

# Extraindo dados de input_servico_00
quote = input_servico_00["customer"]["quote"]
channel = quote["pdv"]["channel"]
action = quote["action"]
port_num = quote["portNum"]
msisdn = quote["msisdn"]
simulation = quote["simulation"] == "true"
iccid = quote["iccid"]
id_profile = input_servico_00["customer"]["billingProfile"]["id"]
segment = quote["segment"]
option = quote["optin"]["option"]
print_type = quote["printType"]
access_type = input_servico_00["customer"]["billingProfile"]["accessType"]
customer_type = input_servico_00["customer"]["type"]
shipping_type = quote["shippingType"]

# Definindo funções de serviços
def servico_01():
    print("SERVIÇO-01")

def servico_02():
    print("SERVIÇO-02")

def servico_03():
    print("SERVIÇO-03")

def servico_04():
    print("SERVIÇO-04")

def servico_05():
    print("SERVIÇO-05")

def servico_06():
    print("SERVIÇO-06")

def servico_07():
    print("SERVIÇO-07")

def servico_08():
    print("SERVIÇO-08")

def servico_09():
    print("SERVIÇO-09")

def servico_10():
    print("SERVIÇO-10")

def servico_11():
    print("SERVIÇO-11")

def servico_12():
    print("SERVIÇO-12")

def servico_13():
    print("SERVIÇO-13")

def servico_14():
    print("SERVIÇO-14")

def servico_15():
    print("SERVIÇO-15")

# Valida a ausência e presença
def valid_campo(campo):
    return campo is not None and campo.strip() != ""

# Função para validar se a ação está entre as válidas ou canceladas
def very_acess(params):
    return params in valid_actions or params in cancel_actions

# Função scope_2 que executa os serviços
def scope_2():
    servico_01()
    if channel == "STORE" and action != "Cancelar8":
        servico_02() # Função servico_02() chamada se condição for verdadeira

# Função scope_3 que executa os serviços
def scope_3():
    servico_03()

    if port_num == "01":
        servico_04()

    if very_acess(new_action) and valid_campo(msisdn):
        servico_05()

    # esse true não é string - [INPUT-SERVIÇO-00] customer/quote/simulation = true
    if simulation and very_acess(new_action) and action == "Cancelar8":
        servico_06()

    servico_07()

    if valid_campo(iccid) and valid_campo(msisdn):
        servico_08()
        if very_acess(new_action) and customer_validation == "OK":
            servico_09()
        if id_profile == "11":
            servico_10()
        elif segment != "PRE_PAGO" or action != "Cancelar4":
            servico_11()

    if (channel == "STORE" and simulation == "false" and
        (option == "SIM" or print_type == "N" or
         (access_type != "Móvel" and customer_type == "PF"))):
        servico_12()
    else:
        servico_13()

    if very_acess(action) and shipping_type == "mail":
        servico_14()

    if not valid_campo(quote_type) or quote_type != "N":
        servico_15()

# Chamada das funções scope_2 e scope_3
scope_2()
scope_3()
