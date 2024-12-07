/** @type {{ items: Region[] }} */
const data = require("../data/regions.json")

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
    return {
        isSuccess: true,
        data: data.items,
        total: data.items.length,
    }
}

/**
 * Get a region by id
 * @param {number} id
 * @returns {Promise<DataEnvelope<Region>>}
 */
async function get(id) {
    const item = data.items.find((region) => region.id == id)
    return {
        isSuccess: !!item,
        data: item,
    }
}

/**
 * Add a new region
 * @param {Region} region
 * @returns {Promise<DataEnvelope<Region>>}
 */
async function add(region) {
    region.id = data.items.reduce((prev, x) => (x.id > prev ? x.id : prev), 0) + 1
    data.items.push(region)
    return {
        isSuccess: true,
        data: region,
    }
}

/**
 * Update a region
 * @param {number} id
 * @param {Region} region
 * @returns {Promise<DataEnvelope<Region>>}
 */
async function update(id, region) {
    const regionToUpdate = get(id)
    Object.assign(regionToUpdate, region)
    return {
        isSuccess: true,
        data: regionToUpdate,
    }
}

/**
 * Remove a region
 * @param {number} id
 * @returns {Promise<DataEnvelope<number>>}
 */
async function remove(id) {
    const itemIndex = data.items.findIndex((region) => region.id == id)
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