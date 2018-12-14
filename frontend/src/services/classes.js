// import the classes service from feathers
import { classes } from "@/services/feathers";

/**
 * addClass(class)
 * 
 * This function will attempt to add a new class to the 
 * database. In the event that there is a problem, e.g.
 * a class with the same `code` already exists, an error
 * will be returned. Otherwise, the newly added class 
 * object will be returned.
 * 
 * @param  {object} c The class to be created
 * @return {object}        The class that was created
 */
export const addClass = async c => await classes.create(c);

/**
 * getClasses(query)
 * 
 * This function will query the database and retrieve
 * a list of classes. For details on the syntax of
 * the `query` parameter, see the feathersjs documentation
 * for the `find()` function:
 * https://docs.feathersjs.com/api/databases/querying.html
 * 
 * @param  {object} query Any additional standard feathers params
 * @return {object}       A paginated feathers query result
 */
export const getClasses = async query => {
  // make sure the query parameter has a default value
  query = query || {};
  // execute and return the query results
  return await classes.find(query);
};

/**
 * getClass(id, params)
 * 
 * This function gets a fully "hydrated" class object, i.e.
 * in addition to the basic class info (title, difficulty),
 * it will also get all the students enrolled and the subjects
 * with which the class is associated. In other words it 
 * returns a class along with all of its associated data.
 * 
 * @param  {number} id     The ID of the class to be retrieved
 * @param  {object} params Any additional feathers query params
 * @return {object}        The hydrated class object retrieved
 */
export const getClass = async (id, params) => {
  // make sure a class ID was specified
  if ("undefined" === typeof id) {
    throw new Error("Please provide a valid class ID.");
  }
  params = params || {};
  return await classes.get(id, params);
};


/**
 * updateClass(id, class, params)
 * 
 * This function updates the data associated with a class.
 * 
 * @param  {number} id     The ID of the class to be retrieved
 * @param  {object} class The class data to be updated
 * @param  {object} params Any additional feathers query params
 * @return {object}        The updated class object
 */
export const updateClass = async (id, c, params) => {
  // make sure a class ID was specified
  if ("undefined" === typeof id) {
    throw new Error("Please provide a valid class ID.");
  }
  params = params || {};
  return await classes.patch(id, c, params);
}