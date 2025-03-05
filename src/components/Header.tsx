
import { Search, Bell, Settings, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "./Avatar";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface HeaderProps {
  onToggleSidebar: () => void;
}

export function Header({ onToggleSidebar }: HeaderProps) {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="w-full border-b bg-background/80 backdrop-blur-sm sticky top-0 z-30">
      <div className="flex h-16 items-center px-4 gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onToggleSidebar}
          className="mr-2 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        
        <div className="flex items-center">
          <h1 className="text-xl font-semibold tracking-tight mr-4">Mailbox</h1>
        </div>
        
        <div className={cn(
          "flex-1 transition-all duration-200 max-w-2xl",
          searchFocused ? "md:max-w-xl" : "md:max-w-md"
        )}>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search emails..."
              className="w-full pl-8 bg-background md:bg-secondary border-0 md:border ring-offset-background focus-visible:ring-2 transition-all"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary" />
          </Button>
          
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Button>
          
          <Avatar name="John Doe" className="ml-2" />
        </div>
      </div>
    </header>
  );
}
