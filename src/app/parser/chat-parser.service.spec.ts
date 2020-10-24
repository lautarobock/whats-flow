import { TestBed } from '@angular/core/testing';

import { ChatParserService } from './chat-parser.service';

fdescribe('ChatParserService', () => {
    let service: ChatParserService;
    const data = `22/9/20 14:38 - Los mensajes y las llamadas están cifrados de extremo a extremo. Nadie fuera de este chat, ni siquiera WhatsApp, puede leerlos ni escucharlos. Toca para obtener más información.
  22/9/20 14:38 - Tano Mauro: Es momento q saltes a decir algo para envalentonar a becce
  22/9/20 14:40 - Lautaro: ‎PTT-20200922-WA0082.opus (archivo adjunto)
  22/9/20 14:40 - Tano Mauro: Jakska
  22/9/20 14:46 - Lautaro: yo le meto 🌶️ y vos te pones del lado de beche
  22/9/20 14:46 - Lautaro: ?
  22/9/20 14:46 - Lautaro: para mi q tu nro nuevo en realidad era de vecotor
  22/9/20 14:46 - Lautaro: como me cagaste
  22/9/20 14:51 - Lautaro: ahi se lo ve tomando carrera
  22/9/20 16:16 - Tano Mauro: Jajajajsj
  22/9/20 16:16 - Tano Mauro: ‎PTT-20200922-WA0107.opus (archivo adjunto)
  22/9/20 16:17 - Lautaro: jajajaj
  22/9/20 16:17 - Tano Mauro: Era la idea
  22/9/20 16:17 - Lautaro: para cebarlo nomas
  22/9/20 16:18 - Tano Mauro: Es tirar un pucho en cordoba
  22/9/20 16:18 - Tano Mauro: Prende enseguida
  22/9/20 16:18 - Lautaro: ‎IMG-20200922-WA0108.jpg (archivo adjunto)
  22/9/20 16:20 - Tano Mauro: ‎IMG-20200922-WA0111.jpg (archivo adjunto)
  22/9/20 16:21 - Lautaro: jajaaj
  22/9/20 16:22 - Lautaro: ‎PTT-20200922-WA0112.opus (archivo adjunto)
  22/9/20 16:25 - Tano Mauro: ‎PTT-20200922-WA0113.opus (archivo adjunto)
  22/9/20 16:27 - Lautaro: ‎PTT-20200922-WA0114.opus (archivo adjunto)
  22/9/20 16:27 - Lautaro: ‎PTT-20200922-WA0115.opus (archivo adjunto)
  22/9/20 16:31 - Tano Mauro: JajsjajsJ
  22/9/20 16:32 - Tano Mauro: HACELO
  22/9/20 16:32 - Tano Mauro: PARA QUE SOS NERD SINO
  22/9/20 16:32 - Lautaro: ‎PTT-20200922-WA0121.opus (archivo adjunto)
  22/9/20 16:38 - Tano Mauro: JaJjaJ
  22/9/20 16:39 - Tano Mauro: Yo te ayudo a pensAr y te cebo mate
  22/9/20 16:39 - Lautaro: 💪
  15/10/20 19:48 - Tano Mauro: Lau muchas felicidades! Besos para los 3.... a disfrutarlo ahora. Abrazo grande
  15/10/20 20:30 - Lautaro: Gracias tano! Muy contentos x aca 😍
  18/10/20 10:53 - Tano Mauro: Lauta buen dia como se porta el peque?   Feliz dia para Mel !!
  18/10/20 11:01 - Lautaro: Primera noche en casa y bastante bien, en 2 o 3 tramos dormimos bastante 🙂
  18/10/20 11:03 - Lautaro: Muchas gracias dice 🙂
  18/10/20 11:11 - Tano Mauro: Vamo!!!!!
  18/10/20 11:12 - Tano Mauro: Bueno lau no molesto mas, disfruten
  18/10/20 11:13 - Lautaro: 😉 No pasa nada...`;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ChatParserService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('Should parse a chat ignoring media', () => {
        const chat = service.parse(data);
        expect(chat.messages.length).toBe(38);

        const msg1 = chat.messages[1];
        expect(msg1.from).toBe('Tano Mauro');
        expect(msg1.date).toEqual(new Date('2020-09-22 14:38'));
        expect(msg1.text).toBe('Es momento q saltes a decir algo para envalentonar a becce');
    });

    it('Should treat security messages', () => {
        const chat = service.parse(data);
        expect(chat.messages.length).toBe(38);

        const msg0 = chat.messages[0];
        expect(msg0.from).toBe('');
        expect(msg0.text).toBe('Los mensajes y las llamadas están cifrados de extremo a extremo. Nadie fuera de este chat, ni siquiera WhatsApp, puede leerlos ni escucharlos. Toca para obtener más información.');
    });
});
