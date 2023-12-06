import { atom } from 'recoil';

export const videoRefAtom = atom<HTMLVideoElement | null>({
  key: 'mediaRecorderAtom',
  default: null,
});

export const mediaRecorderAtom = atom<MediaRecorder | null>({
  key: 'mediaRecorderAtom',
  default: null,
});
