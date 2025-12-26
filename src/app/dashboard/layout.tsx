import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Dashboard | Toyrotech",
  description:
    "Discover genuine electronic parts and accessories for every device",
};

const DashboardMainLayout = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default DashboardMainLayout;
