type Video = { kind: "video"; title: string; duration: number };
type LiveStream = {
  kind: "live";
  title: string;
  viewers: number;
  isRecording?: boolean;
};
type Media = Video | LiveStream;

function describe(media: Media): string {
  if (media.kind === "video") {
    return `VIDEO: ${media.title} (${media.duration} mins)`;
  }

  return `LIVE: ${media.title} (${media.viewers} watching)${
    media.isRecording ? `, recording` : ""
  }`;
}

function isPopular(media: Media): boolean {
  if (media.kind === "video") {
    if (media.duration <= 10) {
      return true;
    }
    return false;
  }

  return media.viewers >= 1000;
}

function ensureRecording(media: Media): Media {
  if (media.kind === "live" && media.isRecording === undefined) {
    return { ...media, isRecording: true };
  }

  return media;
}

let myVideo: Video = { kind: "video", title: "Herobrine", duration: 20 };
let adinStream: LiveStream = {
  kind: "live",
  title: "adin ross",
  viewers: 1000,
  isRecording: false,
};
let xQCStream: LiveStream = { kind: "live", title: "xQC", viewers: 5200 };
let abuukStream: LiveStream = {
  kind: "live",
  title: "abuuk stream",
  viewers: 400,
  isRecording: false,
};

console.log(ensureRecording(myVideo));
console.log(ensureRecording(adinStream));
console.log(ensureRecording(xQCStream));
console.log(ensureRecording(abuukStream));
