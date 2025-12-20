import type { User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

const COLLECTIONID = "users";

export const editUserInfo = async (userdata: Partial<User>, uid: string) => {
  try {
    const userRef = doc(db, COLLECTIONID, uid);
    await setDoc(userRef, userdata);
  } catch (err: any) {
    return { success: false, data: err.message || "Couldn't edit" };
  }
};
