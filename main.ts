input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            # . . . .
            # # . . .
            # . . . .
            . # . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # . . .
            # # # . .
            . # . . .
            # . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . # . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # #
            . . . . #
            . . . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 3; index++) {
        basic.showNumber(index)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Earthquake!")
    if (input.lightLevel() == 100) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            . # . # .
            `)
    }
})
