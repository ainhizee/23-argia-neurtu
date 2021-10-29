basic.forever(function () {
    if (input.lightLevel() > 45) {
        basic.showString("EGUNON")
    }
})
basic.forever(function () {
    if (input.lightLevel() > 45) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    }
})
