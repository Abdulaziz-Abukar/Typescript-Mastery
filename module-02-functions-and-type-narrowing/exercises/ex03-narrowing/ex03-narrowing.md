# Goal: Use `typeof`, `in`, and equality checks to narrow unions safely.

## Setup types (write these in your file):

- `type Video = {kind: "video"; title: string; duration: number}`
- `type LiveStream = {kind: "live"; title: string; viewers: number; isRecording?: boolean}`
- `type Media = Video | LiveStream`

## Tasks:

1. `describe (media: Media): string`

   - `"VIDEO: <title> (<duration> mins)"` or
   - `"LIVE": <title> (<viewers> watching)` (+ `", recording"` if `isRecording` is true)
   - Use `media.kind` to narrow.

2. `isPopular(media: Media): boolean`

   - For video -> popular if `duration <= 10` (short videos).
   - For live -> popular if `viewers >= 1000`.
   - Use equality checks and/or `in`.

3. `ensureRecording(media: Media): Media`
   - if `media.kind === "live"` and `isRecording` is `undefined`, set it to `true` and return updated object.
   - Videos return unchanged.
   - (You can return a new object.)
