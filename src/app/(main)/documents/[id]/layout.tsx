import ChatContainer from "@/components/chat/chat-container";
import SideNav from "@/components/layout/document/sidenav";
import { Separator } from "@/components/ui/separator";
import React from "react";

type IProps = {
  children: React.ReactNode;
  params: { id: string };
};

const DocumentIdLayout: React.FC<IProps> = ({ children, params }) => {
  return (
    <div className="flex max-h-[calc(100vh-81px)] min-h-[calc(100vh-81px)] h-full">
      <SideNav params={params} />
      <div className="flex-1 w-2/3 max-h-[calc(100vh-81px)] min-h-[calc(100vh-81px)] overflow-y-auto">
        {children}
      </div>
      {/* <div className="w-px bg-black" /> */}
      <div>
        <Separator orientation="vertical" className="h-full" />
      </div>
      <div className="w-1/3">
        <ChatContainer params={params} />
      </div>
    </div>
  );
};

export default DocumentIdLayout;
