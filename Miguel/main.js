var resultList = document.getElementById('results');
var filter = document.getElementById('search-input');
var searcher = document.getElementById('search-form');

filter.addEventListener('keyup', filterItems);
searcher.addEventListener('submit', addItem);

// coger los datos de MedlinePlus API
const diabetes = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=250&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const resfriado = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=460&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Enfermedades_tiroides ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=240&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Paratiroides ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=252&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Enfermedades_glandulas_suprarrenales ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=255&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Enfermedades_pancreas ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=251&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Hipotiroidismo ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=244&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Hipertiroidismo ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=242&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Enfermedades_ovarios ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=256&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Desnutricion ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=260&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Vitamina_B ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=265&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Vitamina_C ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=267&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Vitamina_D ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=268&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Trastornos_metabolismo_lipidos ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=272&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Gota ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=274&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Transtornos_metabolicos ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=275&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Equilibrio_hidroelectrolitico ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=276&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Obesidad ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=278&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Sistema_inmunitario ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=279&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Meningitis ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=320&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Encefalitis ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=323&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Abscesos ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=324&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Coagulos ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=325&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Problemas_sueño ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=327&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Parkinson ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=332&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Medula_espinal ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=336&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Sistema_nervioso_autonomo ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=337&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Dolor ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=338&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Dolor_cabeza ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=339&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Esclerosis_multiple ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=340&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Paralisis ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=342&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Paralisis_cerebral ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=343&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Epilepsia ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=345&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Migrana ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=346&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Enfermedades_cerebro ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=348&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Enfermedades_neurologicas ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=349&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Neuragia_trigemino ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=350&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Sistema_nervioso_periferico ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=356&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Distrofia_muscular ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=359&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Enfermedades_ojos ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=360&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Enfermedades_retina ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=362&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Glaucoma ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=365&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Cataratas ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=366&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Errores_refraccion ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=367&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Problemas_perdida_vision ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=369&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Enfermedades_cornea ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=370&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Enfermedades_parpados ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=373&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Lagrimas ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=375&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Enfermedades_oido ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=380&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Infecciones_oidos ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=382&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Problemas_audición_sordera ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=389&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Sinusitis ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=461&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Dolor_garganta ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=462&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Amigdalitis ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=463&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Bronquitis_aguda ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=466&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Lesiones_enfermedades_nariz ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=470&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Adenoides ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=474&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Enfermedades_garganta ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=476&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Alergia ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=477&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Neumonia ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=480&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Gripe ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=487&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Bronquitis_cronica ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=491&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Enfisema ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=492&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Asma ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=493&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Trastorno_bronquios ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=494&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Enfermedad_pulmonar_intersticial ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=495&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Obstruccion_pulmonar ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=496&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Enfermedades_pulmones ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=510&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Trastornos_pleurales ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=511&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Colapso_pulmonar ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=512&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Fibrosis_pulmonar ='https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=515&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';


function illness(link, description){
    var enf = {
        link: link,
        description: description
    };
    return enf;
}

async function getData(enfermedad){
    if(enfermedad === 'diabetes'){
        const response = await fetch(diabetes);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                                  substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'resfriado'){
        const response = await fetch(resfriado);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Tiroides'){
            const response = await fetch(Enfermedades_tiroides);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Hipertiroidismo'){
            const response = await fetch(Hipertiroidismo);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;

    }else if(enfermedad === 'Hipotiroidismo'){
            const response = await fetch(Hipotiroidismo);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Enfermedades del páncreas'){
            const response = await fetch(Enfermedades_pancreas);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Paratiroides'){
            const response = await fetch(Paratiroides);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Enfermedades de las glándulas suprarrenales'){
            const response = await fetch(Enfermedades_glandulas_suprarrenales);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Enfermedades_ovarios'){
            const response = await fetch(Enfermedades de los ovarios);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Desnutrición'){
            const response = await fetch(Desnutricion);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Vitamina B'){
            const response = await fetch(Vitamina_B);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;

    }else if(enfermedad === 'Vitamina C'){
            const response = await fetch(Vitamina_C);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Vitamina D'){
            const response = await fetch(Vitamina_D);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Lípidos'){
            const response = await fetch(Trastornos_metabolismo_lipidos);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Gota'){
            const response = await fetch(Gota);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Transtornos metabólicos'){
            const response = await fetch(Transtornos_metabolicos);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Equilibrio hidroelectrolitico'){
            const response = await fetch(Equilibrio_hidroelectrolítico);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Obesidad'){
            const response = await fetch(Obesidad);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Sistema inmunitario'){
            const response = await fetch(Sistema_inmunitario);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Meningitis'){
            const response = await fetch(Meningitis);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Encefalitis'){
            const response = await fetch(Encefalitis);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Abscesos'){
            const response = await fetch(Abscesos);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Coágulos'){
            const response = await fetch(Coagulos);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Problemas del sueño'){
            const response = await fetch(Problemas_sueño);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Parkinson'){
            const response = await fetch(Parkinson);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Enfermedades de la médula espinal'){
            const response = await fetch(Medula_espinal);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Sistema nervioso autónomo'){
            const response = await fetch(Sistema_nervioso_autonomo);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Dolor'){
            const response = await fetch(Dolor);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Dolor de cabeza'){
            const response = await fetch(Dolor_cabeza);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Esclerosis múltiple'){
            const response = await fetch(Esclerosis_multiple);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Parálisis'){
            const response = await fetch(Paralisis);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Parálisis cerebral'){
            const response = await fetch(Paralisis_cerebral);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Epilepsia'){
            const response = await fetch(Epilepsia);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Migraña'){
            const response = await fetch(Migrana);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Cerebro'){
            const response = await fetch(Enfermedade_cerebro);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Enfermedades neurológicas'){
            const response = await fetch(Enfermedades_neurologicas);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Neuragia del trigémino'){
            const response = await fetch(Neuragia_trigemino);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Sistema_nervioso_periferico'){
            const response = await fetch(Enfermedades del sistema nervioso periférico);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Distrofia muscular'){
            const response = await fetch(Distrofia_muscular);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Enfermedades de los ojos'){
            const response = await fetch(Enfermedades_ojos);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Enfermedades de la retina'){
            const response = await fetch(Enfermedades_retina);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Glaucoma'){
            const response = await fetch(Glaucoma);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Cataratas'){
            const response = await fetch(Cataratas);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Errores de refracción'){
            const response = await fetch(Errores_refraccion);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Problemas de visión'){
            const response = await fetch(Problemas_perdida_vision);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Enfermedades de la córnea'){
            const response = await fetch(Enfermedades_cornea);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Enfermedades de los párpados'){
            const response = await fetch(Enfermedades_parpados);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Lágrimas'){
            const response = await fetch(Lagrimas);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Enfermedades del oído'){
            const response = await fetch(Enfermedades_oido);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Infección de oídos'){
            const response = await fetch(Infecciones_oidos);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Sordera'){
            const response = await fetch(Problemas_audición_sordera);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Sinusitis'){
            const response = await fetch(Sinusitis);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Dolor de garganta'){
            const response = await fetch(Dolor_garganta);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Amigdalitis'){
            const response = await fetch(Amigdalitis);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Bronquitis aguda'){
            const response = await fetch(Bronquitis_aguda);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Enfermedades de la nariz'){
            const response = await fetch(Lesiones_enfermedades_nariz);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Adenoides'){
            const response = await fetch(Adenoides);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Enfermedades_garganta'){
            const response = await fetch(Lesiones y enfermedades de la nariz);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Alergia'){
            const response = await fetch(Alergia);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Neumonía'){
            const response = await fetch(Neumonia);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Gripe'){
            const response = await fetch(Gripe);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Bronquitis crónica'){
            const response = await fetch(Bronquitis_cronica);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Enfisema'){
            const response = await fetch(Enfisema);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Asma'){
            const response = await fetch(Asma);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Bronquios'){
            const response = await fetch(Trastorno_bronquios);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Enfermedad pulmonar intersticial'){
            const response = await fetch(Enfermedad_pulmonar_intersticial);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Obstrucción pulmonar'){
            const response = await fetch(Obstruccion_pulmonar);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Enfermedades de los pulmones'){
            const response = await fetch(Enfermedades_pulmones);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Trastornos pleurales'){
            const response = await fetch(Trastornos pleurales);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Colapso pulmonar'){
            const response = await fetch(Colapso_pulmonar);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
    }else if(enfermedad === 'Fibrosis pulmonar'){
            const response = await fetch(Fibrosis_pulmonar);
            const data = await response.json();
            var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
                substring(0, 200).replace("<p>", " ").concat("..."));
            return illnessData;
}

// addItem se hara con la API
function addItem(e){
    e.preventDefault();

    var to_search = filter.value.toLowerCase();

    const promise1 = Promise.resolve(getData(to_search));
    var newItem = promise1.then(function(value){
        console.log(value);
        
        // crear aqui el li con value

        var li = document.createElement('li');
        var a = document.createElement('a');
        var br = document.createElement('br');
        var link = document.createTextNode(to_search);
        var desc = document.createTextNode(value.description);
        a.appendChild(link);
        a.title = to_search;
        a.href = value.link;
        a.style.color = "#034f84";
        li.className = 'list-group-result';
        li.style.marginBottom = '20px';
        li.appendChild(a);
        li.appendChild(br);
        li.appendChild(desc);
        resultList.appendChild(li);
    })
}

// función para filtrar la busqueda
function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = resultList.getElementsByTagName('li');
    console.log(1);

    // converir htmlCollection a array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}
