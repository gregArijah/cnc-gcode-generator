import axios from 'axios';

const api = axios.create({
  baseURL: 'https://javatrol.herokuapp.com/api', // Set the base URL for your backend API
  headers: {
    'Content-Type': 'application/json'
  }
});

export const loginUser = (loginData) => {
  return api.post('/users/login', loginData);
};

export const getAllOperations = () => {
  return api.get('/operations');
};

export const getOperationById = (operationId) => {
  return api.get(`/operations/${operationId}`);
};

export const createOperation = (operationData) => {
  return api.post('/operations', operationData);
};

export const updateOperation = (operationId, operationData) => {
  return api.put(`/operations/${operationId}`, operationData);
};

export const deleteOperation = (operationId) => {
  return api.delete(`/operations/${operationId}`);
};

export const getAllProjects = () => {
  return api.get('/projects');
};

export const getProjectById = (projectId) => {
  return api.get(`/projects/${projectId}`);
};

export const createProject = (projectData) => {
  return api.post('/projects', projectData);
};

export const updateProject = (projectId, projectData) => {
  return api.put(`/projects/${projectId}`, projectData);
};

export const deleteProject = (projectId) => {
  return api.delete(`/projects/${projectId}`);
};

export const getAllUsers = () => {
  return api.get('/users');
};

export const getUserById = (userId) => {
  return api.get(`/users/${userId}`);
};

export const createUser = (userData) => {
  return api.post('/users', userData);
};

export const updateUser = (userId, userData) => {
  return api.put(`/users/${userId}`, userData);
};

export const deleteUser = (userId) => {
  return api.delete(`/users/${userId}`);
};

export const getAllTools = () => {
  return api.get('/tools');
};

export const getToolById = (toolId) => {
  return api.get(`/tools/${toolId}`);
};

export const createTool = (toolData) => {
  return api.post('/tools', toolData);
};

export const updateTool = (toolId, toolData) => {
  return api.put(`/tools/${toolId}`, toolData);
};

export const deleteTool = (toolId) => {
  return api.delete(`/tools/${toolId}`);
};

export default api;