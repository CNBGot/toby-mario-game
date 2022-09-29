namespace SpriteKind {
    export const star = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    music.baDing.play()
    mario.vy = 100
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    tiles.setTilemap(tilemap`level5`)
    tiles.placeOnTile(mario, tiles.getTileLocation(0, 14))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    tiles.setTilemap(tilemap`level5`)
    tiles.placeOnTile(mario, tiles.getTileLocation(0, 14))
    tiles.placeOnTile(bowser, tiles.getTileLocation(6, 8))
    scene.cameraFollowSprite(mario)
    bowser = sprites.create(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff111fffffffffffffffffffffffff
        ffffffffffffffffff7711144fffffffffffffffffffffffff
        fffffffffffffffff7771144ffffffffffffffffffffffffff
        fffffffffffffffff7777447ffffffffffffffffffffffffff
        ffffffffffffffff77777777ffffffffffffffffffffffffff
        fffffffff4fff11777777777ffffffffffffffffffffffffff
        ffffffff4.4f7117777777777fffffffffffffffffffffffff
        ffffffff4.477117777777777fffffffffffffffffffffffff
        ffffffff44411177777777777fffffffffffffffffffffffff
        ffffffff1444177774777777711fffffffffffffffffffffff
        fffffffff1f4777744477777711fffffffffffffffffffffff
        fffffffff1f47744174777777117771fffffffffffffffffff
        fffffffffff4447177477777711777147fffffffffffffffff
        fffffffffff11fff714777771117711447ffffffffffffffff
        fffffffffffffffff4477771117711147111ffffffffffffff
        ffffffffffff1fff14477711177771447114ffffffffffffff
        ffffffffffffffff44777711177777777744771fffffffffff
        ffffffffffffff1444f77111111171117777771fffffffffff
        fffffffffffffff44ffff774444111147777777fffffffffff
        ffffffffffffffffffffffff44411144777777111fffffffff
        ffffffffffffffffff4444fff4471117777777114fffffffff
        ffffffffffffffffff44444fff771111777777744fffffffff
        fffffffffffffffff4444444417771117111777771ffffffff
        fffffffffffffffff44444477777771171147777741fffffff
        fffffffffffffffff444444777777711774477711fffffffff
        fffffffffffffffff4444447777777117777777111ffffffff
        fffffffffffffffff14444f777777711177711744fffffffff
        ffffffffffffffffffffffff77777777117747747fffffffff
        fffffffffffffffffffffffff7777777711777777fffffffff
        fffffffffffffffffffffffff4777777771177777fffffffff
        ffffffffffffffffffffffff114477744441111111ffffffff
        fffffffffffffffffffffff1114477444444111111ffffffff
        fffffffffffffffffffffffffff114411444411fffffffffff
        `, SpriteKind.Enemy)
    projectile = sprites.createProjectileFromSprite(assets.image`fire ball`, bowser, -56, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile32`, function (sprite, location) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mario.vy == 0) {
        mario.vy = -250
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    music.setVolume(115)
    mucic_2()
    tiles.setTilemap(tilemap`level2`)
    tiles.placeOnTile(mario, tiles.getTileLocation(0, 13))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile33`, function (sprite, location) {
    game.over(true)
})
function createnimy () {
    for (let value of tiles.getTilesByType(assets.tile`myTile30`)) {
        let gravity = 0
        tiles.placeOnRandomTile(gumba, assets.tile`myTile30`)
        gumba = sprites.create(img`
            . . . . . . 4 4 4 . . . . . . . 
            . . . . . 4 4 4 4 4 . . . . . . 
            . . . . 4 4 4 4 4 4 4 . . . . . 
            . . . f 4 4 4 4 4 4 4 f . . . . 
            . . 4 d f 4 4 4 4 4 f d 4 . . . 
            . 4 4 d f f f f f f f d 4 4 . 1 
            1 4 4 d f d 4 4 4 d f d 4 4 1 1 
            1 4 4 d d d 4 4 4 d d d 4 4 4 1 
            1 4 4 4 4 4 4 4 4 4 4 4 4 4 4 1 
            1 4 4 4 4 d d d d d d 4 4 4 1 1 
            1 1 1 1 d d d d d d d d d 1 1 1 
            . 1 1 1 d d d d d d d d d 1 1 . 
            . . f f d d d d d d d d f f . . 
            . f f f f f d d d d d f f f . . 
            . f f f f f f d d d f f f . . . 
            . . f f f f f . . f f f . . . . 
            `, SpriteKind.Enemy)
        gumba.ay = gravity
        if (Math.percentChance(50)) {
            gumba.vx = randint(30, 60)
        } else {
            gumba.vx = randint(-60, -30)
        }
        gumba.setBounceOnWall(true)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    mucic_3()
    tiles.setTilemap(tilemap`level4`)
    tiles.placeOnTile(mario, tiles.getTileLocation(0, 11))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile36`, function (sprite, location) {
    info.setLife(5)
    pause(5000)
    info.setLife(3)
    star.destroy()
})
function doSomething () {
    info.setScore(0)
    info.setLife(3)
    controller.moveSprite(mario, 100, 0)
    tiles.placeOnTile(mario, tiles.getTileLocation(0, 7))
    scene.cameraFollowSprite(mario)
    mario.ay = 500
    createnimy()
    _block2()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.star, function (sprite, otherSprite) {
    star.destroy()
})
function mucic_2 () {
    music.playMelody("D E D E D - D E ", 163)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile31`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile1`)
    music.baDing.play()
    info.changeScoreBy(1)
})
function mucic_3 () {
    music.playMelody("E F E C5 A B A - ", 1222)
}
function mucic_1 () {
    music.setVolume(152)
    music.playMelody("C5 G E E G A G F ", 180)
    music.playMelody("E G A B G A G E ", 180)
    music.playMelody("A G - - - - - - ", 180)
}
function _block2 () {
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        _block = sprites.create(assets.tile`myTile0`, SpriteKind.Food)
    }
    tiles.placeOnRandomTile(_block, assets.tile`myTile0`)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (mario.vy > 0) {
        otherSprite.destroy()
        sprite.vy += -500
    } else {
        info.changeLifeBy(-1)
        pause(500)
    }
})
let _block: Sprite = null
let gumba: Sprite = null
let projectile: Sprite = null
let bowser: Sprite = null
let mario: Sprite = null
let star: Sprite = null
star = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b b . . . . . . . 
    . . . . . . b 5 5 b . . . . . . 
    . . . b b b f 5 1 f b b b . . . 
    . . . b 5 5 5 5 1 1 5 5 b . . . 
    . . . . b d f 5 5 f d b . . . . 
    . . . . c b 5 f f 5 b c . . . . 
    . . . . c 5 d d d d 5 c . . . . 
    . . . . c 5 d c c d 5 c . . . . 
    . . . . c c c . . c c c . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.star)
tiles.setTilemap(tilemap`level1`)
mario = sprites.create(img`
    . . . . . 2 2 2 2 . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 2 . . . 
    . . . . e e e 4 4 e 4 . . . . . 
    . . . e 4 e 4 4 4 e 4 4 4 . . . 
    . . . e 4 e e 4 4 4 e 4 4 4 . . 
    . . . e e 4 4 4 4 e e e e . . . 
    . . . . . 4 4 4 4 4 4 4 . . . . 
    . . e e e 2 4 e e e . . . . . . 
    e e e e e 2 e e 2 e e e e . . . 
    e e e e e 2 2 2 2 e e e e e e . 
    e e e e e 2 2 2 2 2 e e e e e . 
    4 4 4 e 2 5 2 2 5 2 2 2 e 4 4 4 
    4 4 4 4 2 2 2 2 2 2 2 2 4 4 4 4 
    4 4 4 2 2 2 2 2 2 2 2 2 2 4 4 4 
    . . . 2 2 2 2 . . 2 2 2 2 . . . 
    . . . 2 2 2 2 . . 2 2 2 2 . . . 
    . . . . e e . . . . e e . . . . 
    . . e e e e . . . . e e e e . . 
    `, SpriteKind.Player)
doSomething()
mucic_2()
tiles.placeOnRandomTile(star, assets.tile`myTile36`)
game.onUpdateInterval(500, function () {
	
})
