import { formatDistanceToNow } from 'date-fns';
import { enUS } from 'date-fns/locale';

export function useTimeAgo(dateString: Date) {


    const inputDate = new Date(dateString);
    return formatDistanceToNow(inputDate, { addSuffix: true, includeSeconds: true, locale: enUS });
}