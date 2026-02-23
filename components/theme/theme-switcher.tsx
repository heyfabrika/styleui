import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Switch } from '../ui/switch';

const ThemeSwitcher = ({ className }: { className?: string }) => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = resolvedTheme === 'dark';

    if (!mounted) {
        return (
            <div className={cn("flex items-center gap-2", className)}>
                <Moon className="h-4 w-4 text-muted-foreground" />
                <Switch checked={false} disabled />
                <Sun className="h-4 w-4 text-muted-foreground" />
            </div>
        );
    }

    return (
        <div className={cn("flex items-center gap-2", className)}>
            <Moon className={cn("h-4 w-4 transition-colors", isDark ? "text-blue-400" : "text-muted-foreground")} />
            <Switch
                checked={!isDark}
                onCheckedChange={(checked) => setTheme(checked ? 'light' : 'dark')}
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            />
            <Sun className={cn("h-4 w-4 transition-colors", isDark ? "text-muted-foreground" : "text-amber-500")} />
        </div>
    );
};

export default ThemeSwitcher