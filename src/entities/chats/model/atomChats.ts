import { atom } from 'jotai';
import type { ChatInterface } from '@/shared/types';
const chatsAtom = atom<ChatInterface[]>([]);
export default chatsAtom;
