import { IconCheck } from "@tabler/icons-react"

import { cn } from "@/lib/utils"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { pricing, type ComparisonCell } from "@/constants/pricing"

function ComparisonValue({ value }: { value: ComparisonCell }) {
  if (value === true) {
    return (
      <span className="mx-auto grid size-[22px] place-items-center rounded-md bg-primary text-white">
        <IconCheck className="size-3.5" aria-hidden="true" />
      </span>
    )
  }

  return (
    <span
      className={cn(
        "text-base",
        value === "-" ? "text-[#181818]" : "text-black"
      )}
    >
      {value}
    </span>
  )
}

export function PricingComparison() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border lg:rounded-none lg:border-0">
      <Table className="min-w-[760px]">
        <TableHeader>
          <TableRow className="border-none hover:bg-transparent">
            <TableHead className="h-16 pr-6 pl-6 text-base font-medium text-[#464646]">
              Features
            </TableHead>
            {pricing.comparison.columns.map((column, index) => (
              <TableHead
                key={column}
                className={cn(
                  "h-16 px-6 text-center text-base font-medium",
                  index === pricing.comparison.columns.length - 1
                    ? "bg-primary text-white"
                    : "bg-[#E8E8E8] text-[#464646]"
                )}
              >
                {column}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {pricing.comparison.rows.map((row) => (
            <TableRow key={row.label} className="border-b border-border">
              <TableCell className="py-5 pr-6 pl-6 align-middle text-base text-[#464646]">
                {row.label}
              </TableCell>
              <TableCell className="px-6 py-5 text-center align-middle">
                <ComparisonValue value={row.starter} />
              </TableCell>
              <TableCell className="bg-primary/[0.04] px-6 py-5 text-center align-middle">
                <ComparisonValue value={row.business} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
