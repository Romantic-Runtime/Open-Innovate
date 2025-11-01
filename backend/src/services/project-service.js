import Projects from "../models/Projects.js"

export const createProjectService = async (userId, workspaceId,{emoji,name,description}) => {
    const project=new Projects({
        emoji,
        name,
        description,
        workspace:workspaceId,
        createdBy:userId
    })

    await project.save();
    return {project};

}
 
export const getAllProjectsInWorkspaceService=async(workspaceId,pageSize,pageNumber)=>{
    const totalCount=await Projects.countDocuments({workspace:workspaceId});

    const skip=(pageNumber-1)*pageSize;

    const projects=await Projects.find({workspace:workspaceId}).skip(skip).limit(pageSize).populate("createdBy","_id name email profilePicture").sort({createdAt:-1})

    const totalPages=Math.ceil(totalCount/pageSize);

    return {projects,totalCount,totalPages,skip};
}