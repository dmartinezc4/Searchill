var resultList = document.getElementById('results');
var filter = document.getElementById('search-input');
var searcher = document.getElementById('search-form');

filter.addEventListener('keyup', filterItems);
searcher.addEventListener('submit', addItem);

// coger los datos de MedlinePlus API
const diabetes = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=250&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const resfriado = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=460&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const anemia = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=280&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const anemia_aplasica = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=284&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const hemofilia = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=286&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
/*coagulacion*/
const leucocemia = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=288&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
/*globulos blancos*/ 
const demencia = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=290&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const alcohol = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=291&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const psicosis = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=293&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
/*problemas mentales*/
const esquizofrenia = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=295&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const bipolar = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=296&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const delusional = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=297&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const autismo = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=299&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const personalidad = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=301&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
/*trastorno de personalidad */
const disforia = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=302&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
/*trastono de identidad sexual/genero*/
const droga = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=304&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const estres = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=308&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const trauma_cerebral = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=310&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
/*trauma cerebral*/
const depresion = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=311&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const adolescencia = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=313&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const deficit_atencion = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=314&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const dislexia = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=315&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
/*problemas de aprendizaje*/
const down = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=317&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
/*problemas de desarrollo*/
const estreptococo = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=390&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const estreptococo_corazon= 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=391&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const pericarditis_cronica_reumatica = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=393&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const valvula_mitral = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=394&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const reuma_corazon = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=398&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const hipertension = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=401&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const cardiopatia = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=402&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const renal_cronica = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=403&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const ataque_corazon = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=410&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const arterias_coronarias = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=411&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const angina_de_pecho = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=413&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const arterioesclerosis = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=414&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const trastorno_pericardio = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=420&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const endocarditis = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=421&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const cardiomiopatia = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=422&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const arritmia = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=426&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const fallo_cardiaco = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=428&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const hemorragia_meningeal = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=430&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const hemorragia_intercerebral = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=432&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const efermedades_del_cerebro = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=433&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const isquema_cerebral = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=435&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const accidente_cerebrovascular = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=436&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const aneurisma_aortica = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=441&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const aneurisma = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=442&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const problemas_circulatorios = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=443&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const coagulos_sanguineos = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=452&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const varices = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=454&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const hemorroides = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=455&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const hipotension = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=458&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
/*alberto*/
const neoplasma_labial = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=140&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_de_lengua = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=141&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';

const neoplasma_de_glándulas_salivares = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=142&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_de_encia = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=143&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_del_paladar = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=144&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_bucal_no_especificado = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=145&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_de_orofaringe = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=146&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_de_nasofaringe = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=147&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_de_hipofaringe = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=148&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_oral_no_definido = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=149&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';

const neoplasma_de_esófago = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=150&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_de_estómago = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=151&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_del_intestino_delgado = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=152&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_de_colon = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=153&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_del_recto_intestinal = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=154&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es'; 
const neoplasma_del_hígado = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=155&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_de_la_vesícula_biliar = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=156&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_de_páncreas = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=157&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_de_retroperitoneo_y_peritoneo = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=158&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_digestivo_no_definido = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=159&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';

const neoplasma_nasal_y_del_oido = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=160&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_de_laringe = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=161&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_de_tráquea_brónquios_y_pulmón = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=162&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_de_la_pleura = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=163&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_de_corazón = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=164&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_intratorácico_y_respiratorio_indefinido = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=165&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';

const neoplasma_del_hueso = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=170&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_del_tejido_blando = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=171&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_de_la_piel = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=172&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_diferente_de_la_piel = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=173&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_del_pecho_femenino = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=174&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_del_pecho_masculino = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=175&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const sarcoma_de_Kaposi = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=176&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';

const neoplasma_del_útero = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=179&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_del_cérvix = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=180&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_de_placenta = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=181&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_del_cuerpo_uterino = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=182&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_del_ovario = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=183&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_de_los_genitales_femeninos = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=184&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_de_próstata = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=185&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_de_testículo = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=186&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_de_pene = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=187&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_de_vejiga = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=188&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_de_los_órganos_urinarios = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=189&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';

const neoplasma_de_ojo = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=190&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_de_cerebro = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=191&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_del_sistema_nervioso = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=192&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_de_la_glándula_tiroides = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=193&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_de_glándulas_endocrinas = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=194&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_de_sitio_no_definido = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=195&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_de_ganglios_linfáticos = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=196&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_respiratorio_y_digestivo = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=197&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_de_sitios_no_especificados = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=198&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';

const linfosarcoma = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=200&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const Hodgkin = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=201&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_linfático = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=202&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const melanoma = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=203&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const leucemia_linfática = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=204&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const leucemia_mieloide = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=205&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const leucemia_monocítica = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=206&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const otra_leucemia = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=207&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const leucemia_de_célula_no_especificada = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=208&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';

const tumor_neuroendocrino = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=209&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';

const neoplasma_benigno_de_útero = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=219&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_benigno_de_ovario = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=220&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_benigno_de_genitales_femeninos = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=221&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_benigno_de_genitales_maculinos = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=222&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_benigno_urinario = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=223&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_benigno_ocular = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=224&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_benigno_cerebral = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=225&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_benigno_de_la_glándula_tiroides = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=226&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_benigno_de_glándulas_endocrinas = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=227&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const linfangioma_y_hemangioma = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=228&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const neoplasma_benigno = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=229&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';

const carcinoma_digestivo = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=230&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const carcinoma_respiratorio = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=231&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const carcinoma_de_piel = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=232&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const carcinoma_genitourinario = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=233&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';
const carcinoma = 'https://connect.medlineplus.gov/service?mainSearchCriteria.v.cs=2.16.840.1.113883.6.103&mainSearchCriteria.v.c=234&knowledgeResponseType=application/json&informationRecipient.languageCode.c=es';

/*marcos*/
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
    }/*marcos*/else if(enfermedad === 'Tiroides'){
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
            const response = await fetch(Enfermedades_ovarios);
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
            const response = await fetch(Enfermedades_cerebro);
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
    }else if(enfermedad === 'Enfermedades del sistema nervioso periférico'){
            const response = await fetch(Sistema_nervioso_periferico);
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
    }else if(enfermedad === 'Garganta'){
            const response = await fetch(Enfermedades_garganta);
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
        const response = await fetch(Trastornos_pleurales);
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
    }/*David*/else if(enfermedad === 'Anemia'){
        const response = await fetch(anemia);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Anemia aplasica'){
        const response = await fetch(anemia_aplasica);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Hemofilia'){
        const response = await fetch(hemofilia);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Leucocemia'){
        const response = await fetch(leucocemia);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Demencia'){
        const response = await fetch(demencia);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Alcoholismo'){
        const response = await fetch(alcohol);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Psicosis'){
        const response = await fetch(psicosis);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Esquizofrenia'){
        const response = await fetch(esquizofrenia);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Bipolar'){
        const response = await fetch(bipolar);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Delusional'){
        const response = await fetch(delusional);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Autismo'){
        const response = await fetch(autismo);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Trastorno de personalidad'){
        const response = await fetch(personalidad);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Disforia de genero'){
        const response = await fetch(disforia);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Drogadiccion'){
        const response = await fetch(droga);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Estres'){
        const response = await fetch(estres);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Traumatismo cerebral'){
        const response = await fetch(trauma_cerebral);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Depresion'){
        const response = await fetch(depresion);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Adolecencia'){
        const response = await fetch(adolescencia);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Deficit de atencion'){
        const response = await fetch(deficit_atencion);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Dislexia'){
        const response = await fetch(dislexia);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Sindrome de Down'){
        const response = await fetch(down);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Fiebre reumatica'){
        const response = await fetch(estreptococo);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Pericarditis cronica'){
        const response = await fetch(pericarditis_cronica_reumatica);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Infecciones de las valvulas del corazon'){
        const response = await fetch(valvula_mitral);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Enfermedad cronica cardiaca'){
        const response = await fetch(reuma_corazon);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Hipertension'){
        const response = await fetch(hipertension);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Cardiopatia'){
        const response = await fetch(cardiopatia);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Enfermedad renal cronica'){
        const response = await fetch(renal_cronica);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Infeccion del miocardio'){
        const response = await fetch(ataque_corazon);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Infeccion cardiaca'){
        const response = await fetch(arterias_coronarias);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Angina de pecho'){
        const response = await fetch(angina_de_pecho);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Enfermedad isquemica del corazon'){
        const response = await fetch(arterioesclerosis);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Pericarditis'){
        const response = await fetch(arterioesclerosis);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Endocarditis'){
        const response = await fetch(endocarditis);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Cardiomiopatia'){
        const response = await fetch(cardiomiopatia);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Arritmia'){
        const response = await fetch(arritmia);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Fallo cardiaco'){
        const response = await fetch(fallo_cardiaco);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Hemorragia de la meninge'){
        const response = await fetch(hemorragia_meningeal);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Hemorragia intercerebral'){
        const response = await fetch(hemorragia_intercerebral);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Estenosis'){
        const response = await fetch(efermedades_del_cerebro);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Isquema cerebral'){
        const response = await fetch(isquema_cerebral);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Apoplejia'){
        const response = await fetch(accidente_cerebrovascular);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Aneurisma aortica'){
        const response = await fetch(aneurisma_aortica);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Aneurisma'){
        const response = await fetch(aneurisma);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Problema vascular'){
        const response = await fetch(problemas_circulatorios);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Obstruccion de las venas'){
        const response = await fetch(coagulos_sanguineos);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Varices'){
        const response = await fetch(fallo_cardiaco);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Hemorroides'){
        const response = await fetch(hemorroides);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Hipotension'){
        const response = await fetch(hipotension);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma labial'){
        const response = await fetch(neoplasma_labial);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de lengua'){
        const response = await fetch(neoplasma_de_lengua);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de glándulas salivares'){
        const response = await fetch(neoplasma_de_glándulas_salivares);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de encia'){
        const response = await fetch(neoplasma_de_encia);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma del paladar'){
        const response = await fetch(neoplasma_del_paladar);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma bucal no especificado'){
        const response = await fetch(neoplasma_bucal_no_especificado);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de orofaringe'){
        const response = await fetch(neoplasma_de_orofaringe);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de nasofaringe'){
        const response = await fetch(neoplasma_de_nasofaringe);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de hipofaringe'){
        const response = await fetch(neoplasma_de_hipofaringe);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma oral no definido'){
        const response = await fetch(neoplasma_oral_no_definido);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de esófago'){
        const response = await fetch(neoplasma_de_esófago);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de estómago'){
        const response = await fetch(neoplasma_de_estómago);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma del instestino delgado'){
        const response = await fetch(neoplasma_del_intestino_delgado);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de colon'){
        const response = await fetch(neoplasma_de_colon);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma del recto intestinal'){
        const response = await fetch(neoplasma_del_recto_intestinal);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma del hígado'){
        const response = await fetch(neoplasma_del_hígado);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de la vesícula biliar'){
        const response = await fetch(neoplasma_de_la_vesícula_biliar);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de páncreas'){
        const response = await fetch(neoplasma_de_páncreas);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de retroperitoneo y peritoneo'){
        const response = await fetch(neoplasma_de_retroperitoneo_y_peritoneo);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma digestivo no definido'){
        const response = await fetch(neoplasma_digestivo_no_definido);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma nasal y del oido'){
        const response = await fetch(neoplasma_nasal_y_del_oido);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de laringe'){
        const response = await fetch(neoplasma_de_laringe);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de tráquea brónquios y pulmón'){
        const response = await fetch(neoplasma_de_tráquea_brónquios_y_pulmón);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de la pleura'){
        const response = await fetch(neoplasma_de_la_pleura);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de corazón'){
        const response = await fetch(neoplasma_de_corazón);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma intratorácico y respiratorio indefinido'){
        const response = await fetch(neoplasma_intratorácico_y_respiratorio_indefinido);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma del hueso'){
        const response = await fetch(neoplasma_del_hueso);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma del tejido blando'){
        const response = await fetch(neoplasma_del_tejido_blando);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de la piel'){
        const response = await fetch(neoplasma_de_la_piel);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma diferente de la piel'){
        const response = await fetch(neoplasma_diferente_de_la_piel);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma del pecho femenino'){
        const response = await fetch(neoplasma_del_pecho_femenino);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma del pecho masculino'){
        const response = await fetch(neoplasma_del_pecho_masculino);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Narcoma de Kaposi'){
        const response = await fetch(sarcoma_de_Kaposi);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma del útero'){
        const response = await fetch(neoplasma_del_útero);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma del cérvix'){
        const response = await fetch(neoplasma_del_cérvix);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de placenta'){
        const response = await fetch(neoplasma_de_placenta);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma del cuello uterino'){
        const response = await fetch(neoplasma_del_cuello_uterino);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma del ovario'){
        const response = await fetch(neoplasma_del_ovario);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de los genitales femeninos'){
        const response = await fetch(neoplasma_de_los_genitales_femeninos);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de próstata'){
        const response = await fetch(neoplasma_de_próstata);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de testículo'){
        const response = await fetch(neoplasma_de_testículo);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de pene'){
        const response = await fetch(neoplasma_de_pene);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de vejiga'){
        const response = await fetch(neoplasma_de_vejiga);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de los órganos urinarios'){
        const response = await fetch(neoplasma_de_los_órganos_urinarios);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de ojo'){
        const response = await fetch(neoplasma_de_ojo);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de cerebro'){
        const response = await fetch(neoplasma_de_cerebro);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma del sistema nervioso'){
        const response = await fetch(neoplasma_del_sistema_nervioso);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de la glándula tiroides'){
        const response = await fetch(neoplasma_de_la_glándula_tiroides);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de glándulas endocrinas'){
        const response = await fetch(neoplasma_de_glándulas_endocrinas);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de sitio no definido'){
        const response = await fetch(neoplasma_de_sitio_no_definido);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'neoplasma_de_ganglios_linfáticos'){
        const response = await fetch(neoplasma_de_ganglios_linfáticos);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma respiratorio y digestivo'){
        const response = await fetch(neoplasma_respiratorio_y_digestivo);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma de sitios no especificados'){
        const response = await fetch(neoplasma_de_sitios_no_especificados);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Linfosarcoma'){
        const response = await fetch(linfosarcoma);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Hodgkin'){
        const response = await fetch(Hodgkin);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma linfático'){
        const response = await fetch(neoplasma_linfático);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Melanoma'){
        const response = await fetch(melanoma);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Leucemia linfática'){
        const response = await fetch(leucemia_linfática);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Leucemia mieloide'){
        const response = await fetch(leucemia_mieloide);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Leucemia monocítica'){
        const response = await fetch(leucemia_monocítica);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Otra leucemia'){
        const response = await fetch(otra_leucemia);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Leucemia de célula no especificada'){
        const response = await fetch(leucemia_de_célula_no_especificada);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Tumor neuroendocrino'){
        const response = await fetch(tumor_neuroendocrino);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma benigno de útero'){
        const response = await fetch(neoplasma_benigno_de_útero);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma benigno de ovario'){
        const response = await fetch(neoplasma_benigno_de_ovario);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma benigno de genitales femeninos'){
        const response = await fetch(neoplasma_benigno_de_genitales_femeninos);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma benigno de genitales masculinos'){
        const response = await fetch(neoplasma_benigno_de_genitales_masculinos);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma benigno urinario'){
        const response = await fetch(neoplasma_benigno_urinario);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma benigno ocular'){
        const response = await fetch(neoplasma_benigno_ocular);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'neoplasma benigno cerebral'){
        const response = await fetch(neoplasma_benigno_cerebral);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma benigno de la glándula tiroides'){
        const response = await fetch(neoplasma_benigno_de_la_glándula_tiroides);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma benigno de glándulas endocrinas'){
        const response = await fetch(neoplasma_benigno_de_glándulas_endocrinas);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Linfangioma y hemangioma'){
        const response = await fetch(limfangioma_y_hemangioma);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Neoplasma benigno'){
        const response = await fetch(neoplasma_benigno);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Carcinoma digestivo'){
        const response = await fetch(carcinoma_digestivo);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Carcinoma respiratorio'){
        const response = await fetch(carcinoma_respiratorio);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Carcinoma de piel'){
        const response = await fetch(carcinoma_de_piel);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Carcinoma genitourinario'){
        const response = await fetch(carcinoma_genitourinario);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }else if(enfermedad === 'Carcinoma'){
        const response = await fetch(carcinoma);
        const data = await response.json();
        var illnessData = illness(data.feed.entry[0].link[0].href, data.feed.entry[0].summary._value.
            substring(0, 200).replace("<p>", " ").concat("..."));
        return illnessData;
    }
}

// addItem se hara con la API
function addItem(e){
    e.preventDefault();

    var to_search = filter.value;

    const promise1 = Promise.resolve(getData(to_search));
    var newItem = promise1.then(function(value){
        // console.log(value);
        
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
