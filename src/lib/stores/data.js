import { writable } from 'svelte/store';

/**
 * @typedef {Object} MemberInfo
 * @property {number} numberTag
 * @property {string?} alias
 * @property {number[]} timings // JS timestamps
 *
 * @typedef {Object} ConductInfo
 * @property {number} distance
 * @property {number} lapDistance
 * @property {MemberInfo[]} membersInfo
 * @property {'unstarted'|'started'|'ended'} status
 */

/**
 * @type {import('svelte/store').Writable<ConductInfo[]>}
 */
export const conducts = writable([]);

export const readSaved = () => {
  const data = localStorage.getItem('savedConducts');
  if (!data) return [];
  /** @type {ConductInfo[]} */
  const parsedData = JSON.parse(data);
  if (!Array.isArray(parsedData)) return [];
  conducts.set(parsedData);
  return parsedData;
};
