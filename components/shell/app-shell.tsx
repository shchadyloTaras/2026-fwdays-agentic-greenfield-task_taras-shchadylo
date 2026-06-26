import type { ReactNode } from "react";

import { MainGrid } from "./main-grid";
import { ShellFooter } from "./shell-footer";
import { ShellHeader } from "./shell-header";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-dvh flex-1 flex-col bg-bg font-sans text-text">
      <ShellHeader />
      <MainGrid>{children}</MainGrid>
      <ShellFooter />
    </div>
  );
}
