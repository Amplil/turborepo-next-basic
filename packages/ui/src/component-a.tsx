import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { Badge } from "./badge"
import { Button } from "./button"
import { Activity, CheckCircle } from "lucide-react"
import { ReactNode } from "react"

interface ComponentAProps {
  children1?: ReactNode
  children2?: ReactNode
  children3?: ReactNode
}

export function ComponentA({ children1, children2, children3 }: ComponentAProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-blue-600" />
          コンポーネントA - 生産状況監視
        </CardTitle>
        <CardDescription>製造ライン LA</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {children1}
        </div>
        <div className="space-y-2">
          {children2}
        </div>
        <div className="space-y-2">
          {children3}
        </div>
      </CardContent>
    </Card>
  )
}
