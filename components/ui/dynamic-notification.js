import dynamic from "next/dynamic";

const DynamicNotification = dynamic(
  () => import("@/components/ui/notification"),
  { ssr: false }
);

export default DynamicNotification;
