// import the assignments service from feathers
import { assignments } from "@/services/feathers";

/**
 * addAssignment(assignment)
 * 
 * This function will attempt to add a new assignment to the 
 * database. In the event that there is a problem, e.g.
 * a assignment with the same `code` already exists, an error
 * will be returned. Otherwise, the newly added assignment 
 * object will be returned.
 * 
 * @param  {object} assignment The assignment to be created
 * @return {object}        The assignment that was created
 */
export const addAssignment = async assignment => await assignments.create(assignment);

/**
 * getAssignments(query)
 * 
 * This function will query the database and retrieve
 * a list of assignments. For details on the syntax of
 * the `query` parameter, see the feathersjs documentation
 * for the `find()` function:
 * https://docs.feathersjs.com/api/databases/querying.html
 * 
 * @param  {object} query Any additional standard feathers params
 * @return {object}       A paginated feathers query result
 */
export const getAssignments = async query => {
  // make sure the query parameter has a default value
  query = query || {};
  // execute and return the query results
  return await assignments.find(query);
};

/**
 * getAssignment(id, params)
 * 
 * This function gets a fully "hydrated" assignment object, i.e.
 * in addition to the basic assignment info (title, difficulty),
 * it will also get all the students enrolled and the subjects
 * with which the assignment is associated. In other words it 
 * returns a assignment along with all of its associated data.
 * 
 * @param  {number} id     The ID of the assignment to be retrieved
 * @param  {object} params Any additional feathers query params
 * @return {object}        The hydrated assignment object retrieved
 */
export const getAssignment = async (id, params) => {
  // make sure a assignment ID was specified
  if ("undefined" === typeof id) {
    throw new Error("Please provide a valid assignment ID.");
  }
  params = params || {};
  return await assignments.get(id, params);
};


/**
 * updateAssignment(id, assignment, params)
 * 
 * This function updates the data associated with a assignment.
 * 
 * @param  {number} id     The ID of the assignment to be retrieved
 * @param  {object} assignment The assignment data to be updated
 * @param  {object} params Any additional feathers query params
 * @return {object}        The updated assignment object
 */
export const updateAssignment = async (id, assignment, params) => {
  // make sure a assignment ID was specified
  if ("undefined" === typeof id) {
    throw new Error("Please provide a valid assignment ID.");
  }
  params = params || {};
  return await assignments.patch(id, assignment, params);
}