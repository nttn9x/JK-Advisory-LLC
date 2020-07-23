import moment from "moment";

export function formatDateFromNow(str: string) {
  try {
    if (!str) {
      return null;
    }

    let ms: Date = new Date(str);
    let now: Date = new Date(Date.now());

    if (ms.getDate() - now.getDate() < 2) {
      return moment(ms).fromNow();
    } else {
      return moment(ms).format("LLLL");
    }
  } catch (error) {
    return "";
  }
}

export function formatDateDefault(str: string) {
  try {
    if (!str) {
      return null;
    }

    return moment(str).format("MM/DD/YYYY");
  } catch (error) {
    return "";
  }
}

export function formatDateFull(str: string) {
  try {
    if (!str) {
      return null;
    }

    return moment(str).format("MM/DD/YYYY HH:mm");
  } catch (error) {
    return "";
  }
}
