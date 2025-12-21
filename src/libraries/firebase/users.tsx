import type { UserData } from "../../context/context";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

const COLLECTIONID = "userDatas";

export const editUserInfo = async (
  userdata: Partial<UserData>,
  uid: string
) => {
  try {
    const userRef = doc(db, COLLECTIONID, uid);
    await setDoc(userRef, userdata);
  } catch (err: any) {
    return { success: false, data: err.message || "Couldn't edit" };
  }
};
