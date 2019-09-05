class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    container: HTMLElement;
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }

    initPlayer() {
        this.container = document. createElement('div')
        this.container.style.position = 'relative';
        this.media.parentNode.insertBefore(this.container, this.media)
        this.container.appendChild(this.media)
    }
    private initPlugins() {
      
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    play() {
        // this.media.paused ? this.media.play() : this.media.pause();
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    buttomP() {
        if (this.media.paused) {
            this.play();
        }
        else {
            this.pause();
        }
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted ? (this.media.muted = false) : (this.media.muted = true);
        // this.media.muted = false
    }
}











export default MediaPlayer;