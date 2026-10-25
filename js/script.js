/**
 * ==============================================================================
 * 🎂 BIRTHDAY WEBSITE PERSONALIZATION SETTINGS 🎂
 * ==============================================================================
 * Welcome! You can personalize this entire birthday website right here.
 * You do NOT need to edit index.html or css/style.css.
 * 
 * 📁 WHERE TO PUT YOUR MEDIA FILES:
 * 1. PHOTOGRAPH:
 *    Place your picture in: assets/images/
 *    Default filename: birthday-photo.jpg (or change photoFilename below).
 *    If no image is added, a cute kawaii camera placeholder displays automatically.
 * 
 * 2. BACKGROUND MUSIC:
 *    Place your mp3 song in: assets/audio/
 *    Default filename: background-music.mp3 (or change musicFilename below).
 *    Music only starts when the visitor clicks the "Music: Off" button.
 * ==============================================================================
 */

const BIRTHDAY_CONFIG = {
  // ----------------------------------------------------------------------------
  // 1. RECIPIENT DETAILS
  // ----------------------------------------------------------------------------
  personName: "MADHU",               // Birthday person's name
  nickname: "DUMBO",                 // Preferred nickname used in greetings
  senderName: "ROSHAN",              // Sender's name

  // ----------------------------------------------------------------------------
  // 2. BIRTHDAY HEADINGS & SUBTITLES
  // ----------------------------------------------------------------------------
  welcomeHeading: "Happy Birthday, MADHU! 🎂",
  welcomeSubtitle: "A little birthday surprise made especially for you, DUMBO. 💗",
  heroHeading: "Happy Birthday, My DUMBO! 💖",
  heroSubtitle: "Welcome to your very own magical birthday room ✨",

  // ----------------------------------------------------------------------------
  // 3. FIVE NUMBERED FRIENDSHIP LETTERS (Titles, teasers, and personal messages)
  // ----------------------------------------------------------------------------
  letters: [
    {
      id: 1,
      title: "Happy Birthday, My DUMBO! 💗",
      teaser: "Where my heartfelt birthday wishes and blessings for you begin…",
      badge: "Note 1 of 5 💌",
      date: "A Message from Your Friend",
      greeting: "Happy Birthday, MADHU! 🎂💗",
      body: "Happiest birthday to my DUMBO! Today is all about you, and I genuinely hope your day is filled with happiness, laughter, unforgettable moments, and everything that makes you smile.\n\nMay this new chapter bring you closer to your dreams, give you countless reasons to be happy, and surround you with people who appreciate the wonderful person you are. No matter what life brings your way, I hope you always find the strength to keep going and the courage to chase everything you wish for.\n\nStay the same crazy, wonderful person you are. Keep smiling, keep shining, and never forget how special you are as a friend.\n\nEnjoy every second of your day, MADHU. You deserve the very best!",
      closing: "With lots of birthday wishes,",
      signature: "ROSHAN ❤️"
    },
    {
      id: 2,
      title: "A Friendship That Never Gave Up",
      teaser: "Even through misunderstandings, you never let go of our bond…",
      badge: "Note 2 of 5 💌",
      date: "Our Friendship Story 🫂",
      greeting: "Dear DUMBO, 💗",
      body: "If someone asked me what makes our friendship special, I wouldn't say that we have always agreed with each other or that everything between us has been perfect. We've had our misunderstandings, arguments, and conflicts, and there have been moments when things became difficult between us. But even through all those situations, you never completely let go of our friendship, and that is something I will always appreciate.\n\nOur friendship has taught me that a genuine connection isn't about never having disagreements. It's about the memories we share, the understanding we slowly build, and the bond that remains meaningful even when things aren't easy. We might not always understand each other, and sometimes we may need time to work through our differences, but I will never forget how our friendship continued despite everything.\n\nMADHU, I'm genuinely glad that we became friends. Out of all the people we could have met, I'm grateful that our paths crossed and that we got the chance to build these memories together.\n\nThank you for being my DUMBO, for being part of my college days, and for being someone whose place in my life I truly value.\n\nWhatever the future holds, I hope we continue to grow, understand each other better, laugh at our silly moments, and create more memories together.",
      closing: "Always grateful for our friendship,",
      signature: "ROSHAN 💗"
    },
    {
      id: 3,
      title: "Those First Few Months of College",
      teaser: "Looking back at our first few months of college together…",
      badge: "Note 3 of 5 💌",
      date: "College Memories 🌸",
      greeting: "Dear MADHU, 🥹🌷",
      body: "Whenever I think about some of my favourite memories, my mind goes back to those first few months of college, when we were just getting to know each other and our friendship was beginning to grow.\n\nBack then, we probably had no idea how many memories we would create or how important those ordinary college days would become when we looked back on them. The conversations, the laughter, the random little moments, and the happiness of slowly becoming friends are memories I wish we could hold on to forever.\n\nSometimes I wish we could go back to those early months and experience everything again, just as it happened the first time. I wish those days could last a little longer, with the same excitement, the same carefree feeling, and all those little moments that made college special.\n\nIt's funny how we don't always realize we're living some of our favourite memories until time has already passed.\n\nMADHU, if I could revisit one chapter of our friendship, those first few months would definitely be among the first places I'd choose. I hope we continue creating new memories that we'll look back on years from now with the same happiness and nostalgia.\n\nThose days will always have a special place in my memories.",
      closing: "Your friend,",
      signature: "ROSHAN ❤️"
    },
    {
      id: 4,
      title: "Whenever You Need Me, DUMBO",
      teaser: "A promise that you will always have a friend in me…",
      badge: "Note 4 of 5 💌",
      date: "A Promise from ROSHAN 🤝",
      greeting: "Listen, MADHU. 🫂💗",
      body: "There is something I want you to remember, no matter how much life changes: you will always have a friend in me.\n\nWhenever you feel overwhelmed, whenever things don't go according to plan, or whenever you simply need someone to listen, I want you to know that you can reach out to me. You don't have to pretend that everything is fine when it isn't, and you don't have to handle every difficult situation alone.\n\nI might not always have the perfect advice or know exactly what to say, but I'll do my best to listen, understand, and stand beside you whenever you need support.\n\nWhether it's a difficult day, a confusing situation, a small achievement you want to share, or just one of those moments when you feel like talking to someone, you can always reach out.\n\nWe may eventually have different responsibilities, different routines, and different paths to follow. We might not always be able to meet whenever we want, but distance and busy schedules don't have to erase the friendship we've built.\n\nWherever you are and whenever you need a friend, I'll do my best to be there for you. Until the very end, I want you to know that your happiness matters to me and that I'll always wish the best for you.\n\nRemember that, DUMBO. You don't have to face everything alone.",
      closing: "Always your friend,",
      signature: "ROSHAN ❤️"
    },
    {
      id: 5,
      title: "One Last Little Secret",
      teaser: "The final little truth before your grand birthday reveal…",
      badge: "Note 5 of 5 💌",
      date: "The Final Surprise 🤫",
      greeting: "Dear DUMBO,",
      body: "You've unlocked all five little secrets, but the biggest surprise of all is still waiting right around the corner! Thank you for simply being you—for your light, your loyalty, and your giant heart. Now, take a deep breath... because there is one more special birthday surprise waiting just below!",
      closing: "Ready for your grand finale?",
      signature: "Look right below... 🎁"
    }
  ],

  // ----------------------------------------------------------------------------
  // 4. GIFT BOX & PHOTOGRAPH REVEAL
  // ----------------------------------------------------------------------------
  giftHeading: "One Last Surprise for You, DUMBO! 🎁",
  giftSubtitle: "There's something special waiting inside, MADHU. 💗",
  giftInstructionLocked: "Open all 5 little notes above to unlock this birthday surprise! 💌",
  giftInstructionUnlocked: "There's something special waiting inside, MADHU. 💗",
  giftRevealCaption: "“A little memory, saved just for you, DUMBO. 💗”",
  photoFilename: "surprise.png",
  finalNoteHeading: "One Last Little Message for You 💌",
  finalNoteMessage: "MADHU, no matter where life takes us, I hope we always keep the beautiful memories we've made and continue creating many more. Thank you for being part of my college days and my journey. Keep smiling, keep growing, and never forget that you have a friend in me. Happy Birthday, DUMBO! ❤️ — ROSHAN",

  // ----------------------------------------------------------------------------
  // 5. FINAL CELEBRATION SECTION
  // ----------------------------------------------------------------------------
  finalCelebrationHeading: "Happy Birthday, DUMBO! 🎂",
  finalCelebrationMessage: "Today is all about you, MADHU! Your happiness, your laughter, and all the wonderful dreams waiting for you. I hope this little surprise brought a smile to your face. Keep smiling, stay the same incredible DUMBO, and have the most unforgettable birthday! — ROSHAN ❤️",

  // ----------------------------------------------------------------------------
  // 6. TEDDY BEAR MASCOT COMPANION SPEECH BUBBLES
  // ----------------------------------------------------------------------------
  teddySpeech: {
    welcome: "Psst, MADHU! ROSHAN has something special for you! 🐘💗",
    lettersScreen: "Come on, DUMBO! Let's discover these little notes! 💌",
    progress: "You're doing great! Just a little more! ✨",
    allLettersUnlocked: "Ooooh! Your surprise is waiting, DUMBO! 🎁",
    giftLockedTap: "Psst! Open all 5 little notes above first to unlock this surprise! 💌",
    giftRevealed: "Awww, look at this memory! 🥹",
    pictureReveal: "Awww, look at this memory! 🥹",
    finalWish: "Happy Birthday, MADHU! Always be happy, my DUMBO! ❤️",
    finalCelebration: "Happy Birthday, MADHU! Always be happy, my DUMBO! ❤️",
    revisitLetters: "Come on, DUMBO! Let's discover these little notes! 💌",
    replayPrompt: "Ready to unwrap the surprise again, DUMBO? 🎁",
    exploreLettersPrompt: "Come on, DUMBO! Let's discover these little notes! 💌",
    
    // Encouraging quotes when visitor taps the cute DUMBO elephant companion
    randomQuotes: [
      "Psst, MADHU! ROSHAN has something special for you! 🐘💗",
      "Come on, DUMBO! Let's discover these little notes! 💌",
      "Trumpeting happiest birthday wishes to you, MADHU! 🐘🎉",
      "Ooooh! Your surprise is waiting, DUMBO! 🎁",
      "Look how far our friendship has come! 🫂💗",
      "You're my favourite DUMBO in the whole universe! 🌟",
      "Sending you the biggest, warmest elephant hug ever, MADHU! 🐘💕",
      "Our friendship is unforgettable, just like an elephant's memory! 🎀",
      "Whenever you need a friend, ROSHAN is always here for you! 🤝✨",
      "Happy Birthday, MADHU! Never stop smiling! ❤️"
    ],

    // Gentle reactions when reading each numbered letter
    letterReactions: {
      '1': "Happy Birthday, DUMBO! You deserve the world! 🎂✨",
      '2': "Look how far our friendship has come! So grateful for you, MADHU! 🫂💗",
      '3': "You're doing great! Just a little more! ✨",
      '4': "Whenever you need a friend, ROSHAN is always here for you! 🤝❤️",
      '5': "Ooooh! Your surprise is waiting, DUMBO! 🎁"
    }
  },

  // ----------------------------------------------------------------------------
  // 7. BACKGROUND MUSIC & SPOTIFY PLAYER SETTINGS
  // ----------------------------------------------------------------------------
  musicFilename: "Kannaana Kanne.m4a", // Default song in assets/audio/
  giftMusicFilename: "Magale.m4a",       // Song for gift box opening
  musicVolume: 0.35,                     // Soothing volume level (0.0 to 1.0)
  song1Title: "Kannaana Kanne",
  song1Artist: "Viswasam • D. Imman, Sid Sriram",
  song2Title: "Magale",
  song2Artist: "Special Birthday Melody"
};

/**
 * ==============================================================================
 * CENTRALIZED SPOTIFY-INSPIRED MUSIC CONTROLLER
 * ==============================================================================
 * Manages background music tracks, smooth crossfading, play/pause states,
 * seeking, volume scrubbing, track switching, and UI synchronization without
 * duplicate audio elements.
 */
const MusicController = {
  playlist: [
    {
      id: 'kannaana',
      title: 'Kannaana Kanne',
      artist: 'Viswasam • D. Imman, Sid Sriram',
      filename: 'Kannaana Kanne.m4a',
      src: 'assets/audio/Kannaana Kanne.m4a',
      emoji: '💖',
      badge: 'Track 1 💖'
    },
    {
      id: 'magale',
      title: 'Magale',
      artist: 'Special Birthday Melody',
      filename: 'Magale.m4a',
      src: 'assets/audio/Magale.m4a',
      emoji: '🌸',
      badge: 'Track 2 🌸'
    }
  ],

  currentIndex: 0,
  currentTrackId: 'kannaana',
  isPlaying: false,
  baseVolume: 0.35,
  isMuted: false,
  previousVolume: 0.35,
  isDraggingSeek: false,
  isCollapsed: true,
  hasOpenedGiftOnce: false,
  _savedKannaanaPosition: 0,
  _wasPlayingBeforePicture: false,
  _isPictureModalActive: false,
  _modalAudioTransitionLock: false,
  audioEl: null,
  fadeTimer: null,
  dom: {},

  init(app) {
    this.app = app;
    this.audioEl = document.getElementById('bgAudio');
    this.baseVolume = (app && app.config && app.config.musicVolume) || 0.35;
    this.previousVolume = this.baseVolume;

    // Apply custom titles/artists from config if defined
    if (typeof BIRTHDAY_CONFIG !== 'undefined') {
      if (BIRTHDAY_CONFIG.song1Title) this.playlist[0].title = BIRTHDAY_CONFIG.song1Title;
      if (BIRTHDAY_CONFIG.song1Artist) this.playlist[0].artist = BIRTHDAY_CONFIG.song1Artist;
      if (BIRTHDAY_CONFIG.song2Title) this.playlist[1].title = BIRTHDAY_CONFIG.song2Title;
      if (BIRTHDAY_CONFIG.song2Artist) this.playlist[1].artist = BIRTHDAY_CONFIG.song2Artist;
    }

    // Cache player DOM nodes
    this.cacheDom();

    if (this.audioEl) {
      this.audioEl.volume = this.baseVolume;

      // Ensure initial src is set to default track
      const currentSrc = this.audioEl.getAttribute('src') || (this.audioEl.querySelector('source') ? this.audioEl.querySelector('source').getAttribute('src') : '');
      if (!currentSrc || currentSrc.includes('background-music.mp3')) {
        this.audioEl.src = this.playlist[0].src;
      }

      this.audioEl.addEventListener('error', () => {
        console.info('[MusicController] Audio loading notice for:', this.audioEl.src);
      });

      // Continuous time and progress tracking
      this.audioEl.addEventListener('timeupdate', () => {
        this.onTimeUpdate();
      });

      // Total track duration discovery
      this.audioEl.addEventListener('loadedmetadata', () => {
        this.onDurationChange();
      });

      this.audioEl.addEventListener('durationchange', () => {
        this.onDurationChange();
      });

      // Track finish handling: auto-advance to next song or loop
      this.audioEl.addEventListener('ended', () => {
        this.onTrackEnded();
      });

      this.audioEl.addEventListener('play', () => {
        this.isPlaying = true;
        if (this.app) this.app.state.isMusicPlaying = true;
        this.updatePlayerUI();
      });

      this.audioEl.addEventListener('pause', () => {
        this.isPlaying = false;
        if (this.app) this.app.state.isMusicPlaying = false;
        this.updatePlayerUI();
      });
    }

    this.bindUI();
    this.updatePlayerUI();
  },

  cacheDom() {
    this.dom = {
      player: document.getElementById('musicPlayer'),
      playBtn: document.getElementById('playerPlayBtn'),
      prevBtn: document.getElementById('playerPrevBtn'),
      nextBtn: document.getElementById('playerNextBtn'),
      progressBar: document.getElementById('playerProgressBar'),
      seekFill: document.getElementById('playerSeekFill'),
      currentTime: document.getElementById('playerCurrentTime'),
      duration: document.getElementById('playerDuration'),
      muteBtn: document.getElementById('playerMuteBtn'),
      volumeSlider: document.getElementById('playerVolumeSlider'),
      volumeFill: document.getElementById('playerVolumeFill'),
      expandBtn: document.getElementById('playerExpandBtn'),
      songTitle: document.getElementById('playerSongTitle'),
      songArtist: document.getElementById('playerSongArtist'),
      albumEmoji: document.getElementById('playerAlbumEmoji'),
      badge: document.getElementById('playerBadge'),
      // Collapsed mini bar elements
      miniPlayBtn: document.getElementById('playerMiniPlayBtn'),
      miniExpandBtn: document.getElementById('playerMiniExpandBtn'),
      miniTitle: document.getElementById('playerMiniTitle'),
      miniStatus: document.getElementById('playerMiniStatus'),
      miniEmoji: document.getElementById('playerMiniEmoji'),
      miniPlayIcon: document.getElementById('playerMiniPlayIcon'),
      miniProgressFill: document.getElementById('playerMiniProgressFill'),
      // Header toggle
      headerAudioBtn: document.getElementById('audioToggleBtn')
    };
  },

  bindUI() {
    const d = this.dom;

    // 1. Play / Pause
    if (d.playBtn) {
      d.playBtn.addEventListener('click', () => this.togglePlayPause());
    }
    if (d.miniPlayBtn) {
      d.miniPlayBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.togglePlayPause();
      });
    }
    if (d.headerAudioBtn) {
      d.headerAudioBtn.addEventListener('click', () => this.togglePlayPause());
    }

    // 2. Previous & Next Track
    if (d.prevBtn) {
      d.prevBtn.addEventListener('click', () => this.playPrevious());
    }
    if (d.nextBtn) {
      d.nextBtn.addEventListener('click', () => this.playNext());
    }

    // 3. Seeking & Progress Bar
    if (d.progressBar) {
      // User is dragging seek bar
      d.progressBar.addEventListener('input', (e) => {
        this.isDraggingSeek = true;
        const rawVal = (e && e.target && e.target.value !== undefined) ? e.target.value : (d.progressBar ? d.progressBar.value : 0);
        const percent = parseFloat(rawVal);
        if (d.seekFill) d.seekFill.style.width = percent + '%';
        if (this.audioEl && this.audioEl.duration) {
          const seekSec = (percent / 100) * this.audioEl.duration;
          if (d.currentTime) d.currentTime.textContent = this.formatTime(seekSec);
        }
      });

      // User released seek bar
      d.progressBar.addEventListener('change', (e) => {
        const rawVal = (e && e.target && e.target.value !== undefined) ? e.target.value : (d.progressBar ? d.progressBar.value : 0);
        const percent = parseFloat(rawVal);
        if (this.audioEl && this.audioEl.duration) {
          this.audioEl.currentTime = (percent / 100) * this.audioEl.duration;
          if (this.currentIndex === 0 && !this._isPictureModalActive) {
            this._savedKannaanaPosition = this.audioEl.currentTime;
          }
        }
        this.isDraggingSeek = false;
      });
    }

    // 4. Volume Slider & Mute Toggle
    if (d.volumeSlider) {
      d.volumeSlider.addEventListener('input', (e) => {
        const rawVal = (e && e.target && e.target.value !== undefined) ? e.target.value : (d.volumeSlider ? d.volumeSlider.value : 0.35);
        const val = parseFloat(rawVal);
        this.setVolume(val);
      });
    }
    if (d.muteBtn) {
      d.muteBtn.addEventListener('click', () => this.toggleMute());
    }

    // 5. Expand / Collapse
    if (d.expandBtn) {
      d.expandBtn.addEventListener('click', () => this.toggleExpandCollapse());
    }
    if (d.miniExpandBtn) {
      d.miniExpandBtn.addEventListener('click', () => this.toggleExpandCollapse());
    }
  },

  onTimeUpdate() {
    if (!this.audioEl) return;
    const dur = this.audioEl.duration;
    const cur = this.audioEl.currentTime;

    // Continuously save Kannaana Kanne position while active outside the picture modal
    if (this.currentIndex === 0 && !isNaN(cur) && cur > 0 && !this._isPictureModalActive) {
      this._savedKannaanaPosition = cur;
    }

    if (!this.isDraggingSeek && dur && !isNaN(dur) && dur > 0) {
      const percent = (cur / dur) * 100;
      if (this.dom.progressBar) {
        this.dom.progressBar.value = percent;
        this.dom.progressBar.setAttribute('aria-valuenow', percent.toFixed(1));
      }
      if (this.dom.seekFill) {
        this.dom.seekFill.style.width = percent + '%';
      }
      if (this.dom.miniProgressFill) {
        this.dom.miniProgressFill.style.width = percent + '%';
      }
      if (this.dom.currentTime) {
        this.dom.currentTime.textContent = this.formatTime(cur);
      }
    }
  },

  onDurationChange() {
    if (!this.audioEl || !this.dom.duration) return;
    const dur = this.audioEl.duration;
    if (dur && !isNaN(dur) && dur > 0) {
      this.dom.duration.textContent = this.formatTime(dur);
    }
  },

  onTrackEnded() {
    // When song ends, seamlessly advance to the next track
    this.playNext();
  },

  formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  },

  async playTrackByIndex(index, { restart = false, fadeIn = false }) {
    if (!this.audioEl) return;

    // Wrap index around playlist length
    const targetIndex = (index + this.playlist.length) % this.playlist.length;
    const track = this.playlist[targetIndex];
    if (!track) return;

    // Update track state & UI immediately for responsive user feedback
    this.currentIndex = targetIndex;
    this.currentTrackId = track.id;
    this.updatePlayerUI();

    try {
      // 1. Smoothly fade out previous track if currently playing
      if (this.isPlaying && !this.audioEl.paused) {
        await this.fadeVolume(0, 350);
      }

      // 2. Stop first song completely before starting second (no simultaneous playback)
      this.audioEl.pause();

      // 3. Set audio element source
      this.audioEl.src = track.src;

      if (restart) {
        this.audioEl.currentTime = 0;
        if (this.dom.miniProgressFill) this.dom.miniProgressFill.style.width = '0%';
      }

      // 5. Start playback
      this.audioEl.volume = fadeIn ? 0 : this.baseVolume;
      const playPromise = this.audioEl.play();
      if (playPromise !== undefined) {
        await playPromise;
      }

      this.isPlaying = true;
      if (this.app) this.app.state.isMusicPlaying = true;
      this.updatePlayerUI();

      // 6. Smooth fade-in if requested
      if (fadeIn) {
        await this.fadeVolume(this.baseVolume, 600);
      }
    } catch (err) {
      console.info('[MusicController] Track switch notice:', err.message);
      this.isPlaying = false;
      if (this.app) this.app.state.isMusicPlaying = false;
      this.updatePlayerUI();
    }
  },

  playNext() {
    const nextIdx = (this.currentIndex + 1) % this.playlist.length;
    return this.playTrackByIndex(nextIdx, { restart: true, fadeIn: true });
  },

  playPrevious() {
    if (!this.audioEl) return Promise.resolve();
    // If more than 3 seconds into the track, restart current track
    if (this.audioEl.currentTime > 3) {
      this.audioEl.currentTime = 0;
      if (!this.isPlaying) return this.togglePlayPause();
      return Promise.resolve();
    }
    const prevIdx = (this.currentIndex - 1 + this.playlist.length) % this.playlist.length;
    return this.playTrackByIndex(prevIdx, { restart: true, fadeIn: true });
  },

  async startWelcomeMusic() {
    // Start default song (Kannaana Kanne) upon visitor clicking Enter button
    if (!this.audioEl) return;
    this._wasPlayingBeforePicture = true;
    this._savedKannaanaPosition = 0;

    if (this.isPlaying && this.currentIndex === 0) return;

    return this.playTrackByIndex(0, { restart: false, fadeIn: true });
  },

  /**
   * Called when the picture popup opens.
   * 1. Pauses or fades out Kannaana Kanne while saving its playback position.
   * 2. Switches the active track to Magale.
   * 3. Starts Magale from the beginning (0:00).
   * 4. If visitor closes and reopens picture, restarts Magale from the beginning.
   * 5. Updates existing music player's current track title and playback state.
   * 6. Ensures only one song plays at a time.
   */
  async onPictureModalOpen() {
    if (!this.audioEl) return;

    // Prevent duplicate triggers
    if (this._modalAudioTransitionLock) return;
    this._modalAudioTransitionLock = true;

    // 1. If currently on Kannaana Kanne (index 0), save playback position and playing state
    if (this.currentIndex === 0) {
      if (this.audioEl.currentTime > 0 && !isNaN(this.audioEl.currentTime)) {
        this._savedKannaanaPosition = this.audioEl.currentTime;
      }
      this._wasPlayingBeforePicture = this.isPlaying && !this.audioEl.paused;
    }

    this._isPictureModalActive = true;
    this.hasOpenedGiftOnce = true;

    // 2. Immediately update track UI & artwork to Magale (Track 2)
    const magaleIndex = 1;
    const magaleTrack = this.playlist[magaleIndex];
    this.currentIndex = magaleIndex;
    this.currentTrackId = magaleTrack.id;
    this.updatePlayerUI();

    try {
      // 3. Smoothly fade out Kannaana Kanne if currently playing
      if (this.isPlaying && !this.audioEl.paused) {
        await this.fadeVolume(0, 180);
      }

      // Stop previous song completely before starting second (no simultaneous playback)
      this.audioEl.pause();

      // Check if modal was closed while fading out
      if (!this._isPictureModalActive) {
        this._modalAudioTransitionLock = false;
        return;
      }

      // 4. Switch active track to Magale and start from beginning (0:00)
      this.audioEl.src = magaleTrack.src;
      this.audioEl.currentTime = 0;

      // 5. Start playback at visitor's volume preference
      const targetVolume = (this.isMuted || this.baseVolume === 0) ? 0 : this.baseVolume;
      this.audioEl.volume = targetVolume;

      const playPromise = this.audioEl.play();
      if (playPromise !== undefined) {
        await playPromise;
      }

      // Check if modal closed while play promise was resolving
      if (!this._isPictureModalActive) {
        this.audioEl.pause();
        this.audioEl.currentTime = 0;
        this._modalAudioTransitionLock = false;
        return;
      }

      this.isPlaying = true;
      if (this.app) this.app.state.isMusicPlaying = true;
      this.updatePlayerUI();
      this.onTimeUpdate();
    } catch (err) {
      console.info('[MusicController] Magale audio playback notice (gift visual continues unblocked):', err.message);
      this.isPlaying = false;
      if (this.app) this.app.state.isMusicPlaying = false;
      this.updatePlayerUI();

      // If Magale fails to load, keep website functional and attempt to restore default track
      if (this._isPictureModalActive) {
        console.warn('[MusicController] Magale audio failed to load, restoring default track reference');
        this.currentIndex = 0;
        this.currentTrackId = this.playlist[0].id;
        this.audioEl.src = this.playlist[0].src;
        if (this._savedKannaanaPosition > 0) {
          try { this.audioEl.currentTime = this._savedKannaanaPosition; } catch (_) {}
        }
        this.updatePlayerUI();
      }
    } finally {
      this._modalAudioTransitionLock = false;
    }
  },

  /**
   * Called when the picture popup closes.
   * 1. Stops Magale and resets its playback position to the beginning (0:00).
   * 2. Switches active track back to Kannaana Kanne.
   * 3. Resumes Kannaana Kanne from its previous playback position whenever possible.
   * 4. If default song had been paused by visitor before opening picture, preserves that paused state.
   * 5. Updates music player's displayed track title and controls.
   */
  async onPictureModalClose() {
    if (!this.audioEl) return;
    this._isPictureModalActive = false;

    if (this._modalAudioTransitionLock) return;
    this._modalAudioTransitionLock = true;

    // 1. Stop Magale and reset its playback position to the beginning
    try {
      this.audioEl.pause();
      this.audioEl.currentTime = 0;
    } catch (e) {
      // ignore
    }

    // 2. Switch active track back to Kannaana Kanne (index 0)
    const kannaanaIndex = 0;
    const kannaanaTrack = this.playlist[kannaanaIndex];
    this.currentIndex = kannaanaIndex;
    this.currentTrackId = kannaanaTrack.id;
    this.audioEl.src = kannaanaTrack.src;

    // 3. Resume Kannaana Kanne from its previous playback position
    const resumePos = this._savedKannaanaPosition || 0;
    if (resumePos > 0) {
      try {
        this.audioEl.currentTime = resumePos;
      } catch (e) {
        // ignore
      }
    }

    // 4. If default song had been paused by visitor before opening picture, preserve paused state!
    if (!this._wasPlayingBeforePicture) {
      this.isPlaying = false;
      if (this.app) this.app.state.isMusicPlaying = false;
      this.updatePlayerUI();
      this.onTimeUpdate();
      this._modalAudioTransitionLock = false;
      return;
    }

    // 5. Otherwise resume playback of Kannaana Kanne smoothly
    try {
      const targetVolume = (this.isMuted || this.baseVolume === 0) ? 0 : this.baseVolume;
      this.audioEl.volume = targetVolume;

      const playPromise = this.audioEl.play();
      if (playPromise !== undefined) {
        await playPromise;
      }

      this.isPlaying = true;
      if (this.app) this.app.state.isMusicPlaying = true;
      this.updatePlayerUI();
      this.onTimeUpdate();
    } catch (err) {
      console.info('[MusicController] Kannaana Kanne resume notice:', err.message);
      this.isPlaying = false;
      if (this.app) this.app.state.isMusicPlaying = false;
      this.updatePlayerUI();
      this.onTimeUpdate();
    } finally {
      this._modalAudioTransitionLock = false;
    }
  },

  async transitionToMagaleOnGiftOpen() {
    return this.onPictureModalOpen();
  },

  async switchToMagale() {
    return this.onPictureModalOpen();
  },

  async togglePlayPause() {
    if (!this.audioEl) return;

    if (this.isPlaying) {
      this._userPausedDuringReveal = true;
      if (this.currentIndex === 0 && !this._isPictureModalActive) {
        this._wasPlayingBeforePicture = false;
        if (this.audioEl.currentTime > 0) {
          this._savedKannaanaPosition = this.audioEl.currentTime;
        }
      }
      // Smooth fade-out then pause
      await this.fadeVolume(0, 300);
      this.audioEl.pause();
      this.isPlaying = false;
      if (this.app) this.app.state.isMusicPlaying = false;
      this.updatePlayerUI();
    } else {
      this._userPausedDuringReveal = false;
      if (this.currentIndex === 0 && !this._isPictureModalActive) {
        this._wasPlayingBeforePicture = true;
      }
      // Resume current track with smooth fade-in
      try {
        const curTrack = this.playlist[this.currentIndex];
        if (!this.audioEl.src || this.audioEl.src.includes('background-music.mp3')) {
          this.audioEl.src = curTrack.src;
        }
        this.audioEl.volume = 0;
        const playPromise = this.audioEl.play();
        if (playPromise !== undefined) {
          await playPromise;
        }
        this.isPlaying = true;
        if (this.app) this.app.state.isMusicPlaying = true;
        this.updatePlayerUI();
        await this.fadeVolume(this.baseVolume, 450);
      } catch (err) {
        console.info('[MusicController] Play/pause notice:', err.message);
        this.isPlaying = false;
        if (this.app) this.app.state.isMusicPlaying = false;
        this.updatePlayerUI();
      }
    }
  },

  setVolume(newVol) {
    if (!this.audioEl) return;
    this.baseVolume = Math.max(0, Math.min(1, newVol));
    this.audioEl.volume = this.baseVolume;

    if (this.baseVolume === 0) {
      this.isMuted = true;
    } else {
      this.isMuted = false;
      this.previousVolume = this.baseVolume;
    }

    this.updateVolumeUI();
  },

  toggleMute() {
    if (!this.audioEl) return;

    if (this.isMuted || this.audioEl.volume === 0) {
      // Unmute: restore previous non-zero volume
      const restoreVol = (this.previousVolume && this.previousVolume > 0.05) ? this.previousVolume : 0.35;
      this.isMuted = false;
      this.setVolume(restoreVol);
    } else {
      // Mute: save volume setting then silence
      this.previousVolume = this.audioEl.volume || this.baseVolume || 0.35;
      this.isMuted = true;
      this.setVolume(0);
    }
  },

  toggleExpandCollapse() {
    this.isCollapsed = !this.isCollapsed;
    const p = this.dom.player;
    if (p) {
      p.classList.toggle('is-collapsed', this.isCollapsed);
      p.classList.toggle('is-expanded', !this.isCollapsed);
    }
    const isExpanded = !this.isCollapsed;
    if (this.dom.expandBtn) {
      this.dom.expandBtn.setAttribute('aria-expanded', String(isExpanded));
      this.dom.expandBtn.setAttribute('title', isExpanded ? 'Minimize player' : 'Expand player');
    }
    if (this.dom.miniExpandBtn) {
      this.dom.miniExpandBtn.setAttribute('aria-expanded', String(isExpanded));
      this.dom.miniExpandBtn.setAttribute('title', isExpanded ? 'Minimize player' : 'Expand player');
    }
  },

  fadeVolume(targetVolume, duration = 600) {
    return new Promise((resolve) => {
      if (!this.audioEl) return resolve();

      // Cleanly resolve previous pending fade promise so caller is never hung
      if (this._fadeResolve) {
        const prevResolve = this._fadeResolve;
        this._fadeResolve = null;
        prevResolve();
      }
      if (this.fadeTimer) {
        clearInterval(this.fadeTimer);
        this.fadeTimer = null;
      }

      this._fadeResolve = resolve;

      const clampedTarget = Math.max(0, Math.min(1, targetVolume));
      const startVol = this.audioEl.volume;
      const diff = clampedTarget - startVol;

      if (Math.abs(diff) < 0.01 || duration <= 0) {
        this.audioEl.volume = clampedTarget;
        this.updateVolumeUI();
        this._fadeResolve = null;
        return resolve();
      }

      const steps = 6;
      const stepTime = Math.max(20, Math.floor(duration / steps));
      let currentStep = 0;

      this.fadeTimer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const newVol = startVol + (diff * progress);
        this.audioEl.volume = Math.max(0, Math.min(1, newVol));

        if (currentStep >= steps) {
          clearInterval(this.fadeTimer);
          this.fadeTimer = null;
          this.audioEl.volume = clampedTarget;
          this.updateVolumeUI();
          if (this._fadeResolve) {
            const cb = this._fadeResolve;
            this._fadeResolve = null;
            cb();
          }
        }
      }, stepTime);
    });
  },

  updateVolumeUI() {
    const d = this.dom;
    const vol = this.audioEl ? this.audioEl.volume : this.baseVolume;
    const isMuted = this.isMuted || vol === 0;

    if (d.player) {
      d.player.classList.toggle('is-muted', isMuted);
    }
    if (d.muteBtn) {
      d.muteBtn.setAttribute('aria-pressed', String(isMuted));
      d.muteBtn.setAttribute('title', isMuted ? 'Unmute' : 'Mute');
    }
    if (d.volumeSlider) {
      d.volumeSlider.value = vol;
      d.volumeSlider.setAttribute('aria-valuenow', vol.toFixed(2));
    }
    if (d.volumeFill) {
      d.volumeFill.style.width = (vol * 100) + '%';
    }
  },

  updatePlayerUI() {
    const d = this.dom;
    const curTrack = this.playlist[this.currentIndex] || this.playlist[0];
    const isPlaying = this.isPlaying;

    // 1. Track Metadata
    if (d.songTitle) d.songTitle.textContent = curTrack.title;
    if (d.songArtist) d.songArtist.textContent = curTrack.artist;
    if (d.albumEmoji) d.albumEmoji.textContent = curTrack.emoji;
    if (d.badge) d.badge.textContent = curTrack.badge;

    // 2. Mini Bar Metadata
    if (d.miniTitle) d.miniTitle.textContent = curTrack.title;
    if (d.miniStatus) d.miniStatus.textContent = isPlaying ? 'Playing' : 'Paused';
    if (d.miniEmoji) d.miniEmoji.textContent = curTrack.emoji;
    if (d.miniPlayIcon) d.miniPlayIcon.textContent = isPlaying ? '⏸' : '▶';

    // 3. Floating Player Container Class
    if (d.player) {
      d.player.classList.toggle('is-playing', isPlaying);
    }

    // 4. Play / Pause Button States
    if (d.playBtn) {
      d.playBtn.setAttribute('aria-pressed', String(isPlaying));
      d.playBtn.setAttribute('title', isPlaying ? 'Pause' : 'Play');
    }

    // 5. Synchronize Top Bar Header Toggle
    if (d.headerAudioBtn) {
      if (isPlaying) {
        d.headerAudioBtn.setAttribute('aria-pressed', 'true');
        d.headerAudioBtn.classList.add('is-playing');
        d.headerAudioBtn.innerHTML = `
          <span class="music-icon" aria-hidden="true">🎶</span>
          <span class="music-text">Music: Playing</span>
          <span class="music-eq-bars" aria-hidden="true">
            <span></span><span></span><span></span>
          </span>
        `;
      } else {
        d.headerAudioBtn.setAttribute('aria-pressed', 'false');
        d.headerAudioBtn.classList.remove('is-playing');
        d.headerAudioBtn.innerHTML = `
          <span class="music-icon" aria-hidden="true">🔇</span>
          <span class="music-text">Music: Off</span>
        `;
      }
    }

    // 6. Volume UI Sync
    this.updateVolumeUI();
  }
};

/**
 * Global Birthday Application Namespace
 */
const BirthdayApp = {
  // Application State
  state: {
    hasEnteredRoom: false,
    isMusicPlaying: false,
    openedLettersCount: 0,
    totalLetters: 5,
    openedLettersSet: new Set(),
    unlockedLetterMax: 1, // Letter 1 is available immediately
    currentOpenLetterId: null,
    isGiftBoxUnlocked: false,
    isGiftOpening: false,
    isGiftOpened: false,
    isPictureModalOpen: false,
    hasSeenPictureOnce: false,
    lastGiftTriggerElement: null
  },

  // Centralized Music Controller reference
  musicController: MusicController,

  // Reference configurations
  config: {
    sparkleCount: 18,
    sparkleSymbols: ['✨', '💖', '🌸', '⭐', '🎀', '🪄'],
    defaultAudioSrc: 'assets/audio/Kannaana Kanne.m4a',
    musicVolume: BIRTHDAY_CONFIG.musicVolume,
    sfxVolume: 0.22,
    sfxFiles: {
      envelopeOpen: 'assets/audio/envelope-open.mp3',
      giftClick: 'assets/audio/gift-click.mp3',
      photoReveal: 'assets/audio/photo-reveal.mp3'
    },
    teddyRandomQuotes: BIRTHDAY_CONFIG.teddySpeech.randomQuotes,
    letterReactions: BIRTHDAY_CONFIG.teddySpeech.letterReactions
  },

  lettersData: BIRTHDAY_CONFIG.letters,



  /**
   * Application Entry Point
   */
  init() {
    console.log(
      '%c🎀 Magical Birthday Room Initialized! 🎀%c\nReady to celebrate the most special best friend! ✨',
      'background: #FF6FAE; color: #FFF; font-size: 14px; font-weight: bold; padding: 6px 12px; border-radius: 8px;',
      'color: #E83E78; font-size: 12px; font-style: italic;'
    );

    // Initialize failed audio tracking set
    this._failedAudioFiles = new Set();

    // 1. Dynamically apply any custom personalization from BIRTHDAY_CONFIG to the DOM
    this.applyCustomization();

    // 2. Initialize interactive modules
    this.initTeddyGuide();
    this.initWelcomeScreen();
    this.initSparkles();
    this.initAudioController();
    this.initLettersSystem();
    this.initGiftBox();
    this.initExploreButton();
  },

  /**
   * Automatically applies all text, titles, headings, and filenames
   * from BIRTHDAY_CONFIG into HTML without requiring HTML or CSS edits.
   */
  applyCustomization() {
    const cfg = BIRTHDAY_CONFIG;
    if (!cfg) return;

    // 1. Welcome Screen
    const welcomeHeading = document.getElementById('welcomeHeading');
    const welcomeSubtitle = document.getElementById('welcomeSubtitle');
    if (welcomeHeading && cfg.welcomeHeading) {
      welcomeHeading.innerHTML = cfg.welcomeHeading.includes('class="pulsing-heart"') 
        ? cfg.welcomeHeading 
        : `${cfg.welcomeHeading.replace(/💗$/, '').trim()} <span class="pulsing-heart" aria-hidden="true">💗</span>`;
    }
    if (welcomeSubtitle && cfg.welcomeSubtitle) {
      welcomeSubtitle.textContent = cfg.welcomeSubtitle;
    }

    // 2. Hero Section
    const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroTitle && cfg.heroHeading) {
      heroTitle.innerHTML = cfg.heroHeading.includes('class="pulsing-heart"') 
        ? cfg.heroHeading 
        : `${cfg.heroHeading.replace(/💖$/, '').trim()} <span class="pulsing-heart" aria-hidden="true">💖</span>`;
    }
    if (heroSubtitle && cfg.heroSubtitle) {
      heroSubtitle.innerHTML = cfg.heroSubtitle.includes('pulsing-heart-subtle')
        ? cfg.heroSubtitle
        : `${cfg.heroSubtitle.replace(/✨$/, '').trim()} <span class="pulsing-heart-subtle" aria-hidden="true">✨</span>`;
    }

    // 3. Letters Grid (Envelope titles & teasers)
    if (cfg.letters && Array.isArray(cfg.letters)) {
      this.lettersData = cfg.letters;
      cfg.letters.forEach((letter) => {
        const card = document.querySelector(`.letter-card[data-letter-id="${letter.id}"]`);
        if (card) {
          const titleEl = card.querySelector('.letter-title');
          const teaserEl = card.querySelector('.letter-teaser');
          if (titleEl && letter.title) titleEl.textContent = letter.title;
          if (teaserEl && letter.teaser) teaserEl.textContent = letter.teaser.startsWith('“') ? letter.teaser : `“${letter.teaser}”`;
          card.setAttribute('aria-label', `Open Letter ${letter.id}: ${letter.title}`);
        }
      });
    }

    // 3b. Gift Section Heading & Subtitle
    const giftTitle = document.getElementById('giftTitle');
    const giftSub = document.querySelector('.gift-section .section-subtitle');
    if (giftTitle && cfg.giftHeading) giftTitle.textContent = cfg.giftHeading;
    if (giftSub && cfg.giftSubtitle) giftSub.textContent = cfg.giftSubtitle;

    // 4. Memory Photograph in Popup Modal
    const popupSurpriseImg = document.getElementById('popupSurpriseImg');
    if (popupSurpriseImg && cfg.photoFilename) {
      popupSurpriseImg.src = `assets/images/${cfg.photoFilename}`;
    }
    const pictureModalCaption = document.getElementById('pictureModalCaption');
    if (pictureModalCaption && cfg.giftRevealCaption) {
      pictureModalCaption.textContent = cfg.giftRevealCaption;
    }

    // 4b. Final Note Heading & Message (Displayed after picture popup is closed)
    const finalNoteHeading = document.getElementById('finalNoteHeading');
    if (finalNoteHeading && cfg.finalNoteHeading) {
      finalNoteHeading.textContent = cfg.finalNoteHeading;
    }
    const finalNoteBody = document.querySelector('#finalBirthdayNote .final-note-body .letter-para');
    if (finalNoteBody && cfg.finalNoteMessage) {
      finalNoteBody.textContent = cfg.finalNoteMessage;
    }

    // 5. Teddy Bear Speech
    if (cfg.teddySpeech) {
      if (cfg.teddySpeech.randomQuotes) {
        this.config.teddyRandomQuotes = cfg.teddySpeech.randomQuotes;
      }
      if (cfg.teddySpeech.letterReactions) {
        this.config.letterReactions = cfg.teddySpeech.letterReactions;
      }
    }

    // 7. Background Audio & Spotify Player Settings
    if (cfg.musicFilename) {
      this.config.defaultAudioSrc = `assets/audio/${cfg.musicFilename}`;
      if (this.musicController && this.musicController.playlist && this.musicController.playlist[0]) {
        this.musicController.playlist[0].src = `assets/audio/${cfg.musicFilename}`;
      }
      const audioElement = document.getElementById('bgAudio');
      if (audioElement) {
        const source = audioElement.querySelector('source');
        if (source) source.src = `assets/audio/${cfg.musicFilename}`;
      }
    }
    if (cfg.giftMusicFilename && this.musicController && this.musicController.playlist && this.musicController.playlist[1]) {
      this.musicController.playlist[1].src = `assets/audio/${cfg.giftMusicFilename}`;
    }
    if (cfg.song1Title && this.musicController && this.musicController.playlist && this.musicController.playlist[0]) {
      this.musicController.playlist[0].title = cfg.song1Title;
    }
    if (cfg.song1Artist && this.musicController && this.musicController.playlist && this.musicController.playlist[0]) {
      this.musicController.playlist[0].artist = cfg.song1Artist;
    }
    if (cfg.song2Title && this.musicController && this.musicController.playlist && this.musicController.playlist[1]) {
      this.musicController.playlist[1].title = cfg.song2Title;
    }
    if (cfg.song2Artist && this.musicController && this.musicController.playlist && this.musicController.playlist[1]) {
      this.musicController.playlist[1].artist = cfg.song2Artist;
    }
    if (typeof cfg.musicVolume === 'number') {
      this.config.musicVolume = cfg.musicVolume;
      if (this.musicController) {
        this.musicController.baseVolume = cfg.musicVolume;
      }
    }
    if (this.musicController) {
      this.musicController.updatePlayerUI();
    }
  },

  /**
   * 0. TEDDY BEAR VISITOR'S GUIDE
   * Single universal controller for updating the guide's position, speech bubble, and lifelike actions.
   */
  initTeddyGuide() {
    const teddyBtn = document.getElementById('teddyGuideBtn');
    const bubble = document.getElementById('teddySpeechBubble');

    // 1. Initial greeting on welcome screen
    this.moveTeddyTo('pos-welcome', BIRTHDAY_CONFIG.teddySpeech.welcome);

    // Click teddy to move/celebrate and reveal a random cute message
    if (teddyBtn) {
      teddyBtn.addEventListener('click', () => {
        this.handleTeddyGuideClick();
      });
    }

    // Optional click on speech bubble to dismiss or refresh
    if (bubble) {
      bubble.addEventListener('click', () => {
        this.handleTeddyGuideClick();
      });
    }

    // Initialize smart scroll observer to guide visitor across page sections
    this.initScrollGuideObserver();
  },

  /**
   * Smoothly moves the teddy guide to a specific waypoint on the page while updating speech
   * @param {string} positionClass - 'pos-welcome', 'pos-letters', 'pos-letters-reading', 'pos-gift'
   * @param {string} [message] - Optional speech message to say on arrival
   * @param {number} [autoDismissDelay=0] - Optional timeout before speech hides
   */
  moveTeddyTo(positionClass, message, autoDismissDelay = 0) {
    const guide = document.getElementById('teddyGuide');
    
    // Update speech text if provided
    if (message) {
      this.setTeddySpeech(message, autoDismissDelay);
    }

    if (!guide) return;

    // Trigger lifelike waddle and walking animation
    guide.classList.add('is-walking');

    // Remove any previous position classes and apply new waypoint
    const allPositions = ['pos-welcome', 'pos-letters', 'pos-letters-reading', 'pos-gift'];
    allPositions.forEach((pos) => guide.classList.remove(pos));
    guide.classList.add(positionClass);

    // After movement transition (~850ms), end walking waddle and do happy arrival hop
    setTimeout(() => {
      guide.classList.remove('is-walking');
      guide.classList.add('is-landed');
      setTimeout(() => {
        guide.classList.remove('is-landed');
      }, 550);
    }, 850);
  },

  /**
   * Single reusable function to update the teddy bear's speech bubble
   * @param {string} message - Text or emoji to display
   * @param {number} [autoDismissDelay=0] - Milliseconds before auto-dismiss (0 = stays until next action)
   */
  setTeddySpeech(message, autoDismissDelay = 0) {
    const bubble = document.getElementById('teddySpeechBubble');
    const speechText = document.getElementById('teddySpeechText');
    const teddyBtn = document.getElementById('teddyGuideBtn');

    if (!bubble || !speechText) return;

    // Reset pending auto-dismiss and transition timers
    if (this._teddySpeechTimer) {
      clearTimeout(this._teddySpeechTimer);
      this._teddySpeechTimer = null;
    }
    if (this._teddySpeechTransitionTimer) {
      clearTimeout(this._teddySpeechTransitionTimer);
      this._teddySpeechTransitionTimer = null;
    }

    // Trigger cute bounce reaction on anime companion
    if (teddyBtn) {
      teddyBtn.classList.remove('teddy-reaction-pop');
      void teddyBtn.offsetWidth; // Force CSS reflow to re-trigger keyframe
      teddyBtn.classList.add('teddy-reaction-pop');
    }

    // Smooth transition: fade out slightly, swap text, fade in
    bubble.classList.add('is-hidden');

    this._teddySpeechTransitionTimer = setTimeout(() => {
      speechText.textContent = message;
      bubble.classList.remove('is-hidden');

      if (autoDismissDelay > 0) {
        this._teddySpeechTimer = setTimeout(() => {
          bubble.classList.add('is-hidden');
          this._teddySpeechTimer = null;
        }, autoDismissDelay);
      }
      this._teddySpeechTransitionTimer = null;
    }, 180);
  },

  /**
   * Selects and reveals a random cute encouragement from anime companion with debounce protection
   */
  handleTeddyGuideClick() {
    const now = Date.now();
    if (this._lastGuideClickTime && now - this._lastGuideClickTime < 350) {
      return; // Debounce rapid taps to prevent duplicate timers
    }
    this._lastGuideClickTime = now;

    const quotes = this.config.teddyRandomQuotes;
    if (!quotes || quotes.length === 0) return;

    let randomIndex;
    
    // Avoid repeating the exact same quote twice in a row
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (quotes.length > 1 && randomIndex === this._lastQuoteIndex);

    this._lastQuoteIndex = randomIndex;

    // Happy little hop when tapped
    const guide = document.getElementById('teddyGuide');
    if (guide) {
      guide.classList.add('is-landed');
      setTimeout(() => guide && guide.classList.remove('is-landed'), 550);
    }

    this.setTeddySpeech(quotes[randomIndex]);
  },

  /**
   * Observes page sections to guide visitor as they scroll
   */
  initScrollGuideObserver() {
    if (!('IntersectionObserver' in window)) return;

    const sections = [
      { id: 'letters', pos: 'pos-letters' },
      { id: 'gift', pos: 'pos-gift' }
    ];

    const observer = new IntersectionObserver((entries) => {
      if (!this.state.hasEnteredRoom) return; // Only guide once in the main room

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.45) {
          const targetId = entry.target.id;
          if (targetId === 'gift') {
            if (this.state.isGiftBoxUnlocked) {
              this.moveTeddyTo('pos-gift', "There's your final birthday gift! 🎁");
            } else {
              this.moveTeddyTo('pos-gift', "One last surprise is waiting here! Read the notes first 💌");
            }
          } else if (targetId === 'letters') {
            this.moveTeddyTo('pos-letters', "One little note at a time, DUMBO! 💌");
          }
        }
      });
    }, { threshold: [0.5] });

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  },

  /**
   * 0b. WELCOME SCREEN TRANSITION
   * Handles user entry into the birthday experience with smooth fade out.
   */
  initWelcomeScreen() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    const enterBtn = document.getElementById('enterRoomBtn');
    const heroTitle = document.getElementById('heroTitle');

    if (!welcomeScreen || !enterBtn) return;

    enterBtn.addEventListener('click', () => {
      console.log('[BirthdayApp] Entering My Little World! Transitioning to main room... 💗');

      // Update state
      this.state.hasEnteredRoom = true;

      // Reveal Spotify player after clicking "Enter My Little World"
      const player = document.getElementById('musicPlayer');
      if (player) {
        player.classList.remove('is-hidden');
      }

      // Start default background music (Kannaana Kanne) smoothly on visitor welcome gesture
      if (this.musicController) {
        this.musicController.startWelcomeMusic();
      }

      // 2. Guide message on entering letter screen - waddle up to letters
      this.moveTeddyTo('pos-letters', BIRTHDAY_CONFIG.teddySpeech.lettersScreen);

      // Add hiding class to trigger smooth CSS transition
      welcomeScreen.classList.add('is-hidden');

      // After transition finishes, hide from accessibility tree & pointer events
      setTimeout(() => {
        welcomeScreen.style.display = 'none';
        
        // Move focus gently to hero title or main content for keyboard/accessibility
        if (heroTitle) {
          heroTitle.setAttribute('tabindex', '-1');
          heroTitle.focus({ preventScroll: true });
        }
      }, 750);
    });
  },

  /**
   * 1. AMBIENT SPARKLE, FLOATING HEARTS & FALLING ROSE PETALS
   * Dynamically generates gentle floating elements in the background canvas.
   * Includes slowly floating pink & white hearts, twinkling sparkles, and occasional falling petals.
   */
  initSparkles() {
    const canvas = document.getElementById('sparkleCanvas');
    if (!canvas) return;

    // Clear any existing particles
    canvas.innerHTML = '';

    // A. Slowly floating pink and white hearts & occasional sparkles
    const floatingSymbols = ['💗', '🤍', '💖', '💕', '✨', '⭐', '🤍', '💗'];
    const totalFloating = 12; // Lightweight on mobile and desktop

    for (let i = 0; i < totalFloating; i++) {
      const particle = document.createElement('span');
      const symbol = floatingSymbols[i % floatingSymbols.length];
      const isSparkle = symbol === '✨' || symbol === '⭐';
      const isWhiteHeart = symbol === '🤍';

      particle.className = `ambient-particle ${isSparkle ? 'ambient-sparkle' : 'ambient-heart'} ${isWhiteHeart ? 'heart-white' : 'heart-pink'}`;
      particle.textContent = symbol;
      
      // Position and smooth float timing
      const leftPos = 4 + (i * 8) + (Math.random() * 5); // Well-distributed horizontal spread
      const duration = isSparkle ? (14 + Math.random() * 10) : (18 + Math.random() * 14); // Slow, gentle 18s - 32s float
      const delay = (i * 1.8) + (Math.random() * 2); // Staggered entrance
      const fontSize = isSparkle ? (0.85 + Math.random() * 0.6) : (1.0 + Math.random() * 0.7);
      const driftX = (Math.random() - 0.5) * 80; // Gentle lateral sway

      particle.style.left = `${Math.min(94, Math.max(3, leftPos))}%`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.fontSize = `${fontSize}rem`;
      particle.style.setProperty('--drift-x', `${driftX}px`);

      canvas.appendChild(particle);
    }

    // B. Occasional falling rose petals drifting downward
    const petalSymbols = ['🌸', '🌸', '🌸', '💮'];
    const totalPetals = 5; // Exactly 5 occasional petals for a serene romantic ambiance

    for (let j = 0; j < totalPetals; j++) {
      const petal = document.createElement('span');
      petal.className = 'falling-petal';
      petal.textContent = petalSymbols[j % petalSymbols.length];

      const leftPos = 8 + (j * 18) + (Math.random() * 8);
      const duration = 18 + Math.random() * 10; // Slow 18s - 28s drift
      const delay = j * 3.8 + (Math.random() * 2); // Highly staggered so petals appear occasionally
      const swayX = 30 + Math.random() * 35; // 30px to 65px horizontal sway

      petal.style.left = `${Math.min(92, Math.max(5, leftPos))}%`;
      petal.style.setProperty('--petal-duration', `${duration}s`);
      petal.style.setProperty('--petal-delay', `${delay}s`);
      petal.style.setProperty('--sway-x', `${swayX}px`);
      petal.style.fontSize = `${1.1 + Math.random() * 0.5}rem`;

      canvas.appendChild(petal);
    }
  },

  /**
   * 2. AUDIO BACKGROUND MUSIC CONTROLLER
   * Delegates music management to the centralized MusicController.
   * Preserves existing toggle button interaction and state without duplicate listeners.
   */
  initAudioController() {
    if (this.musicController) {
      this.musicController.init(this);
    }
  },

  /**
   * Plays a subtle, non-intrusive interaction sound.
   * Supports optional files from assets/audio/ and seamlessly falls back
   * to a gentle Web Audio API harmonic chime if the MP3 is missing.
   * Never interrupts birthday messages or creates loud/sudden noise.
   * @param {string} soundType - 'envelopeOpen', 'giftClick', 'photoReveal'
   */
  playInteractionSound(soundType) {
    const filePath = this.config.sfxFiles && this.config.sfxFiles[soundType];

    // 1. Try loading custom audio file if provided and hasn't failed before
    if (filePath && this._failedAudioFiles && !this._failedAudioFiles.has(filePath)) {
      try {
        const sfx = new Audio(filePath);
        sfx.volume = this.config.sfxVolume || 0.22;
        const playPromise = sfx.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // File missing (e.g. 404): record to prevent repeated 404 console noise and fall back to sweet Web Audio chime
            if (this._failedAudioFiles) this._failedAudioFiles.add(filePath);
            this.playWebAudioFallbackSound(soundType);
          });
          return;
        }
      } catch (err) {
        if (this._failedAudioFiles) this._failedAudioFiles.add(filePath);
      }
    }

    // 2. Fall back to gentle Web Audio harmonic tone
    this.playWebAudioFallbackSound(soundType);
  },

  /**
   * Gentle procedural Web Audio synthesizer fallback.
   * Produces whisper-soft, romantic chimes with soft attack and decay.
   * Guarantees visitor hears pleasant interaction feedback with zero external files needed!
   */
  playWebAudioFallbackSound(soundType) {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      if (!this._audioCtx) {
        this._audioCtx = new AudioCtx();
      }

      if (this._audioCtx.state === 'suspended') {
        this._audioCtx.resume().catch(() => {});
      }

      const now = this._audioCtx.currentTime;

      if (soundType === 'envelopeOpen') {
        // Soft double chime (D5 -> A5)
        const osc1 = this._audioCtx.createOscillator();
        const osc2 = this._audioCtx.createOscillator();
        const gain = this._audioCtx.createGain();

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(587.33, now); // D5
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(880.00, now + 0.08); // A5

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.08, now + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(this._audioCtx.destination);

        osc1.start(now);
        osc1.stop(now + 0.2);
        osc2.start(now + 0.08);
        osc2.stop(now + 0.35);

      } else if (soundType === 'giftClick') {
        // Gentle rising sparkle triad (C5 -> E5 -> G5)
        const notes = [523.25, 659.25, 783.99];
        notes.forEach((freq, idx) => {
          const osc = this._audioCtx.createOscillator();
          const gain = this._audioCtx.createGain();
          const noteTime = now + (idx * 0.06);

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, noteTime);

          gain.gain.setValueAtTime(0.001, noteTime);
          gain.gain.exponentialRampToValueAtTime(0.07, noteTime + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.25);

          osc.connect(gain);
          gain.connect(this._audioCtx.destination);

          osc.start(noteTime);
          osc.stop(noteTime + 0.25);
        });

      } else if (soundType === 'photoReveal') {
        // Warm celebratory harmonic chord (A major: A4, C#5, E5, A5)
        const chord = [440.00, 554.37, 659.25, 880.00];
        chord.forEach((freq) => {
          const osc = this._audioCtx.createOscillator();
          const gain = this._audioCtx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now);

          gain.gain.setValueAtTime(0.001, now);
          gain.gain.exponentialRampToValueAtTime(0.05, now + 0.04);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.65);

          osc.connect(gain);
          gain.connect(this._audioCtx.destination);

          osc.start(now);
          osc.stop(now + 0.65);
        });
      }
    } catch (e) {
      // AudioContext unavailable or blocked: fail completely silently
    }
  },

  /**
   * 3. INTERACTIVE 5 NUMBERED FRIENDSHIP LETTERS SYSTEM
   * Handles numerical sequential locking, envelope opening animations,
   * progress tracking, modal letter reading, and heart bursts.
   */
  initLettersSystem() {
    const letterCards = document.querySelectorAll('.letter-card');
    const modalOverlay = document.getElementById('letterModalOverlay');
    const closeBtn = document.getElementById('modalCloseBtn');
    const closeIconBtn = document.getElementById('modalCloseIconBtn');
    const continueBtn = document.getElementById('modalContinueBtn');

    // Initial UI state setup for envelopes (Letter 1 is open, 2-5 locked)
    this.updateLettersUI();
    this.updateProgress();

    // Attach click and keyboard listeners to each letter envelope
    letterCards.forEach((card) => {
      const letterNumber = parseInt(card.getAttribute('data-letter-id'), 10);

      card.addEventListener('click', () => {
        this.handleLetterClick(letterNumber, card);
      });

      // Accessible keyboard opening via Enter or Space
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.handleLetterClick(letterNumber, card);
        }
      });
    });

    // Modal Close Button handlers
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeLetterModal());
    }
    if (closeIconBtn) {
      closeIconBtn.addEventListener('click', () => this.closeLetterModal());
    }

    // Close when clicking modal backdrop
    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
          this.closeLetterModal();
        }
      });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
        this.closeLetterModal();
      }
    });

    // Continue Button Handler
    if (continueBtn) {
      continueBtn.addEventListener('click', () => {
        const currentId = this.state.currentOpenLetterId;
        this.closeLetterModal();

        if (currentId && currentId < 5) {
          const nextId = currentId + 1;
          const nextCard = document.querySelector(`.letter-card[data-letter-id="${nextId}"]`);
          
          // Smoothly scroll and open the next letter
          setTimeout(() => {
            if (nextCard) {
              nextCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
              this.handleLetterClick(nextId, nextCard);
            }
          }, 250);
        } else if (currentId === 5) {
          // 5th Letter leads smoothly to the gift section
          setTimeout(() => {
            const giftSection = document.getElementById('gift');
            if (giftSection) {
              giftSection.scrollIntoView({ behavior: 'smooth' });
            }
            this.moveTeddyTo('pos-gift', "Here is your final birthday surprise! 🎁");
          }, 300);
        }
      });
    }
  },

  /**
   * Handles user interaction on a letter envelope
   * @param {number} letterId - Number from 1 to 5
   * @param {HTMLElement} cardElement - The envelope card element
   */
  handleLetterClick(letterId, cardElement) {
    // 1. Enforce numerical order: cannot skip ahead to locked letters
    if (letterId > this.state.unlockedLetterMax) {
      console.log(`[BirthdayApp] Letter #${letterId} is locked. Must read #${letterId - 1} first.`);
      
      // Play locked shake animation
      if (cardElement) {
        cardElement.classList.remove('shake');
        void cardElement.offsetWidth; // force reflow
        cardElement.classList.add('shake');
      }

      // Teddy guide helpful prompt
      this.setTeddySpeech(`Psst! Open Note #${this.state.unlockedLetterMax} first to unlock this surprise! 💌`);
      return;
    }

    console.log(`[BirthdayApp] Opening Note #${letterId}`);

    // 2. Trigger envelope opening animation on card & gentle sound
    this.playInteractionSound('envelopeOpen');

    // 1. Envelope flap opens, 2. Note slides out
    if (cardElement) {
      cardElement.classList.add('is-opening');
    }

    // 3. Mark as opened and unlock the next letter in numerical order
    this.state.openedLettersSet.add(letterId);
    this.state.openedLettersCount = this.state.openedLettersSet.size;

    if (letterId === this.state.unlockedLetterMax && this.state.unlockedLetterMax < 5) {
      this.state.unlockedLetterMax = letterId + 1;
    }

    // 4. Update UI cards and progress counter
    this.updateLettersUI();
    this.updateProgress();

    // 4. Spawn a burst of tiny flowers and hearts around the note
    this.triggerLetterHeartBurst();

    // 5. A small happy bounce when a letter opens
    const guideEl = document.getElementById('teddyGuide');
    if (guideEl) {
      guideEl.classList.remove('happy-bounce');
      void guideEl.offsetWidth;
      guideEl.classList.add('happy-bounce');
      setTimeout(() => guideEl && guideEl.classList.remove('happy-bounce'), 800);
    }

    // 5. Teddy guide displays a short friendship-themed reaction
    if (this.state.openedLettersSet.size >= this.state.totalLetters) {
      this.unlockGiftBox();
    } else {
      const reaction = this.config.letterReactions[letterId] || "Aww, such a sweet memory! 🌸";
      this.moveTeddyTo('pos-letters-reading', reaction);
    }

    // 3. Smooth sequence: Note slides out, then message modal fades into view
    setTimeout(() => {
      this.openLetterModal(letterId, cardElement);
      if (cardElement) {
        cardElement.classList.remove('is-opening');
      }
    }, 380);
  },

  /**
   * Populates and displays the letter reading modal
   * @param {number} letterId - The ID of the letter to display
   */
  openLetterModal(letterId, triggerElement = null) {
    const modal = document.getElementById('letterModalOverlay');
    const badgeEl = document.getElementById('modalLetterBadge');
    const noteHeadingEl = document.getElementById('modalNoteHeading');
    const dateEl = document.getElementById('modalLetterDate');
    const titleEl = document.getElementById('modalLetterTitle');
    const greetingEl = document.getElementById('modalLetterGreeting');
    const bodyEl = document.getElementById('modalLetterBody');
    const closingEl = document.getElementById('modalLetterClosing');
    const signatureEl = document.getElementById('modalLetterSignature');
    const continueBtnText = document.getElementById('modalContinueBtnText');
    const closeIconBtn = document.getElementById('modalCloseIconBtn');

    const letter = this.lettersData.find((l) => l.id === letterId);
    if (!letter || !modal) return;

    this.state.currentOpenLetterId = letterId;
    this._lastFocusedLetterCard = triggerElement || document.activeElement;

    // Populate letter contents from centralized data
    if (badgeEl) badgeEl.textContent = letter.badge;
    if (noteHeadingEl) noteHeadingEl.textContent = `Note ${letterId} 🌸`;
    if (dateEl) dateEl.textContent = letter.date;
    if (titleEl) titleEl.textContent = letter.title;
    if (greetingEl) greetingEl.textContent = letter.greeting;
    if (bodyEl) {
      if (letter.body.includes('\n\n')) {
        bodyEl.innerHTML = letter.body
          .split(/\n\n+/)
          .map(p => `<p class="letter-para">${p.trim().replace(/\n/g, '<br>')}</p>`)
          .join('');
      } else {
        bodyEl.textContent = letter.body;
      }
    }
    if (closingEl) closingEl.textContent = letter.closing;
    if (signatureEl) signatureEl.textContent = letter.signature;

    // Configure continue button text
    if (continueBtnText) {
      if (letterId < 5) {
        continueBtnText.textContent = `Continue to Note #${letterId + 1} 💌`;
      } else {
        continueBtnText.textContent = 'Unlock Your Birthday Surprise 🎁';
      }
    }

    // Trigger gentle floating flowers & hearts around the opened note modal
    this.triggerLetterHeartBurst();

    // 5. A small happy bounce when a letter opens
    const guideEl = document.getElementById('teddyGuide');
    if (guideEl) {
      guideEl.classList.remove('happy-bounce');
      void guideEl.offsetWidth;
      guideEl.classList.add('happy-bounce');
      setTimeout(() => guideEl && guideEl.classList.remove('happy-bounce'), 800);
    }

    // Reveal modal with smooth animation
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // prevent background scrolling while reading

    // Set focus to close button inside modal for accessibility
    if (closeIconBtn) {
      setTimeout(() => closeIconBtn.focus(), 150);
    }
  },

  /**
   * Closes the letter reading modal smoothly and restores focus
   */
  closeLetterModal() {
    const modal = document.getElementById('letterModalOverlay');
    if (!modal) return;

    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // restore scrolling

    // Restore focus to letter card for keyboard navigation
    if (this._lastFocusedLetterCard && typeof this._lastFocusedLetterCard.focus === 'function') {
      this._lastFocusedLetterCard.focus();
    }
  },

  /**
   * Spawns a celebratory burst of floating hearts and tiny flowers when a letter is opened
   */
  triggerLetterHeartBurst() {
    const burstContainer = document.getElementById('letterHeartBurst');
    if (!burstContainer) return;

    burstContainer.innerHTML = '';
    const symbols = ['🌸', '💗', '✨', '🌷', '💖', '🌼', '💕', '⭐'];

    for (let i = 0; i < 12; i++) {
      const heart = document.createElement('span');
      heart.className = 'burst-heart';
      heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];

      const startLeft = 32 + Math.random() * 36; // 32% - 68% spread
      const startTop = 40 + Math.random() * 20;
      const burstX = (Math.random() - 0.5) * 180;
      const burstY = -(100 + Math.random() * 130);
      const burstRot = (Math.random() - 0.5) * 75;

      heart.style.left = `${startLeft}%`;
      heart.style.top = `${startTop}%`;
      heart.style.setProperty('--burst-x', `${burstX}px`);
      heart.style.setProperty('--burst-y', `${burstY}px`);
      heart.style.setProperty('--burst-rot', `${burstRot}deg`);

      burstContainer.appendChild(heart);
    }

    // Clean up particles
    setTimeout(() => {
      if (burstContainer) burstContainer.innerHTML = '';
    }, 2200);
  },

  /**
   * Updates all envelope cards according to current progress (available, opened, locked)
   */
  updateLettersUI() {
    const cards = document.querySelectorAll('.letter-card');

    cards.forEach((card) => {
      const id = parseInt(card.getAttribute('data-letter-id'), 10);
      const pill = card.querySelector('.letter-status-pill');

      card.classList.remove('is-available', 'is-locked', 'is-opened');

      if (this.state.openedLettersSet.has(id)) {
        // Opened & Revisited Letter
        card.classList.add('is-opened');
        card.setAttribute('aria-label', `Revisit Letter ${id}: ${this.lettersData[id - 1].title}`);
        if (pill) pill.textContent = 'Opened 💌';
      } else if (id <= this.state.unlockedLetterMax) {
        // Available for reading
        card.classList.add('is-available');
        card.setAttribute('aria-label', `Open Letter ${id}: ${this.lettersData[id - 1].title}`);
        if (pill) pill.textContent = 'Open Me ✨';
      } else {
        // Locked Letter
        card.classList.add('is-locked');
        card.setAttribute('aria-label', `Letter ${id} is locked. Open previous letters first.`);
        if (pill) pill.textContent = 'Locked 🔒';
      }
    });
  },

  /**
   * Updates the progress bar and counter text
   */
  updateProgress() {
    const progressText = document.getElementById('lettersProgressText');
    const progressBar = document.getElementById('lettersProgressBar');
    const count = this.state.openedLettersCount;
    const total = this.state.totalLetters;

    if (progressText) {
      progressText.textContent = `${count} of ${total} little surprises discovered 💗`;
    }

    if (progressBar) {
      const pct = Math.round((count / total) * 100);
      progressBar.style.width = `${pct}%`;
      const track = progressBar.parentElement;
      if (track) track.setAttribute('aria-valuenow', count);
    }
  },

  /**
   * 4. INTERACTIVE GIFT BOX SYSTEM & OPENING SEQUENCE
   * Unlocks once all 5 letters have been opened.
   * Features: Gentle shake -> Ribbon loosen -> Lid opens upward ->
   * Inner glow blooms -> Hearts & confetti burst outward ->
   * Photograph reveal placeholder area emerges.
   */
  /**
   * 4. INTERACTIVE GIFT BOX SYSTEM & OPENING SEQUENCE
   * Unlocks once all 5 letters have been opened.
   * Features: Gentle shake -> Ribbon loosen -> Lid opens upward ->
   * Inner glow blooms -> Hearts & confetti burst outward ->
   * Centered picture modal popup emerges -> Return to opened gift box ->
   * Final birthday note appears upon closing.
   */
  initGiftBox() {
    const giftBoxContainer = document.getElementById('giftBoxContainer');
    const interactiveBox = document.getElementById('giftBoxInteractive');
    const giftBtn = document.getElementById('openGiftBtn');
    const giftLockBadge = document.getElementById('giftLockBadge');
    const giftUnlockedBadge = document.getElementById('giftUnlockedBadge');
    const instructionText = document.getElementById('giftInstructionText');
    const pictureModalOverlay = document.getElementById('pictureModalOverlay');
    const pictureModalCloseIconBtn = document.getElementById('pictureModalCloseIconBtn');
    const pictureModalBackBtn = document.getElementById('pictureModalBackBtn');
    const pictureDialog = document.querySelector('.picture-modal-dialog');
    const viewPictureAgainBtn = document.getElementById('viewPictureAgainBtn');

    if (!giftBoxContainer) return;

    // Enforce initial locked state until all 5 letters have been opened
    if (!this.state.isGiftBoxUnlocked) {
      giftBoxContainer.classList.add('is-locked');
      giftBoxContainer.classList.remove('is-unlocked');
      if (giftBtn) giftBtn.disabled = true;
      if (giftLockBadge) giftLockBadge.style.display = 'inline-flex';
      if (giftUnlockedBadge) giftUnlockedBadge.style.display = 'none';
      if (instructionText) {
        instructionText.textContent = BIRTHDAY_CONFIG.giftInstructionLocked;
      }
    }

    // Attach click and keyboard listeners to the interactive box
    if (interactiveBox) {
      interactiveBox.addEventListener('click', () => {
        this.handleGiftBoxInteraction(interactiveBox);
      });

      interactiveBox.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.handleGiftBoxInteraction(interactiveBox);
        }
      });
    }

    // Attach click listener to the action button
    if (giftBtn) {
      giftBtn.addEventListener('click', () => {
        this.handleGiftBoxInteraction(giftBtn);
      });
    }

    // Picture Modal Close Icon Button
    if (pictureModalCloseIconBtn) {
      pictureModalCloseIconBtn.addEventListener('click', () => {
        this.closePictureModal();
      });
    }

    // Picture Modal "Back to the Surprise 🎁" Button
    if (pictureModalBackBtn) {
      pictureModalBackBtn.addEventListener('click', () => {
        this.closePictureModal();
      });
    }

    // Prevent clicks inside the picture modal dialog from closing the popup accidentally
    if (pictureDialog) {
      pictureDialog.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    }

    // Close when clicking modal backdrop
    if (pictureModalOverlay) {
      pictureModalOverlay.addEventListener('click', (e) => {
        if (e.target === pictureModalOverlay) {
          this.closePictureModal();
        }
      });
    }

    // Close picture modal on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.state.isPictureModalOpen) {
        this.closePictureModal();
      }
    });

    // Button on final note: "View Surprise Picture Again 🌸"
    if (viewPictureAgainBtn) {
      viewPictureAgainBtn.addEventListener('click', () => {
        this.openPictureModal(viewPictureAgainBtn);
      });
    }
  },

  /**
   * Handles user click on either the box or the button
   * @param {HTMLElement|null} triggerEl - The clicked element
   */
  handleGiftBoxInteraction(triggerEl = null) {
    const giftBoxContainer = document.getElementById('giftBoxContainer');

    // 1. If still locked, prevent opening, shake box, and guide with teddy
    if (!this.state.isGiftBoxUnlocked) {
      console.log('[BirthdayApp] Gift box is locked. Complete all 5 letters first.');
      if (giftBoxContainer) {
        giftBoxContainer.classList.remove('shake');
        void giftBoxContainer.offsetWidth; // force reflow
        giftBoxContainer.classList.add('shake');
      }
      this.setTeddySpeech(BIRTHDAY_CONFIG.teddySpeech.giftLockedTap);
      return;
    }

    // 2. If already opened, open the picture modal directly without repeating opening animation
    if (this.state.isGiftOpened) {
      this.openPictureModal(triggerEl || document.getElementById('openGiftBtn') || document.getElementById('giftBoxInteractive'));
      return;
    }

    // 3. Prevent repeated clicks while opening animation is in progress
    if (this.state.isGiftOpening) {
      console.log('[BirthdayApp] Gift opening already in progress.');
      return;
    }

    // 4. Play gentle gift box interaction sound
    this.playInteractionSound('giftClick');

    // 5. Trigger sequential opening animation
    this.triggerGiftOpeningAnimation(triggerEl);
  },

  /**
   * Unlocks the gift box once all 5 letters are completed
   */
  unlockGiftBox() {
    this.state.isGiftBoxUnlocked = true;

    const giftBoxContainer = document.getElementById('giftBoxContainer');
    const giftBtn = document.getElementById('openGiftBtn');
    const giftLockBadge = document.getElementById('giftLockBadge');
    const giftUnlockedBadge = document.getElementById('giftUnlockedBadge');
    const instructionText = document.getElementById('giftInstructionText');
    const tapHint = document.getElementById('giftTapHint');

    if (giftBoxContainer) {
      giftBoxContainer.classList.remove('is-locked');
      giftBoxContainer.classList.add('is-unlocked');
    }

    if (giftLockBadge) giftLockBadge.style.display = 'none';
    if (giftUnlockedBadge) giftUnlockedBadge.style.display = 'inline-flex';
    
    // Display requested subtitle:
    if (instructionText) {
      instructionText.textContent = BIRTHDAY_CONFIG.giftSubtitle;
    }

    if (tapHint) {
      tapHint.textContent = "Click box to open! 🎀";
    }

    if (giftBtn) {
      giftBtn.disabled = false;
      const btnText = document.getElementById('openGiftBtnText');
      if (btnText) btnText.textContent = "Open Your Surprise 🎀";
    }

    // 6. Excited reaction when all five letters are completed
    const guideExcited = document.getElementById('teddyGuide');
    if (guideExcited) {
      guideExcited.classList.remove('is-celebrating', 'is-heartfelt');
      guideExcited.classList.add('is-excited');
    }

    this.moveTeddyTo('pos-gift', BIRTHDAY_CONFIG.teddySpeech.allLettersUnlocked);
  },

  /**
   * Executes the 6-stage opening animation followed by opening the picture modal
   * @param {HTMLElement|null} triggerEl - Triggering element for focus management
   */
  triggerGiftOpeningAnimation(triggerEl = null) {
    this.state.isGiftOpening = true;

    const interactiveBox = document.getElementById('giftBoxInteractive');
    const innerGlow = document.getElementById('giftInnerGlow');
    const giftBtn = document.getElementById('openGiftBtn');
    const btnText = document.getElementById('openGiftBtnText');

    // Reduced motion alternative: immediate reveal without motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      this.playInteractionSound('photoReveal');
      const surpriseMsg = document.getElementById('giftSurpriseMessage');
      if (surpriseMsg) {
        surpriseMsg.classList.remove('is-hidden');
        surpriseMsg.classList.add('is-revealed');
      }
      const instructionText = document.getElementById('giftInstructionText');
      if (instructionText) {
        instructionText.textContent = "A little surprise, just for you... 💗";
      }
      if (interactiveBox) interactiveBox.classList.add('ribbon-loosened', 'lid-opened');
      if (innerGlow) innerGlow.classList.add('glow-active');
      if (btnText) btnText.textContent = "Open Your Surprise 🎀";
      if (giftBtn) giftBtn.disabled = false;
      this.state.isGiftOpening = false;
      this.state.isGiftOpened = true;
      this.openPictureModal(triggerEl || giftBtn || interactiveBox);
      return;
    }

    // Step 1: The box gently shakes
    if (interactiveBox) {
      interactiveBox.classList.add('is-shaking');
    }

    // Step 2: The ribbon loosens
    setTimeout(() => {
      if (interactiveBox) {
        interactiveBox.classList.remove('is-shaking');
        interactiveBox.classList.add('ribbon-loosened');
      }
    }, 450);

    // Step 3: The lid opens upward (Confirms lid has opened)
    setTimeout(() => {
      if (interactiveBox) {
        interactiveBox.classList.add('lid-opened');
      }

      // Show small, elegant message: "A little surprise, just for you... 💗"
      const surpriseMsg = document.getElementById('giftSurpriseMessage');
      if (surpriseMsg) {
        surpriseMsg.classList.remove('is-hidden');
        surpriseMsg.classList.add('is-revealed');
      }
      const surpriseText = document.getElementById('giftSurpriseText');
      if (surpriseText) {
        surpriseText.textContent = "A little surprise, just for you... 💗";
      }
      const instructionText = document.getElementById('giftInstructionText');
      if (instructionText) {
        instructionText.textContent = "A little surprise, just for you... 💗";
      }
      this.setTeddySpeech("A little surprise, just for you... 💗", 5000);
      // Kannaana Kanne continues playing during the gift opening animation
    }, 750);

    // Step 4: A warm pink glow appears from inside
    setTimeout(() => {
      if (innerGlow) {
        innerGlow.classList.add('glow-active');
      }
    }, 850);

    // Step 5: Small hearts and confetti burst outward
    setTimeout(() => {
      this.triggerGiftConfettiBurst();
    }, 950);

    // Step 6: Confirms lid opening and smoothly opens the surprise picture popup modal
    setTimeout(() => {
      // Play gentle celebratory photo reveal sound
      this.playInteractionSound('photoReveal');

      if (btnText) {
        btnText.textContent = "Open Your Surprise 🎀";
      }
      if (giftBtn) {
        giftBtn.disabled = false;
      }

      this.state.isGiftOpening = false;
      this.state.isGiftOpened = true;

      // Guide companion delivers initial sweet reaction
      this.moveTeddyTo('pos-gift', BIRTHDAY_CONFIG.teddySpeech.giftRevealed);

      // Open the picture popup modal (which triggers Magale when picture becomes visible)
      this.openPictureModal(triggerEl || giftBtn || interactiveBox);
    }, 1300);
  },

  /**
   * Opens the centered picture modal displaying surprise.png
   * @param {HTMLElement|null} triggerElement - Element that initiated the opening for focus restoration
   */
  openPictureModal(triggerElement = null) {
    if (triggerElement) {
      this.state.lastGiftTriggerElement = triggerElement;
    } else if (document.activeElement) {
      this.state.lastGiftTriggerElement = document.activeElement;
    }

    const pictureModal = document.getElementById('pictureModalOverlay');
    if (!pictureModal) return;

    this.state.isPictureModalOpen = true;
    pictureModal.classList.add('active');
    pictureModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Trigger gentle floating sparkles and hearts around the picture
    this.triggerPictureSparkleBurst();

    // 7. A cheerful celebration when the surprise picture appears
    const guideCelebrating = document.getElementById('teddyGuide');
    if (guideCelebrating) {
      guideCelebrating.classList.remove('is-excited', 'is-heartfelt');
      guideCelebrating.classList.add('is-celebrating');
    }
    this.setTeddySpeech(BIRTHDAY_CONFIG.teddySpeech.pictureReveal || "Awww, look at this memory! 🥹", 5000);

    // Switch music to Magale when the picture popup opens
    if (this.musicController) {
      this.musicController.onPictureModalOpen();
    }

    // Accessible keyboard focus management
    const closeBtn = document.getElementById('pictureModalCloseIconBtn') || document.getElementById('pictureModalBackBtn');
    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 150);
    }
  },

  /**
   * Closes the picture popup, returns smoothly to the gift section,
   * keeps the gift box opened, and reveals the final note on first close.
   */
  closePictureModal() {
    const pictureModal = document.getElementById('pictureModalOverlay');
    if (!pictureModal || !this.state.isPictureModalOpen) return;

    this.state.isPictureModalOpen = false;
    const guideOnModalClose = document.getElementById('teddyGuide');
    if (guideOnModalClose) {
      guideOnModalClose.classList.remove('is-celebrating');
    }
    pictureModal.classList.remove('active');
    pictureModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // Stop Magale and restore default background track (Kannaana Kanne)
    if (this.musicController) {
      this.musicController.onPictureModalClose();
    }

    // Smoothly ensure the gift box section remains in view
    const giftBoxContainer = document.getElementById('giftBoxContainer');
    if (giftBoxContainer && typeof giftBoxContainer.scrollIntoView === 'function') {
      giftBoxContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Restore keyboard focus to the button that opened it
    if (this.state.lastGiftTriggerElement && typeof this.state.lastGiftTriggerElement.focus === 'function') {
      this.state.lastGiftTriggerElement.focus();
    }

    // STEP 4: After the picture popup has been closed for the first time:
    // Display the elegant final birthday note beneath the gift box
    if (!this.state.hasSeenPictureOnce) {
      this.state.hasSeenPictureOnce = true;
      this.revealFinalBirthdayNote();
    }
  },

  /**
   * Reveals the final birthday note beneath the gift box with a gentle fade-in
   */
  revealFinalBirthdayNote() {
    const finalNote = document.getElementById('finalBirthdayNote');
    if (!finalNote) return;

    const headingEl = document.getElementById('finalNoteHeading');
    const msgPara = finalNote.querySelector('.final-note-body .letter-para');

    if (headingEl) {
      headingEl.textContent = BIRTHDAY_CONFIG.finalNoteHeading;
    }
    if (msgPara) {
      msgPara.textContent = BIRTHDAY_CONFIG.finalNoteMessage;
    }

    finalNote.classList.remove('is-hidden');
    // Force reflow for fade-in transition
    void finalNote.offsetWidth;
    finalNote.classList.add('is-revealed');
    finalNote.setAttribute('aria-hidden', 'false');

    // 8. Friendly expression when the final birthday wish appears
    const guideFinalWish = document.getElementById('teddyGuide');
    if (guideFinalWish) {
      guideFinalWish.classList.remove('is-celebrating', 'is-excited');
      guideFinalWish.classList.add('is-heartfelt');
    }
    this.setTeddySpeech(BIRTHDAY_CONFIG.teddySpeech.finalWish || "Happy Birthday, MADHU! Never stop smiling! ❤️", 6000);
  },

  /**
   * Spawns gentle floating sparkles and hearts around the picture
   */
  triggerPictureSparkleBurst() {
    const burstContainer = document.getElementById('pictureSparkleBurst');
    if (!burstContainer) return;

    burstContainer.innerHTML = '';
    const symbols = ['✨', '💖', '💗', '🌸', '🎀', '⭐'];
    const count = 16;

    for (let i = 0; i < count; i++) {
      const p = document.createElement('span');
      p.className = 'picture-sparkle-particle';
      p.textContent = symbols[i % symbols.length];

      const startLeft = 30 + Math.random() * 40;
      const startTop = 35 + Math.random() * 30;
      const burstX = (Math.random() - 0.5) * 260;
      const burstY = -(60 + Math.random() * 140);
      const burstRot = (Math.random() - 0.5) * 60;
      const delay = Math.random() * 0.4;

      p.style.left = `${startLeft}%`;
      p.style.top = `${startTop}%`;
      p.style.setProperty('--sparkle-x', `${burstX}px`);
      p.style.setProperty('--sparkle-y', `${burstY}px`);
      p.style.setProperty('--sparkle-rot', `${burstRot}deg`);
      p.style.animationDelay = `${delay}s`;

      burstContainer.appendChild(p);
    }

    setTimeout(() => {
      if (burstContainer) burstContainer.innerHTML = '';
    }, 2500);
  },

  /**
   * Spawns multi-colored celebratory hearts & confetti particles
   */
  triggerGiftConfettiBurst() {
    const container = document.getElementById('giftConfettiContainer');
    if (!container) return;

    container.innerHTML = '';
    const symbols = ['💖', '💗', '💕', '✨', '🎀', '🌸', '⭐', '🎉', '💖', '💗'];
    const count = 22;

    for (let i = 0; i < count; i++) {
      const particle = document.createElement('span');
      particle.className = 'gift-burst-particle';
      particle.textContent = symbols[i % symbols.length];

      // Spread in a wide festive upward arc (-140px to +140px x, -120px to -220px y)
      const burstX = (Math.random() - 0.5) * 280;
      const burstY = -(100 + Math.random() * 120);
      const burstScale = 0.8 + Math.random() * 0.7;
      const burstRot = (Math.random() - 0.5) * 360;

      particle.style.left = '50%';
      particle.style.top = '40%';
      particle.style.setProperty('--burst-x', `${burstX}px`);
      particle.style.setProperty('--burst-y', `${burstY}px`);
      particle.style.setProperty('--burst-scale', `${burstScale}`);
      particle.style.setProperty('--burst-rot', `${burstRot}deg`);
      particle.style.fontSize = `${0.9 + Math.random() * 0.6}rem`;

      container.appendChild(particle);
    }

    // Clean up particles
    setTimeout(() => {
      if (container) container.innerHTML = '';
    }, 2500);
  },

  /**
   * 7. EXPLORE BUTTON ACTION
   * Smoothly navigates to the letters and prompts the teddy companion.
   */
  initExploreButton() {
    const startExploringBtn = document.getElementById('startExploringBtn');
    if (startExploringBtn) {
      startExploringBtn.addEventListener('click', () => {
        this.moveTeddyTo('pos-letters', BIRTHDAY_CONFIG.teddySpeech.exploreLettersPrompt);
      });
    }
  }
};

// Initialize application on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
  BirthdayApp.init();
});
