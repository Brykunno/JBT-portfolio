import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { useState,useEffect } from "react"
export function ModeToggle() {
  
  const { setTheme } = useTheme()
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    setTheme(isLight ? "light" : "dark")
  }, [isLight, setTheme])

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setIsLight((prev) => !prev)}
      className="cursor-pointer rounded-3xl"
    >
      {isLight ? (
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}