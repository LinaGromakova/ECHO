import { atom } from 'jotai';

interface TargetUserInterface {
  onlineStatus: boolean;
  isTyping: boolean;
  username: string;
  userAvatar?: string;
}

const targetUserAtom = atom<TargetUserInterface | null>(null);

export default targetUserAtom;
