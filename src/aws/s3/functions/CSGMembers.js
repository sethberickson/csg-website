import axios from "axios";
import { ImageURLs } from "../../../constants/Constants";

export default {
    // API calls go here
    async getAllMembers() {
        return await axios.get(ImageURLs.csg_s3_member_images);
    },
    async getMemberById(id) {
        return await axios.get(`${ImageURLs.csg_s3_member_images}/${id}`);
    }
};