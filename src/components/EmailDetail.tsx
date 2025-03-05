
import { EmailType } from "@/lib/data";
import { Avatar } from "./Avatar";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { 
  ArrowLeft, 
  Star, 
  Reply, 
  Trash, 
  MoreVertical, 
  Forward, 
  Printer, 
  Paperclip,
  Download 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

interface EmailDetailProps {
  email: EmailType;
  onBack: () => void;
}

export function EmailDetail({ email, onBack }: EmailDetailProps) {
  const formatFullDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "EEE, MMM d, yyyy 'at' h:mm a");
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex justify-between items-center p-4 border-b bg-background/80 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={onBack} className="md:hidden">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h2 className="text-lg font-semibold">{email.subject}</h2>
        </div>
        
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon">
            <Star 
              className={cn(
                "h-4 w-4", 
                email.starred && "fill-yellow-500 text-yellow-500"
              )} 
            />
            <span className="sr-only">Star</span>
          </Button>
          
          <Button variant="ghost" size="icon">
            <Reply className="h-4 w-4" />
            <span className="sr-only">Reply</span>
          </Button>
          
          <Button variant="ghost" size="icon">
            <Trash className="h-4 w-4" />
            <span className="sr-only">Delete</span>
          </Button>
          
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
            <span className="sr-only">More</span>
          </Button>
        </div>
      </div>
      
      <ScrollArea className="flex-1">
        <div className="p-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start gap-3">
              <Avatar 
                name={email.from.name} 
                src={email.from.avatar} 
                size="lg" 
              />
              
              <div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-base font-semibold">{email.from.name}</h3>
                  <span className="text-sm text-muted-foreground">&lt;{email.from.email}&gt;</span>
                </div>
                
                <div className="text-sm text-muted-foreground mt-0.5">
                  To: {email.to.join(", ")}
                </div>
                
                <div className="text-sm text-muted-foreground mt-0.5">
                  {formatFullDate(email.date)}
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <Forward className="h-4 w-4" />
                <span className="sr-only">Forward</span>
              </Button>
              
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <Printer className="h-4 w-4" />
                <span className="sr-only">Print</span>
              </Button>
            </div>
          </div>
          
          <div className="prose prose-sm max-w-none mb-8">
            <div dangerouslySetInnerHTML={{ __html: email.body }} />
          </div>
          
          {email.attachments.length > 0 && (
            <div className="mt-8 border-t pt-4">
              <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                <Paperclip className="h-4 w-4" />
                Attachments ({email.attachments.length})
              </h4>
              
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {email.attachments.map((attachment) => (
                  <div 
                    key={attachment.name}
                    className="flex items-center gap-3 p-3 border rounded-md hover:bg-secondary/50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-secondary flex items-center justify-center rounded-md">
                      <span className="uppercase text-xs font-medium">
                        {attachment.type}
                      </span>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{attachment.name}</p>
                      <p className="text-xs text-muted-foreground">{attachment.size}</p>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="ml-auto">
                      <Download className="h-4 w-4 mr-1" />
                      <span>Download</span>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
