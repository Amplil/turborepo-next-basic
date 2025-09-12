import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { Badge } from "./badge"
import { Button } from "./button"
import { Activity, CheckCircle } from "lucide-react"

export function ComponentA() {
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
          <div className="flex gap-2">
            <Badge variant="default" className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3" />
              正常稼働
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
