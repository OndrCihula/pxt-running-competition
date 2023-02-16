
let zavod = false

radio.setGroup(9);
radio.setTransmitPower(7);

RunComp.SetLightLevel()

radio.onReceivedNumber(function(receivedNumber: number) {
    if(receivedNumber === 1) {
        zavod = true
    }
    if(receivedNumber === 2) {
        zavod = false
    }
})


RunComp.OnLightDrop(function() {
    if(zavod === true) {
        music.playTone(Note.C, music.beat(BeatFraction.Whole))
        radio.sendNumber(55)
    }
})
