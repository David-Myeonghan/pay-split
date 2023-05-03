import { atom } from "recoil";

export const groupNameState = atom<string | undefined>({
  key: "groupName",
  default: undefined,
});
