import { Badge } from "@repo/ui/badge"
import { CheckCircle } from "lucide-react"

export function ComponentAChild() {
  return (
    <div className="flex gap-2">
      <Badge variant="default" className="flex items-center gap-1">
        <CheckCircle className="h-3 w-3" />
        正常稼働（子コンポーネントa）
      </Badge>
    </div>
  )
}
