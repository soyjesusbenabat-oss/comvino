/**
 * Español, inglés y portugués para la web de ComVino 2026.
 *
 * El diseño está escrito en español. Este archivo traduce sus textos sin tocarlo: busca cada frase
 * y la sustituye por la del idioma elegido, usando el selector que ya trae la cabecera. La elección
 * se recuerda en el navegador.
 *
 * Los nombres de personas, universidades, bodegas y entidades no se traducen: no aparecen aquí.
 */
(function () {
  "use strict";

  var DICT = {
    en: {
      // Menú y portada
      "Presentación": "About",
      "Programa": "Programme",
      "Cómo participar": "How to take part",
      "Publicaciones": "Publications",
      "Organización": "Organisation",
      "Sede": "Venue",
      "Participar": "Take part",
      "I Congreso Internacional de Comunicación y Cultura del Vino": "1st International Conference on Wine Communication and Culture",
      "Pensar el vino,": "Thinking wine,",
      "vivirlo.": "living it.",
      "El congreso que une tradición, comunicación y futuro del vino, en el corazón de Saborea Lanzarote.":
        "The conference that brings together the tradition, communication and future of wine, at the heart of Saborea Lanzarote.",
      "Quiero participar": "I want to take part",
      "Ver programa": "See the programme",
      "La Geria · Lanzarote": "La Geria · Lanzarote",
      "27—30 nov": "27—30 Nov",
      "2026 · Cuatro días": "2026 · Four days",
      "Convento de Santo Domingo": "Convento de Santo Domingo",
      "Integrado en el festival": "Part of the festival",
      "Presencial": "On site",
      "Académico y abierto": "Academic and open",

      // Introducción
      "Introducción": "Introduction",
      "Donde la palabra y el paisaje": "Where words and landscape",
      "comparten memoria": "share a memory",
      "Lanzarote acoge este Congreso Internacional de Comunicación y Cultura del Vino como un territorio que ha sabido transformar su origen volcánico en una de las tradiciones vitivinícolas más singulares del mundo, espejo del carácter de los vinos de Canarias.":
        "Lanzarote hosts this International Conference on Wine Communication and Culture as a land that has turned its volcanic origin into one of the most singular winegrowing traditions in the world, a mirror of the character of Canarian wines.",
      "Hablar de vino es hablar de cultura, paisaje, personas y tiempo. En un contexto global, comunicar el vino con rigor y sensibilidad es una herramienta estratégica para preservar su valor, proyectar su autenticidad y reforzar su sostenibilidad.":
        "To speak of wine is to speak of culture, landscape, people and time. In a global context, communicating wine with rigour and sensitivity is a strategic tool for preserving its value, projecting its authenticity and strengthening its sustainability.",
      "En 2015 Lanzarote fue el primer destino del mundo en obtener la certificación Biosphere Responsible Tourism de la Organización Mundial del Turismo. El congreso se celebra en un lugar que entiende la sostenibilidad como relato y como práctica.":
        "In 2015 Lanzarote became the first destination in the world to obtain the World Tourism Organization's Biosphere Responsible Tourism certification. The conference takes place somewhere that understands sustainability as both a story and a practice.",
      "Lo organizan el Cabildo de Lanzarote y la Escuela Universitaria de Turismo de Lanzarote, con la participación de la Universidad de Las Palmas de Gran Canaria, la Universidad de La Laguna y la Universidad de Sevilla.":
        "It is organised by the Cabildo de Lanzarote and the Escuela Universitaria de Turismo de Lanzarote, with the participation of the University of Las Palmas de Gran Canaria, the University of La Laguna and the University of Seville.",
      "Pensar el vino y vivirlo, en el mismo lugar y al mismo tiempo.": "Thinking wine and living it, in the same place at the same time.",
      "Las jornadas coinciden con Saborea Lanzarote, la gran cita enogastronómica de la Isla: la reflexión académica dialoga con la experiencia directa del vino, la gastronomía y el paisaje que los hace posibles.":
        "The conference coincides with Saborea Lanzarote, the island's major food and wine event: academic reflection meets the direct experience of wine, gastronomy and the landscape that makes them possible.",

      // Razones y públicos
      "¿Para qué ComVino Lanzarote?": "Why ComVino Lanzarote?",
      "Cinco razones": "Five reasons",
      "para venir": "to come",
      "Analizar el cultivo del vino en Lanzarote como ejemplo de resiliencia y compromiso con la sostenibilidad.":
        "To examine winegrowing in Lanzarote as an example of resilience and commitment to sustainability.",
      "Intercambiar ideas sobre estrategias de comunicación, cultura del vino y patrimonio inmaterial.":
        "To exchange ideas on communication strategies, wine culture and intangible heritage.",
      "Descubrir enfoques innovadores en marketing, digitalización y enoturismo experiencial.":
        "To discover new approaches in marketing, digitalisation and experiential wine tourism.",
      "Conocer cómo se construyen los relatos que dan valor al vino y a los territorios que lo producen.":
        "To learn how the stories that give value to wine and to the places that produce it are built.",
      "Crear redes de colaboración entre el mundo académico, el sector vitivinícola y la sociedad.":
        "To build networks between academia, the wine sector and society.",
      "Para quién": "Who it is for",
      "Para quien quiere aprender, inspirarse": "For those who want to learn, find inspiration",
      "y conectar": "and connect",
      "Profesionales, académicos y amantes del vino: seis perfiles, una misma mesa.":
        "Professionals, academics and wine lovers: six profiles, one table.",
      "Comunicadores y divulgadores": "Communicators and science writers",
      "Periodistas, creadores de contenido e influencers del sector.": "Journalists, content creators and influencers in the sector.",
      "Agentes del turismo y la cultura": "Tourism and culture professionals",
      "Guías, gestores culturales y diseñadores de experiencias enoturísticas.": "Guides, cultural managers and designers of wine tourism experiences.",
      "Profesionales vitivinícolas": "Wine professionals",
      "Bodegueros, sumilleres, distribuidores y técnicos.": "Winemakers, sommeliers, distributors and technicians.",
      "Investigadores y docentes": "Researchers and teachers",
      "Especialistas en enología, turismo, historia, comunicación y más.": "Specialists in oenology, tourism, history, communication and more.",
      "Estudiantes y escuelas técnicas": "Students and technical schools",
      "Oportunidades de formación, créditos y networking.": "Training opportunities, credits and networking.",
      "Público general": "General public",
      "Aficionados, coleccionistas y enoturistas que buscan experiencias únicas.": "Enthusiasts, collectors and wine tourists looking for unique experiences.",

      // Programa
      "El programa": "The programme",
      "Un congreso": "A conference",
      "dentro de un festival": "inside a festival",
      "ComVino 2026 se integra en Saborea Lanzarote, el festival enogastronómico del Cabildo en la Villa de Teguise. El congreso aporta el sello académico y cultural; los asistentes disfrutan del festival y de un fin de semana en la isla.":
        "ComVino 2026 is part of Saborea Lanzarote, the Cabildo's food and wine festival in Villa de Teguise. The conference brings the academic and cultural side; those attending enjoy the festival and a weekend on the island.",
      "Rigor académico": "Academic rigour",
      "Conferencias, comunicaciones científicas y publicación de resultados con respaldo universitario.":
        "Keynotes, research papers and publication of results with university backing.",
      "El vino y la gastronomía de Lanzarote vividos dentro del festival, en un entorno volcánico único.":
        "The wine and gastronomy of Lanzarote experienced within the festival, in a unique volcanic setting.",
      "Catas, visitas al paisaje vitivinícola y el taller de análisis sensorial y neuromarketing en La Geria.":
        "Tastings, visits to the wine landscape and the workshop on sensory analysis and neuromarketing in La Geria.",
      "Viernes": "Friday",
      "La Geria: paisaje volcánico, vino y percepción": "La Geria: volcanic landscape, wine and perception",
      "Visita interpretativa al paisaje de La Geria": "Guided visit to the La Geria landscape",
      "Visita técnica a una bodega": "Technical visit to a winery",
      "Taller «El vino también está en la mente»: análisis sensorial y neuromarketing":
        "Workshop “Wine is also in the mind”: sensory analysis and neuromarketing",
      "Sábado": "Saturday",
      "Apertura, vino y territorio": "Opening, wine and territory",
      "Inauguración": "Opening ceremony",
      "Conferencia inaugural y cata · Nuria España": "Opening lecture and tasting · Nuria España",
      "Mesa redonda: vinos y gastronomía canarias": "Round table: Canarian wines and gastronomy",
      "Parque Nacional de Timanfaya": "Timanfaya National Park",
      "Cena social": "Social dinner",
      "Domingo": "Sunday",
      "Comunicación, experiencias y cultura del vino": "Communication, experiences and wine culture",
      "Vinos de altura de Salta y Lanzarote": "High-altitude wines from Salta and Lanzarote",
      "Estrategias de comunicación del vino": "Wine communication strategies",
      "Conferencia y cata de cavas · Bruno Colomer": "Lecture and cava tasting · Bruno Colomer",
      "Jameos del Agua y Casa de César Manrique": "Jameos del Agua and Casa de César Manrique",
      "Lunes": "Monday",
      "Comunicaciones científicas y clausura": "Research papers and closing",
      "Comunicaciones en dos espacios simultáneos": "Papers in two parallel rooms",
      "Conferencia de clausura y cata «7 islas, 7 vinos» · Vicenta Mira": "Closing lecture and tasting “7 islands, 7 wines” · Vicenta Mira",
      "Clausura del congreso": "Closing of the conference",
      "Programa provisional. Ponentes y actividades sujetos a confirmación.": "Provisional programme. Speakers and activities subject to confirmation.",
      "Programa completo": "Full programme",

      // Líneas temáticas
      "Líneas temáticas": "Thematic lines",
      "Cinco caminos": "Five paths",
      "para tu comunicación": "for your paper",
      "Enviar abstract": "Submit an abstract",
      "Lanzarote: la singularidad mundial de sus vinos volcánicos": "Lanzarote: the global singularity of its volcanic wines",
      "Geología y territorio: impacto del paisaje volcánico en su vitivinicultura": "Geology and territory: the volcanic landscape and its winegrowing",
      "Identidad y patrimonio inmaterial: preservar, enriquecer, difundir": "Identity and intangible heritage: preserving, enriching, sharing",
      "De la tradición ancestral a la innovación tecnológica": "From ancestral tradition to technological innovation",
      "Turismo enológico, desarrollo sostenible y posicionamiento en mercados globales": "Wine tourism, sustainable development and global market positioning",
      "Comunicación estratégica y construcción de marca vitivinícola": "Strategic communication and wine brand building",
      "Construcción de marca: de la etiqueta al relato": "Brand building: from the label to the story",
      "Storytelling enológico": "Wine storytelling",
      "Nuevas tendencias en diseño y packaging": "New trends in design and packaging",
      "Vino, gastronomía, territorio e identidad cultural": "Wine, gastronomy, territory and cultural identity",
      "El vino como símbolo cultural y vertebrador de territorios": "Wine as a cultural symbol that shapes territories",
      "Vino en el arte, la literatura y el cine": "Wine in art, literature and film",
      "Lenguaje de la crítica del vino": "The language of wine criticism",
      "Medios audiovisuales, comunicación cultural y discurso mediático": "Audiovisual media, cultural communication and media discourse",
      "Digitalización y nuevos formatos de comunicación vitivinícola": "Digitalisation and new formats in wine communication",
      "Comunicación digital y redes sociales": "Digital communication and social media",
      "Influencers y prescriptores digitales": "Influencers and digital tastemakers",
      "Nuevos formatos audiovisuales y plataformas de venta online": "New audiovisual formats and online sales platforms",
      "Audiencias y comunidades digitales": "Audiences and digital communities",
      "Enoturismo, ciencia, sostenibilidad y responsabilidad comunicativa": "Wine tourism, science, sustainability and responsible communication",
      "Enoturismo, storytelling territorial y visitas a bodega": "Wine tourism, territorial storytelling and winery visits",
      "Divulgación científica del vino": "Science communication about wine",
      "Sostenibilidad y responsabilidad social": "Sustainability and social responsibility",
      "Regulación, ética y comunicación del vino": "Regulation, ethics and wine communication",

      // Modalidades
      "Modalidades de participación": "Ways to take part",
      "Elige cómo": "Choose how",
      "formar parte": "to join in",
      "Comunicación científica, póster, novedad editorial u otros formatos de difusión de la investigación. También propuestas creativas —vídeos, podcasts u otras iniciativas— para difundir la cultura del vino desde cualquier disciplina.":
        "Research paper, poster, new publication or other formats for sharing research. Also creative proposals — videos, podcasts or other initiatives — to share wine culture from any discipline.",
      "Participación académica": "Academic participation",
      "Acceso a sesiones científicas": "Access to the academic sessions",
      "Actividades sociales generales": "General social activities",
      "Presentación de comunicación, póster, novedad editorial o formato creativo": "Presentation of a paper, poster, new publication or creative format",
      "Aperitivos y almuerzos indicados": "Refreshments and lunches as indicated",
      "Inscribirme": "Register",
      "Con cena social": "With social dinner",
      "Todo lo anterior más la cena de bienvenida en restaurante u hotel.": "Everything above plus the welcome dinner at a restaurant or hotel.",
      "Académica + Publicación": "Academic + publication",
      "Evaluación por pares ciego; si no prospera, se incluye en el libro de actas. En autoría múltiple solo abona el primer firmante.":
        "Blind peer review; if it is not accepted, the paper is included in the proceedings. With several authors, only the first author pays.",
      "Completa": "Full",
      "Inscripción completa": "Full registration",
      "Para primeros firmantes presenciales que quieren networking y publicación en editorial SPI.":
        "For first authors attending on site who want networking and publication with an SPI-ranked publisher.",
      "Abierta a la ciudadanía": "Open to the public",
      "Oyente": "Listener",
      "Acceso a sesiones académicas": "Access to the academic sessions",
      "Intercambio con investigadores y profesionales": "Exchange with researchers and professionals",
      "Oyente con cena social": "Listener with social dinner",
      "Para interesados en la cultura del vino sin presentación académica y acompañantes de congresistas.":
        "For those interested in wine culture without presenting a paper, and for participants' companions.",
      "Actividades complementarias": "Additional activities",
      "Para congresistas, acompañantes y público general, en horario de tarde o fechas próximas. Cada una con inscripción propia en el área privada.":
        "For participants, companions and the general public, in the afternoon or on nearby dates. Each has its own registration in the private area.",
      "Catas de vino": "Wine tastings",
      "Laboratorios de emociones del vino": "Wine emotion labs",
      "Seminarios vino y cine": "Wine and film seminars",
      "Talleres formativos": "Training workshops",
      "Factura": "Invoice",
      "Disponible en el área privada tras el pago, por el importe total de la modalidad elegida. Para factura proforma:":
        "Available in the private area once payment is made, for the full amount of the chosen option. For a proforma invoice:",
      "Envía tu abstract y únete a": "Send your abstract and join",
      "Propuestas hasta el 30 de septiembre de 2026.": "Proposals until 30 September 2026.",
      "Enviar aquí": "Submit here",

      // Fechas
      "Fechas clave": "Key dates",
      "El calendario": "The ComVino",
      "de ComVino": "calendar",
      "30 sep": "30 Sep",
      "Envío de propuestas": "Call for papers",
      "El día 5 de cada mes se notifica la aceptación de las recibidas el mes anterior. Las enviadas hasta el 30/09 tendrán respuesta el 5 de octubre.":
        "On the 5th of each month we notify decisions on proposals received the previous month. Those sent by 30 September will be answered on 5 October.",
      "15 oct": "15 Oct",
      "Inscripción al congreso": "Conference registration",
      "Talleres abiertos hasta agotar plazas o, como máximo, hasta esta fecha.": "Workshops open until places run out or, at the latest, until this date.",
      "30 oct": "30 Oct",
      "Programa definitivo": "Final programme",
      "Publicación del programa final del congreso.": "Publication of the final conference programme.",
      "31 ene": "31 Jan",
      "Texto completo": "Full text",
      "Envío de las comunicaciones aceptadas.": "Submission of accepted papers.",
      "Jun": "Jun",
      "Monografía": "Monograph",
      "Publicación de los resultados científicos.": "Publication of the research results.",

      // Publicaciones y equipo
      "Publicaciones y resultados": "Publications and results",
      "La investigación,": "Research,",
      "publicada": "published",
      "Una selección de los trabajos, evaluados por pares, se publicará en un volumen colectivo de una editorial de reconocido prestigio académico.":
        "A selection of the papers, peer reviewed, will be published in a collective volume by a publisher of recognised academic standing.",
      "El comité organizador gestiona además que parte de las contribuciones pueda considerarse para revistas científicas especializadas, tras sus propios procesos de revisión. Pronto se detallarán criterios de selección y calendario.":
        "The organising committee is also arranging for some contributions to be considered by specialised journals, subject to their own review processes. Selection criteria and dates will be announced shortly.",
      "Organigrama": "Who's who",
      "Quién hace": "Who makes",
      "Experiencia Saborea": "Saborea experience",
      "Acciones ComVino": "ComVino activities",
      "Secretaría Técnica": "Technical secretariat",
      "Comité Científico": "Scientific committee",
      "Comité de Dirección": "Steering committee",
      "Directora de la EUTL": "Director of the EUTL",
      "Decano de la Facultad de C. Sociales y Comunicación de la ULL": "Dean of the Faculty of Social Sciences and Communication, ULL",
      "Equipo de Organización": "Organising team",
      "CEO de SPEL Turismo Lanzarote": "CEO of SPEL Turismo Lanzarote",
      "Periodista y sumiller": "Journalist and sommelier",
      "Enóloga, bióloga y sumiller": "Oenologist, biologist and sommelier",
      "Intracom. Portal Iberoamericano de la Transferencia del Conocimiento": "Intracom. Ibero-American Portal for Knowledge Transfer",
      "Cátedra de Agroturismo y Enoturismo. ICCA-ULL": "Chair of Agritourism and Wine Tourism. ICCA-ULL",
      "Director Técnico Pago de La Jaraba": "Technical Director, Pago de La Jaraba",
      "Enólogo y bodeguero en El Bierzo": "Oenologist and winemaker in El Bierzo",
      "Consultora de marketing para bodegas": "Marketing consultant for wineries",
      "Periodista gastronómica": "Food journalist",
      "Consultor vitivinícola": "Wine consultant",
      "Entidades organizadoras": "Organising bodies",
      "Colaboradores y patrocinadores": "Partners and sponsors",

      // Sede y pie
      "Las jornadas del fin de semana se viven dentro de Saborea Lanzarote. Las comunicaciones científicas del lunes, en la Escuela Universitaria de Turismo de Lanzarote.":
        "The weekend sessions take place within Saborea Lanzarote. Monday's research papers are held at the Escuela Universitaria de Turismo de Lanzarote.",
      "Fechas": "Dates",
      "27—30 de noviembre de 2026": "27—30 November 2026",
      "Contacto": "Contact",
      "Inscripción": "Registration",
      "Área privada Intracom": "Intracom private area",
      "ComVino es un congreso sectorial del Portal Iberoamericano de la Transferencia del Conocimiento":
        "ComVino is a sectoral conference of the Ibero-American Portal for Knowledge Transfer",
      "Menú": "Menu",
      "Ir al Portal Intracom": "Go to Portal Intracom",
      "© 2026 ComVino. Todos los derechos reservados.": "© 2026 ComVino. All rights reserved.",
      "Política de privacidad": "Privacy policy",
      "Política de cookies": "Cookie policy",
    },

    pt: {
      // Menu e capa
      "Presentación": "Apresentação",
      "Programa": "Programa",
      "Cómo participar": "Como participar",
      "Publicaciones": "Publicações",
      "Organización": "Organização",
      "Sede": "Local",
      "Participar": "Participar",
      "I Congreso Internacional de Comunicación y Cultura del Vino": "I Congresso Internacional de Comunicação e Cultura do Vinho",
      "Pensar el vino,": "Pensar o vinho,",
      "vivirlo.": "vivê-lo.",
      "El congreso que une tradición, comunicación y futuro del vino, en el corazón de Saborea Lanzarote.":
        "O congresso que une tradição, comunicação e futuro do vinho, no coração do Saborea Lanzarote.",
      "Quiero participar": "Quero participar",
      "Ver programa": "Ver programa",
      "La Geria · Lanzarote": "La Geria · Lanzarote",
      "27—30 nov": "27—30 nov.",
      "2026 · Cuatro días": "2026 · Quatro dias",
      "Convento de Santo Domingo": "Convento de Santo Domingo",
      "Integrado en el festival": "Integrado no festival",
      "Presencial": "Presencial",
      "Académico y abierto": "Académico e aberto",

      // Introdução
      "Introducción": "Introdução",
      "Donde la palabra y el paisaje": "Onde a palavra e a paisagem",
      "comparten memoria": "partilham memória",
      "Lanzarote acoge este Congreso Internacional de Comunicación y Cultura del Vino como un territorio que ha sabido transformar su origen volcánico en una de las tradiciones vitivinícolas más singulares del mundo, espejo del carácter de los vinos de Canarias.":
        "Lanzarote acolhe este Congresso Internacional de Comunicação e Cultura do Vinho como um território que soube transformar a sua origem vulcânica numa das tradições vitivinícolas mais singulares do mundo, espelho do carácter dos vinhos das Canárias.",
      "Hablar de vino es hablar de cultura, paisaje, personas y tiempo. En un contexto global, comunicar el vino con rigor y sensibilidad es una herramienta estratégica para preservar su valor, proyectar su autenticidad y reforzar su sostenibilidad.":
        "Falar de vinho é falar de cultura, paisagem, pessoas e tempo. Num contexto global, comunicar o vinho com rigor e sensibilidade é uma ferramenta estratégica para preservar o seu valor, projetar a sua autenticidade e reforçar a sua sustentabilidade.",
      "En 2015 Lanzarote fue el primer destino del mundo en obtener la certificación Biosphere Responsible Tourism de la Organización Mundial del Turismo. El congreso se celebra en un lugar que entiende la sostenibilidad como relato y como práctica.":
        "Em 2015, Lanzarote foi o primeiro destino do mundo a obter a certificação Biosphere Responsible Tourism da Organização Mundial do Turismo. O congresso realiza-se num lugar que entende a sustentabilidade como narrativa e como prática.",
      "Lo organizan el Cabildo de Lanzarote y la Escuela Universitaria de Turismo de Lanzarote, con la participación de la Universidad de Las Palmas de Gran Canaria, la Universidad de La Laguna y la Universidad de Sevilla.":
        "É organizado pelo Cabildo de Lanzarote e pela Escuela Universitaria de Turismo de Lanzarote, com a participação da Universidade de Las Palmas de Gran Canaria, da Universidade de La Laguna e da Universidade de Sevilha.",
      "Pensar el vino y vivirlo, en el mismo lugar y al mismo tiempo.": "Pensar o vinho e vivê-lo, no mesmo lugar e ao mesmo tempo.",
      "Las jornadas coinciden con Saborea Lanzarote, la gran cita enogastronómica de la Isla: la reflexión académica dialoga con la experiencia directa del vino, la gastronomía y el paisaje que los hace posibles.":
        "As jornadas coincidem com o Saborea Lanzarote, o grande encontro enogastronómico da ilha: a reflexão académica dialoga com a experiência direta do vinho, da gastronomia e da paisagem que os torna possíveis.",

      // Razões e públicos
      "¿Para qué ComVino Lanzarote?": "Para quê o ComVino Lanzarote?",
      "Cinco razones": "Cinco razões",
      "para venir": "para vir",
      "Analizar el cultivo del vino en Lanzarote como ejemplo de resiliencia y compromiso con la sostenibilidad.":
        "Analisar o cultivo do vinho em Lanzarote como exemplo de resiliência e compromisso com a sustentabilidade.",
      "Intercambiar ideas sobre estrategias de comunicación, cultura del vino y patrimonio inmaterial.":
        "Trocar ideias sobre estratégias de comunicação, cultura do vinho e património imaterial.",
      "Descubrir enfoques innovadores en marketing, digitalización y enoturismo experiencial.":
        "Descobrir abordagens inovadoras em marketing, digitalização e enoturismo experiencial.",
      "Conocer cómo se construyen los relatos que dan valor al vino y a los territorios que lo producen.":
        "Conhecer como se constroem as narrativas que dão valor ao vinho e aos territórios que o produzem.",
      "Crear redes de colaboración entre el mundo académico, el sector vitivinícola y la sociedad.":
        "Criar redes de colaboração entre o meio académico, o setor vitivinícola e a sociedade.",
      "Para quién": "Para quem",
      "Para quien quiere aprender, inspirarse": "Para quem quer aprender, inspirar-se",
      "y conectar": "e ligar-se",
      "Profesionales, académicos y amantes del vino: seis perfiles, una misma mesa.":
        "Profissionais, académicos e amantes do vinho: seis perfis, uma mesma mesa.",
      "Comunicadores y divulgadores": "Comunicadores e divulgadores",
      "Periodistas, creadores de contenido e influencers del sector.": "Jornalistas, criadores de conteúdo e influenciadores do setor.",
      "Agentes del turismo y la cultura": "Agentes do turismo e da cultura",
      "Guías, gestores culturales y diseñadores de experiencias enoturísticas.": "Guias, gestores culturais e criadores de experiências enoturísticas.",
      "Profesionales vitivinícolas": "Profissionais vitivinícolas",
      "Bodegueros, sumilleres, distribuidores y técnicos.": "Produtores, escanções, distribuidores e técnicos.",
      "Investigadores y docentes": "Investigadores e docentes",
      "Especialistas en enología, turismo, historia, comunicación y más.": "Especialistas em enologia, turismo, história, comunicação e mais.",
      "Estudiantes y escuelas técnicas": "Estudantes e escolas técnicas",
      "Oportunidades de formación, créditos y networking.": "Oportunidades de formação, créditos e networking.",
      "Público general": "Público em geral",
      "Aficionados, coleccionistas y enoturistas que buscan experiencias únicas.": "Aficionados, colecionadores e enoturistas que procuram experiências únicas.",

      // Programa
      "El programa": "O programa",
      "Un congreso": "Um congresso",
      "dentro de un festival": "dentro de um festival",
      "ComVino 2026 se integra en Saborea Lanzarote, el festival enogastronómico del Cabildo en la Villa de Teguise. El congreso aporta el sello académico y cultural; los asistentes disfrutan del festival y de un fin de semana en la isla.":
        "O ComVino 2026 integra-se no Saborea Lanzarote, o festival enogastronómico do Cabildo na Villa de Teguise. O congresso traz o selo académico e cultural; quem participa desfruta do festival e de um fim de semana na ilha.",
      "Rigor académico": "Rigor académico",
      "Conferencias, comunicaciones científicas y publicación de resultados con respaldo universitario.":
        "Conferências, comunicações científicas e publicação de resultados com apoio universitário.",
      "El vino y la gastronomía de Lanzarote vividos dentro del festival, en un entorno volcánico único.":
        "O vinho e a gastronomia de Lanzarote vividos dentro do festival, num ambiente vulcânico único.",
      "Catas, visitas al paisaje vitivinícola y el taller de análisis sensorial y neuromarketing en La Geria.":
        "Provas, visitas à paisagem vitivinícola e o workshop de análise sensorial e neuromarketing em La Geria.",
      "Viernes": "Sexta-feira",
      "La Geria: paisaje volcánico, vino y percepción": "La Geria: paisagem vulcânica, vinho e perceção",
      "Visita interpretativa al paisaje de La Geria": "Visita interpretativa à paisagem de La Geria",
      "Visita técnica a una bodega": "Visita técnica a uma adega",
      "Taller «El vino también está en la mente»: análisis sensorial y neuromarketing":
        "Workshop «O vinho também está na mente»: análise sensorial e neuromarketing",
      "Sábado": "Sábado",
      "Apertura, vino y territorio": "Abertura, vinho e território",
      "Inauguración": "Inauguração",
      "Conferencia inaugural y cata · Nuria España": "Conferência inaugural e prova · Nuria España",
      "Mesa redonda: vinos y gastronomía canarias": "Mesa redonda: vinhos e gastronomia das Canárias",
      "Parque Nacional de Timanfaya": "Parque Nacional de Timanfaya",
      "Cena social": "Jantar social",
      "Domingo": "Domingo",
      "Comunicación, experiencias y cultura del vino": "Comunicação, experiências e cultura do vinho",
      "Vinos de altura de Salta y Lanzarote": "Vinhos de altitude de Salta e Lanzarote",
      "Estrategias de comunicación del vino": "Estratégias de comunicação do vinho",
      "Conferencia y cata de cavas · Bruno Colomer": "Conferência e prova de cavas · Bruno Colomer",
      "Jameos del Agua y Casa de César Manrique": "Jameos del Agua e Casa de César Manrique",
      "Lunes": "Segunda-feira",
      "Comunicaciones científicas y clausura": "Comunicações científicas e encerramento",
      "Comunicaciones en dos espacios simultáneos": "Comunicações em duas salas em simultâneo",
      "Conferencia de clausura y cata «7 islas, 7 vinos» · Vicenta Mira": "Conferência de encerramento e prova «7 ilhas, 7 vinhos» · Vicenta Mira",
      "Clausura del congreso": "Encerramento do congresso",
      "Programa provisional. Ponentes y actividades sujetos a confirmación.": "Programa provisório. Oradores e atividades sujeitos a confirmação.",
      "Programa completo": "Programa completo",

      // Linhas temáticas
      "Líneas temáticas": "Linhas temáticas",
      "Cinco caminos": "Cinco caminhos",
      "para tu comunicación": "para a sua comunicação",
      "Enviar abstract": "Enviar resumo",
      "Lanzarote: la singularidad mundial de sus vinos volcánicos": "Lanzarote: a singularidade mundial dos seus vinhos vulcânicos",
      "Geología y territorio: impacto del paisaje volcánico en su vitivinicultura": "Geologia e território: a paisagem vulcânica e a sua vitivinicultura",
      "Identidad y patrimonio inmaterial: preservar, enriquecer, difundir": "Identidade e património imaterial: preservar, enriquecer, difundir",
      "De la tradición ancestral a la innovación tecnológica": "Da tradição ancestral à inovação tecnológica",
      "Turismo enológico, desarrollo sostenible y posicionamiento en mercados globales": "Turismo enológico, desenvolvimento sustentável e posicionamento em mercados globais",
      "Comunicación estratégica y construcción de marca vitivinícola": "Comunicação estratégica e construção de marca vitivinícola",
      "Construcción de marca: de la etiqueta al relato": "Construção de marca: do rótulo à narrativa",
      "Storytelling enológico": "Storytelling enológico",
      "Nuevas tendencias en diseño y packaging": "Novas tendências em design e embalagem",
      "Vino, gastronomía, territorio e identidad cultural": "Vinho, gastronomia, território e identidade cultural",
      "El vino como símbolo cultural y vertebrador de territorios": "O vinho como símbolo cultural e estruturador de territórios",
      "Vino en el arte, la literatura y el cine": "O vinho na arte, na literatura e no cinema",
      "Lenguaje de la crítica del vino": "A linguagem da crítica de vinhos",
      "Medios audiovisuales, comunicación cultural y discurso mediático": "Meios audiovisuais, comunicação cultural e discurso mediático",
      "Digitalización y nuevos formatos de comunicación vitivinícola": "Digitalização e novos formatos de comunicação vitivinícola",
      "Comunicación digital y redes sociales": "Comunicação digital e redes sociais",
      "Influencers y prescriptores digitales": "Influenciadores e prescritores digitais",
      "Nuevos formatos audiovisuales y plataformas de venta online": "Novos formatos audiovisuais e plataformas de venda online",
      "Audiencias y comunidades digitales": "Audiências e comunidades digitais",
      "Enoturismo, ciencia, sostenibilidad y responsabilidad comunicativa": "Enoturismo, ciência, sustentabilidade e responsabilidade comunicativa",
      "Enoturismo, storytelling territorial y visitas a bodega": "Enoturismo, storytelling territorial e visitas a adegas",
      "Divulgación científica del vino": "Divulgação científica do vinho",
      "Sostenibilidad y responsabilidad social": "Sustentabilidade e responsabilidade social",
      "Regulación, ética y comunicación del vino": "Regulação, ética e comunicação do vinho",

      // Modalidades
      "Modalidades de participación": "Modalidades de participação",
      "Elige cómo": "Escolha como",
      "formar parte": "participar",
      "Comunicación científica, póster, novedad editorial u otros formatos de difusión de la investigación. También propuestas creativas —vídeos, podcasts u otras iniciativas— para difundir la cultura del vino desde cualquier disciplina.":
        "Comunicação científica, póster, novidade editorial ou outros formatos de difusão da investigação. Também propostas criativas — vídeos, podcasts ou outras iniciativas — para difundir a cultura do vinho a partir de qualquer disciplina.",
      "Participación académica": "Participação académica",
      "Acceso a sesiones científicas": "Acesso às sessões científicas",
      "Actividades sociales generales": "Atividades sociais gerais",
      "Presentación de comunicación, póster, novedad editorial o formato creativo": "Apresentação de comunicação, póster, novidade editorial ou formato criativo",
      "Aperitivos y almuerzos indicados": "Aperitivos e almoços indicados",
      "Inscribirme": "Inscrever-me",
      "Con cena social": "Com jantar social",
      "Todo lo anterior más la cena de bienvenida en restaurante u hotel.": "Tudo o anterior mais o jantar de boas-vindas em restaurante ou hotel.",
      "Académica + Publicación": "Académica + publicação",
      "Evaluación por pares ciego; si no prospera, se incluye en el libro de actas. En autoría múltiple solo abona el primer firmante.":
        "Avaliação por pares cega; se não for aceite, é incluída no livro de atas. Em autoria múltipla, paga apenas o primeiro subscritor.",
      "Completa": "Completa",
      "Inscripción completa": "Inscrição completa",
      "Para primeros firmantes presenciales que quieren networking y publicación en editorial SPI.":
        "Para primeiros subscritores presentes que queiram networking e publicação em editora SPI.",
      "Abierta a la ciudadanía": "Aberta ao público",
      "Oyente": "Ouvinte",
      "Acceso a sesiones académicas": "Acesso às sessões académicas",
      "Intercambio con investigadores y profesionales": "Troca com investigadores e profissionais",
      "Oyente con cena social": "Ouvinte com jantar social",
      "Para interesados en la cultura del vino sin presentación académica y acompañantes de congresistas.":
        "Para interessados na cultura do vinho sem apresentação académica e acompanhantes dos congressistas.",
      "Actividades complementarias": "Atividades complementares",
      "Para congresistas, acompañantes y público general, en horario de tarde o fechas próximas. Cada una con inscripción propia en el área privada.":
        "Para congressistas, acompanhantes e público em geral, à tarde ou em datas próximas. Cada uma com inscrição própria na área privada.",
      "Catas de vino": "Provas de vinho",
      "Laboratorios de emociones del vino": "Laboratórios de emoções do vinho",
      "Seminarios vino y cine": "Seminários de vinho e cinema",
      "Talleres formativos": "Workshops formativos",
      "Factura": "Fatura",
      "Disponible en el área privada tras el pago, por el importe total de la modalidad elegida. Para factura proforma:":
        "Disponível na área privada após o pagamento, pelo valor total da modalidade escolhida. Para fatura proforma:",
      "Envía tu abstract y únete a": "Envie o seu resumo e junte-se ao",
      "Propuestas hasta el 30 de septiembre de 2026.": "Propostas até 30 de setembro de 2026.",
      "Enviar aquí": "Enviar aqui",

      // Datas
      "Fechas clave": "Datas importantes",
      "El calendario": "O calendário",
      "de ComVino": "do ComVino",
      "30 sep": "30 set.",
      "Envío de propuestas": "Envio de propostas",
      "El día 5 de cada mes se notifica la aceptación de las recibidas el mes anterior. Las enviadas hasta el 30/09 tendrán respuesta el 5 de octubre.":
        "No dia 5 de cada mês comunica-se a aceitação das propostas recebidas no mês anterior. As enviadas até 30/09 terão resposta a 5 de outubro.",
      "15 oct": "15 out.",
      "Inscripción al congreso": "Inscrição no congresso",
      "Talleres abiertos hasta agotar plazas o, como máximo, hasta esta fecha.": "Workshops abertos até esgotar os lugares ou, no máximo, até esta data.",
      "30 oct": "30 out.",
      "Programa definitivo": "Programa definitivo",
      "Publicación del programa final del congreso.": "Publicação do programa final do congresso.",
      "31 ene": "31 jan.",
      "Texto completo": "Texto completo",
      "Envío de las comunicaciones aceptadas.": "Envio das comunicações aceites.",
      "Jun": "Jun.",
      "Monografía": "Monografia",
      "Publicación de los resultados científicos.": "Publicação dos resultados científicos.",

      // Publicações e equipa
      "Publicaciones y resultados": "Publicações e resultados",
      "La investigación,": "A investigação,",
      "publicada": "publicada",
      "Una selección de los trabajos, evaluados por pares, se publicará en un volumen colectivo de una editorial de reconocido prestigio académico.":
        "Uma seleção dos trabalhos, avaliados por pares, será publicada num volume coletivo de uma editora de reconhecido prestígio académico.",
      "El comité organizador gestiona además que parte de las contribuciones pueda considerarse para revistas científicas especializadas, tras sus propios procesos de revisión. Pronto se detallarán criterios de selección y calendario.":
        "A comissão organizadora está ainda a tratar de que parte das contribuições possa ser considerada por revistas científicas especializadas, após os seus próprios processos de revisão. Em breve serão detalhados os critérios de seleção e o calendário.",
      "Organigrama": "Organograma",
      "Quién hace": "Quem faz",
      "Experiencia Saborea": "Experiência Saborea",
      "Acciones ComVino": "Atividades ComVino",
      "Secretaría Técnica": "Secretariado técnico",
      "Comité Científico": "Comissão científica",
      "Comité de Dirección": "Comissão de direção",
      "Directora de la EUTL": "Diretora da EUTL",
      "Decano de la Facultad de C. Sociales y Comunicación de la ULL": "Diretor da Faculdade de Ciências Sociais e Comunicação da ULL",
      "Equipo de Organización": "Equipa de organização",
      "CEO de SPEL Turismo Lanzarote": "CEO da SPEL Turismo Lanzarote",
      "Periodista y sumiller": "Jornalista e escanção",
      "Enóloga, bióloga y sumiller": "Enóloga, bióloga e escanção",
      "Intracom. Portal Iberoamericano de la Transferencia del Conocimiento": "Intracom. Portal Ibero-Americano da Transferência do Conhecimento",
      "Cátedra de Agroturismo y Enoturismo. ICCA-ULL": "Cátedra de Agroturismo e Enoturismo. ICCA-ULL",
      "Director Técnico Pago de La Jaraba": "Diretor Técnico da Pago de La Jaraba",
      "Enólogo y bodeguero en El Bierzo": "Enólogo e produtor em El Bierzo",
      "Consultora de marketing para bodegas": "Consultora de marketing para adegas",
      "Periodista gastronómica": "Jornalista gastronómica",
      "Consultor vitivinícola": "Consultor vitivinícola",
      "Entidades organizadoras": "Entidades organizadoras",
      "Colaboradores y patrocinadores": "Colaboradores e patrocinadores",

      // Local e rodapé
      "Las jornadas del fin de semana se viven dentro de Saborea Lanzarote. Las comunicaciones científicas del lunes, en la Escuela Universitaria de Turismo de Lanzarote.":
        "As jornadas de fim de semana decorrem dentro do Saborea Lanzarote. As comunicações científicas de segunda-feira, na Escuela Universitaria de Turismo de Lanzarote.",
      "Fechas": "Datas",
      "27—30 de noviembre de 2026": "27—30 de novembro de 2026",
      "Contacto": "Contacto",
      "Inscripción": "Inscrição",
      "Área privada Intracom": "Área privada Intracom",
      "ComVino es un congreso sectorial del Portal Iberoamericano de la Transferencia del Conocimiento":
        "O ComVino é um congresso setorial do Portal Ibero-Americano da Transferência do Conhecimento",
      "Menú": "Menu",
      "Ir al Portal Intracom": "Ir para o Portal Intracom",
      "© 2026 ComVino. Todos los derechos reservados.": "© 2026 ComVino. Todos os direitos reservados.",
      "Política de privacidad": "Política de privacidade",
      "Política de cookies": "Política de cookies",
    },
  };

  var TITULOS = {
    es: "ComVino · I Congreso Internacional de Comunicación y Cultura del Vino · Lanzarote 2026",
    en: "ComVino · 1st International Conference on Wine Communication and Culture · Lanzarote 2026",
    pt: "ComVino · I Congresso Internacional de Comunicação e Cultura do Vinho · Lanzarote 2026",
  };

  var IDIOMAS = ["es", "en", "pt"];
  var lang = "es";
  try {
    var g = localStorage.getItem("comvino_lang");
    if (g && IDIOMAS.indexOf(g) >= 0) lang = g;
  } catch (e) {}

  var ORIG = new WeakMap();

  function traducirNodo(nodo, dict) {
    var base = ORIG.get(nodo);
    if (base === undefined) {
      base = nodo.textContent;
      ORIG.set(nodo, base);
    }
    var clave = base.trim();
    if (!clave) return;
    var t = dict ? dict[clave] : null;
    var nuevo = t ? base.replace(clave, t) : base;
    if (nodo.textContent !== nuevo) nodo.textContent = nuevo;
  }

  var aplicando = false;
  function aplicar() {
    if (aplicando) return;
    aplicando = true;
    var dict = DICT[lang] || null;
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var n;
    while ((n = w.nextNode())) {
      var p = n.parentElement;
      if (!p || p.tagName === "SCRIPT" || p.tagName === "STYLE" || p.closest(".langs")) continue;
      traducirNodo(n, dict);
    }
    document.documentElement.setAttribute("lang", lang);
    document.title = TITULOS[lang] || TITULOS.es;
    // Los textos legales viven en la plataforma y también tienen versión en cada idioma
    Array.prototype.forEach.call(document.querySelectorAll('a[href*="conferences.portalintracom.com"]'), function (a) {
      a.href = a.href.replace(/\/(es|en|pt)\//, "/" + lang + "/");
    });
    Array.prototype.forEach.call(document.querySelectorAll(".langs a"), function (a) {
      var suyo = (a.textContent || "").trim().toLowerCase();
      a.classList.toggle("on", suyo === lang);
    });
    aplicando = false;
  }

  function preparar() {
    var caja = document.querySelector(".langs");
    if (!caja || caja.getAttribute("data-listo")) return;
    caja.setAttribute("data-listo", "1");
    Array.prototype.forEach.call(caja.querySelectorAll("a"), function (a) {
      var l = (a.textContent || "").trim().toLowerCase();
      // El diseño ofrecía también italiano, que todavía no está traducido
      if (IDIOMAS.indexOf(l) < 0) {
        a.remove();
        return;
      }
      a.setAttribute("href", "#");
      a.addEventListener("click", function (e) {
        e.preventDefault();
        lang = l;
        try { localStorage.setItem("comvino_lang", l); } catch (err) {}
        aplicar();
      });
    });
  }

  // El propio diseño reconstruye la cabecera al cargar y se lleva por delante los iconos del sitio,
  // así que se vuelven a poner una vez terminada esa reconstrucción.
  function iconos() {
    if (document.querySelector('link[rel="icon"]')) return;
    [
      ["icon", "favicon-32.png", "32x32"],
      ["icon", "favicon-512.png", "512x512"],
      ["apple-touch-icon", "favicon-180.png", "180x180"],
    ].forEach(function (i) {
      var l = document.createElement("link");
      l.rel = i[0];
      l.type = "image/png";
      l.href = i[1];
      l.sizes = i[2];
      document.head.appendChild(l);
    });
  }

  function arrancar() {
    iconos();
    preparar();
    aplicar();
    var pendiente = null;
    new MutationObserver(function () {
      clearTimeout(pendiente);
      pendiente = setTimeout(function () {
        preparar();
        aplicar();
      }, 60);
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { setTimeout(arrancar, 300); });
  else setTimeout(arrancar, 300);
})();
