interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-bg)] border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] mb-4">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
