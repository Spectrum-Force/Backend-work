import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";

// Create upload middleware
export const localUpload = multer({ dest: 'uploads' });

export const remoteUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/uploads/*' // If left blank, this defaults to root of drive '/',
    })
});
