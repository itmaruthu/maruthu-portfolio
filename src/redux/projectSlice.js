import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: JSON.parse(localStorage.getItem('projects')) || []
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject(state, action) {
      state.projects.push(action.payload);
      localStorage.setItem('projects', JSON.stringify(state.projects));
    },
    deleteProject(state, action) {
      state.projects = state.projects.filter((_, i) => i !== action.payload);
      localStorage.setItem('projects', JSON.stringify(state.projects));
    }
  }
});

export const { addProject, deleteProject } = projectSlice.actions;
export default projectSlice.reducer;