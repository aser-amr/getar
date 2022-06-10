let $$$ = 0
basic.showIcon(IconNames.EigthNote)
music.setBuiltInSpeakerEnabled(true)
basic.forever(function () {
    $$$ = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
    if ($$$ >= 6 && $$$ <= 8) {
        music.playTone(523, music.beat(BeatFraction.Whole))
    } else if ($$$ > 8 && $$$ <= 10) {
        music.playTone(587, music.beat(BeatFraction.Whole))
    } else if ($$$ > 10 && $$$ <= 12) {
        music.playTone(659, music.beat(BeatFraction.Whole))
    } else if ($$$ > 12 && $$$ <= 14) {
        music.playTone(698, music.beat(BeatFraction.Whole))
    } else if ($$$ > 14 && $$$ <= 16) {
        music.playTone(784, music.beat(BeatFraction.Whole))
    } else if ($$$ > 16 && $$$ <= 18) {
        music.playTone(880, music.beat(BeatFraction.Whole))
    } else if ($$$ > 18 && $$$ <= 20) {
        music.playTone(988, music.beat(BeatFraction.Whole))
    }
})
