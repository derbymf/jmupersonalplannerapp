// import the users service from feathers
import { users } from "@/services/feathers";

/**
 * addUser(user)
 * 
 * This function will attempt to add a new user to the 
 * database. In the event that there is a problem, e.g.
 * a user with the same `code` already exists, an error
 * will be returned. Otherwise, the newly added user 
 * object will be returned.
 * 
 * @param  {object} user The user to be created
 * @return {object}        The user that was created
 */
export const addUser = async user => await users.create(user);

/**
 * getUsers(query)
 * 
 * This function will query the database and retrieve
 * a list of users. For details on the syntax of
 * the `query` parameter, see the feathersjs documentation
 * for the `find()` function:
 * https://docs.feathersjs.com/api/databases/querying.html
 * 
 * @param  {object} query Any additional standard feathers params
 * @return {object}       A paginated feathers query result
 */
export const getUsers = async query => {
  // make sure the query parameter has a default value
  query = query || {};
  // execute and return the query results
  return await users.find(query);
};

/**
 * getUser(id, params)
 * 
 * This function gets a fully "hydrated" user object, i.e.
 * in addition to the basic user info (title, difficulty),
 * it will also get all the students enrolled and the subjects
 * with which the user is associated. In other words it 
 * returns a user along with all of its associated data.
 * 
 * @param  {number} id     The ID of the user to be retrieved
 * @param  {object} params Any additional feathers query params
 * @return {object}        The hydrated user object retrieved
 */
export const getUser = async (id, params) => {
  // make sure a user ID was specified
  if ("undefined" === typeof id) {
    throw new Error("Please provide a valid user ID.");
  }
  params = params || {};
  return await users.get(id, params);
};


/**
 * updateUser(id, user, params)
 * 
 * This function updates the data associated with a user.
 * 
 * @param  {number} id     The ID of the user to be retrieved
 * @param  {object} user The user data to be updated
 * @param  {object} params Any additional feathers query params
 * @return {object}        The updated user object
 */
export const updateUser = async (id, user, params) => {
  // make sure a user ID was specified
  if ("undefined" === typeof id) {
    throw new Error("Please provide a valid user ID.");
  }
  params = params || {};
  return await users.patch(id, user, params);
}