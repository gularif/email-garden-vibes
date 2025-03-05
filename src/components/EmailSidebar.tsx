
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  Inbox, 
  Send, 
  File, 
  Star, 
  AlertCircle, 
  Trash, 
  Tag,
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";
import { folders, labels } from "@/lib/data";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

interface SidebarProps {
  isOpen: boolean;
  activeFolder: string;
  setActiveFolder: (folder: string) => void;
  onComposeClick: () => void;
}

export function EmailSidebar({ 
  isOpen,
  activeFolder, 
  setActiveFolder,
  onComposeClick
}: SidebarProps) {
  const [labelsExpanded, setLabelsExpanded] = useState(true);
  
  // Icon mapping for folder items
  const iconMap: { [key: string]: any } = {
    inbox: Inbox,
    sent: Send,
    drafts: File,
    starred: Star,
    spam: AlertCircle,
    trash: Trash
  };

  return (
    <aside className={cn(
      "pb-12 border-r bg-sidebar h-[calc(100vh-4rem)] transition-all duration-300 ease-in-out fixed inset-y-16 left-0 z-20 md:relative md:inset-y-0",
      isOpen ? "translate-x-0 w-64" : "-translate-x-full w-0 md:w-64 md:translate-x-0"
    )}>
      <div className="px-4 py-4">
        <Button 
          className="w-full justify-center gap-2 py-6 text-primary-foreground bg-primary hover:bg-primary/90"
          onClick={onComposeClick}
        >
          <Plus className="h-4 w-4" /> Compose
        </Button>
      </div>
      
      <ScrollArea className="h-[calc(100vh-9rem)]">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {folders.map((folder) => {
              const IconComponent = iconMap[folder.id];
              return (
                <Button
                  key={folder.id}
                  variant={activeFolder === folder.id ? "secondary" : "ghost"}
                  size="sm"
                  className={cn(
                    "w-full justify-start gap-2",
                    activeFolder === folder.id ? "bg-secondary font-medium" : "font-normal"
                  )}
                  onClick={() => setActiveFolder(folder.id)}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{folder.name}</span>
                  {folder.count !== undefined && (
                    <span className="ml-auto text-xs bg-secondary rounded-full px-2 py-0.5">
                      {folder.count}
                    </span>
                  )}
                </Button>
              );
            })}
          </div>
          
          <div className="mt-6">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-between px-2"
              onClick={() => setLabelsExpanded(!labelsExpanded)}
            >
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4" />
                <span>Labels</span>
              </div>
              <ChevronDown 
                className={cn(
                  "h-4 w-4 transition-transform", 
                  labelsExpanded ? "rotate-180" : ""
                )} 
              />
            </Button>
            
            {labelsExpanded && (
              <div className="mt-1 space-y-1 pl-6">
                {labels.map((label) => (
                  <Button
                    key={label.id}
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start gap-2 h-9"
                  >
                    <div className={cn("h-2.5 w-2.5 rounded-full", label.color)} />
                    <span>{label.name}</span>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
}
