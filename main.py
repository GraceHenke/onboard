def on_button_pressed_a():
    for index in range(3):
        basic.pause(100)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            # # # # #
            """)
        basic.pause(100)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            """)
        basic.pause(100)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.pause(100)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    
    basic.show_string("Earthquake!")
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_forever():
    
        pass
basic.forever(on_forever)

