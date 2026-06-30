import type { ReactNode } from 'react';

type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-[100svh] bg-bg text-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(180deg,#FFF5F7_0%,#FFF9FA_48%,#FFF7F0_100%)]"
      />
      <main className="relative z-10 mx-auto min-h-[100svh] w-full max-w-[430px] pb-[env(safe-area-inset-bottom)] md:max-w-[480px]">
        {children}
      </main>
    </div>
  );
}
