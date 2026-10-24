const categoryInfo = {
  clima: { label: "Clima", description: "Temperatura e estações do ano" },
  cultura: { label: "Cultura e costumes", description: "Tradições, ritmo social e diversidade" },
  linguas: { label: "Línguas", description: "Comunicação e facilidade de integração" },
  economia: { label: "Economia e custo de vida", description: "Preços, impostos e poder de compra" },
  trabalho: { label: "Trabalho e carreira", description: "Mercado, equilíbrio e oportunidades" },
  estilo: { label: "Estilo de vida e ambiente", description: "Natureza, lazer e vida cotidiana" },
  seguranca: { label: "Segurança e serviços públicos", description: "Saúde, transporte e bem-estar" },
  imigracao: { label: "Imigração", description: "Vistos, residência e acolhimento" }
};

const questionsByCategory = {
  clima: [
    ["clima_frio", "Você gostaria de viver um inverno longo, frio e com neve?"],
    ["clima_solar", "Ter muitos dias ensolarados durante o ano é essencial para você?"],
    ["clima_suave", "Você prefere temperaturas amenas, sem extremos de calor ou frio?"],
    ["clima_quatro_estacoes", "Vivenciar quatro estações bem marcadas parece interessante?"],
    ["clima_chuva", "Você se adapta bem a um lugar com bastante chuva ao longo do ano?"],
    ["clima_calor", "Você se sente melhor em um clima quente na maior parte do tempo?"],
    ["clima_natureza", "Ter paisagens naturais moldadas por um clima único é importante?"],
    ["clima_ar_livre", "Você quer que o clima permita atividades ao ar livre com frequência?"]
  ],
  cultura: [
    ["cultura_diversidade", "Conviver com pessoas de muitas origens e culturas é importante?"],
    ["cultura_tradicao", "Você gosta de manter contato com tradições e costumes locais?"],
    ["cultura_social", "Ter uma vida social movimentada e encontros frequentes combina com você?"],
    ["cultura_privacidade", "Você valoriza uma cultura que respeite bastante a privacidade?"],
    ["cultura_comida", "Explorar uma cena gastronômica variada seria um grande atrativo?"],
    ["cultura_arte", "Ter acesso fácil a museus, shows e eventos culturais pesa na escolha?"],
    ["cultura_informal", "Você prefere relações sociais mais informais e descontraídas?"],
    ["cultura_comunidade", "Sentir um forte espírito de comunidade no bairro é importante?"]
  ],
  linguas: [
    ["lingua_ingles", "Você quer conseguir se virar usando inglês no dia a dia?"],
    ["lingua_aprender", "Você teria disposição para aprender uma nova língua?"],
    ["lingua_portugues", "Poder usar português com frequência faria diferença para você?"],
    ["lingua_multilingue", "Você gostaria de viver em um ambiente naturalmente multilíngue?"],
    ["lingua_facil", "É importante que a língua local seja relativamente fácil de aprender?"],
    ["lingua_trabalho", "Você prioriza oportunidades profissionais em inglês?"],
    ["lingua_integracao", "Aprender a língua local para se integrar seria parte do seu plano?"],
    ["lingua_comunicacao", "Você prefere um destino em que a comunicação inicial seja simples?"]
  ],
  economia: [
    ["economia_custo", "Manter um custo de vida baixo é uma prioridade para você?"],
    ["economia_salario", "Você busca um lugar com salários médios mais altos?"],
    ["economia_impostos", "Aceitaria impostos mais altos em troca de bons serviços públicos?"],
    ["economia_habitacao", "Encontrar moradia acessível é um fator decisivo?"],
    ["economia_estabilidade", "Você valoriza uma economia estável e previsível?"],
    ["economia_consumo", "Ter boas opções de compras e serviços pesa na decisão?"],
    ["economia_investir", "Você pensa em construir patrimônio ou investir no novo país?"],
    ["economia_crescimento", "Você se interessa por economias em forte crescimento?"]
  ],
  trabalho: [
    ["trabalho_equilibrio", "Ter equilíbrio entre trabalho e vida pessoal é indispensável?"],
    ["trabalho_carreira", "Você prioriza um mercado com muitas oportunidades de carreira?"],
    ["trabalho_remoto", "Poder trabalhar remotamente com facilidade é importante?"],
    ["trabalho_inovacao", "Você gostaria de estar perto de empresas inovadoras e tecnologia?"],
    ["trabalho_direitos", "Direitos trabalhistas e férias generosas pesam na escolha?"],
    ["trabalho_empreender", "Você considera empreender ou abrir um negócio no destino?"],
    ["trabalho_flexibilidade", "Você prefere ambientes de trabalho flexíveis e horizontais?"],
    ["trabalho_qualificacao", "Você busca boas oportunidades para profissionais qualificados?"]
  ],
  estilo: [
    ["estilo_natureza", "Ter trilhas, parques e natureza por perto faz diferença?"],
    ["estilo_cidade", "Você prefere morar em uma cidade grande, viva e conectada?"],
    ["estilo_pe", "Gostaria de fazer boa parte das tarefas caminhando ou de bicicleta?"],
    ["estilo_transporte", "Um transporte público eficiente é essencial para seu estilo de vida?"],
    ["estilo_praia", "Morar perto de praias ou do mar é um sonho importante?"],
    ["estilo_sustentavel", "Você quer viver em um lugar com forte compromisso ambiental?"],
    ["estilo_ritmo", "Você prefere um ritmo de vida mais tranquilo e menos acelerado?"],
    ["estilo_lazer", "Ter muitas opções de lazer e entretenimento é uma prioridade?"]
  ],
  seguranca: [
    ["seguranca_crime", "Sentir-se seguro ao andar sozinho à noite é muito importante?"],
    ["seguranca_saude", "Ter um sistema de saúde público de qualidade é essencial?"],
    ["seguranca_transporte", "Você espera contar com transporte público seguro e confiável?"],
    ["seguranca_educacao", "A qualidade das escolas públicas pesa na sua escolha?"],
    ["seguranca_internet", "Você valoriza serviços digitais públicos simples e eficientes?"],
    ["seguranca_inclusao", "Políticas de inclusão e respeito à diversidade são importantes?"],
    ["seguranca_emergencia", "Ter uma boa estrutura para situações de emergência tranquiliza você?"],
    ["seguranca_burocracia", "Você prefere lidar com pouca burocracia no cotidiano?"]
  ],
  imigracao: [
    ["imigracao_visto", "Você prefere um país com caminhos claros para obter visto e residência?"],
    ["imigracao_acolhimento", "Sentir que imigrantes são bem acolhidos é essencial?"],
    ["imigracao_permanencia", "Você busca uma rota realista para residência permanente?"],
    ["imigracao_familia", "Poder levar ou reunir sua família com facilidade é importante?"],
    ["imigracao_trabalho", "Você precisa de opções de visto ligadas a uma oferta de trabalho?"],
    ["imigracao_estudo", "Você consideraria estudar para facilitar a entrada no país?"],
    ["imigracao_comunidade", "Ter uma comunidade brasileira ou internacional por perto ajudaria?"],
    ["imigracao_empreender", "Você gostaria de ter um caminho de imigração para empreendedores?"]
  ]
};

const questions = Object.entries(questionsByCategory).flatMap(([category, items]) =>
  items.map(([trait, text]) => ({ category, trait, text }))
);

window.quizData = { categoryInfo, questions };
