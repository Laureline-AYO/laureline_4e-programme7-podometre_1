input.onButtonPressed(Button.A, function () {
    basic.showNumber(pas)
})
input.onButtonPressed(Button.AB, function () {
    pas = 0
    basic.showNumber(pas)
})
let pas = 0
pas = 0
basic.showNumber(pas)
basic.forever(function () {
    if (input.isGesture(Gesture.Shake) || input.isGesture(Gesture.LogoDown)) {
        pas += 1
    }
})
