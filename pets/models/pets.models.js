import db from '../../db/db.js';

export const getItem = id => {
    console.log(db)
    try {
        const pet = db?.pets?.find(pet => pet?.id === id);
        return pet;
    } catch (err) {
        console.log("Error", err);
    }
};

export const listItem = () => {
    try {
        return db?.pets;
    } catch (err) {
        console.log('Error', err);
    }
};

export const editItem = (id, data) => {
    try {
        const index = db.pets.findIndex(pet => pet.id === id)

        if (index === -1) throw new Error('Pet not found')
        else {
            db.pets[index] = data
            return db.pets[index];
        } 
    } catch (err) {
            console.log('Error', err)
        }
    }

export const addItem = data => {
    try {
        const newPet = {id: db.pets.length  +1, ...data};
        db.pets.push(newPet);
        return newPet;
    } catch (error) {
        console.log('Error', err);
    }
};

export const deleteItem = id => {
    try {
        //Delete item from db
        const index = db.pets.find(pet =>pet.id === id)

        if(index === -1) throw new Error('Pet not found')
        
        else {
            db.pets.splice(index, 1);
            console.log(db.pets)
            return db.pets;
        }
    } catch (err) {
        console.log(err);
    }
};