const traitCategories = {
    clima: "clima_",
    cultura: "cultura_",
    linguas: "lingua_",
    economia: "economia_",
    trabalho: "trabalho_",
    estilo: "estilo_",
    seguranca: "seguranca_",
    imigracao: "imigracao_"
};

const categoryOrder = Object.keys(traitCategories);
const allTraits = window.quizData.questions.map(({ trait }) => trait);

function createTraits(categories) {
    const values = categoryOrder.flatMap((category) => categories[category]);

    return Object.fromEntries(allTraits.map((trait, index) => [trait, values[index]]));
}

const detailedCountries = [
    {
        id: "canada",
        name: "Canadá",
        flag: "🇨🇦",
        description: "Um país diverso e acolhedor, com excelente qualidade de vida. Oferece natureza impressionante, segurança e boas oportunidades para profissionais qualificados. O inverno é rigoroso em boa parte do território.",
        strengths: ["Segurança e serviços públicos","Mercado para profissionais qualificados","Natureza e diversidade"],
        attention: ["Custo de moradia nas grandes cidades","Invernos intensos"],
        cities: ["Toronto","Vancouver","Montreal"],
        traits: createTraits({
            clima: [5,2,2,5,3,1,5,4],
            cultura: [5,3,3,4,4,4,3,4],
            linguas: [5,3,2,4,3,5,4,4],
            economia: [2,5,4,1,5,4,4,4],
            trabalho: [4,5,4,4,4,4,4,5],
            estilo: [5,4,3,4,2,4,3,4],
            seguranca: [4,4,4,5,4,5,5,3],
            imigracao: [5,4,5,4,5,4,4,4]
        })
    },
    {
        id: "portugal",
        name: "Portugal",
        flag: "🇵🇹",
        description: "Um destino familiar, ensolarado e com ritmo de vida acolhedor. A língua facilita a adaptação e há muita história, comida e vida ao ar livre. Salários e moradia podem exigir planejamento.",
        strengths: ["Adaptação cultural e idioma","Clima e vida ao ar livre","Segurança"],
        attention: ["Salários mais baixos","Aluguéis em alta"],
        cities: ["Lisboa","Porto","Braga"],
        traits: createTraits({
            clima: [1,5,5,3,3,4,4,5],
            cultura: [4,5,4,3,5,4,5,4],
            linguas: [3,2,5,3,5,3,5,5],
            economia: [3,2,3,2,4,3,3,3],
            trabalho: [4,3,4,3,4,3,3,3],
            estilo: [4,4,5,4,5,3,5,4],
            seguranca: [4,4,4,3,4,4,4,3],
            imigracao: [4,5,4,5,3,4,5,3]
        })
    },
    {
        id: "australia",
        name: "Austrália",
        flag: "🇦🇺",
        description: "Para quem procura sol, espaço e um mercado profissional dinâmico. As cidades combinam praias, natureza e estrutura moderna. A distância e o custo de vida são pontos para considerar.",
        strengths: ["Mercado de trabalho","Praias e clima","Qualidade urbana"],
        attention: ["Distância da família","Moradia cara"],
        cities: ["Melbourne","Sydney","Brisbane"],
        traits: createTraits({
            clima: [2,5,4,3,2,5,5,5],
            cultura: [5,2,4,3,4,4,5,3],
            linguas: [5,3,2,4,3,5,4,4],
            economia: [2,5,3,2,5,4,4,4],
            trabalho: [4,5,4,4,4,4,4,5],
            estilo: [5,4,3,4,5,4,3,5],
            seguranca: [4,4,4,4,4,5,4,3],
            imigracao: [4,4,4,3,5,5,4,4]
        })
    },
    {
        id: "alemanha",
        name: "Alemanha",
        flag: "🇩🇪",
        description: "Uma escolha sólida para quem busca estabilidade, carreira e serviços eficientes. Tem transporte excelente, cultura rica e forte proteção trabalhista. Aprender alemão amplia muito as possibilidades.",
        strengths: ["Estabilidade econômica","Carreira e direitos","Transporte e infraestrutura"],
        attention: ["Idioma necessário","Burocracia inicial"],
        cities: ["Berlim","Munique","Hamburgo"],
        traits: createTraits({
            clima: [4,2,3,5,4,2,4,4],
            cultura: [4,4,3,5,3,5,2,3],
            linguas: [4,5,1,4,2,4,4,3],
            economia: [2,5,5,2,5,4,4,3],
            trabalho: [5,5,4,4,5,3,3,5],
            estilo: [4,4,4,5,1,5,3,4],
            seguranca: [4,5,5,4,3,4,5,2],
            imigracao: [4,3,4,4,5,5,3,4]
        })
    },
    {
        id: "espanha",
        name: "Espanha",
        flag: "🇪🇸",
        description: "Clima ensolarado, vida social intensa e uma cultura que valoriza o tempo livre. É uma opção vibrante para quem gosta de cidades caminháveis, gastronomia e proximidade com o mar.",
        strengths: ["Vida social e cultura","Clima ensolarado","Cidades caminháveis"],
        attention: ["Mercado de trabalho competitivo","Renda variável por região"],
        cities: ["Valência","Madrid","Barcelona"],
        traits: createTraits({
            clima: [1,5,4,3,2,4,4,5],
            cultura: [4,5,5,2,5,5,5,5],
            linguas: [3,4,3,4,4,3,5,4],
            economia: [3,3,3,3,4,4,3,3],
            trabalho: [5,3,4,3,4,3,4,3],
            estilo: [4,5,5,4,5,3,4,5],
            seguranca: [3,4,4,3,4,4,4,3],
            imigracao: [4,4,4,5,3,4,4,3]
        })
    },
    {
        id: "paises_baixos",
        name: "Países Baixos",
        flag: "🇳🇱",
        description: "Um país progressista, conectado e excelente para equilibrar carreira e vida pessoal. A mobilidade de bicicleta, o inglês e a inovação atraem pessoas do mundo todo.",
        strengths: ["Equilíbrio e flexibilidade","Mobilidade urbana","Inovação"],
        attention: ["Moradia disputada","Clima chuvoso"],
        cities: ["Amsterdã","Utrecht","Roterdã"],
        traits: createTraits({
            clima: [3,2,4,4,5,2,3,3],
            cultura: [5,3,4,4,3,4,5,3],
            linguas: [5,3,1,5,3,5,4,5],
            economia: [2,5,4,1,5,4,4,4],
            trabalho: [5,5,4,5,5,4,5,5],
            estilo: [3,5,5,5,2,5,3,5],
            seguranca: [4,4,5,4,5,5,4,3],
            imigracao: [3,4,3,3,4,4,4,5]
        })
    },
    {
        id: "irlanda",
        name: "Irlanda",
        flag: "🇮🇪",
        description: "Uma sociedade calorosa e internacional, com forte mercado de tecnologia e inglês no cotidiano. Oferece belas paisagens e boas conexões profissionais, embora a moradia seja um desafio.",
        strengths: ["Tecnologia e carreira","Idioma inglês","Comunidade acolhedora"],
        attention: ["Crise de moradia","Chuva frequente"],
        cities: ["Dublin","Cork","Galway"],
        traits: createTraits({
            clima: [3,1,4,3,5,1,5,3],
            cultura: [5,4,5,3,3,4,5,5],
            linguas: [5,3,2,4,3,5,5,5],
            economia: [1,5,3,1,4,4,4,4],
            trabalho: [4,5,4,5,4,4,4,5],
            estilo: [5,3,4,3,2,4,4,4],
            seguranca: [4,3,3,4,4,5,4,3],
            imigracao: [3,4,3,3,5,5,4,4]
        })
    },
    {
        id: "japao",
        name: "Japão",
        flag: "🇯🇵",
        description: "Uma experiência única de segurança, organização e cultura milenar. A infraestrutura é extraordinária e as cidades oferecem possibilidades infinitas. A língua e a adaptação cultural pedem dedicação.",
        strengths: ["Segurança e transporte","Cultura única","Infraestrutura"],
        attention: ["Barreira linguística","Ritmo de trabalho"],
        cities: ["Tóquio","Osaka","Fukuoka"],
        traits: createTraits({
            clima: [3,3,3,5,4,4,4,4],
            cultura: [2,5,3,4,5,5,2,4],
            linguas: [2,5,1,2,1,2,4,2],
            economia: [3,4,3,3,5,5,3,2],
            trabalho: [2,4,3,5,3,3,2,4],
            estilo: [4,5,5,5,3,3,2,5],
            seguranca: [5,4,5,4,4,2,5,2],
            imigracao: [2,2,2,2,3,4,2,3]
        })
    },
    {
        id: "nova_zelandia",
        name: "Nova Zelândia",
        flag: "🇳🇿",
        description: "Ideal para quem quer desacelerar sem abrir mão de estrutura e segurança. A natureza está sempre por perto, com cultura inclusiva e boa qualidade de vida.",
        strengths: ["Natureza exuberante","Equilíbrio e segurança","Comunidade acolhedora"],
        attention: ["Mercado menor","Distância geográfica"],
        cities: ["Auckland","Wellington","Christchurch"],
        traits: createTraits({
            clima: [3,3,5,4,3,3,5,5],
            cultura: [4,4,4,3,3,4,5,4],
            linguas: [5,3,2,3,3,4,4,4],
            economia: [2,4,4,2,4,3,3,3],
            trabalho: [5,3,4,3,4,4,4,4],
            estilo: [5,3,3,3,4,5,5,4],
            seguranca: [4,4,3,4,4,5,4,3],
            imigracao: [4,4,4,3,4,4,3,4]
        })
    },
    {
        id: "suecia",
        name: "Suécia",
        flag: "🇸🇪",
        description: "Uma referência em equilíbrio, sustentabilidade e inovação. É uma ótima escolha para quem aprecia organização, natureza e políticas sociais abrangentes, com atenção ao inverno escuro.",
        strengths: ["Equilíbrio de vida","Sustentabilidade","Inovação"],
        attention: ["Inverno escuro","Impostos e custo"],
        cities: ["Estocolmo","Gotemburgo","Malmö"],
        traits: createTraits({
            clima: [5,1,2,5,3,1,5,4],
            cultura: [4,3,2,5,3,4,3,3],
            linguas: [5,3,1,4,3,5,3,4],
            economia: [1,5,5,2,5,4,4,3],
            trabalho: [5,4,4,5,5,4,5,5],
            estilo: [5,3,4,4,2,5,3,4],
            seguranca: [4,5,4,5,5,5,5,3],
            imigracao: [3,3,3,3,4,4,3,4]
        })
    },
    {
        id: "franca",
        name: "França",
        flag: "🇫🇷",
        description: "Cultura, gastronomia e uma rede de serviços públicos robusta em um só lugar. Oferece cidades diversas e excelente acesso à Europa, com burocracia e idioma como parte da adaptação.",
        strengths: ["Cultura e gastronomia","Serviços públicos","Mobilidade pela Europa"],
        attention: ["Burocracia","Idioma no cotidiano"],
        cities: ["Lyon","Paris","Bordeaux"],
        traits: createTraits({
            clima: [3,3,4,4,3,3,4,4],
            cultura: [5,5,4,3,5,5,3,4],
            linguas: [3,5,2,4,3,3,4,3],
            economia: [2,4,5,2,4,4,3,3],
            trabalho: [5,4,4,4,5,3,3,4],
            estilo: [4,5,4,5,3,4,3,5],
            seguranca: [3,5,4,4,4,4,5,2],
            imigracao: [4,3,4,4,4,5,4,3]
        })
    }
];

const additionalCountries = [
    {
        code: "af", name: "Afeganistão", capital: "Cabul", region: "asia"
    },
    {
        code: "za", name: "África do Sul", capital: "Pretória", region: "africa"
    },
    {
        code: "al", name: "Albânia", capital: "Tirana", region: "europa"
    },
    {
        code: "dz", name: "Argélia", capital: "Argel", region: "africa"
    },
    {
        code: "ad", name: "Andorra", capital: "Andorra-a-Velha", region: "europa"
    },
    {
        code: "ao", name: "Angola", capital: "Luanda", region: "africa"
    },
    {
        code: "ag", name: "Antígua e Barbuda", capital: "Saint John's", region: "america"
    },
    {
        code: "sa", name: "Arábia Saudita", capital: "Riad", region: "asia"
    },
    {
        code: "ar", name: "Argentina", capital: "Buenos Aires", region: "america"
    },
    {
        code: "am", name: "Armênia", capital: "Erevã", region: "asia"
    },
    {
        code: "at", name: "Áustria", capital: "Viena", region: "europa"
    },
    {
        code: "az", name: "Azerbaijão", capital: "Baku", region: "asia"
    },
    {
        code: "bs", name: "Bahamas", capital: "Nassau", region: "america"
    },
    {
        code: "bh", name: "Bahrein", capital: "Manama", region: "asia"
    },
    {
        code: "bd", name: "Bangladesh", capital: "Daca", region: "asia"
    },
    {
        code: "bb", name: "Barbados", capital: "Bridgetown", region: "america"
    },
    {
        code: "be", name: "Bélgica", capital: "Bruxelas", region: "europa"
    },
    {
        code: "bz", name: "Belize", capital: "Belmopan", region: "america"
    },
    {
        code: "bj", name: "Benim", capital: "Porto-Novo", region: "africa"
    },
    {
        code: "by", name: "Belarus", capital: "Minsk", region: "europa"
    },
    {
        code: "bo", name: "Bolívia", capital: "Sucre", region: "america"
    },
    {
        code: "ba", name: "Bósnia e Herzegovina", capital: "Sarajevo", region: "europa"
    },
    {
        code: "bw", name: "Botsuana", capital: "Gaborone", region: "africa"
    },
    {
        code: "br", name: "Brasil", capital: "Brasília", region: "america"
    },
    {
        code: "bn", name: "Brunei", capital: "Bandar Seri Begawan", region: "asia"
    },
    {
        code: "bg", name: "Bulgária", capital: "Sófia", region: "europa"
    },
    {
        code: "bf", name: "Burkina Faso", capital: "Uagadugu", region: "africa"
    },
    {
        code: "bi", name: "Burundi", capital: "Gitega", region: "africa"
    },
    {
        code: "bt", name: "Butão", capital: "Thimphu", region: "asia"
    },
    {
        code: "cv", name: "Cabo Verde", capital: "Praia", region: "africa"
    },
    {
        code: "cm", name: "Camarões", capital: "Iaundé", region: "africa"
    },
    {
        code: "kh", name: "Camboja", capital: "Phnom Penh", region: "asia"
    },
    {
        code: "qa", name: "Catar", capital: "Doha", region: "asia"
    },
    {
        code: "kz", name: "Cazaquistão", capital: "Astana", region: "asia"
    },
    {
        code: "td", name: "Chade", capital: "N'Djamena", region: "africa"
    },
    {
        code: "cl", name: "Chile", capital: "Santiago", region: "america"
    },
    {
        code: "cn", name: "China", capital: "Pequim", region: "asia"
    },
    {
        code: "cy", name: "Chipre", capital: "Nicósia", region: "europa"
    },
    {
        code: "co", name: "Colômbia", capital: "Bogotá", region: "america"
    },
    {
        code: "km", name: "Comores", capital: "Moroni", region: "africa"
    },
    {
        code: "cg", name: "Congo", capital: "Brazzaville", region: "africa"
    },
    {
        code: "cd", name: "República Democrática do Congo", capital: "Kinshasa", region: "africa"
    },
    {
        code: "kp", name: "Coreia do Norte", capital: "Pyongyang", region: "asia"
    },
    {
        code: "kr", name: "Coreia do Sul", capital: "Seul", region: "asia"
    },
    {
        code: "ci", name: "Costa do Marfim", capital: "Yamoussoukro", region: "africa"
    },
    {
        code: "cr", name: "Costa Rica", capital: "San José", region: "america"
    },
    {
        code: "hr", name: "Croácia", capital: "Zagreb", region: "europa"
    },
    {
        code: "cu", name: "Cuba", capital: "Havana", region: "america"
    },
    {
        code: "dk", name: "Dinamarca", capital: "Copenhague", region: "europa"
    },
    {
        code: "dj", name: "Djibuti", capital: "Djibuti", region: "africa"
    },
    {
        code: "dm", name: "Dominica", capital: "Roseau", region: "america"
    },
    {
        code: "eg", name: "Egito", capital: "Cairo", region: "africa"
    },
    {
        code: "sv", name: "El Salvador", capital: "San Salvador", region: "america"
    },
    {
        code: "ae", name: "Emirados Árabes Unidos", capital: "Abu Dhabi", region: "asia"
    },
    {
        code: "ec", name: "Equador", capital: "Quito", region: "america"
    },
    {
        code: "er", name: "Eritreia", capital: "Asmara", region: "africa"
    },
    {
        code: "sk", name: "Eslováquia", capital: "Bratislava", region: "europa"
    },
    {
        code: "si", name: "Eslovênia", capital: "Liubliana", region: "europa"
    },
    {
        code: "us", name: "Estados Unidos", capital: "Washington, D.C.", region: "america"
    },
    {
        code: "ee", name: "Estônia", capital: "Tallinn", region: "europa"
    },
    {
        code: "sz", name: "Essuatíni", capital: "Mbabane", region: "africa"
    },
    {
        code: "et", name: "Etiópia", capital: "Adis Abeba", region: "africa"
    },
    {
        code: "fj", name: "Fiji", capital: "Suva", region: "oceania"
    },
    {
        code: "ph", name: "Filipinas", capital: "Manila", region: "asia"
    },
    {
        code: "fi", name: "Finlândia", capital: "Helsinque", region: "europa"
    },
    {
        code: "ga", name: "Gabão", capital: "Libreville", region: "africa"
    },
    {
        code: "gm", name: "Gâmbia", capital: "Banjul", region: "africa"
    },
    {
        code: "gh", name: "Gana", capital: "Acra", region: "africa"
    },
    {
        code: "ge", name: "Geórgia", capital: "Tbilisi", region: "asia"
    },
    {
        code: "gd", name: "Granada", capital: "Saint George's", region: "america"
    },
    {
        code: "gr", name: "Grécia", capital: "Atenas", region: "europa"
    },
    {
        code: "gt", name: "Guatemala", capital: "Cidade da Guatemala", region: "america"
    },
    {
        code: "gy", name: "Guiana", capital: "Georgetown", region: "america"
    },
    {
        code: "gn", name: "Guiné", capital: "Conacri", region: "africa"
    },
    {
        code: "gw", name: "Guiné-Bissau", capital: "Bissau", region: "africa"
    },
    {
        code: "gq", name: "Guiné Equatorial", capital: "Malabo", region: "africa"
    },
    {
        code: "ht", name: "Haiti", capital: "Porto Príncipe", region: "america"
    },
    {
        code: "hn", name: "Honduras", capital: "Tegucigalpa", region: "america"
    },
    {
        code: "hu", name: "Hungria", capital: "Budapeste", region: "europa"
    },
    {
        code: "ye", name: "Iêmen", capital: "Sanaã", region: "asia"
    },
    {
        code: "mh", name: "Ilhas Marshall", capital: "Majuro", region: "oceania"
    },
    {
        code: "sb", name: "Ilhas Salomão", capital: "Honiara", region: "oceania"
    },
    {
        code: "in", name: "Índia", capital: "Nova Deli", region: "asia"
    },
    {
        code: "id", name: "Indonésia", capital: "Jacarta", region: "asia"
    },
    {
        code: "ir", name: "Irã", capital: "Teerã", region: "asia"
    },
    {
        code: "iq", name: "Iraque", capital: "Bagdá", region: "asia"
    },
    {
        code: "is", name: "Islândia", capital: "Reykjavík", region: "europa"
    },
    {
        code: "il", name: "Israel", capital: "Jerusalém", region: "asia"
    },
    {
        code: "it", name: "Itália", capital: "Roma", region: "europa"
    },
    {
        code: "jm", name: "Jamaica", capital: "Kingston", region: "america"
    },
    {
        code: "jo", name: "Jordânia", capital: "Amã", region: "asia"
    },
    {
        code: "ke", name: "Quênia", capital: "Nairóbi", region: "africa"
    },
    {
        code: "ki", name: "Kiribati", capital: "Tarawa", region: "oceania"
    },
    {
        code: "kw", name: "Kuwait", capital: "Cidade do Kuwait", region: "asia"
    },
    {
        code: "kg", name: "Quirguistão", capital: "Bisqueque", region: "asia"
    },
    {
        code: "la", name: "Laos", capital: "Vientiane", region: "asia"
    },
    {
        code: "lv", name: "Letônia", capital: "Riga", region: "europa"
    },
    {
        code: "lb", name: "Líbano", capital: "Beirute", region: "asia"
    },
    {
        code: "ls", name: "Lesoto", capital: "Maseru", region: "africa"
    },
    {
        code: "lr", name: "Libéria", capital: "Monróvia", region: "africa"
    },
    {
        code: "ly", name: "Líbia", capital: "Trípoli", region: "africa"
    },
    {
        code: "li", name: "Liechtenstein", capital: "Vaduz", region: "europa"
    },
    {
        code: "lt", name: "Lituânia", capital: "Vilnius", region: "europa"
    },
    {
        code: "lu", name: "Luxemburgo", capital: "Luxemburgo", region: "europa"
    },
    {
        code: "mk", name: "Macedônia do Norte", capital: "Skopje", region: "europa"
    },
    {
        code: "mg", name: "Madagascar", capital: "Antananarivo", region: "africa"
    },
    {
        code: "my", name: "Malásia", capital: "Kuala Lumpur", region: "asia"
    },
    {
        code: "mw", name: "Malawi", capital: "Lilongwe", region: "africa"
    },
    {
        code: "mv", name: "Maldivas", capital: "Malé", region: "asia"
    },
    {
        code: "ml", name: "Mali", capital: "Bamako", region: "africa"
    },
    {
        code: "mt", name: "Malta", capital: "Valletta", region: "europa"
    },
    {
        code: "ma", name: "Marrocos", capital: "Rabat", region: "africa"
    },
    {
        code: "mu", name: "Maurício", capital: "Port Louis", region: "africa"
    },
    {
        code: "mr", name: "Mauritânia", capital: "Nouakchott", region: "africa"
    },
    {
        code: "mx", name: "México", capital: "Cidade do México", region: "america"
    },
    {
        code: "fm", name: "Micronésia", capital: "Palikir", region: "oceania"
    },
    {
        code: "mm", name: "Mianmar", capital: "Naypyidaw", region: "asia"
    },
    {
        code: "md", name: "Moldávia", capital: "Chisinau", region: "europa"
    },
    {
        code: "mc", name: "Mônaco", capital: "Mônaco", region: "europa"
    },
    {
        code: "mn", name: "Mongólia", capital: "Ulan Bator", region: "asia"
    },
    {
        code: "me", name: "Montenegro", capital: "Podgorica", region: "europa"
    },
    {
        code: "mz", name: "Moçambique", capital: "Maputo", region: "africa"
    },
    {
        code: "na", name: "Namíbia", capital: "Windhoek", region: "africa"
    },
    {
        code: "nr", name: "Nauru", capital: "Yaren", region: "oceania"
    },
    {
        code: "np", name: "Nepal", capital: "Catmandu", region: "asia"
    },
    {
        code: "ni", name: "Nicarágua", capital: "Manágua", region: "america"
    },
    {
        code: "ne", name: "Níger", capital: "Niamei", region: "africa"
    },
    {
        code: "ng", name: "Nigéria", capital: "Abuja", region: "africa"
    },
    {
        code: "no", name: "Noruega", capital: "Oslo", region: "europa"
    },
    {
        code: "om", name: "Omã", capital: "Mascate", region: "asia"
    },
    {
        code: "pw", name: "Palau", capital: "Ngerulmud", region: "oceania"
    },
    {
        code: "ps", name: "Palestina", capital: "Ramala", region: "asia"
    },
    {
        code: "pa", name: "Panamá", capital: "Cidade do Panamá", region: "america"
    },
    {
        code: "pg", name: "Papua-Nova Guiné", capital: "Port Moresby", region: "oceania"
    },
    {
        code: "pk", name: "Paquistão", capital: "Islamabad", region: "asia"
    },
    {
        code: "py", name: "Paraguai", capital: "Assunção", region: "america"
    },
    {
        code: "pe", name: "Peru", capital: "Lima", region: "america"
    },
    {
        code: "pl", name: "Polônia", capital: "Varsóvia", region: "europa"
    },
    {
        code: "cz", name: "República Tcheca", capital: "Praga", region: "europa"
    },
    {
        code: "cf", name: "República Centro-Africana", capital: "Bangui", region: "africa"
    },
    {
        code: "do", name: "República Dominicana", capital: "Santo Domingo", region: "america"
    },
    {
        code: "ro", name: "Romênia", capital: "Bucareste", region: "europa"
    },
    {
        code: "rw", name: "Ruanda", capital: "Kigali", region: "africa"
    },
    {
        code: "ru", name: "Rússia", capital: "Moscou", region: "europa"
    },
    {
        code: "kn", name: "São Cristóvão e Névis", capital: "Basseterre", region: "america"
    },
    {
        code: "lc", name: "Santa Lúcia", capital: "Castries", region: "america"
    },
    {
        code: "vc", name: "São Vicente e Granadinas", capital: "Kingstown", region: "america"
    },
    {
        code: "ws", name: "Samoa", capital: "Apia", region: "oceania"
    },
    {
        code: "sm", name: "San Marino", capital: "San Marino", region: "europa"
    },
    {
        code: "st", name: "São Tomé e Príncipe", capital: "São Tomé", region: "africa"
    },
    {
        code: "sn", name: "Senegal", capital: "Dacar", region: "africa"
    },
    {
        code: "sc", name: "Seicheles", capital: "Victoria", region: "africa"
    },
    {
        code: "sl", name: "Serra Leoa", capital: "Freetown", region: "africa"
    },
    {
        code: "rs", name: "Sérvia", capital: "Belgrado", region: "europa"
    },
    {
        code: "sg", name: "Singapura", capital: "Singapura", region: "asia"
    },
    {
        code: "sy", name: "Síria", capital: "Damasco", region: "asia"
    },
    {
        code: "so", name: "Somália", capital: "Mogadíscio", region: "africa"
    },
    {
        code: "lk", name: "Sri Lanka", capital: "Sri Jayawardenepura Kotte", region: "asia"
    },
    {
        code: "sd", name: "Sudão", capital: "Cartum", region: "africa"
    },
    {
        code: "ss", name: "Sudão do Sul", capital: "Juba", region: "africa"
    },
    {
        code: "ch", name: "Suíça", capital: "Berna", region: "europa"
    },
    {
        code: "sr", name: "Suriname", capital: "Paramaribo", region: "america"
    },
    {
        code: "tj", name: "Tajiquistão", capital: "Duchambe", region: "asia"
    },
    {
        code: "th", name: "Tailândia", capital: "Bangcoc", region: "asia"
    },
    {
        code: "tz", name: "Tanzânia", capital: "Dodoma", region: "africa"
    },
    {
        code: "tl", name: "Timor-Leste", capital: "Díli", region: "asia"
    },
    {
        code: "tg", name: "Togo", capital: "Lomé", region: "africa"
    },
    {
        code: "to", name: "Tonga", capital: "Nuku'alofa", region: "oceania"
    },
    {
        code: "tt", name: "Trinidad e Tobago", capital: "Port of Spain", region: "america"
    },
    {
        code: "tn", name: "Tunísia", capital: "Túnis", region: "africa"
    },
    {
        code: "tm", name: "Turcomenistão", capital: "Asgabate", region: "asia"
    },
    {
        code: "tr", name: "Turquia", capital: "Ancara", region: "asia"
    },
    {
        code: "tv", name: "Tuvalu", capital: "Funafuti", region: "oceania"
    },
    {
        code: "ua", name: "Ucrânia", capital: "Kyiv", region: "europa"
    },
    {
        code: "ug", name: "Uganda", capital: "Kampala", region: "africa"
    },
    {
        code: "gb", name: "Reino Unido", capital: "Londres", region: "europa"
    },
    {
        code: "uy", name: "Uruguai", capital: "Montevidéu", region: "america"
    },
    {
        code: "uz", name: "Uzbequistão", capital: "Tashkent", region: "asia"
    },
    {
        code: "vu", name: "Vanuatu", capital: "Port Vila", region: "oceania"
    },
    {
        code: "va", name: "Vaticano", capital: "Cidade do Vaticano", region: "europa"
    },
    {
        code: "ve", name: "Venezuela", capital: "Caracas", region: "america"
    },
    {
        code: "vn", name: "Vietnã", capital: "Hanói", region: "asia"
    },
    {
        code: "zm", name: "Zâmbia", capital: "Lusaca", region: "africa"
    },
    {
        code: "zw", name: "Zimbábue", capital: "Harare", region: "africa"
    }
];

const regionalScores = {
    africa: [4, 4, 3, 3, 3, 4, 3, 3],
    america: [3, 4, 4, 3, 4, 4, 3, 4],
    asia: [3, 4, 3, 4, 4, 3, 4, 3],
    europa: [3, 4, 4, 4, 4, 4, 4, 4],
    oceania: [3, 4, 5, 3, 4, 5, 4, 4]
};

function getFlag(code) {
    return [...code.toUpperCase()]
        .map((letter) => String.fromCodePoint(letter.charCodeAt(0) + 127397))
        .join("");
}

function getRegionalTraits(region) {
    const scores = regionalScores[region];

    return Object.fromEntries(allTraits.map((trait) => {
        const category = categoryOrder.find((key) => trait.startsWith(traitCategories[key]));
        return [trait, scores[categoryOrder.indexOf(category)]];
    }));
}

const countries = [
    ...detailedCountries,
    ...additionalCountries.map(({ code, name, capital, region }) => ({
        id: code,
        name,
        flag: getFlag(code),
        description: `${name} oferece uma experiência própria de cultura, paisagens e oportunidades. Explore o país considerando seu momento de vida, seus objetivos e as regras locais de imigração.`,
        strengths: ["Cultura e identidade local", "Experiências e paisagens", "Possibilidades de adaptação"],
        attention: ["Custos variam bastante por região", "Regras locais exigem pesquisa"],
        cities: [capital, `Região de ${capital}`, `Interior de ${name}`],
        traits: getRegionalTraits(region)
    }))
];

window.countryData = { countries };
