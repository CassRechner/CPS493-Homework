/** @type {{ items: Exercise[] }} */
const data = require("../data/exercises.json")
const { getConnection } = require("./supabase")
const conn = getConnection()

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
    const { data, error, count } = await conn
    .from("Exercises")
    .select("*", { count: "estimated" })
    return {
        isSuccess: !error,
        message: error?.message,
        data: data,
        total: count,
    }
}

/**
 * Get a exercise by id
 * @param {number} id
 * @returns {Promise<DataEnvelope<Exercise>>}
 */
async function get(id) {
const { data, error } = await conn
    .from("Exercises")
    .select("*")
    .eq("id", id)
    .single()
    return {
        isSuccess: !error,
        message: error?.message,
        data: data,
    }
}

async function seed() {
    for (const exercise of data.items) {
        await add(exercise)
    }
}

/**
 * Add a new exercise
 * @param {Exercise} exercise
 * @returns {Promise<DataEnvelope<Exercise>>}
 */
async function add(exercise) {
    const { data, error } = await conn
        .from("Exercises")
        .insert(
            {
                id: exercise.id,
                user: exercise.user,
                title: exercise.title,
                date: exercise.date,
                duration: exercise.duration,
                distance: exercise.distance,
                region: exercise.region,
            }
        )
        .select("*")
        .single()
    return {
        isSuccess: !error,
        message: error?.message,
        data: data,
    }
}

/**
 * Update a exercise
 * @param {number} id
 * @param {Exercise} exercise
 * @returns {Promise<DataEnvelope<Exercise>>}
 */
async function update(id, exercise) {
    const { data, error } = await conn
        .from("Exercises")
        .update(
            {
                id: exercise.id,
                user: exercise.user,
                title: exercise.title,
                date: exercise.date,
                duration: exercise.duration,
                distance: exercise.distance,
                region: exercise.region,
            }
        )
        .select("*")
        .single()
    return {
        isSuccess: !error,
        message: error?.message,
        data: data,
    }
}

/**
 * Remove a exercise
 * @param {number} id
 * @returns {Promise<DataEnvelope<number>>}
 */
async function remove(id) {
    const { data, error } = await conn
        .from("Exercises")
        .delete()
        .eq("id", id)
        .select("*")
        .single()
    return {
        isSuccess: !error,
        message: error?.message,
        data: data,
    }
}

module.exports = {
    getAll,
    get,
    add,
    update,
    remove,
}