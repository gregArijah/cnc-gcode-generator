//API related to operations

export const getAllOperations = () => {
    return fetch('/api/operations', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const getOperationById = (operationId) => {
    return fetch(`/api/operations/${operationId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const createOperation = (operationData) => {
    return fetch('/api/operations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(operationData)
    });
}

export const updateOperation = (operationId, operationData) => {
    return fetch(`/api/operations/${operationId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(operationData)
    });
}

export const deleteOperation = (operationId) => {
    return fetch(`/api/operations/${operationId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

//API related to projects

export const getAllProjects = () => {
    return fetch('/api/projects', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const getProjectById = (projectId) => {
    return fetch(`/api/projects/${projectId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const createProject = (projectData) => {
    return fetch('/api/projects', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(projectData)
    });
}

export const updateProject = (projectId, projectData) => {
    return fetch(`/api/projects/${projectId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(projectData)
    });
}

export const deleteProject = (projectId) => {
    return fetch(`/api/projects/${projectId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

//API related to users

export const getAllUsers = () => {
    return fetch('/api/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const getUserById = (userId) => {
    return fetch(`/api/users/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const createUser = (userData) => {
    return fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
}

export const updateUser = (userId, userData) => {
    return fetch(`/api/users/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
}

export const deleteUser = (userId) => {
    return fetch(`/api/users/${userId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

//API related to tools

export const getAllTools = () => {
    return fetch('/api/tools', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const getToolById = (toolId) => {
    return fetch(`/api/tools/${toolId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const createTool = (toolData) => {
    return fetch('/api/tools', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(toolData)
    });
}

export const updateTool = (toolId, toolData) => {
    return fetch(`/api/tools/${toolId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(toolData)
    });
}

export const deleteTool = (toolId) => {
    return fetch(`/api/tools/${toolId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
