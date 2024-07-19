import Phaser from 'phaser'

export class SmokeParticleScene extends Phaser.Scene {
    preload() {
        this.load.image('smoke', 'assets/smoke.png');
    }

    create() {
        const emitter = this.add.particles(0, 0, 'smoke', {
            speed: 500,
            quantity: 0.5,
            scale: { start: 0.05, end: 0 },
            blendMode: 'ADD',
            color: [ 0xffffff, 0x0000ff, 0xffff00, 0xff0000],
        });

        let invisibleObject = this.physics.add.sprite(1, 1, 'gameObject');
        invisibleObject.visible = false;

        invisibleObject.setVelocity(50, 20); 
        invisibleObject.setBounce(1, 1);
        invisibleObject.setCollideWorldBounds(true);

        emitter.startFollow(invisibleObject);
    }
}

export const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: SmokeParticleScene,
    physics: {
        default: 'arcade',  
        arcade: {
            gravity: { y: 200, x: 0 }
        }
    }
};
