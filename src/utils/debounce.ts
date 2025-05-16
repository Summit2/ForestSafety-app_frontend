export function debounceFunction(callback: Function, time: number = 1000) {

    let timeFunction: ReturnType<typeof setTimeout> | null = null;
    const debouncer = (...args: any[]) => {
        if (timeFunction) {
            clearTimeout(timeFunction);
            timeFunction = null;
        }
        timeFunction = setTimeout(() => callback(args), time);
    }

    return debouncer;
}