import { differenceInDays, format } from "date-fns";
import axios from 'axios';

export const getSportsPath = (type?: any, cid?: any, mid?: any) => {
    if (type && cid && mid) {
        return (`/sports/${type}/${cid}/${mid}`);
    } else if (type && cid) {
        return (`/sports/${type}/${cid}`);
    } else if (type) {
        return (`/sports/${type}`);
    } else {
        return (`/sports`);
    }
}

export const getEsportsPath = (type?: any, cid?: any, mid?: any) => {
    if (type && cid && mid) {
        return (`/esports/${type}/${cid}/${mid}`);
    } else if (type && cid) {
        return (`/esports/${type}/${cid}`);
    } else if (type) {
        return (`/esports/${type}`);
    } else {
        return (`/esports`);
    }
}

export const getFormattedDay = (date: any) => {
    if (!date) {
        return "";
    }
    const newDate = new Date(date);
    let diff = differenceInDays(new Date(), newDate);
    if (Math.abs(diff) > 1) {
        return format(newDate, 'ccc dd LLL');
    } else {
        let day = '';
        if (diff == 0) day = 'Today';
        if (diff == 1) day = 'Tomorrow';
        return day;
    }
}

export const getFormattedTime = (date: any) => {
    if (!date) {
        return "";
    }
    return format(date, 'p');
}

export const getFormattedName = (name: string) => {
    if (!name) {
        return "";
    }
    return name.slice(0, 3) + '***' + name.slice(6);
}

export const apiCall = async (url: string, method: 'GET' | 'POST' = 'GET', data?: any) => {
    try {
        const response = await axios({
            url,
            method,
            data,
        });
        return response.data;
    } catch (error) {
        console.error('API call error:', error);
        throw error;
    }
}