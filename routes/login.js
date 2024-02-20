import { getUser } from "../services/getUser.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const loginRoute = {
  method: "post",
  path: "login",
  handler: async (req, res) => {
    try {
      const { username } = req.body;

      const user = await getUser(username);

      if (!user || user.length === 0) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }

      const { id, email } = user[0];

      const token = jwt.sign(
        { id, email, username: user[0].username },
        process.env.SECRET_KEY,
        {
          expiresIn: "2d",
        }
      );

      console.log(token);

      return res.json({
        success: true,
        token,
        message: "User found successfully",
      });
    } catch (error) {
      console.error("Error during login:", error);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
};

export default loginRoute;
