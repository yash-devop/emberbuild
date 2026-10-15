import { ElementSelector } from "@/components/element-selector";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-16 bg-background p-8">
      <ElementSelector animate>
        <div className="flex h-40 w-64 items-center justify-center rounded-lg bg-secondary text-sm font-medium text-muted-foreground">
          Selected element
        </div>
      </ElementSelector>

      <ElementSelector>
        <div className="flex h-24 w-48 items-center justify-center rounded-lg bg-secondary text-sm font-medium text-muted-foreground">
          Static element
        </div>
      </ElementSelector>
    </main>
  );
}
