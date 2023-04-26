import { FindA } from "./FindA";
import { Zygolex } from "./Zygolex";
import { Anagrams } from "./Anagrams";
import { Circuit } from "./Circuit";
import { Hold } from "./Hold";
import { WordRiddle } from "./WordRiddle";
import { OddEmoji } from "./OddEmoji";
import { PigpenCipher } from "./PigpenCipher";
import { Wordle } from "./Wordle";
import { Morse } from "./Morse";

export default [
  { name: "Room 1", path: "1", component: Circuit },
  { name: "Room 2", path: "2", component: WordRiddle },
  { name: "Room 3", path: "3", component: OddEmoji },
  { name: "Room 4", path: "4", component: Hold },
  { name: "Room 5", path: "5", component: Anagrams },
  { name: "Room 6", path: "6", component: PigpenCipher },
  { name: "Room 7", path: "7", component: Zygolex },
  { name: "Room 8", path: "8", component: FindA },
  { name: "Room 9", path: "9", component: Wordle },
  { name: "Room 10", path: "10", component: Morse },
];
