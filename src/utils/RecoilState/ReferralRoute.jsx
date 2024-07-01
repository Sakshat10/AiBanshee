import { atom } from "recoil";

export const referralRoute = atom({
  key: "referral", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
