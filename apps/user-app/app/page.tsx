"use client";
import { useBalance } from "../../../packages/store/src/hook/useBalance";

export default function() {
  const balance = useBalance();
  return <div>
    hi there {balance}
  </div>
}