import { authOptions } from "@/auth";
import { getDocs } from "firebase/firestore";
import { getServerSession } from "next-auth";
import React from "react";

async function ChatList() {
  const session = await getServerSession(authOptions);

  const chatsSnaopshot = await getDocs(
    chatMembersCollectionGroupRef(session?.user.id)
  );
  return <div></div>;
}

export default ChatList;
