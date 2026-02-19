import type { FlashCard } from "generated/prisma";
import { useState } from "react";

interface FlashCardProps {
  flashCardInfo: FlashCard
};
export default function FlashCard({ flashCardInfo }: FlashCardProps) {
  const [show, setShow] = useState<boolean>(false)

  return (
    <div>
      {flashCardInfo.term}
      <button onClick={() => setShow(!show)}>Show answer</button>
      {show ? (<p>{flashCardInfo.definition}</p>) : (<p></p>)}
    </div>
  )
}
