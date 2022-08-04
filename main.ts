namespace SpriteKind {
    export const Ninja = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ninja, function (sprite, otherSprite) {
    info.stopCountdown()
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    otherSprite.changeScale(2, ScaleAnchor.Middle)
    otherSprite.setPosition(80, 60)
    otherSprite.sayText("You found me!", 2000, true)
    pause(2000)
    game.over(true, effects.confetti)
})
let hidingSprite: Sprite = null
scene.setBackgroundColor(7)
game.setDialogFrame(img`
    ..ffffffffffffffffffff..
    .f11ff11ff11ff11ff11fff.
    fff11ff11ff11ff11ff11f1f
    ff1ffffffffffffffffff11f
    f11ff11111111111111ff1ff
    f1ff1111111111111111ffff
    ffff1111111111111111ff1f
    ff1f1111111111111111f11f
    f11f1111111111111111f1ff
    f1ff1111111111111111ffff
    ffff1111111111111111ff1f
    ff1f1111111111111111f11f
    f11f1111111111111111f1ff
    f1ff1111111111111111ffff
    ffff1111111111111111ff1f
    ff1f1111111111111111f11f
    f11f1111111111111111f1ff
    f1ff1111111111111111ffff
    ffff1111111111111111ff1f
    ff1ff11111111111111ff11f
    f11ffffffffffffffffff1ff
    f1f11ff11ff11ff11ff11fff
    .fff11ff11ff11ff11ff11f.
    ..ffffffffffffffffffff..
    `)
game.showLongText("Can you find the ninja?", DialogLayout.Center)
let ninjaSprite = sprites.create(img`
    . . . . f f f f f . . . 
    . . . f f f f f f f . . 
    f . f f f f f f f f f . 
    . f f b f f f f f b f . 
    f . f d 1 1 b 1 1 d f . 
    . . f f 1 f d f 1 f f . 
    . . . f f f f f f f . . 
    . . . . f f f f f . . . 
    . . . f f f f f f f . . 
    . . f f f f f f f f f . 
    . . f f f f f f f f f . 
    . f . f f f f f f f . f 
    . f . f f f f f f f . f 
    . . . . f f f f f . . . 
    . . . . f f . f f . . . 
    . . . f f f . f f f . . 
    `, SpriteKind.Ninja)
ninjaSprite.setPosition(randint(10, 150), randint(10, 110))
for (let index = 0; index < 30; index++) {
    hidingSprite = sprites.create(img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d d f f . . 
        . . e f e 4 4 4 4 e f e . . 
        . e 4 f b 3 3 3 3 b f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `, SpriteKind.Enemy)
    hidingSprite.setPosition(randint(10, 150), randint(10, 110))
}
let lookingGlass = sprites.create(img`
    . . . f f f f f f . . . . . . . 
    . . f c c c c c c f . . . . . . 
    . f c 6 9 9 9 9 6 c f . . . . . 
    . f 6 9 9 1 1 9 9 6 f . . . . . 
    f c 9 9 9 9 1 1 9 9 c f . . . . 
    f c 9 9 9 9 9 9 9 9 c f . . . . 
    f c 9 9 9 9 9 9 9 9 c f . . . . 
    . f 6 9 9 9 9 9 9 6 f . . . . . 
    . f c 6 9 9 9 9 6 c f . . . . . 
    . . f c c c c c c f f . . . . . 
    . . . f f f f f f b d f . . . . 
    . . . . . . . . f 4 4 d f . . . 
    . . . . . . . . . f 4 4 d f . . 
    . . . . . . . . . . f 4 4 d f . 
    . . . . . . . . . . . f 4 4 f . 
    . . . . . . . . . . . . f f . . 
    `, SpriteKind.Player)
lookingGlass.setPosition(80, 60)
controller.moveSprite(lookingGlass, 50, 50)
lookingGlass.setStayInScreen(true)
info.startCountdown(10)
