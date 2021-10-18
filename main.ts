input.onButtonPressed(Button.A, function () {
    snakeheadiculus.turn(Direction.Right, 45)
})
let snakeheadiculus: game.LedSprite = null
snakeheadiculus = game.createSprite(0, 0)
let snack = game.createSprite(randint(0, 4), randint(0, 4))
while (true) {
    snakeheadiculus.move(1)
    basic.pause(500)
}
if (snakeheadiculus.isTouching(snack)) {
    snack.delete()
}
basic.forever(function () {
	
})
