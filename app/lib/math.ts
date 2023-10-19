export const hectogramsToLbs = (hectograms: number) => {
    const lbs = hectograms * 0.220462;
    return lbs.toFixed(2) + " lbs";
    }

export const decimetersToFeet = (decimeters: number) => {
    const realFeet = ((decimeters * 0.328084));
    const feet = Math.floor(realFeet);
    const inches = Math.floor(((realFeet * 12) % 12));
    return `${feet}'${inches}"`;
    };