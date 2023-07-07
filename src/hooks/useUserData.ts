import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import app from "@/firebase/config";
import { UserData } from "@/types/UserData";


const useUserData = (userId: string) => {
  
  const db = getFirestore(app);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState<UserData|null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, "users", userId);
        const docSnap: any = await getDoc(docRef);
        if (docSnap.exists()) {
          const fetchedUserData:UserData = docSnap.data();
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
