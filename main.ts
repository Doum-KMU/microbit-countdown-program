input.onButtonPressed(Button.A, function () {
    if (초 < 60) {
        초 += 1
        basic.showNumber(초)
        basic.clearScreen()
    }
})
input.onGesture(Gesture.Shake, function () {
    while (초 > 0) {
        basic.showNumber(초)
        basic.pause(1000)
        초 += -1
    }
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.B, function () {
    if (초 < 50) {
        초 += 10
        basic.showNumber(초)
        basic.clearScreen()
    }
})
let 초 = 0
초 = 60
