
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Paperclip, X, Minimize, Maximize, Send } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ComposeEmailProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EmailCompose({ isOpen, onClose }: ComposeEmailProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  
  const handleMinimizeToggle = () => {
    setIsMinimized(!isMinimized);
    setIsMaximized(false);
  };
  
  const handleMaximizeToggle = () => {
    setIsMaximized(!isMaximized);
    setIsMinimized(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        className={cn(
          "p-0 gap-0 transition-all duration-300 sm:max-w-2xl animate-in",
          isMaximized ? "w-[90vw] h-[90vh]" : "sm:w-[600px]",
          isMinimized ? "h-[64px] overflow-hidden" : ""
        )}
      >
        <DialogHeader className="px-4 py-3 border-b flex flex-row items-center justify-between">
          <DialogTitle className={cn(
            "text-base font-medium",
            isMinimized && "truncate max-w-[400px]"
          )}>
            New Message
          </DialogTitle>
          
          <div className="flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8" 
              onClick={handleMinimizeToggle}
            >
              <Minimize className="h-4 w-4" />
              <span className="sr-only">Minimize</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8" 
              onClick={handleMaximizeToggle}
            >
              <Maximize className="h-4 w-4" />
              <span className="sr-only">Maximize</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8" 
              onClick={onClose}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </DialogHeader>
        
        {!isMinimized && (
          <>
            <div className="p-4 space-y-4">
              <div className="space-y-3">
                <div className="border-b pb-2">
                  <Input 
                    placeholder="To" 
                    className="border-0 px-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-8" 
                  />
                </div>
                
                <div className="border-b pb-2">
                  <Input 
                    placeholder="Subject" 
                    className="border-0 px-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-8" 
                  />
                </div>
              </div>
              
              <Textarea 
                placeholder="Compose your email..." 
                className="min-h-[200px] border-0 focus-visible:ring-0 resize-none p-0" 
                style={{ 
                  height: isMaximized ? 'calc(90vh - 240px)' : '200px'
                }}
              />
            </div>
            
            <div className="flex justify-between items-center p-4 border-t bg-background/80">
              <div className="flex gap-2">
                <Button>
                  <Send className="h-4 w-4 mr-2" />
                  Send
                </Button>
                
                <Button variant="outline" size="icon">
                  <Paperclip className="h-4 w-4" />
                  <span className="sr-only">Attach</span>
                </Button>
              </div>
              
              <Button variant="ghost" size="sm" onClick={onClose}>
                Discard
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
