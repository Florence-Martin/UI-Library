import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-64">
      <Loader className="animate-spin" size={48} />
    </div>
  );
}
