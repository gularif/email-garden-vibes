
import { cn } from "@/lib/utils";

interface AvatarProps {
  name: string;
  src?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Avatar({ name, src, size = 'md', className }: AvatarProps) {
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base'
  };

  return (
    <div className={cn(
      'relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary/10 text-foreground font-medium',
      sizeClasses[size],
      className
    )}>
      {src ? (
        <img 
          src={src} 
          alt={name} 
          className="w-full h-full object-cover"
          onError={(e) => {
            // Replace with initials if image fails to load
            (e.target as HTMLImageElement).style.display = 'none';
            e.currentTarget.parentElement!.setAttribute('data-showing-fallback', 'true');
          }} 
        />
      ) : null}
      <span className={src ? 'opacity-0' : ''}>{initials}</span>
    </div>
  );
}
