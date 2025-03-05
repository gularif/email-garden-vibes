
import { useState } from "react";
import { Header } from "@/components/Header";
import { EmailSidebar } from "@/components/EmailSidebar";
import { EmailList } from "@/components/EmailList";
import { EmailDetail } from "@/components/EmailDetail";
import { EmailCompose } from "@/components/EmailCompose";
import { mockEmails, EmailType } from "@/lib/data";
import { cn } from "@/lib/utils";

const Index = () => {
  // State for managing the UI
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeFolder, setActiveFolder] = useState("inbox");
  const [selectedEmail, setSelectedEmail] = useState<EmailType | null>(null);
  const [composeOpen, setComposeOpen] = useState(false);
  
  // Filter emails based on the active folder
  const filteredEmails = mockEmails.filter(email => email.folder === activeFolder);
  
  // In a real app, this would mark the email as read
  const handleSelectEmail = (email: EmailType) => {
    setSelectedEmail(email);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex flex-1 overflow-hidden">
        <EmailSidebar 
          isOpen={sidebarOpen}
          activeFolder={activeFolder}
          setActiveFolder={(folder) => {
            setActiveFolder(folder);
            setSelectedEmail(null);
          }}
          onComposeClick={() => setComposeOpen(true)}
        />
        
        <main className="flex-1 flex md:ml-64">
          <div 
            className={cn(
              "w-full md:w-1/2 lg:w-2/5 border-r animate-in transition-all",
              selectedEmail ? "hidden md:block" : "block"
            )}
          >
            <EmailList 
              emails={filteredEmails}
              selectedEmail={selectedEmail}
              onSelectEmail={handleSelectEmail}
            />
          </div>
          
          <div 
            className={cn(
              "flex-1 bg-background/50 animate-in",
              !selectedEmail ? "hidden md:flex md:items-center md:justify-center" : "block"
            )}
          >
            {selectedEmail ? (
              <EmailDetail 
                email={selectedEmail} 
                onBack={() => setSelectedEmail(null)}
              />
            ) : (
              <div className="text-center p-8">
                <h3 className="text-2xl font-medium text-muted-foreground">Select an email to view</h3>
                <p className="text-muted-foreground mt-1">Choose an email from the list to view its contents</p>
              </div>
            )}
          </div>
        </main>
      </div>
      
      <EmailCompose 
        isOpen={composeOpen} 
        onClose={() => setComposeOpen(false)} 
      />
    </div>
  );
};

export default Index;
