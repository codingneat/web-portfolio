"use client";

import * as Select from "@radix-ui/react-select";
import clsx from "clsx";
import { Check, Languages } from "lucide-react";
import { useTransition } from "react";

import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/i18n/locale";

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
  label: string;
};

export default function LocaleSwitcherSelect({ defaultValue, items, label }: Props) {
  const [isPending, startTransition] = useTransition();

  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <div className='relative'>
      <Select.Root defaultValue={defaultValue} onValueChange={onChange}>
        <Select.Trigger
          aria-label={label}
          className={clsx(
            "hover:text-primary cursor-pointer",
            isPending && "pointer-events-none opacity-60"
          )}
        >
          <Select.Icon className='flex w-10 text-xs'>
            <Languages className='h-6 w-6' />
            {defaultValue}
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            align='end'
            className='min-w-32 overflow-hidden rounded-sm bg-white py-1 shadow-md'
            position='popper'
          >
            <Select.Viewport>
              {items.map((item) => (
                <Select.Item
                  key={item.value}
                  className='flex cursor-default items-center px-3 py-2 text-base data-highlighted:bg-slate-100'
                  value={item.value}
                >
                  <div className='mr-2 w-4'>
                    {item.value === defaultValue && <Check className='h-5 w-5 text-slate-600' />}
                  </div>
                  <span className='text-slate-900'>{item.label}</span>
                </Select.Item>
              ))}
            </Select.Viewport>
            <Select.Arrow className='fill-white text-white' />
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}
