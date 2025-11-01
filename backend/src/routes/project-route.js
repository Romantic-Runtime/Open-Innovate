import { Router } from "express";
import { createProjectController, getAllProjectsInWorkspaceController } from "../controller/project-controller.js";
const projectRoute = Router();
projectRoute.post('/workspace/:workspaceId/create', createProjectController);
projectRoute.get('/workspace/:workspaceId/all', getAllProjectsInWorkspaceController);
export default projectRoute;
