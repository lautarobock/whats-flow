import { Component } from '@angular/core';
import { Chat, ChatParserService } from './parser/chat-parser.service';

@Component({
    selector: 'wf-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    chats: Chat[] = [];

    constructor(
        private parser: ChatParserService
    ) {
//         this.chats.push(this.parser.parse(
//             `
//             22/9/20 14:38 - Los mensajes y las llamadas están cifrados de extremo a extremo. Nadie fuera de este chat, ni siquiera WhatsApp, puede leerlos ni escucharlos. Toca para obtener más información.
// 22/9/20 14:38 - Tano Mauro: Es momento q saltes a decir algo para envalentonar a becce
// 22/9/20 14:40 - Lautaro: ‎PTT-20200922-WA0082.opus (archivo adjunto)
// 22/9/20 14:40 - Tano Mauro: Jakska
// 22/9/20 14:46 - Lautaro: yo le meto 🌶️ y vos te pones del lado de beche
// 22/9/20 14:46 - Lautaro: ?
// 22/9/20 14:46 - Lautaro: para mi q tu nro nuevo en realidad era de vecotor
// 22/9/20 14:46 - Lautaro: como me cagaste
// 22/9/20 14:51 - Lautaro: ahi se lo ve tomando carrera
// 22/9/20 16:16 - Tano Mauro: Jajajajsj
// 22/9/20 16:16 - Tano Mauro: ‎PTT-20200922-WA0107.opus (archivo adjunto)
// 22/9/20 16:17 - Lautaro: jajajaj
// 22/9/20 16:17 - Tano Mauro: Era la idea
// 22/9/20 16:17 - Lautaro: para cebarlo nomas
// 22/9/20 16:18 - Tano Mauro: Es tirar un pucho en cordoba
// 22/9/20 16:18 - Tano Mauro: Prende enseguida
// 22/9/20 16:18 - Lautaro: ‎IMG-20200922-WA0108.jpg (archivo adjunto)
// 22/9/20 16:20 - Tano Mauro: ‎IMG-20200922-WA0111.jpg (archivo adjunto)
// 22/9/20 16:21 - Lautaro: jajaaj
// 22/9/20 16:22 - Lautaro: ‎PTT-20200922-WA0112.opus (archivo adjunto)
// 22/9/20 16:25 - Tano Mauro: ‎PTT-20200922-WA0113.opus (archivo adjunto)
// 22/9/20 16:27 - Lautaro: ‎PTT-20200922-WA0114.opus (archivo adjunto)
// 22/9/20 16:27 - Lautaro: ‎PTT-20200922-WA0115.opus (archivo adjunto)
// 22/9/20 16:31 - Tano Mauro: JajsjajsJ
// 22/9/20 16:32 - Tano Mauro: HACELO
// 22/9/20 16:32 - Tano Mauro: PARA QUE SOS NERD SINO
// 22/9/20 16:32 - Lautaro: ‎PTT-20200922-WA0121.opus (archivo adjunto)
// 22/9/20 16:38 - Tano Mauro: JaJjaJ
// 22/9/20 16:39 - Tano Mauro: Yo te ayudo a pensAr y te cebo mate
// 22/9/20 16:39 - Lautaro: 💪
// 15/10/20 19:48 - Tano Mauro: Lau muchas felicidades! Besos para los 3.... a disfrutarlo ahora. Abrazo grande
// 15/10/20 20:30 - Lautaro: Gracias tano! Muy contentos x aca 😍
// 18/10/20 10:53 - Tano Mauro: Lauta buen dia como se porta el peque?   Feliz dia para Mel !!
// 18/10/20 11:01 - Lautaro: Primera noche en casa y bastante bien, en 2 o 3 tramos dormimos bastante 🙂
// 18/10/20 11:03 - Lautaro: Muchas gracias dice 🙂
// 18/10/20 11:11 - Tano Mauro: Vamo!!!!!
// 18/10/20 11:12 - Tano Mauro: Bueno lau no molesto mas, disfruten
// 18/10/20 11:13 - Lautaro: 😉 No pasa nada...
//             `
//         ));
//         this.chats.push(this.parser.parse(`
// 16/6/20 19:33 - Seba Nutter: Espero estrenarlo en breve con una bella velada en el tigre con Uds
// 16/6/20 19:35 - Lautaro: 💪
// 16/6/20 19:35 - Lautaro: Hoy con 20 grados estaba ideal 😁
// 16/6/20 19:35 - Seba Nutter: Tal cual
// 22/9/20 15:03 - Seba Nutter: Lo queres hacer calentar, no?
// 22/9/20 15:08 - Lautaro: siempre
// 22/9/20 15:08 - Lautaro: esta vez me lo pidio el tano
// 22/9/20 15:09 - Seba Nutter: Jajaja
// 22/9/20 15:10 - Lautaro: :p
// 26/9/20 13:15 - Seba Nutter: <Multimedia omitido>
// 26/9/20 13:15 - Seba Nutter: <Multimedia omitido>
// 26/9/20 13:35 - Lautaro: <Multimedia omitido>
// 26/9/20 13:36 - Lautaro: <Multimedia omitido>
// 26/9/20 13:52 - Seba Nutter: <Multimedia omitido>
// 26/9/20 13:52 - Seba Nutter: <Multimedia omitido>
// 26/9/20 13:52 - Seba Nutter: <Multimedia omitido>
// 26/9/20 13:55 - Lautaro: <Multimedia omitido>
// 26/9/20 13:57 - Seba Nutter: <Multimedia omitido>
// 26/9/20 14:01 - Lautaro: Lindo laburito!
// 15/10/20 10:03 - Seba Nutter: Abrazo grande Lau! Felicidades a los tres!!! Beso a Mel!
// 15/10/20 10:05 - Seba Nutter: <Multimedia omitido>
// 15/10/20 10:05 - Lautaro: Gracias seba! Muy contentos x aca! 😍
// 15/10/20 10:06 - Seba Nutter: Me imagino!!! A disfrutar!!!!
// 15/10/20 10:19 - Lautaro: Seeeee
// 15/10/20 10:21 - Seba Nutter: <Multimedia omitido>
// 15/10/20 10:21 - Seba Nutter: <Multimedia omitido>
// 15/10/20 10:21 - Seba Nutter: <Multimedia omitido>
// 15/10/20 10:25 - Seba Nutter: Beso de Vero q ahí le mandé la foto
// 15/10/20 10:25 - Lautaro: Gracias! Mandale un beso!
// 15/10/20 18:22 - Seba Nutter: <Multimedia omitido>
// 15/10/20 18:35 - Lautaro: Y seran respondidos... Fue x Cesárea, rompió bolsa y después de 24 hs incluidas 7 de contracciones fuertes, casi no hubo dilatación.
// Peso 3.695
// Altura 52cm
// Mel bien, ya durmió un rato, estaba fríta.
// Nicanor sigue frito...
// A la teta se prendió e entrada y después le costó un poco más, pero la mina dijo que seguro estaba cansado
// 15/10/20 18:36 - Lautaro: Y a nadie le importa, pero a mi se me parte la cabeza 😉
// 15/10/20 18:37 - Seba Nutter: <Multimedia omitido>
// 15/10/20 18:38 - Seba Nutter: <Multimedia omitido>
// 15/10/20 18:41 - Lautaro: Voy a set el caddy de la familia 🤣🤣
// 15/10/20 18:41 - Seba Nutter: <Multimedia omitido>
// 15/10/20 18:42 - Lautaro: El martes le hicieron una eco pq la estimación venía grande y dio 4,400.... Así que para mí es chiquito
// 15/10/20 18:42 - Seba Nutter: <Multimedia omitido>
// 15/10/20 18:43 - Lautaro: Si, es un lindo peso!
// 15/10/20 18:44 - Lautaro: Abrazo grande!
// 15/10/20 18:44 - Lautaro: Besos a vero
// 15/10/20 18:44 - Seba Nutter: Beso grande Lau!!! Enjoy!!!`));
//         this.chats.push(this.parser.parse(`
//         22/9/20 08:10 - Lautaro: <Multimedia omitido>
// 22/9/20 08:11 - Tano Mauro: Jajajja
// 22/9/20 08:16 - Seba Nutter: <Multimedia omitido>
// 22/9/20 12:10 - Tano Mauro: <Multimedia omitido>
// 22/9/20 12:15 - ariel jelicie: Hermoso
// 22/9/20 12:15 - ariel jelicie: Cambia un poco la modidad, me gusta la innovación. (?)
// 22/9/20 12:16 - ariel jelicie: La clave es adaptarse a lo que aiga
// 22/9/20 12:26 - Fercho Arana: Jajaja
// 22/9/20 12:56 - Tano Mauro: <Multimedia omitido>
// 22/9/20 12:56 - Tano Mauro: Necesito solo una opinion
// 22/9/20 13:00 - Seba Nutter: <Multimedia omitido>
// 22/9/20 13:00 - Lautaro: estas paraa meterle like en tinder
// 22/9/20 13:00 - Lautaro: ?
// 22/9/20 13:01 - Gino Nutter: Sabado a la noche?
// 22/9/20 13:01 - Seba Nutter: Atención!
// 22/9/20 13:01 - Ska: <Multimedia omitido>
// 22/9/20 13:02 - ariel jelicie: Estoy sábado a la noche!
// 22/9/20 13:02 - ariel jelicie: Lista!
// 22/9/20 13:02 - Seba Nutter: Estoy!
// 22/9/20 13:02 - Gino Nutter: 1. Seba
// 2. Gino 
// 3. Ari
// 22/9/20 13:02 - ariel jelicie: Sábado a la noche:
// Ricky
// Ari
// Seba
// 22/9/20 13:02 - Tano Mauro: Jajajaj
// 22/9/20 13:02 - ariel jelicie: Macgiver!
// 22/9/20 13:03 - Gino Nutter: El ignorador esta siendo ignorado, jaque mate!
// 22/9/20 13:05 - Tano Mauro: Asado comité:
// Ricky
// Ari el niño polla
// Seba
// Tano
// 22/9/20 13:38 - Tano Mauro: @5491164508378 ???
// 22/9/20 13:39 - Pablex: Estoy completamente seguro que algo de lo que vos pagas por dia, le da de comer a este parasito
// 22/9/20 13:40 - Colo Jelicie: U viceversa
// 22/9/20 13:40 - Colo Jelicie: Y
// 22/9/20 13:40 - Pablex: Y a todos sus renacuajos, para que dentro de 15 años, haya 4 o 5 (con suerte) que hagan videos iguales
// 22/9/20 13:40 - Colo Jelicie: El IVA q el parásito paga cuando compra un frizee te dan de comer a vos y a tu familia
// 22/9/20 13:40 - Colo Jelicie: La cadena alimenticia que le dicen
// 22/9/20 13:41 - Pablex: Jajaja claro, ponele
// 22/9/20 14:34 - ariel jelicie: <Multimedia omitido>
// 22/9/20 14:35 - ariel jelicie: Gacela
// 22/9/20 14:35 - Tano Mauro: Tecnicamente no lo paga ella. Si recibe ife. Plan no trabajar. Auh. Etc etc
// 22/9/20 14:35 - Pablex: Oh dios
// 22/9/20 14:35 - ariel jelicie: Gasela
// 22/9/20 14:35 - Colo Jelicie: Si lo paga si consume. Si solo compra dólares y los guarda no
// 22/9/20 14:36 - ariel jelicie: Gasalla
// 22/9/20 14:36 - Pablex: Pero si vive de lo que le da el estado, no paga iva ella, lo auto paga el estado 🤷🏻‍♂️
// 22/9/20 14:37 - Colo Jelicie: Y te paga a vos con eso
// 22/9/20 14:37 - Colo Jelicie: Así funciona
// 22/9/20 14:37 - Tano Mauro: Que me paga a mi
// 22/9/20 14:37 - Colo Jelicie: A vos no.
// 22/9/20 14:37 - Tano Mauro: SI Hay algo q justamente no funciona es el estado
// 22/9/20 14:38 - Pablex: Coincido
// 22/9/20 14:39 - Seba Nutter: <Multimedia omitido>
// 22/9/20 14:39 - ariel jelicie: 7
// 22/9/20 14:40 - Seba Nutter: Te parece? Creí que era 8
// 22/9/20 14:40 - Tano Mauro: 6
// 22/9/20 14:40 - Seba Nutter: X la produccion
// 22/9/20 14:40 - Ska: <Multimedia omitido>
// 22/9/20 14:41 - Tano Mauro: 8.5
// 22/9/20 14:41 - ariel jelicie: Ufff
// 22/9/20 14:41 - Seba Nutter: Ah forro
// 22/9/20 14:41 - ariel jelicie: Hay mucho laburo en libson?
// 22/9/20 14:42 - Lautaro: jajaja
// 22/9/20 14:43 - Lautaro: parece que estan aprovechando bien los creditos para empresas que estan dando con la plata de @5491164508378
// 22/9/20 14:43 - Tano Mauro: Pero esa plata se devuelve
// 22/9/20 14:44 - Lautaro: maso...
// 22/9/20 14:44 - Lautaro: son a tasas bajas... alguien se hace cargo de eso
// 22/9/20 14:44 - Lautaro: y seguramente sera con el IVA de todas las facturas que religiosamente pide pablo cada vez q compra
// 22/9/20 14:44 - Tano Mauro: 47% es baja
// 22/9/20 14:45 - Lautaro: los que son para sueldos creo qeu son del 20pico
// 22/9/20 14:45 - Ska: Tanto como en Lucius , decime vos!
// 22/9/20 14:46 - Tano Mauro: Ahhh
// 22/9/20 14:46 - Lautaro: tan tranquilo que se pesa con zapatillas y yoguineta
// 22/9/20 14:46 - ariel jelicie: Una banda!
// 22/9/20 14:47 - Ska: Estamos bien entonces!
// 22/9/20 14:47 - Ska: <Multimedia omitido>
// 22/9/20 14:49 - ariel jelicie: Hoy hice tres growlers.... Y Vi uno planeador
// 22/9/20 14:49 - Colo Jelicie: Yo fui a buscar insumos. 10 minutos de trabajo
// 22/9/20 14:50 - Ska: Yo acá en la oficina a full
// 22/9/20 14:50 - Ska: <Multimedia omitido>
// 22/9/20 14:52 - Pablex: Primero y principal, a mi nadie me regala nada. Yo soy empleado del estado, y trabajo para obtener mi sueldo.
// Segundo, pago casi todo con debito, me dan factura en practicamente todo y no evado ningun impuesto 🤷🏻‍♂️
// Y eso que no estoy de acuerdo con los impuestos que se cobran.
// Creo que los que mas de acuerdo tienen que estar y los que mas deberian pagar los impuestos religiosamente son los socialistas, ya que de ahí sale la plata para “repartir”.
// Y juuuuuustamente, los mas “socialistas” que conozco, son los mas evasores que conozco.
// Oh, casualidad
// 22/9/20 14:54 - Pablex: Por ultimo, creo que que hay que achicar mucho al estado, si en esa achicada cae mi puesto laboral, lo aceptaré. Aunque lo excesivamente grande es el ejecutivo y legislativo.. pero bueno, todo sea por el bien futuro del pais.
// 22/9/20 14:55 - Lautaro: vos pensas que tu jubilación va a salir exclusivamente de lo que aportas? lo mismo que la asistencia medica? edicacion, etc?
// 22/9/20 14:55 - Lautaro: el tema es ese. Cuanto realmente lo que vos ganaste lo hiciste VOS solo.. pero no la sigo pq seba se aburre
// 22/9/20 14:57 - Colo Jelicie: Jajaja
// 22/9/20 14:58 - Pablex: espero que haya fondos para pagar la jubilacion cuando me toque. Solo eso
// 22/9/20 14:59 - Lautaro: espero que estes ahorrando por otro lado como buen liberal
// 22/9/20 14:59 - Pablex: No tengo la suerte
// 22/9/20 14:59 - Pablex: Aun mi jubilacion esta en el ips, no se por cuanto tiempo
// 22/9/20 15:00 - Lautaro: o sea que estas planeando vivir del estado
// 22/9/20 15:00 - Lautaro: pillin
// 22/9/20 15:01 - ariel jelicie: 8
// 22/9/20 15:01 - Pablex: No, de mi jubilacion.. pero por mi, que vuelvan las afjp..
// Funcionarian los fondos estatales, siempre que no metan la mano.
// Pero desde que estan, todos los gobiernos metieron la mano
// 22/9/20 15:01 - Pablex: Macri inclusive
// 22/9/20 15:01 - Pablex: Aclaro para que no salte el aciete
// 22/9/20 15:01 - Lautaro: tu jubilacion no es un fondo de inversion ni de retiro, es un sistema al que todos aportan y todos cobran, no necesariamente lo que aportaron
// 22/9/20 15:02 - Lautaro: pero bueno
// 22/9/20 15:02 - Lautaro: cada uno vive de la parte q le conviene
// 22/9/20 15:02 - Lautaro: por suerte sos blanquito
// 22/9/20 15:03 - Pablex: Ya lo se.. el sistema esta pesimo, por eso es tan importante reformarlo.
// 4 activos tienen que mantener 1 pasivo., ahi dan los numeros.
// En argentina no llegan a 2 activos por cada pasivo.
// No tiene futuro.
// 22/9/20 15:04 - ariel jelicie: Yo tengo un amigo que es pasivo
// 22/9/20 15:05 - Pablex: Si vos sos el activo no me imagino como debe tener el buje
// 22/9/20 15:06 - Seba Nutter: Ariel entendió todo...siempre
// 22/9/20 15:07 - ariel jelicie: Pasivos sobran, lo que falta son capitalistas
// 22/9/20 15:08 - Pablex: <Multimedia omitido>
// 22/9/20 15:10 - Ska: Becce basta
// 22/9/20 15:10 - Ska: Te hacen saltar al pedo
// 22/9/20 15:11 - Seba Nutter: Es como jugar a ignorar a Ari, se divierten barato
// 22/9/20 15:11 - Pablex: 🤷🏻‍♂️
// 22/9/20 15:11 - Ska: Basta amigo
// 22/9/20 15:11 - Ska: Vos vas a seguir siendo liberal y lauta seguirá siendo zurdo
// 22/9/20 15:12 - Ska: Perdón Laura* no me quería poner tan serio
// 22/9/20 15:12 - Pablex: Yo vivo o trato de vivir como pienso. Eso me hace feliz
// 22/9/20 15:12 - Ska: Gasta las balas dónde valen la pena
// 22/9/20 15:13 - Ska: Cómo en la villas
// 22/9/20 15:13 - Ska: Jajaj
// 22/9/20 15:13 - Seba Nutter: <Multimedia omitido>
// 22/9/20 15:14 - Ska: 🤣🤣🤣
// 22/9/20 15:14 - Lautaro: ahora te tengo que atender a vos tambien Ska?!
// 22/9/20 15:14 - Lautaro: daaa
// 22/9/20 15:14 - Pablex: Jaja tampoco estoy de acuerdo pero bueno..
// Pensar que por ser liberal queres matar a los pobres.
// Es como pensar que por ser “zurdo” o socialista te encanta el regimen cubano. Muy Basico lo tuyo amigo
// 22/9/20 15:14 - Lautaro: dejanos divertirnos
// 22/9/20 15:15 - Lautaro: no hay futbol, danos algo!
// 22/9/20 15:15 - Lautaro: algo!!!
// 22/9/20 15:15 - Lautaro: mira, vos lo defendes y asi te paga
// 22/9/20 15:15 - Ska: Chau me aburro
// 22/9/20 15:15 - Lautaro: ayudame q lo liquidamos en un toque
// 22/9/20 15:17 - Ska: Vayanse a cojer a miley y a Fidel cada uno como más le guste
// 22/9/20 15:19 - Lautaro: que cosa gay
// 22/9/20 15:19 - Pablex: Mira, cuando tenes una propiedad que el 50% (por lo menos) de la sociedad no la podria comprar, ya se contradice un poco con la mentalidad de la igualdad y de repartir. Pero bueno.
// Es fácil hablar de repartir y distribuir equitativamente con dolares en la mano, en tu casa y tomandote un vino de marca.
// Viajando.. Y todo lo que puede (o podia) hacer la clase media y media/alta para arriba... asi somos todos socialistas, con la guita ajena, obvio
// 22/9/20 15:19 - Pablex: Hay que ayudar a progresar. No mantener.
// 22/9/20 15:20 - Pablex: Cuantos menos pobres haya, porque se los ayude a salir adelante, mas plata va a haber para todos.
// Pero eso no sirve. Sirve mantener y que te voten como a papa noel
// 22/9/20 15:21 - Pablex: El futuro... vemos.. le tocara a otro. Ellos se van con los bolsillos llenos, no van a tener drama.. de ultima se van a vivir a otro pais y listo.
// 22/9/20 15:23 - ariel jelicie: Lautaro es casi ambidiestro
// 22/9/20 15:24 - Pablex: Ambizurdo, como yo jugando al futbol
// 22/9/20 15:28 - Lautaro: Eliminaste este mensaje
// 22/9/20 15:28 - Ska: Cagon
// 22/9/20 15:30 - Lautaro: 1) no soy socialista,
// 2) donde esta la lengua
// 3) no te calentes
// 4) ska boton
// 5) casi mi unico problema de tu discurso es que creas q vos lograste todo solo y que los demas viven de tus impuestos
// 6) sigo con el pto 1, no soy socialista, no creo que haya que repartir pata todos sin evaluar nada y sin esfuierzo, solo creo q el estado debe intervenir para que todos tengan oportu8nidades, ni siquiera digo las mismas, sino las minimas para poder lorgar algo descenrte en la vida
// 22/9/20 15:30 - Lautaro: 7) chupame la pija
// 22/9/20 15:32 - Ska: Estoy de acuerdo con el punto 4
// 22/9/20 15:32 - Ska: No tanto con el 7
// 22/9/20 15:32 - Lautaro: jeje
// 22/9/20 15:33 - ariel jelicie: No respondiste si sos casi ambidiestro
// 22/9/20 15:33 - Lautaro: tengo la zurda en la derechja y la derecha en la zurda...
// 22/9/20 15:33 - Ska: Jaja
// 22/9/20 15:34 - Lautaro: pero mi cerebro no lo sabe
// 22/9/20 15:34 - Lautaro: lo cual me afecta principalmente en ese deporte q otrora practicabamos
// 22/9/20 15:35 - Pablex: 1, bien!
// 2, no entendi lo de la lengua
// 3, no me calente, ni ahi.. solo me expreso
// 4, guardo mi opinion
// 5, no creo haber logrado todo solo, ni ahi. Ni creo que vivan de mis impuestos, pero si creo que siguen ahogando a la parte de la sociedad que aporta para regalar y mantener a la sociedad que no aporta
// 6, totalmente de acuerdo
// 7, preguntale al pasivo amigo de ari, yo paso

// 8, te quiero igual que siempre aunque crucemos mil opiniones por pensar distinto, casi igual, o igual y contradecir para pelear. Jajaja
// 22/9/20 15:37 - Lautaro: 😍
// 22/9/20 15:37 - Lautaro: igual que siempre puede ser 0, pero esta bien
// 22/9/20 15:37 - Lautaro: es lo mismo qeu todos queremos a bolocho
// 22/9/20 15:37 - Pablex: No, siempre te aprecié
// 22/9/20 15:38 - Lautaro: antes me querias, ahora me aprecias... esta relaacion se va a pique
// 22/9/20 15:38 - Lautaro: estoy gordo? es eso no?
// 22/9/20 15:39 - Pablex: No te veo hace meses... pero no estabas gordo, venias bien de peso...
// 22/9/20 15:40 - Lautaro: no voy a explicar mas chistes
// 22/9/20 15:40 - Lautaro: listo
// 22/9/20 15:40 - Lautaro: nos vemos en el futuro
// 22/9/20 15:41 - Pablex: Lo entendi eh
// 22/9/20 15:42 - Pablex: Solo que colgue en seguir
// 22/9/20 15:42 - Bolocho: Lautaro sos un trapo sucio de comunismo...
// 22/9/20 15:44 - ariel jelicie: Jajaja gracias por estar, 9
// 22/9/20 15:44 - ariel jelicie: Me fui un poco cuando no agarro el un dos tres no te calientes de brigada cola, no puedo dejarlo ir
// 22/9/20 15:49 - Pablex: Uhhh ese me lo comi jajaja
// 22/9/20 15:52 - Lautaro: gracias :)
// 22/9/20 15:53 - Pablex: Fue bueno
// 22/9/20 16:15 - Tano Mauro: Uhhh boludo
// 22/9/20 16:16 - Tano Mauro: 98 mensajes sin leer
// 22/9/20 16:16 - Tano Mauro: Uds no me dejan olvidar a locati
// 22/9/20 16:16 - Ska: No sé que te sorprende .
// 22/9/20 16:17 - Tano Mauro: La puta madre
// 22/9/20 16:17 - Tano Mauro: Me perdi todo esto
// 22/9/20 16:18 - Colo Jelicie: Yo lo guardo para un Rocky point event
// 22/9/20 16:18 - Seba Nutter: <Multimedia omitido>
// 22/9/20 16:25 - Tano Mauro: Volvemos a lo importante
// 22/9/20 16:26 - Tano Mauro: 👆
// 22/9/20 17:45 - Fercho Arana: <Multimedia omitido>
// 22/9/20 17:47 - Lautaro: 😁
// 22/9/20 17:48 - Lautaro: 6⃣
// 22/9/20 17:51 - Ska: <Multimedia omitido>
// 22/9/20 18:00 - Pablex: Jajajajjaajja
// 22/9/20 18:01 - Tano Mauro: <Multimedia omitido>
// 22/9/20 18:01 - Fercho Arana: Les hago comer mierda a los dos
// 22/9/20 18:01 - Fercho Arana: Pobre pibe
// 22/9/20 18:01 - Tano Mauro: Asi nos manejan
// 22/9/20 18:02 - Tano Mauro: Mira @5491164508378
// 22/9/20 18:02 - Tano Mauro: El ministro de  economia de Laura hablandole al pueblo nacional y popular
// 22/9/20 18:03 - Pablex: Y dale
// 22/9/20 18:04 - Fercho Arana: Politicos diciendo eso.. que raro
// 22/9/20 18:29 - Lautaro: 🤦‍♂️
// 22/9/20 18:30 - Fercho Arana: <Multimedia omitido>
// 22/9/20 19:13 - ariel jelicie: <Multimedia omitido>
// 22/9/20 19:19 - Ska: Marian debe estar sorprendida de lo interesado que estás en la actualidad...
// 22/9/20 19:27 - ariel jelicie: No puedo estar preocupado por la realidad del país? Nadie es tan neutro como 26 tv
// 22/9/20 19:28 - Ska: 😅
// 22/9/20 19:37 - Pablex: Jajaja, últimamente canal 26 se torno recontra anticuarentena
// 22/9/20 19:38 - Pablex: No solo sol perez... varios mas..
// deben bajar linea en el canal
// 22/9/20 19:53 - Ska: <Multimedia omitido>
// 22/9/20 19:53 - Tano Mauro: Hermoso
// 22/9/20 19:54 - Lautaro: 🤦‍♂️
// 22/9/20 19:55 - Ska: Me dieron unas ganas de salir de abajo y dar un pase mal
// 22/9/20 19:59 - Gino Nutter: Jajajajaja
// 22/9/20 21:06 - Lautaro: Ahh pero la puta
// 22/9/20 21:32 - Colo Jelicie: Impecable
// 22/9/20 21:49 - Lautaro: Hay un par de celestes que juegan para los rojos?
// 22/9/20 21:55 - Lautaro: Eliminaste este mensaje
// 22/9/20 21:55 - Lautaro: Sip
// 22/9/20 22:05 - Pablex: Jajaja
// 23/9/20 15:40 - El código de seguridad de Goma cambió. Toca para más información.
// 23/9/20 15:49 - Lautaro: <Multimedia omitido>
// 23/9/20 15:50 - Seba Nutter: Jajajjaja me reí
// 23/9/20 15:50 - Seba Nutter: 9,50
// 23/9/20 15:57 - Lautaro: jeje
// 23/9/20 15:58 - Fercho Arana: 😂😂😂😂💣
// 23/9/20 15:58 - Fercho Arana: 🏆
// 23/9/20 16:13 - Gino Nutter: Jajajajaja
// 23/9/20 19:14 - Tano Mauro: Recien lo veo... 9
// 23/9/20 19:17 - Tano Mauro: <Multimedia omitido>
// 23/9/20 20:43 - Ska: <Multimedia omitido>
// 23/9/20 20:43 - Ska: <Multimedia omitido>
// 23/9/20 20:45 - Gino Nutter: A bue
// 23/9/20 20:45 - Colo Jelicie: Buena vestimenta
// 23/9/20 20:48 - Seba Nutter: Tocamos fondo...
// 23/9/20 20:48 - Seba Nutter: Volve Vale, te perdonamos!!!
// 23/9/20 20:49 - Seba Nutter: La cara de Ska es de vergüenza????
// 23/9/20 20:49 - Ska: Es un orgullo
// 23/9/20 20:49 - Seba Nutter: Jajajaja
// 23/9/20 21:02 - Pablex: Jjajajajajaa
// 23/9/20 21:02 - Pablex: 9
// 23/9/20 22:14 - Tano Mauro: Me dijo veni tano sacate una foto que hago reir a los pibes
// 23/9/20 22:14 - Tano Mauro: <Multimedia omitido>
// 23/9/20 22:14 - Tano Mauro: Pero ojo al piojo.....casi 3kg menos
// 23/9/20 22:47 - Pablex: <Multimedia omitido>
// 23/9/20 22:49 - Ska: Reenviado?
// 23/9/20 22:49 - Tano Mauro: De mi cel anteiro
// 23/9/20 22:49 - Tano Mauro: No tengo nada en este
// 23/9/20 22:50 - Ska: Mmmm
// 23/9/20 22:51 - Gino Nutter: Jajajajajajaja
// 23/9/20 22:51 - Tano Mauro: <Multimedia omitido>
// 23/9/20 22:52 - Gino Nutter: Dale cuídate que el sábado hay asado!!
// 23/9/20 22:52 - Tano Mauro: Donde ?
// 23/9/20 22:53 - Gino Nutter: No esta designada la sede, mi casa como siempre esta disponible
// 23/9/20 23:00 - Tano Mauro: Puedo habilitar el quincho de Pascual
// 23/9/20 23:26 - ariel jelicie: Hector anteiro
// 24/9/20 11:38 - ariel jelicie: <Multimedia omitido>
// 24/9/20 11:45 - Fercho Arana: Esta abajo del rosa
// 24/9/20 11:46 - Fercho Arana: 🤹‍♂️
// 24/9/20 11:57 - Lautaro: <Multimedia omitido>
// 24/9/20 12:07 - Colo Jelicie: 9
// 24/9/20 12:07 - Colo Jelicie: Por qué estoy contento que hoy juega boca
// 24/9/20 12:11 - ariel jelicie: Jajaja
// 24/9/20 12:15 - Fercho Arana: Jajajaj
// 24/9/20 12:20 - Lautaro: jaj
// 24/9/20 12:20 - Lautaro: odio este meme
// 24/9/20 12:20 - Lautaro: odio mas que dure tanto`));
    }

    addChat(chat: Chat): void {
        this.chats.push(chat);
        this.chats = this.chats.slice();
    }
}
