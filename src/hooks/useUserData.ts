import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import app from "@/firebase/config";

const useUserData = (userId: string) => {
  const db = getFirestore(app);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [userData, setUserData] = <any>useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, "users", userId);
        const docSnap: any = await getDoc(docRef);
        if (docSnap.exists()) {
          const fetchedUserData = docSnap._document.data.value.mapValue.fields;
          setUserData(fetchedUserData);
        }
      } catch (err) {
        setError("Failed to connect to sever");
      }
      setLoading(false);
    }
    fetchData();
  }, [db, setUserData, userId]);

  return { userData, loading, error };
};

export default useUserData;
