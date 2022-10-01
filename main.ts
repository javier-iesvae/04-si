input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.No)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Square)
    }
    if (input.buttonIsPressed(Button.AB)) {
        basic.showIcon(IconNames.Ghost)
    }
})
