import {getItem, listItem, editItem, addItem, deleteItem} from '../models/pets.models.js';

export const getPet = (req, res) => {
    try {
        const resp = getItem(parseInt(req.params.id));
        // console.log(resp)
        res.status(200).json(resp)
    } catch (err) {
        res.status(500).send(err)
    }
};

export const listPets = (req, res) => {
    try {
        const resp = listItem();
        res.status(200).json(resp);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const editPet = (req, res) => {
    try {
        const resp = editItem(parseInt(req.params.id), req.body);
        res.status(200).json(resp);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const addPet = (req, res) => {
    try {
        const resp = addItem(req.body);
        res.status(200).json(resp);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const deletePet = (req, res) => {
    try {
        const resp = deleteItem(parseInt(req.params.id));
        console.log(resp)
        res.status(200).json(resp);
    } catch (err) {
        res.status(500).send(err);
    }
};