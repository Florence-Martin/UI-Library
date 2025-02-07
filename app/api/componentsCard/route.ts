import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export async function GET() {
  try {
    // Cibler la collection componentsCard
    const querySnapshot = await getDocs(
      query(collection(db, "componentsCard"), orderBy("order"))
    );
    const components = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // console.log("Fetched componentsCard :", components); // Vérifie les données récupérées
    return NextResponse.json(components);
  } catch (error) {
    console.error("Firestore error:", error); // Affiche les erreurs pour debug
    return NextResponse.json(
      { error: "Failed to fetch componentsCard" },
      { status: 500 }
    );
  }
}
