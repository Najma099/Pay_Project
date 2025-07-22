import { prisma } from "@repo/db";

export default async function Home() {
  const user = await prisma.user.findFirst() 
  return (
    <div className="text-4xl text-amber-200">
      {user?.name ?? "No user added yet"}
    </div>
  );
}