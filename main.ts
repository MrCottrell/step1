basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
let motor = stepperMotor.createMotor(
DigitalPin.P0,
DigitalPin.P1,
DigitalPin.P2,
DigitalPin.P8
)
motor.setDelay(0)
basic.forever(function () {
    motor.moveClockwise(100, stepUnit.Steps)
    motor.stopMotor()
})
