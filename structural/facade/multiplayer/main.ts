class VideoPlayer {
  playVideo() {
    console.log("🎥 Video is playing...");
  }
}

class AudioPlayer {
  playAudio() {
    console.log("🔊 Audio is playing...");
  }
}

class SubtitleManager {
  showSubtitles() {
    console.log("📜 Subtitles are displayed...");
  }
}

class MediaFacade {
  private videoPlayer: VideoPlayer;
  private audioPlayer: AudioPlayer;
  private subtitleManager: SubtitleManager;

  constructor() {
    this.videoPlayer = new VideoPlayer();
    this.audioPlayer = new AudioPlayer();
    this.subtitleManager = new SubtitleManager();
  }

  playMovie() {
    console.log("🎬 Starting the movie...");
    this.videoPlayer.playVideo();
    this.audioPlayer.playAudio();
    this.subtitleManager.showSubtitles();
  }
}

const mediaSystem = new MediaFacade();
mediaSystem.playMovie();
