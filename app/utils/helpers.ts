export class helpers {
    static beginLoading() {
        const loadStatus = usePageLoadStatus();
        let i = 20;
        
        const id = setInterval(() => {
            if(loadStatus.value.isloading) {
                loadStatus.value.progress += i;
                i *= 0.65;
            } else {
                loadStatus.value.progress += 0.15;
                setTimeout(() => {
                    loadStatus.value.progress = 100;
                    clearInterval(id);
                }, 2000);
            }
            loadStatus.value.elapsedtime += 10;
        }, 50);
    }

    static stopLoading() {
        const loadStatus = usePageLoadStatus();
        loadStatus.value.isloading = false;
        setTimeout(() => {
            loadStatus.value.begintransition = true;
        }, 2000);
    }

    static generatebreadcrumbs(url: string) {
        const segments = url.split('/').filter(segment => segment.length > 0);
        const crumbs = segments.length > 0 ? segments.map((segment, index) => {
            return {
                label: decodeURIComponent(segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')),
                value: '/' + segments.slice(0, index + 1).join('/')
            };
        }) : [{label: 'Home', value: '/'}];
    
        return {
            label: crumbs[0]!.label,
            value: crumbs[0]!.value,
            child: crumbs.length > 1 ? crumbs.slice(1).reduceRight((child, crumb) => ({
                label: crumb.label,
                value: crumb.value,
                child: child
            })) : undefined
        }
    }
}       