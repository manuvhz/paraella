import React from 'react';
import type { GalleryImage, TimelineEvent, AdmirationCardData, OurSong, PromiseData, Treasure } from './types';
import { TeacherIcon, GirlfriendIcon, DaughterIcon, SisterIcon, WomanIcon, FriendIcon, PromiseIcon, FlowerIcon, KeyIcon, StarIcon } from './components/Icons';

// FIX: Replaced JSX syntax (<Component />) with React.createElement(Component) in the `icon` properties.
// Using JSX in a .ts file (instead of a .tsx file) causes TypeScript parsing errors.
// React.createElement is the underlying function call for JSX and is safe to use in .ts files.
export const admirationCards: AdmirationCardData[] = [
  {
    icon: React.createElement(TeacherIcon),
    title: 'La Maestra',
    text: 'Tu vocación no solo enseña, también sana. Tienes el don de cambiar el día de alguien con una sola palabra.',
  },
  {
    icon: React.createElement(GirlfriendIcon),
    title: 'La Novia',
    text: 'Eres mi lugar seguro, la calma donde todo tiene sentido. Gracias por querer con tanta ternura.',
  },
  {
    icon: React.createElement(DaughterIcon),
    title: 'La Hija',
    text: 'Tu forma de cuidar y honrar a tu familia refleja el corazón más noble que conozco.',
  },
  {
    icon: React.createElement(SisterIcon),
    title: 'La Hermana',
    text: 'Tu empatía y tu risa hacen del mundo un lugar más amable.',
  },
  {
    icon: React.createElement(WomanIcon),
    title: 'La Mujer',
    text: 'Eres fuerza, belleza y dulzura en perfecta armonía. No hay nadie como tú, ni lo habrá.',
  },
  {
    icon: React.createElement(FriendIcon),
    title: 'La Amiga',
    text: 'La forma en que cuidas a tus amigas es admirable. Eres ese puerto seguro al que siempre pueden volver.',
  },
];

export const galleryImages: GalleryImage[] = [
    { id: "1", title: "Instante Sereno", link: "https://i.imgur.com/81EV4Cx.jpg", caption: "En el lienzo de tu calma, pinto mis días felices." },
    { id: "2", title: "Luz Propia", link: "https://i.imgur.com/2tw6Bgj.jpg", caption: "No buscas el sol, lo llevas dentro, iluminando todo a tu paso." },
    { id: "3", title: "Melodía de tu Sonrisa", link: "https://i.imgur.com/K6SYBxo.jpg", caption: "Cada curva de tus labios, una nota que compone mi canción favorita." },
    { id: "4", title: "Nuestro Refugio", link: "https://i.imgur.com/5S4PNyj.jpg", caption: "Contigo, cualquier lugar se convierte en el rincón más seguro del mundo." },
    { id: "5", title: "Mirada Cómplice", link: "https://i.imgur.com/cDIApfu.jpg", caption: "Un universo de historias no contadas, vive en el silencio de tus ojos." },
    { id: "6", title: "El Brillo en tu Ser", link: "https://i.imgur.com/Gpjz00G.jpg", caption: "Eres ese destello inesperado, que hace que todo valga la pena." },
];

export const compliments: string[] = [
  'Eres más hermosa de lo que tus inseguridades te dejan creer.',
  'Tu existencia ya es suficiente. El mundo brilla más desde que llegaste, Andrea.',
  'Tienes una ternura que desarma y una fortaleza que inspira.',
  'Eres poesía caminando, y a veces ni tú lo notas.',
  'Cuando sonríes, hasta el silencio se siente distinto.',
  'Eres capaz de todo lo que sueñas, incluso de lo que aún no te animas a intentar.',
  'Tu luz no necesita permiso. Deja que brille.',
  'Eres arte, maestra, magia y amor en una sola persona, Andrea.',
  'Me encanta la forma en que piensas.',
  'Pasar tiempo contigo es mi parte favorita del día.',
  'Admiro tu fuerza y tu resiliencia más de lo que imaginas.',
];

export const motivationalNotes: string[] = [
  'No necesitas hacerlo todo perfecto. Ya eres suficiente.',
  'Descansa sin culpa. Hasta las flores se cierran al caer la tarde.',
  'El mundo es mejor porque existes.',
  'Tu trabajo vale. Tus esfuerzos cuentan. Tu corazón también necesita cuidados.',
  'Nunca dudes de la mujer increíble que eres, Andrea. Estoy tan orgulloso de ti.',
  'Enseñas con amor, y eso deja huellas que ni imaginas.',
  'Permítete sentir. Tus emociones son válidas y merecen ser escuchadas.',
  'Eres digna de todo el amor y la paz que el universo puede ofrecer.',
];

export const timelineEvents: TimelineEvent[] = [
    { date: "01 de noviembre de 2024", title: "El comienzo de todo", description: "Apenas nos conocíamos y ya había algo en ti que me movía por dentro.", emotion: "Curiosidad, ternura, inicio cálido" },
    { date: "29 de noviembre de 2024", title: "Nuestra primera salida", description: "Fuimos al cine. Estabas luminosa. Quise besarte, pero preferí esperar.", emotion: "Magia, calma, deseo contenido" },
    { date: "01 de diciembre de 2024", title: "Nuestro primer beso", description: "Viniste a verme jugar. Me abrazaste sin importar nada. Ahí supe que esto era real.", emotion: "Cercanía, ternura, conexión" },
    { date: "02 de enero de 2025", title: "Nuestro primer diciembre juntos", description: "Cumpleaños, Navidad y Año Nuevo contigo. Todo se sintió más lleno, más nuestro.", emotion: "Gratitud, amor creciente" },
    { date: "18 de enero de 2025", title: "El día que fuimos novios", description: "Cerca de tu casa, dijimos lo que ya sabíamos: que queríamos elegirnos.", emotion: "Confirmación, amor, alegría" },
    { date: "06 de febrero de 2025", title: "Por ti, pedaleo lo que sea", description: "Crucé la ciudad en bici solo para llevarte dulces. Porque lo pequeño, contigo, se vuelve enorme.", emotion: "Cuidado, entrega, cariño silencioso" },
    { date: "05 de mayo de 2025", title: "La pausa y el regreso", description: "Nos separamos, pero el amor siguió. Las flores amarillas fueron mi manera de decirte: aún estoy aquí.", emotion: "Dolor, reencuentro, amor persistente" },
    { date: "29 de mayo de 2025", title: "Tu cumpleaños y el mes de la maestra", description: "Mayo fue todo tuyo. Te celebré por ser maestra, mujer y mi amor más grande.", emotion: "Orgullo, admiración, ternura" },
    { date: "25 de julio de 2025", title: "El silencio y la distancia", description: "Julio fue difícil, pero entendí que el amor verdadero también sabe esperar.", emotion: "Paciencia, amor maduro, esperanza" },
    { date: "31 de julio de 2025", title: "Cartas que ahora te entrego", description: "Te entrego todo esto que escribí. Cada palabra es una forma de decirte cuánto te amo.", emotion: "Plenitud, sinceridad, amor eterno" },
];

export const letterContent = {
  title: "Mi querida Andrea,",
  paragraphs: [
    "Si estás leyendo esto, es porque logré transformar un montón de código en un pequeño rincón del universo que es solo para ti. Quería crear un lugar al que pudieras volver siempre que necesitaras recordar lo increíble que eres.",
    "A veces, el día a día nos pesa y las dudas nos visitan sin ser invitadas. En esos momentos, quiero que vengas aquí y leas esto: eres la persona más fuerte, valiente y tierna que conozco. Iluminas cada espacio que habitas, no solo con tu sonrisa, sino con la bondad que emana de tu corazón.",
    "Admiro todo de ti. Admiro a la maestra que transforma vidas con paciencia y cariño. Admiro a la mujer que no se rinde, que sueña en grande y que ama con una intensidad que sana. Admiro cómo cuidas de los tuyos, cómo ríes hasta que te duela la panza y cómo encuentras belleza en las cosas más simples.",
    "Gracias por ser mi paz en medio del caos, mi inspiración y mi mejor amiga. Gracias por enseñarme que el amor verdadero es un equipo, un refugio y la aventura más bonita de todas. Eres mi persona favorita, hoy y siempre.",
    "Nunca lo dudes. Eres suficiente. Eres magia. Eres todo."
  ],
  signature: "Con todo mi amor, siempre tuyo."
};

export const ourSong: OurSong = {
  title: "ROMA",
  artist: "Humbe",
  url: "https://www.youtube.com/watch?v=fVhnW4NEiEU",
};

export const reasonsToLove: string[] = [
  "Por la forma en que tus ojos brillan cuando algo te apasiona.",
  "Porque tu risa es mi canción favorita.",
  "Por tu fortaleza, incluso en los días que te sientes frágil.",
  "Porque haces de lo simple, algo extraordinario.",
  "Por la ternura con la que cuidas a los que amas.",
  "Porque a tu lado, Andrea, todo se siente como estar en casa.",
  "Por tu inteligencia y tu infinita curiosidad.",
  "Porque me inspiras a ser una mejor persona cada día."
];

export const promises: PromiseData[] = [
  {
    icon: React.createElement(PromiseIcon),
    title: "Prometo seguir haciéndote reír",
    text: "Incluso en los días grises, prometo ser ese rayito de sol que te recuerde que siempre hay motivos para sonreír.",
  },
  {
    icon: React.createElement(PromiseIcon),
    title: "Prometo apoyar siempre tus sueños",
    text: "Seré tu mayor fan, tu confidente y tu apoyo incondicional en cada meta que te propongas. Tus sueños son los míos.",
  },
  {
    icon: React.createElement(PromiseIcon),
    title: "Prometo construir un futuro contigo",
    text: "Un futuro lleno de aventuras, calma, respeto y un amor que crece cada día. Prometo cuidarte, hoy y siempre.",
  },
];

export const treasures: Treasure[] = [
    {
        id: 'flower',
        icon: React.createElement(FlowerIcon),
        title: 'Una Flor Amarilla Inmortal',
        description: 'Un recordatorio de que incluso en la pausa, nuestro amor nunca dejó de florecer. Simboliza la esperanza, la alegría y la luz que siempre me has traído.',
        type: 'emoji',
        data: '🌼',
    },
    {
        id: 'key',
        icon: React.createElement(KeyIcon),
        title: 'La Llave de Mi Corazón',
        description: 'Solo tú tienes la llave que abre cada rincón de mi corazón. Es tuya, para siempre.',
        type: 'emoji',
        data: '🗝️',
    },
    {
        id: 'stars',
        icon: React.createElement(StarIcon),
        title: 'Un Fragmento de Cielo Estrellado',
        description: 'Cada estrella es un sueño que tenemos juntos, un recuerdo que atesoramos y una promesa de futuro. Nuestro amor es tan infinito como el universo.',
        type: 'animation',
        data: 'Para nosotros, el tiempo y la distancia son solo números.',
    },
];