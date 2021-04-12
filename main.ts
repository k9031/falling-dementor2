namespace SpriteKind {
    export const Gap = SpriteKind.create()
     export const Glub_Glub = SpriteKind.create()
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.Gap, function(sprite: Sprite, otherSprite: Sprite) {
info.changeScoreBy(1)
 dementor.startEffect(effects.ashes, 350)
 otherSprite.setFlag (SpriteFlag.Ghost, true)
})
    info.setLife(10000000)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Glub_Glub, function(sprite: Sprite, otherSprite: Sprite) {
info.changeScoreBy(-1)
info.changeLifeBy(-1)
dementor.startEffect(effects.fire, 250)
otherSprite.setFlag (SpriteFlag.Ghost, true)
})
// Jump on A button
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dementor.vy = -100
animation.runImageAnimation(
    dementor,
    dementorAnimationFrames,
    50,
    false
    )
})
enum ActionKind {
    Walking,
    Idle,
    Jumping
}
startGame()
// Game over when falling out of screen
game.onUpdate(function () {
    if (dementor.bottom > 125) {
        game.over(false)
    }
})
// Game over when jumping out of screen
game.onUpdate(function () {
    if (dementor.top < 0) {
        game.over(false)
    }
})
