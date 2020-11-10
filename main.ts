namespace progressBarLoadingAnimation
{
    //% blockId=progressBarAnimationLoading
    //% block="progressBarBlock LedBaslangicSirasi=$LedSirasi, LedSiraSayisi=$LedSayisi, Durum=$durum"
    //% LedSirasi.defl=1 LedSayisi.defl=3 durum.defl=true
    //% LedSirasi.min=0 LedSirasi.max=4
    //% LedSayisi.min=1 LedSayisi.max=5
    //% color="#FA8072"

export function ProgressBarAnimasyon (LedSirasi: number, LedSayisi: number, durum: boolean):void
 {
    if (durum) {
        for (let satir = 0; satir <= 4; satir++) {
            for (let sutun = 0; sutun <= LedSayisi - 1; sutun++) {
                led.plot(satir, sutun + LedSirasi)
                for (let index = 0; index <= 50; index++) {
                    led.setBrightness(index * 4 + 55)
                    basic.pause(10)
                }
                led.setBrightness(55)
            }
        }
        for (let index2 = 0; index2 < 4; index2++) {
            led.enable(false)
            basic.pause(100)
            led.enable(true)
            basic.pause(100)
        }
        led.setBrightness(255)
    }
}
let durum = true
basic.forever(function () {
    ProgressBarAnimasyon(2, 2, durum)
    durum = false
})
}
