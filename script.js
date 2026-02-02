document.addEventListener('DOMContentLoaded', () => {
    
    // --- 0. SISTEMA DE SONIDOS UI OPTIMIZADO ---
    const sfxHover = document.getElementById('sfx-hover');
    const sfxClick = document.getElementById('sfx-click');
    const sfxOpen = document.getElementById('sfx-open');

    // Función auxiliar no bloqueante
    const playSound = (audioEl) => {
        if(audioEl) {
            audioEl.currentTime = 0;
            audioEl.volume = 0.3; 
            // Promesa sin espera para no bloquear UI
            audioEl.play().catch(() => {}); 
        }
    };

    // Usar 'passive: true' mejora rendimiento de scroll en móviles si se usara ahí
    // Delegación de eventos para mejor performance
    document.body.addEventListener('click', (e) => {
        if (e.target.closest('.ui-trigger')) {
            playSound(sfxClick);
        }
    });

    document.querySelectorAll('.ui-trigger-hover').forEach(el => {
        el.addEventListener('mouseenter', () => playSound(sfxHover), { passive: true });
    });

    // --- 1. PANTALLA DE CARGA ---
    const loader = document.getElementById('loader');
    
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                playSound(sfxOpen);
            }, 800);
        }, 1500); // Reducido un poco para sensación de rapidez
    }

    // --- 2. SISTEMA DE REPRODUCTOR DE MÚSICA ---
    const songs = [
        {
            title: "If I Killed Someone For You",
            artist: "Alec Benjamin",
            src: "song.mp3", 
            lyrics: `Lo siento por haber hecho esto
                La sangre está en mis manos
                Me miro en el reflejo
                Y no sé quién soy
                Practico mi confesión
                Por si tengo que declarar
                Diré que aprendí la lección
                Que seré un hombre mejor
                Estoy empacando mis cosas
                Limpiando las paredes
                Enjuagando mi ropa
                Caminando por los pasillos
                Lo hice todo por ella
                Y no sentí nada
                No sé qué dirá
                Se lo preguntaré cuando llame
                ¿Me amarías más?
                ¿Me amarías más si matara a alguien por ti?
                ¿Me tomarías de la mano?
                Son las mismas manos que usé
                Cuando maté a alguien por ti
                ¿Me entregarías?
                Cuando digan que estoy huido?
                ¿Me esconderías cuando
                Mi cara aparezca en las noticias?
                Porque maté a alguien por ti
                Oigo las sirenas acercándose
                Veo las luces intermitentes
                Conduzco por los suburbios
                Con mi disfraz puesto
                Llego a su puerta
                Para mirarla a los ojos
                Le digo que soy yo
                Pero ella no me reconoce
                ¿No ves que estoy huyendo?
                Necesito un lugar donde esconderme
                Tengo que preguntarte algo
                ¿Podrías dejarme entrar?
                Solo déjame explicar
                No te mentiría
                Sé que entenderás
                Si me dejas quedarme esta noche
                ¿Me amarías más?
                ¿Me amarías más si matara a alguien por ti?
                ¿Me tomarías de la mano?
                Son las mismas manos que usé
                Cuando maté a alguien por ti
                ¿Me entregarías?
                Cuando digan que estoy huido?
                ¿Me esconderías cuando
                Mi cara aparezca en las noticias?
                Porque maté a alguien por ti
                Tienes que entender que
                El que maté fui yo
                Cambiando lo que era
                Por lo que querías que fuera
                Seguí todas tus indicaciones
                Hice todo lo que me pediste
                Espero que te haga feliz
                Porque ya no hay vuelta atrás
                ¿Me amarías más?
                ¿Me amarías más si matara a alguien por ti?
                ¿Me tomarías de la mano?
                Son las mismas manos que usé
                Cuando maté a alguien por ti
                ¿Me entregarías?
                Cuando digan que estoy huido?
                ¿Me esconderías cuando
                Mi cara aparezca en las noticias?
                Porque maté a alguien por ti`,
            meaning: `¿Alguna vez te has mirado al espejo y has sentido que la persona que te devuelve la mirada es un completo desconocido? ¿Cuántas veces has borrado partes de ti mismo —tus gustos, tu forma de hablar, tus sueños, tu personalidad— solo para encajar en lo que alguien más quería, hasta que ya no queda casi nada de quien realmente eras?

Esa es la esencia destructiva de esta canción: te matas en vida por complacer a otra persona. Cambias tanto que te conviertes en una versión falsa, vacía y rota de ti mismo, y al final ni siquiera esa persona te reconoce. Es patético y trágico a la vez, porque el precio más alto lo pagas tú: pierdes tu esencia, tu autenticidad, tu alma.

Piensa en esto: estás en una relación donde poco a poco dejas de escuchar la música que te gusta porque “a ella no le agrada”, dejas de vestirte como quieres porque “te ve más maduro así”, abandonas tus amigos porque “no encajan con su círculo”, cambias tus planes de futuro para seguir los suyos. Al principio parece un sacrificio noble (“lo hago por amor”), pero con el tiempo te das cuenta de que te estás deshaciendo pedazo por pedazo. Un día te miras y ya no reconoces tu voz, tu risa, tus opiniones. Eres un cascarón que actúa el papel perfecto para ella… hasta que un día ella te mira y dice “ya no eres el mismo de antes” o, peor, simplemente se va con alguien más auténtico. Y tú te quedas ahí, vacío, con las manos manchadas de la sangre de tu yo verdadero.

Eso no es amor, es autodestrucción disfrazada de entrega. Nadie merece que te mates por dentro para complacerlo. Tú no eres un proyecto de mejora personal para nadie. Eres una persona completa tal como eras antes de intentar ser lo que alguien más quería.

Si estás en ese proceso ahora mismo, párate. La verdad duele: cada vez que cambias una parte de ti por aprobación ajena, estás matando al único que puede hacerte realmente feliz a largo plazo. Mereces estar con alguien que te quiera exactamente como eres —con tus rarezas, tus gustos “raros”, tu forma natural de ser— sin necesidad de que te disfraces o te borres.

Tú vales entero, no en pedazos. Recupera lo que sacrificaste. Vuelve a escuchar tu música, usa la ropa que te gusta, habla como tú hablas, sueña lo que tú sueñas. Duele al principio, claro, porque soltar la ilusión de “si cambio lo suficiente me amará” es duro. Pero al otro lado está la libertad de ser tú sin miedo, y alguien que te elija por quien realmente eres, no por la versión editada que creaste para complacer.

Tú puedes reconstruirte. Ya demostraste que tienes la fuerza para cambiar por alguien más; ahora usa esa misma fuerza para volver a ser tú. Te lo mereces. Eres suficiente tal como naciste, antes de que nadie te pidiera que fueras diferente.`
    }
    ];

    let currentIdx = 0;
    const audio = document.getElementById('audio-player');
    const playBtn = document.getElementById('play-pause-btn');
    const playerContainer = document.querySelector('.music-player-container');
    
    const titleEl = document.getElementById('song-title');
    const artistEl = document.getElementById('song-artist');
    const lyricsEl = document.getElementById('lyrics-content');
    const meaningEl = document.getElementById('meaning-content');

    function loadSong(index) {
        if (!titleEl || !artistEl || !lyricsEl || !meaningEl) return;
        const s = songs[index];
        titleEl.innerText = s.title;
        artistEl.innerText = s.artist;
        if(audio) audio.src = s.src;
        lyricsEl.innerText = s.lyrics;
        meaningEl.innerText = s.meaning;
    }

    loadSong(currentIdx);

    if (playBtn && audio) {
        playBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play().then(() => {
                    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
                    if(playerContainer) playerContainer.classList.add('playing');
                }).catch(e => console.log("Interacción requerida o error", e));
            } else {
                audio.pause();
                playBtn.innerHTML = '<i class="fas fa-play"></i>';
                if(playerContainer) playerContainer.classList.remove('playing');
            }
        });
    }

    // --- 3. GALERÍA DE BOTS ---
    const maleGrid = document.getElementById('bots-masculinos');
    const femaleGrid = document.getElementById('bots-femeninos');
    const myName = "Archibald"; 

    if (maleGrid && femaleGrid) {
        if (typeof BOTS_LIST !== 'undefined' && Array.isArray(BOTS_LIST)) {
            const fragMale = document.createDocumentFragment();
            const fragFemale = document.createDocumentFragment();

            BOTS_LIST.forEach(bot => {
                if (!bot.nombre.includes(myName)) {
                    const item = document.createElement('a');
                    item.href = bot.url || '#';
                    item.className = 'bot-item ui-trigger'; 
                    // Animación optimizada
                    item.style.animation = `fadeIn 0.5s ease forwards`; 
                    
                    item.innerHTML = `
                        <img src="${bot.imagen}" loading="lazy" alt="${bot.nombre}">
                        <span>${bot.nombre}</span>
                    `;

                    if (bot.genero === 'masculino') fragMale.appendChild(item);
                    else fragFemale.appendChild(item);
                }
            });
            maleGrid.appendChild(fragMale);
            femaleGrid.appendChild(fragFemale);
        } else {
            maleGrid.innerHTML = '<p style="color:#555; font-size:0.8rem;">Sin conexión...</p>';
        }
    }

    // --- 4. STICKER INTERACTIVO ---
    const sticker = document.getElementById('honk-sticker');
    const honkAudio = new Audio('https://www.myinstants.com/media/sounds/honk-sound.mp3'); 
    
    if (sticker) {
        sticker.addEventListener('click', () => {
            honkAudio.currentTime = 0;
            honkAudio.volume = 0.5;
            honkAudio.play().catch(() => {});
            
            // Usamos clases CSS si fuera posible, pero mantener JS simple está bien
            sticker.style.transform = "scale(0.8) rotate(-20deg)";
            setTimeout(() => sticker.style.transform = "", 150);
        });
    }

    // --- 5. UTILIDADES UI (Tabs & Acordeones) ---
    // Funciones globales para onlick en HTML
    window.openOverlay = (id) => {
        playSound(sfxOpen);
        const el = document.getElementById(id);
        if(el) requestAnimationFrame(() => el.classList.add('active'));
    };
    
    window.closeOverlay = (id) => {
        playSound(sfxClick);
        const el = document.getElementById(id);
        if(el) el.classList.remove('active');
    };

    window.toggleFold = (id) => {
        playSound(sfxClick);
        const el = document.getElementById(id);
        if (el) {
            // Cierra otros con suavidad
            document.querySelectorAll('.foldable').forEach(f => {
                if(f.id !== id) f.classList.remove('active');
            });
            // Usa requestAnimationFrame para asegurar que el navegador esté listo para pintar
            requestAnimationFrame(() => {
                el.classList.toggle('active');
            });
        }
    };
});
