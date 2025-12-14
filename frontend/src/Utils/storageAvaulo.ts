const KEY = "avaluo_form_v1";

export const saveAvaluo = (payload: any) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(payload));
  } catch (e) { console.error("Error saving avaluo", e); }
};

export const loadAvaluo = () => {
  try {
    const s = localStorage.getItem(KEY);
    return s ? JSON.parse(s) : null;
  } catch (e) { console.error("Error loading avaluo", e); return null; }
};

export const clearAvaluo = () => localStorage.removeItem(KEY);
