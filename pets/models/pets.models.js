import db from "../..db/db.js";

export const getItem = id => {
    try {
        const pet = db?.pets?.filter(pet => pet?.id === id)(0);
        return pet;
    } catch (err) {
        console.log("Error", err);
    }
};