import * as RSelect from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";

interface SelectProps {
  items: string[];
}

export function RadSelect({items}: SelectProps) {
  return (
    <RSelect.Root defaultValue='5'>
      <RSelect.Trigger
        className="flex items-center justify-between w-full px-3 py-2 rounded-lg border border-zinc-100 bg-transparent text-zinc-100 focus-within:ring-2 focus-within:ring-violet-700 focus-within:border-transparent"
      >
        <RSelect.Value
          placeholder="Selecione..."
          className="text-zinc-100"
          color="white"
        />
        <RSelect.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-100" />
        </RSelect.Icon>
      </RSelect.Trigger>

      <RSelect.Portal>
        <RSelect.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white
          "
        >
          <RSelect.ScrollUpButton />
          <RSelect.Viewport>
          <RSelect.Group>
            <RSelect.Label />
            {items.map((item, index) => (
              <RSelect.Item
                key={index}
                value={item.toLowerCase()}
                className="flex items-center justify-between px-3 py-2.5 outline-none text-zinc-100 bg-zinc-700"
              >
                <RSelect.ItemText>{item}</RSelect.ItemText>
                <RSelect.ItemIndicator />
              </RSelect.Item>
            ))}
          </RSelect.Group>
            <RSelect.Separator />
          </RSelect.Viewport>
          <RSelect.ScrollDownButton />
          <RSelect.Arrow />
        </RSelect.Content>
      </RSelect.Portal>
    </RSelect.Root>
  );
}
