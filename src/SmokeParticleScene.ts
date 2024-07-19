// @ts-ignore
import Phaser from 'phaser'

export class SmokeParticleScene extends Phaser.Scene {
    preload() {
        this.load.image('smoke', 'assets/smoke.png');
    }

    create() {
        const particles = this.add.particles(0, 0, 'smoke', {
            speed: 500,
            scale: { start: 0.1, end: 0 },
            blendMode: 'ADD'
        });

        let invisibleObject = this.physics.add.sprite(1, 1, 'gameObject');
        invisibleObject.visible = false;

        invisibleObject.setVelocity(100, 200);
        invisibleObject.setBounce(1, 1);
        invisibleObject.setCollideWorldBounds(true);

        particles.startFollow(invisibleObject);
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
