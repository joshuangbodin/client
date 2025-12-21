import type { UserData } from "../../context/context";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

const COLLECTIONID = "users";

export const editUserInfo = async (
  userdata: Partial<UserData>,
  uid: string
) => {
  try {
    const userRef = doc(db, COLLECTIONID, uid);
    await setDoc(userRef, userdata);
     return { success: true, data: "Data Has Been edites" };
  } catch (err: any) {
    return { success: false, data: err.message || "Couldn't edit" };
  }
};
