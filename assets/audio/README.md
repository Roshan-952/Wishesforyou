# Birthday Surprise Website - Audio Assets Directory

This directory stores the optional background music track and subtle interaction sound effects for the website.

## Audio Files

| File Name | Purpose | Behavior & Fallback |
| :--- | :--- | :--- |
| `background-music.mp3` | Optional background melody | Starts **only** when visitor clicks the **Music: Off / Music: Playing** toggle button. Plays at a gentle, soothing volume level. If omitted, the website runs smoothly with no errors. |
| `envelope-open.mp3` | Optional envelope opening chime | Plays softly when a birthday letter envelope is opened. If absent, a whisper-soft Web Audio harmonic chime plays automatically. |
| `gift-click.mp3` | Optional gift box click sound | Plays when the unlocked birthday gift box is clicked. If absent, a gentle rising sparkle triad chime plays automatically. |
| `photoReveal.mp3` / `photo-reveal.mp3` | Optional memory reveal chime | Plays when the photograph reveal card emerges from the gift box. If absent, a warm harmonic chord chime plays automatically. |

## Notes on User Experience & Autoplay

* **Never Autoplays on Load**: Browser autoplay policies are strictly respected; audio only starts upon explicit visitor interaction.
* **Mute Anytime**: The visitor can toggle music off or on at any time using the header button.
* **Non-Intrusive**: Sounds are whisper-soft and never interrupt reading or birthday messages.
* **Error-Proof**: Missing audio files will never crash or halt any visual or interactive feature.
