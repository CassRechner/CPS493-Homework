/** @type {{ items: Exercise[] }} */
const data = require("../data/exercises.json")

/**
 * @template T
 * @typedef {import("../../Client/src/models/dataEnvelope").DataEnvelope} DataEnvelope
 * @typedef {import("../../Client/src/models/dataEnvelope").DataListEnvelope} DataListEnvelope
 */

/**
 * @typedef {import("../../Client/src/models/exercises").Exercise} Exercise
 */

/**
 * Get all exercises
 * @returns {Promise<DataListEnvelope<Exercise>>}
 */
async function getAll() {
    return {
        isSuccess: true,
        data: data.items,
        total: data.items.length,
    }
}

/**
 * Get a exercise by id
 * @param {number} id
 * @returns {Promise<DataEnvelope<Exercise>>}
 */
async function get(id) {
    const item = data.items.find((exercise) => exercise.id == id)
    return {
        isSuccess: !!item,
        data: item,
    }
}

/**
 * Add a new exercise
 * @param {Exercise} exercise
 * @returns {Promise<DataEnvelope<Exercise>>}
 */
async function add(exercise) {
    exercise.id = data.items.reduce((prev, x) => (x.id > prev ? x.id : prev), 0) + 1
    data.items.push(exercise)
    return {
        isSuccess: true,
        data: exercise,
    }
}

/**
 * Update a exercise
 * @param {number} id
 * @param {Exercise} exercise
 * @returns {Promise<DataEnvelope<Exercise>>}
 */
async function update(id, exercise) {
    const exerciseToUpdate = get(id)
    Object.assign(exerciseToUpdate, exercise)
    return {
        isSuccess: true,
        data: exerciseToUpdate,
    }
}

/**
 * Remove a exercise
 * @param {number} id
 * @returns {Promise<DataEnvelope<number>>}
 */
async function remove(id) {
    const itemIndex = data.items.findIndex((exercise) => exercise.id == id)
    if (itemIndex === -1)
        throw {
            isSuccess: false,
            message: "Item not found",
            data: id,
            status: 404,
        }
    data.items.splice(itemIndex, 1)
    return { isSuccess: true, message: "Item deleted", data: id }
}

module.exports = {
    getAll,
    get,
    add,
    update,
    remove,
}