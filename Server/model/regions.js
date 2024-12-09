/** @type {{ items: Region[] }} */
const data = require("../data/regions.json")
const { getConnection } = require("./supabase")
const conn = getConnection()

/**
 * @template T
 * @typedef {import("../../Client/src/models/dataEnvelope").DataEnvelope} DataEnvelope
 * @typedef {import("../../Client/src/models/dataEnvelope").DataListEnvelope} DataListEnvelope
 */

/**
 * @typedef {import("../../Client/src/models/regions").Region} Region
 */

/**
 * Get all regions
 * @returns {Promise<DataListEnvelope<Region>>}
 */
async function getAll() {
    const { data, error, count } = await conn
    .from("regions")
    .select("*", { count: "estimated" })
    return {
        isSuccess: !error,
        message: error?.message,
        data: data,
        total: count,
    }
}

/**
 * Get a region by id
 * @param {number} id
 * @returns {Promise<DataEnvelope<Region>>}
 */
async function get(id) {
    const { data, error } = await conn
        .from("regions")
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
    for (const region of data.items) {
        await add(region)
    }
}
/**
 * Add a new region
 * @param {Region} region
 * @returns {Promise<DataEnvelope<Region>>}
 */
async function add(region) {
    const { data, error } = await conn
        .from("regions")
        .insert([
            {
                id: region.id,
                name: region.name,
            },
        ])
        .select("*")
        .single()
    return {
        isSuccess: !error,
        message: error?.message,
        data: data,
    }
}

/**
 * Update a region
 * @param {number} id
 * @param {Region} region
 * @returns {Promise<DataEnvelope<Region>>}
 */
async function update(id, region) {
    const { data, error } = await conn
        .from("regions")
        .update([
            {
                id: region.id,
                name: region.name,
            },
        ])
        .eq("id", id)
        .select("*")
        .single()
    return {
        isSuccess: !error,
        message: error?.message,
        data: data,
    }
}

/**
 * Remove a region
 * @param {number} id
 * @returns {Promise<DataEnvelope<number>>}
 */
async function remove(id) {
    const { data, error } = await conn
        .from("regions")
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