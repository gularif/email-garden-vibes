
import { useState } from "react";
import { EmailType } from "@/lib/data";
import { Avatar } from "./Avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { Star, Paperclip } from "lucide-react";
import { format, isToday, isYesterday, isThisWeek, isThisYear } from "date-fns";
import { ScrollArea } from "@/components/ui/scroll-area";

interface EmailListProps {
  emails: EmailType[];
  selectedEmail: EmailType | null;
  onSelectEmail: (email: EmailType) => void;
}

export function EmailList({ emails, selectedEmail, onSelectEmail }: EmailListProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Function to format dates in a human-readable way
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    
    if (isToday(date)) {
      return format(date, "h:mm a");
    } else if (isYesterday(date)) {
      return "Yesterday";
    } else if (isThisWeek(date)) {
      return format(date, "EEE");
    } else if (isThisYear(date)) {
      return format(date, "MMM d");
    } else {
      return format(date, "MM/dd/yyyy");
    }
  };

  // Truncate text to a specific length
  const truncate = (text: string, length = 80) => {
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  // Extract preview text from HTML content
  const extractPreview = (html: string) => {
    // Temporary element to parse HTML
    const temp = document.createElement("div");
    temp.innerHTML = html;
    return truncate(temp.textContent || "");
  };

  return (
    <ScrollArea className="h-[calc(100vh-4rem)]">
      <div className="divide-y border-b">
        {emails.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">No emails found</p>
          </div>
        ) : (
          emails.map((email) => (
            <div
              key={email.id}
              className={cn(
                "group flex items-start gap-2 px-4 py-3 email-item selectable",
                !email.read && "bg-primary/5 font-medium",
                selectedEmail?.id === email.id && "bg-primary/5",
                "hover:bg-secondary/80 cursor-pointer"
              )}
              onClick={() => onSelectEmail(email)}
              onMouseEnter={() => setHoveredId(email.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="pt-1">
                <Checkbox />
              </div>
              
              <button 
                className={cn(
                  "pt-1 text-muted-foreground", 
                  email.starred && "text-yellow-500"
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  // Handle star toggle - would update state in a real app
                }}
              >
                <Star className={cn("h-4 w-4", email.starred && "fill-yellow-500")} />
              </button>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    <Avatar 
                      name={email.from.name} 
                      src={email.from.avatar} 
                      size="sm"
                      className="mr-2"
                    />
                    <span className={cn(
                      "truncate",
                      !email.read && "font-semibold"
                    )}>
                      {email.from.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap">
                    {email.attachments.length > 0 && (
                      <Paperclip className="h-3.5 w-3.5" />
                    )}
                    <span className="ml-2">
                      {formatDate(email.date)}
                    </span>
                  </div>
                </div>
                
                <h3 className={cn(
                  "text-sm mb-1 truncate",
                  !email.read && "font-semibold"
                )}>
                  {email.subject}
                </h3>
                
                <p className="text-xs text-muted-foreground truncate">
                  {extractPreview(email.body)}
                </p>
                
                {email.labels.length > 0 && (
                  <div className="flex mt-1.5 gap-1.5">
                    {email.labels.map((labelId) => {
                      // For simplicity, assuming label colors based on id
                      const colorMap: Record<string, string> = {
                        personal: "bg-blue-500",
                        work: "bg-purple-500",
                        finance: "bg-green-500",
                        social: "bg-yellow-500",
                        updates: "bg-red-500"
                      };
                      
                      return (
                        <div 
                          key={labelId}
                          className={cn(
                            "h-1.5 w-6 rounded-full",
                            colorMap[labelId] || "bg-gray-400"
                          )}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </ScrollArea>
  );
}
